import { Link } from "react-router-dom";

const cardKatalog = ({ namaAsli, namaLatin, image, parameter }) => {
  return (
    <Link to={`/katalog/${parameter}`}>
      <div className="border-2 w-[361px] h-[344px] text-white rounded-lg">
        <img src={image} alt="katalog1" className="rounded-[10px]" />
        <h2 className="text-black text-2xl font-['Poppins'] font-bold mx-3 mt-2">
          {namaAsli}
        </h2>
        <h3 className="text-black text-2xl font-normal font-['Poppins'] mx-3">
          {namaLatin}
        </h3>
      </div>
    </Link>
  );
};

export default cardKatalog;
