import logo from "../../assets/img/logo.png";

export const Header = () => {
  return (
    <div className="flex justify-between py-5 items-center">
      <div>
        <img src={logo} alt="logo" className="w-32 object-cover" />
      </div>
      <div className="flex gap-6 items-center font-medium">
        <div className="cursor-pointer hover:text-primary">About</div>
        <div className="cursor-pointer hover:text-primary">Product</div>
        <div className=" me-6 cursor-pointer hover:text-primary">Contact</div>
        <button className="px-8 py-2 text-white bg-primary rounded-md hover:shadow-lg">
          Login
        </button>
        <button className="px-6 py-2 border hover:text-primary hover:border-primary rounded-md">
          Register
        </button>
      </div>
    </div>
  );
};
