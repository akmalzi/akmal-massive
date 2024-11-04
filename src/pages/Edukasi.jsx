import CardEdukasi from "../component/CardEdukasi";
import CardArtikel from "../component/CardArtikel";
import dataEdukasi from "../dataJSON/dataEdukasi.json";
import dataArtikel from "../dataJSON/dataArtikel.json";

const Edukasi = () => {
  return (
    <>
      <section id="edukasi">
        <img
          className="w-full px-5 h-full object-cover rounded-[10px] blur-[3px] items-center mx-auto"
          src="/assets/heroSection/edukasi.png"
        />

        <div className="mt-20 w-full absolute inset-0 flex justify-center items-center">
          <h1 className="text-white text-[64px] font-bold font-['Poppins'] ">
            Belajar Menanam dengan <br />
            Mudah dan Terarah
          </h1>
        </div>

        <div className="w-full py-20 flexabsolute text-center justify-center">
          <div className="text-[#77b122] text-5xl font-semibold font-['Poppins'] ">
            Cara Menanam Bibit
          </div>
        </div>

        <div className="flex w-full justify-center">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
            {dataEdukasi.map((value, index) => (
              <CardEdukasi
                key={index}
                gambar={value.gambar}
                langkah={value.langkah}
                tataCara={value.tataCara}
              />
            ))}
          </div>
        </div>

        <div className="w-full h-[443px] mt-[151px] py-20 flexabsolute text-center justify-center bg-slate-200">
          <div className="text-[#77b122] text-4xl font-normal font-['Poppins'] ">
            Artikel Terkait
          </div>
          <div className="flex justify-center mt-5 gap-9">
            {dataArtikel.map((value, index) => (
              <CardArtikel
                key={index}
                gambar={value.gambar}
                judul={value.judul}
                link={value.link}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Edukasi;
