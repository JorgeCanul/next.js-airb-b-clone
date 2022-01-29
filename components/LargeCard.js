import Image from "next/image";
function LargeCard({ img, title, description, buttonText }) {
  return (
  <section className="relative py-16 cursor-pointer">
      <div className="relative h-96 min-w[300px]">
    
      <Image priority={true} src={img} layout="fill" objectFit="cover" className="rounded-2xl"/>
      </div>
      <div className="absolute top-32 xs:left-4 lg:left-80">
          <h3 className="text-4xl mb-3  w-64 ml:text-slate-300">{title}</h3>
          <p className="ml:text-slate-300 text-slate-300">{description}</p>
          <button className="text-sm text-slate-300 px-4 py-2 rounded-full bg-gray-900 mt-5">{buttonText}</button>
      </div>

  </section>
  );
}

export default LargeCard;
