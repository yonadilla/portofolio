import Link from "../assets/Linkedin.svg";
import Github from "../assets/Github.svg";
function Footer() {
  return (
    <footer className=" py-2 border-t bottom-0 border-solid border-white text-grey mt-4">
      <div className=" flex justify-around">
        <h2>Media</h2>
        <div className=" flex gap-3">
          <a href="https://www.linkedin.com/in/yon-adilla-muchammad-37035b175?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BWaFUyZ%2B4SAGCfotcDKVsKw%3D%3D">
            <img src={Link} alt="" />
          </a>
          <a href="https://github.com/yonadilla">
            <img src={Github} alt="" />
          </a>
        </div>
      </div>
      <div className=" footer footer-center bottom-0">
        <p>Copyright © 2023 - Created by Yon</p>
      </div>
    </footer>
  );
}

export default Footer;
