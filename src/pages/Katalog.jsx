import dataKatalog from "../dataJSON/dataKatalog.json";
import CardKatalog from "../component/CardKatalog.jsx";

const Katalog = () => {
  return (
    <>
      <section id="katalog" className="min-h-[2000px]">
        <img
          className="w-full px-5 h-full object-cover rounded-[10px] blur-[3px] items-center mx-auto"
          src="/assets/heroSection/hero-katalog.png"
        />

        <div className="mt-20 w-full absolute inset-0 flex items-center pl-40">
          <h1 className="text-white text-[64px] font-bold font-['Poppins']">
            Katalog Koleksi Bibit <br />
            Kebun Bibit Wonorejo
          </h1>
        </div>

        <div className="w-full py-20 flexabsolute text-center justify-center">
          <div className="text-[#77b122] text-5xl font-semibold font-['Poppins'] ">
            Temukan ragam bibit unggul untuk <br />
            mempercantik lingkungan Anda
          </div>
        </div>

        <div className="flex w-full justify-center">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-12">
            {dataKatalog.map((value, index) => (
              <CardKatalog
                key={index}
                parameter={value.id}
                namaAsli={value.nama}
                namaLatin={value.latin}
                image={value.image}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Katalog;
