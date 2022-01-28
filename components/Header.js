import Image from 'next/image';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import images from '../public/images/airbnb.png';
import { DateRangePicker } from 'react-date-range';
import {SearchIcon, GlobeAltIcon, MenuIcon,UserIcon, UsersIcon} from '@heroicons/react/solid'
import { useState } from 'react';
import { useRouter } from 'next/router';

function Header({placeholder}) {

  const [ searchInfo, setSearchInfo ] = useState('');
  const [ startDate, setStarDate ] = useState(new Date());
  const [ endDate, setEndDate ] = useState(new Date());
  const [ numberGuests, setNumberGuests ] = useState(1);
  const router = useRouter()

  const selectionRange = {
    startDate,
    endDate, 
    key: 'selection'
  }
 // As it changes we will pass the dates to our function and update the state
  const handleSelectDate = (ranges) => {
    setStarDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  }

  ///Remove Date Range "Calendar"
  const resetInput = () => {
    setSearchInfo('');
  };

  const search = () => {
    router.push({
      pathname: '/search',
      query: {
        location: searchInfo,
        startDate: startDate.toISOString(),
        endDate: endDate.toISOString(),
        numberGuests
      }
    })
  };
  
  return(

    <header className="sticky top-0 z-50 grid grid-cols-3 
    bg-white shadow-md py-5 p-5 md:px-10">
           <div onClick={() => router.push('/')} className="flex relative
            items-center cursor-pointer my-auto h-10">
              <Image  src={images} 
              objectFit="contain"
              objectPosition="left"
              width="80%"
              /> 
           </div>
           <div className="flex items-center border-2  rounded-full py-2 md:shadow-sm">
               <input onChange={(e) => setSearchInfo(e.target.value)} value={searchInfo} 
               className="flex-grow xs:flex-grow
               Properties md:pl-5 
               bg-transparent xs:text-xs outline-none
               text-gray-600 placeholder-gray-400" 
               type="text"  placeholder={placeholder || "Start Your Search"} />
               <SearchIcon className="hidden  md:inline-flex h-8 bg-red-400 text-white p-2
               rounded-full cursor-pointer p-2 md:mx-2"/>
           </div>

           {/* right  */}
           <div className="flex items-center space-x-4 justify-end text-gray-500">
               <p className="hidden md:inline cursor-pointer">Beacome a Host</p>
               <GlobeAltIcon className="hidden md:inline h-6 cursor-pointer"/>
               <div className="flex items-center md:border-2 space-x-2 p-2 rounded-full">
                   <MenuIcon className="h-6 cursor-pointer"/>
                   <UserIcon className="h-6 cursor-pointer"/>
               </div>
           </div>
           {searchInfo && 
           (<div className='flex flex-col col-span-3 mx-auto mt-10'>
             <DateRangePicker ranges={[selectionRange]} 
              minDate={new Date()}
              rangeColors={['#fd5b61']}
              onChange={handleSelectDate}/> 
              <div className='flex items-center mb-4'>
                <h2 className='pl-2 flex-grow font-semibold'>Number of Guests</h2>
                <UsersIcon className=' h-5'/>
                <input value={numberGuests} 
                min={1}
                onChange={(e) => setNumberGuests(e.target.value)} type="number" className='block outline-none mx-2 w-12 pl-2 text-lg text-red-400'/>
              </div>
              <div className='flex'>
                <button onClick={resetInput} className='flex-grow text-gray-500'>Cancel</button>
                <button onClick={search} className='flex-grow text-red-400'>Search</button>
              </div>
           </div> 
           )}
    </header>

       );
}

export default Header;
