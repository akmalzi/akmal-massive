import { Link } from "react-router-dom";
import image from "/assets/logo-web.png";

const Navbar = () => {
  return (
    <>
      <div className="w-full h-20 px-16 py-4 bg-[#F8FAFC] justify-between items-center inline-flex">
        <img className="w-[136px] h-12" src={image} />
        <div className="h-[27px] justify-start items-center gap-10 flex">
          <div className="w-[77px] h-[27px] justify-center items-center flex">
            <Link
              to="/"
              className="text-black text-lg font-normal font-['Poppins'] hover:text-[#73ba10]"
            >
              Beranda
            </Link>
          </div>
          <div className="w-[77px] h-[27px] pr-[7px] justify-start items-center flex">
            <Link
              to="/katalog"
              className="text-black text-lg font-normal font-['Poppins'] hover:text-[#73ba10]"
            >
              Katalog
            </Link>
          </div>
          <div className="w-[77px] h-[27px] pr-2 justify-start items-center flex">
            <Link
              to="/edukasi"
              className="text-black text-lg font-normal font-['Poppins'] hover:text-[#73ba10]"
            >
              Edukasi
            </Link>
          </div>
          <div className="w-[77px] h-[27px] pr-[19px] justify-start items-center flex">
            <Link
              to="/katalog"
              className="text-black text-lg font-normal font-['Poppins'] hover:text-[#73ba10]"
            >
              Forum
            </Link>
          </div>
          <div className="w-[77px] h-[27px] pr-2 justify-start items-center flex">
            <Link
              to="/fasilitas"
              className="text-black text-lg font-normal font-['Poppins'] hover:text-[#73ba10]"
            >
              Telusuri
            </Link>
          </div>
        </div>
        <div className="w-20 self-stretch py-3 justify-start items-center gap-2 flex">
          <div className="w-6 h-6 relative" />
          <Link
            to="/katalog"
            className="text-black text-base font-medium font-['Roboto'] leading-none hover:text-[#73ba10]"
          >
            Log in
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
