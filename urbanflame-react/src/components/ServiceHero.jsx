export const ServiceHero = ({ title, img }) => (
  <div className="h-[350px] relative">
    <img src={img} className="w-full h-full object-cover" />
    <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
      <h1 className="text-white text-4xl font-bold">{title}</h1>
    </div>
  </div>
);

export const ServiceContent = ({ children }) => (
  <section className="max-w-6xl mx-auto py-14 px-4 text-gray-700">
    {children}
  </section>
);