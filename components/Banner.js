import  Image from 'next/image';

import hero from '../public/images/hero.jpg';

function Banner() {
  return (
  <div  className='relative h-[300px] sm:h[400px] 
  lg:h-[500px] xl:h-[600px]
  2xl:h-[700px]' >
      <Image priority className='bg-gradient-to-b 
      from-blue-400' 
      src={hero}
      layout='fill'
      objectFit='cover'/>
      <div className='absolute top-1/2 w-full text-center'>
          <p className=' text-slate-300'>Not Sure Where To Go Next?</p>
          <button 
          className='
          text-red-400
          bg-white px-10 py-4 shadow-md 
          rounded-full font-bold my-3 
           active:scale-90 hover:shadow-xl
          trasition duration-200'>I'm Flexible</button>
      </div>
  </div>
  );
}

export default Banner;
