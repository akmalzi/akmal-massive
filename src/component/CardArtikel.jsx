import { Link } from "react-router-dom";

const CardArtikel = ({ gambar, judul, link }) => {
  return (
    <>
      <Link to={link}>
        <div className="relative flex flex-col items-center">
          <img
            src={gambar}
            alt=""
            width={363}
            className="object-cover rounded-lg shadow-lg"
          />
          <span className="text-white text-2xl font-semibold absolute bottom-0 left-0 right-0 text-left bg-[#77B122] bg-opacity-50 p-2 rounded-b-lg">
            {judul}
          </span>
        </div>
      </Link>
    </>
  );
};

export default CardArtikel;
