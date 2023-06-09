import Logo from "../assets/Logo.svg";
import Menu from "../assets/menu.svg";
import Close from  "../assets/close.svg"
import instagram from "../assets/instagram.svg";
import Linkedin from "../assets/Linkedin.svg";
import Github from "../assets/Github.svg";
import Footer from "./footer";
import { Link } from "react-router-dom";
import LinkeIdn from "../assets/Linkedin.svg";
import GithubImage from "../assets/Github.svg";

function Header({ pages }) {
  return (
    <div className="">
      <div className="drawer text-abu bg-color-background">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          {/* /<!-- Navbar --> */}
          <div className="hilang">
            <div className="hidden lg:absolute mx-9">
              <img src={Linkedin} alt="" />
              <img src={Github} alt="" />
              <img src={instagram} alt="" />
            </div>
          </div>
          <div className="flex items-center">
            <div className="flex-1 flex-row  text-White pl-8 lg:pl-0 lg:pt-9 lg:mt-0 lg:mx-32">
              <Link to={"/"}>
                <img src={Logo} alt="" className="w-4 h-4 lg:w-8 lg:h-8" />
              </Link>
            </div>
            <div className="flex-none text-abu pt-8 hidden mx-4 lg:mx-36 lg:block">
              <ul className=" flex gap-6 ">
                {/* <!-- Navbar menu content here --> */}
                <li>
                  <Link to={"/"}>
                    <p className=" hover:text-white">
                      <span className=" text-primary">#</span>Home
                    </p>
                  </Link>
                </li>
                <li>
                  <Link to={"/Project"}>
                    <p className=" hover:text-white">
                      <span className=" text-primary">#</span>Project
                    </p>
                  </Link>
                </li>
                <li>
                  <Link to={"/AboutMe"}>
                    <p className=" hover:text-white">
                      <span className=" text-primary">#</span>About Me
                    </p>
                  </Link>
                </li>
                <li>
                  <Link to={"/Contacts"}>
                    <p className=" hover:text-white">
                      <span className=" text-primary">#</span>Contacts
                    </p>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="flex items-center  lg:hidden">
              <label
                htmlFor="my-drawer-3"
                className="btn btn-square btn-ghost mr-4 lg:mt-0"
              >
                <img src={Menu} alt="" />
              </label>
            </div>
          </div>
          {/* <!-- Page content here --> */}
          <div className=" mx-7 lg:mx-32">{pages}</div>
          <Footer />
        </div>
        <div className=" drawer-side">
          <label htmlFor="my-drawer-3" className="drawer-overlay"></label>

          <ul className=" menu p-4 w-80 text-abu bg-color-background">
            {/* <!-- Sidebar content here --> */}
            <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
            <label
                htmlFor="my-drawer-3"
                className=" relative left-48"
              >
                <img src={Close} alt="" />
              </label>
            <li>
              <Link to={"/"}>
                <p className=" focus:text-white">
                  <span className=" text-primary">#</span>Home
                </p>
              </Link>
            </li>
            <li>
              <Link to={"/Project"}>
                <p className=" focus:text-white">
                  <span className=" text-primary">#</span>Project
                </p>
              </Link>
            </li>
            <li>
              <Link to={"/AboutMe"}>
                <p className=" focus:text-white">
                  <span className=" text-primary">#</span>About Me
                </p>
              </Link>
            </li>
            <li>
              <Link to={"/Contacts"}>
                <p className=" focus:text-white">
                  <span className=" text-primary">#</span>Contacts
                </p>
              </Link>
            </li>
            <div className=" flex justify-center items-center">
              <li>
                <a href="https://www.linkedin.com/in/yon-adilla-muchammad-37035b175?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BWaFUyZ%2B4SAGCfotcDKVsKw%3D%3D">
                  <img src={LinkeIdn} alt="" />
                </a>
              </li>
              <li>
                <a href="https://github.com/yonadilla">
                  <img src={GithubImage} alt="" />
                </a>
              </li>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
