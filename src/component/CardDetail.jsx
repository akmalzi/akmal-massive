import { Link } from "react-router-dom";

const CardDetail = ({ judul, penjelasan, gambar }) => {
  return (
    <>
      <div className="w-full px-20 h-72 mt-20">
        <Link
          to="/katalog"
          className="hover:text-[#73ba10] text-black text-base font-normal font-poppins "
        >
          Kembali
        </Link>

        <div className="grid grid-cols-2 mt-11">
          <img src={gambar} alt="" className="w-11/12 h-auto " />

          <div>
            <h2 className="text-[#73ba10] text-[40px] font-semibold font-poppins">
              {judul}
            </h2>
            <p className="text-black text-xl font-medium font-poppins">
              {penjelasan}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardDetail;
