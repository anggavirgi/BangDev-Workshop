import img1 from "../../assets/img/img1.png";

export const Landing = () => {
  return (
    <div className="grid grid-cols-2 py-10">
      <div className="flex flex-col justify-center gap-7">
        <h1 className="text-4xl desktop:text-5xl poppins-bold">
          Bangun web kamu sendiri 😎
        </h1>
        <h3 className="text-xl desktop:text-2xl poppins-light pe-20">
          Serahkan pada kami! Kapan lagi bisa buat web bagus dengan cepat xixi,
          biar kita bisa{" "}
          <span className="text-secondary poppins-medium">web-an</span> bareng.
        </h3>
        <div className="w-fit px-10 py-3 text-white poppins-medium rounded-lg bg-secondary cursor-pointer">
          More Info
        </div>
      </div>
      <div>
        <img
          src={img1}
          alt="cover"
          className="ps-10 w-full h-full object-cover"
        />
      </div>
    </div>
  );
};
