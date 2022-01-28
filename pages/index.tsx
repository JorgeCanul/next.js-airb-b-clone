import Head from 'next/head';
import Header from '../components/Header';
import Banner from '../components/Banner'
import SmallCard from '../components/SmallCard';
import MediumCards from '../components/MediumCards'
import LargeCard from '../components/LargeCard'
import Footer from '../components/Footer';
import image from '../public/images/largeCard.jpg'



export default function Home( {exploreData, cardsData}: any ) {

  return (
    <div className="">
      <Head>
        <title>Airb</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <Header placeholder={undefined} />
    <Banner />

    <main className='max-w-7xl mx-auto px-8 sm:px-16'>
      <section className='pt-6'>
        <h2 className='text-4xl font-semibold pb-5'>Explore</h2>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3
        xl:grid-cols-4'>
          {exploreData?.map((el: any) => (
            <SmallCard key={el.img} img={el.img} location={el.location} distance={el.distance}/>
          )) }
        </div>
      </section>
      <section>
        <h2 className='text-4xl font-semibold py-8'>Live Anywhere</h2>
        <div className='flex space-x-4 overflow-scroll scrollbar-hide '>
        {cardsData?.map((el: any) => (
          <MediumCards key={el.img} img={el.img} title={el.title}/>
        ))}
        </div>
      </section>
      <LargeCard  img={image} title="The Greatest Outdoors" description="Wishlists" buttonText="Get Inspired" />
    </main>
      <Footer />

    </div>
  )
}

/// Static rendering, "home" Data
export async function getStaticProps() {
  const exploreData = await fetch("https://jsonkeeper.com/b/K4DO")
  .then((res) => res.json());

  const cardsData =  await fetch("https://jsonkeeper.com/b/PYS5")
  .then(res => res.json())

  return {
    props: {
      exploreData,
      cardsData
    }
  }
}
