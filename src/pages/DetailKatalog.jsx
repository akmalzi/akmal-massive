import { useParams } from "react-router-dom";
import detailTanaman from "../dataJSON/detailTanaman.json";
import CardDetail from "../component/CardDetail";

const DetailKatalog = () => {
  const { parameter } = useParams();
  return (
    <>
      <section id="katalog">
        <img
          className="w-full px-5 h-full object-cover rounded-[10px] blur-[3px] items-center mx-auto"
          src="/assets/heroSection/detail-page.png"
        />

        <div className="mt-20 w-full absolute inset-0 flex justify-center items-center">
          <h1 className="text-white text-[64px] font-bold font-['Poppins']">
            Detail Tanaman
          </h1>
        </div>

        {detailTanaman.map((value, index) => {
          if (parameter === value.parameter) {
            return (
              <CardDetail
                key={index}
                judul={value.judul}
                penjelasan={value.penjelasan}
                gambar={value.image}
              />
            );
          }
        })}
      </section>
    </>
  );
};

export default DetailKatalog;
