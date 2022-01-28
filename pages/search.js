import Header from '../components/Header';
import Footer from '../components/Footer';
import InfoCard from '../components/InfoCard';
import { useRouter } from 'next/router';
import { format } from 'date-fns';

function Search({ searchResults }) {

    const router = useRouter();
    const { location, startDate,endDate, numberGuests} = router.query;
    const formatedStartDate = format(new Date(startDate), 'dd MMMM yy');
    const formatedEndate = format(new Date(endDate), 'dd MMMM yy');
    const range = `${formatedStartDate} - ${formatedEndate}`;


  return (
      <div>
          <Header placeholder={`${location} | ${range} | ${numberGuests}`}/>
          <main className='flex'>
            <section className='flex-grow pt-14 px-6'>
                <p className='text-sm'>300+ Stays {range} for {numberGuests} Guests</p>
                <h1 className='text-3xl font-semibold mb-6'>Stays in {location}</h1>
                <div className='hidden lg:inline-flex mb-5 space-x-3 text-gray-800
                    whitespace-nowrap'>
                    <p className='button'>Cancelllation Flexibility</p>
                    <p className='button'>Rooms And Beds</p>
                    <p className='button'>Type of Place</p>
                    <p className='button'>More Filters</p>
                </div>
                <div className='flex flex-col'>
                {searchResults?.map(el => (
                    <InfoCard key={el.img} img={el.img} 
                    location={el.location} 
                    title={el.title}
                    description={el.description}
                    star={el.star}
                    price={el.price}
                    total={el.total}/>
                ))}
                </div>
            </section>
          </main>
          <Footer />
      </div>
  );
}

export default Search;

export async function getServerSideProps() {
    const searchResults = await fetch(" https://jsonkeeper.com/b/S69I")
    .then(res => res.json());

    return {
        props: {
            searchResults
        }
     }
}

// https://jsonkeeper.com/b/XI0W   what was working before

// https://jsonkeeper.com/b/IA5X