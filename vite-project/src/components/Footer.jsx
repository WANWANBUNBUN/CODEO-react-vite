import { useLocation } from "react-router-dom";

export default function Footer() {
  const location = useLocation();
  const { pathname } = location;

  return (
    <footer className="fixed bg-white opacity-90 rounded-tl-[7vw] rounded-tr-[7vw] h-16">
      <div className="footerIcons">
        <a href="/">
          <img
            src="../images/home.svg"
            alt="home"
            className={pathname === "/" ? "opacity-100" : "opacity-40"}
          />
        </a>
        <a href="/textbook">
          <img
            src="../images/textbook.svg"
            alt="textbook"
            className={pathname === "/textbook" ? "opacity-100" : "opacity-40"}
          />
        </a>
        <a href="/profile">
          <img
            src="../images/profile.svg"
            alt="profile"
            className={pathname === "/profile" ? "opacity-100" : "opacity-40"}
          />
        </a>
      </div>
    </footer>
  );
}
