import img2 from "../../assets/img/img2.png";

export const About = () => {
  return (
    <div className="grid grid-cols-2 py-10" id="about">
      <div>
        <img src={img2} alt="cover 2" className="w-[500px] desktop:w-[600px]" />
      </div>
      <div className="flex flex-col py-8">
        <h1 className="text-4xl poppins-bold text-primary border-b-2 border-secondary pb-1.5 w-1/5">
          About
        </h1>
        <p className="mt-10 text-lg pe-20">
          <span className="poppins-semibold text-secondary">Weban</span>{" "}
          merupakan software house nomor 1 di Indonesia dalam pembuatan website
          secara cepat dan bagus. Weban berdiri sejak tahun 2012. Nama weban
          sendiri tidak memiliki arti khusus, weban berasal dari kata web-an. 😁
        </p>
        <div className="mt-16 px-10 grid grid-cols-3 text-center gap-10">
          <div>
            <div className="text-4xl desktop:text-5xl poppins-semibold">+100</div>
            <hr className="w-1/3 border-4 border-primary mx-auto my-6" />
            <div className="text-2xl desktop:text-3xl font-medium">Programmer</div>
          </div>
          <div>
            <div className="text-4xl desktop:text-5xl poppins-semibold">+200</div>
            <hr className="w-1/3 border-4 border-secondary mx-auto my-6" />
            <div className="text-2xl desktop:text-3xl font-medium">Klien</div>
          </div>
          <div>
            <div className="text-4xl desktop:text-5xl poppins-semibold">+250</div>
            <hr className="w-1/3 border-4 border-blue-700 mx-auto my-6" />
            <div className="text-2xl desktop:text-3xl font-medium">Project</div>
          </div>
        </div>
      </div>
    </div>
  );
};
