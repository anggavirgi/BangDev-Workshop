import img2 from "../../assets/img/img2.png";

export const About = () => {
  return (
    <div className="grid grid-cols-2 py-10">
      <div>
        <img src={img2} alt="cover 2" className="w-[600px]" />
      </div>
      <div className="flex flex-col py-8">
        <h1 className="text-4xl poppins-bold text-primary border-b-2 border-secondary pb-1.5 w-1/5">
          About
        </h1>
      </div>
    </div>
  );
};
