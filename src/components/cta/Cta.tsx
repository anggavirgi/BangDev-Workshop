export const Cta = () => {
  return (
    <div className="cta h-32 laptop:h-40 my-20 flex items-center justify-between ps-16 pe-8 desktop:px-20 text-white">
      <div>
        <div className="text-3xl poppins-semibold tracking-wide">
          Sudah memikirkan website anda ?
        </div>
        <div className="mt-2 text-xl">
          Segera wujudkan website impian anda sekarang !
        </div>
      </div>
      <div>
        <button className="text-lg desktop:text-2xl poppins-medium bg-primary px-14 py-4 rounded-md border border-transparent shadow-lg hover:text-primary hover:bg-white hover:border-primary">
          PESAN SEKARANG
        </button>
      </div>
    </div>
  );
};
