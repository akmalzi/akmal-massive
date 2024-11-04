const cardKatalog = ({ gambar, langkah, tataCara }) => {
  return (
    <>
      <div className="border-2 w-[380px] h-[480px] rounded-lg">
        <div className="flex">
          <img
            width={100}
            src={gambar}
            alt="katalog1"
            className="rounded-[10px] m-7"
          />
          <h2 className="text-black text-2xl my-auto pl-3 font-medium font-['Poppins'] leading-relaxed">
            {langkah}
          </h2>
        </div>
        <div className="text-black text-base font-medium font-['Poppins'] pl-7 pr-14">
          {tataCara}
        </div>
      </div>
    </>
  );
};

export default cardKatalog;
