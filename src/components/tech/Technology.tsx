import img3 from "../../assets/img/img3.png";

export const Technology = () => {
  return (
    <div className="grid grid-cols-2 py-8 gap-10 laptop:gap-0" id="tech">
      <div className="py-8">
        <div className="text-4xl poppins-semibold py-1.5 border-b-2 border-secondary w-1/2">
          Our Technology
        </div>
        <div className="mt-5 text-lg pe-14">
          Teknologi yang kami gunakan dalam pembuatan website klien kami. Kami
          berusaha menggunakan teknologi terbaru dan terbaik untuk klien kami.
        </div>
        <div className="mt-6 desktop:mt-9 py-5 laptop:p-10 flex flex-col gap-4 text-xs laptop:text-sm desktop:text-base">
          <div className="flex gap-4 items-center poppins-medium">
            <div className="border-2 border-primary rounded-sm px-10 py-1 text-primary">
              ReactJS
            </div>
            <div className="border-2 rounded-sm px-14 py-1">NodeJS</div>
            <div className="border-2 border-green-600 rounded-sm px-8 py-1 text-green-600">
              ExpressJS
            </div>
            <div className="hidden desktop:block border-2 rounded-sm px-8 py-1">
              CSS
            </div>
            <div className="hidden desktop:block border-2 border-yellow-300 rounded-sm px-8 py-1 text-yellow-300">
              javascript
            </div>
          </div>
          <div className="flex gap-4 items-center poppins-medium">
            <div className="border-2 rounded-sm px-8 py-1">Bootstrap 5</div>
            <div className="border-2 border-red-400 rounded-sm px-8 py-1 text-red-400">
              Material UI
            </div>
            <div className="border-2 border-blue-800 rounded-sm px-8 py-1 text-blue-800">
              TailwindCSS
            </div>
            <div className="hidden desktop:block border-2 rounded-sm px-6 py-1">
              Typescript
            </div>
            <div className="hidden desktop:block border-2 rounded-sm px-6 py-1">
              HTML
            </div>
          </div>
          <div className="flex gap-4 items-center poppins-medium">
            <div className="border-2 rounded-sm px-6 py-1">Firebase</div>
            <div className="border-2 border-orange-400 rounded-sm px-14 py-1 text-orange-400">
              Laravel
            </div>
            <div className="border-2 rounded-sm px-10 py-1">MongoDB</div>
            <div className="hidden desktop:block border-2 border-orange-800 rounded-sm px-6 py-1 text-orange-800">
              CodeIgniter4
            </div>
            <div className="hidden desktop:block border-2 border-purple-500 rounded-sm px-6 py-1 text-purple-500">
              PostgreSQL
            </div>
          </div>
          <div className="hidden desktop:flex gap-4 items-center poppins-medium">
            <div className="border-2 border-blue-900 rounded-sm px-9 py-1 text-blue-900">
              Python
            </div>
            <div className="border-2 rounded-sm px-14 py-1">MySQL</div>
            <div className="border-2 border-amber-700 rounded-sm px-10 py-1 text-amber-700">
              Golang
            </div>
            <div className="hidden desktop:block border-2 rounded-sm px-6 py-1">
              Github
            </div>
            <div className="hidden desktop:block border-2 border-purple-500 rounded-sm px-12 py-1 text-purple-500">
              RestAPI
            </div>
          </div>
        </div>
      </div>
      <div>
        <img
          src={img3}
          alt="cover3"
          className="w-full laptop:w-[500px] desktop:w-[600px] lg:h-[450px] laptop:h-full lg:object-cover laptop:mx-auto"
        />
      </div>
    </div>
  );
};
