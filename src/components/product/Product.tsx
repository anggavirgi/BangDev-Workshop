import product1 from "../../assets/img/porduct1.jpg";
import product2 from "../../assets/img/product2.jpg";
import product3 from "../../assets/img/product3.png";
import product4 from "../../assets/img/product4.png";
import product5 from "../../assets/img/product5.webp";

export const Product = () => {
  return (
    <div className="py-16" id="product">
      <div className="flex justify-between items-center">
        <div>
          <div className="text-4xl poppins-semibold py-1.5 border-b-2 border-secondary w-1/2">
            Our Products
          </div>
          <div className="mt-5 text-lg">
            Kami menyediakan berbagai kategori website, beberapa diantaranya
            sebagai berikut.
          </div>
        </div>
        <div className="flex gap-3 items-center text-primary text-xl poppins-medium cursor-pointer hover:text-blue-600">
          <span>Lihat semua</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
            />
          </svg>
        </div>
      </div>
      <div className="grid grid-cols-3 desktop:grid-cols-5 gap-11 mt-4">
        <div className="border rounded-md shadow-lg">
          <div>
            <img src={product5} alt="" className="w-full h-44 object-cover" />
          </div>
          <div className="p-5">
            <h2 className="text-xl poppins-semibold">Profil Perusahaan</h2>
            <div className="my-5">
              Website jenis ini cocok untuk kalian yang akan atau sudah memiliki
              perusahaan untuk menaikkan value dan media promosi.
            </div>
            <button className="px-8 py-1.5 border border-primary rounded-sm w-full poppins-medium text-primary hover:text-white hover:bg-primary">
              Detail
            </button>
          </div>
        </div>
        <div className="border rounded-md shadow-lg">
          <div>
            <img src={product2} alt="" className="w-full h-44 object-cover" />
          </div>
          <div className="p-5">
            <h2 className="text-xl poppins-semibold">E-Learning</h2>
            <div className="my-5">
              Cocok banget untuk instansi pendidikan yang ingin membuat media
              pembelajaran online.
            </div>
            <button className="px-8 py-1.5 border border-primary rounded-sm w-full poppins-medium text-primary hover:text-white hover:bg-primary">
              Detail
            </button>
          </div>
        </div>
        <div className="border rounded-md shadow-lg">
          <div>
            <img src={product4} alt="" className="w-full h-44 object-cover" />
          </div>
          <div className="p-5">
            <h2 className="text-xl poppins-semibold">E-Commerce</h2>
            <div className="my-5">
              Jadikan tokomu untuk jual beli lebih mudah dan jangkauan pasar
              lebih luas dengan menggunakan website.
            </div>
            <button className="px-8 py-1.5 border border-primary rounded-sm w-full poppins-medium text-primary hover:text-white hover:bg-primary">
              Detail
            </button>
          </div>
        </div>
        <div className="border rounded-md shadow-lg">
          <div>
            <img src={product3} alt="" className="w-full h-44 object-cover" />
          </div>
          <div className="p-5">
            <h2 className="text-xl poppins-semibold">Portal Berita</h2>
            <div className="my-5">
              Kalian yang suka share dan update berita, cocok banget buat website ini, yuk !
            </div>
            <button className="px-8 py-1.5 border border-primary rounded-sm w-full poppins-medium text-primary hover:text-white hover:bg-primary">
              Detail
            </button>
          </div>
        </div>
        <div className="border rounded-md shadow-lg">
          <div>
            <img src={product1} alt="" className="w-full h-44 object-cover" />
          </div>
          <div className="p-5">
            <h2 className="text-xl poppins-semibold">Dashboard Admin</h2>
            <div className="my-5">
              Dashboard Admin tepat untuk anda yang ingin memanajemen usaha atau
              proses bisnis anda.
            </div>
            <button className="px-8 py-1.5 border border-primary rounded-sm w-full poppins-medium text-primary hover:text-white hover:bg-primary">
              Detail
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
