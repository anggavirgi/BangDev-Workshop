import { HashLink } from "react-router-hash-link";
import logo from "../../assets/img/logo.png";
export const Header = () => {
  return (
    <div className="flex justify-between py-5 items-center">
      <div>
        <img src={logo} alt="logo" className="w-32 object-cover" />
      </div>
      <div className="flex gap-9 items-center font-medium">
        <HashLink
          to={"/#about"}
          smooth={true}
          className="cursor-pointer hover:text-primary"
        >
          About
        </HashLink>
        <HashLink
          to={"/#product"}
          smooth={true}
          className="cursor-pointer hover:text-primary"
        >
          Product
        </HashLink>
        <HashLink
          to={"/#tech"}
          smooth={true}
          className="cursor-pointer hover:text-primary"
        >
          Tech
        </HashLink>
        <HashLink
          to={"/#contact"}
          smooth={true}
          className=" me-6 cursor-pointer hover:text-primary"
        >
          Contact
        </HashLink>
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
