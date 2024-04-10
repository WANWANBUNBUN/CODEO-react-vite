// import Textbook from "./textbook/Textbook";

export default function Footer() {
  return (
    <footer className="fixed bg-white opacity-90 rounded-tl-[7vw] rounded-tr-[7vw] h-16">
      <div className="footerIcons">
        <a href="/">
          <img src="../images/home.svg" alt="home" />{" "}
        </a>
        <a href="/textbook">
          <img
            src="../images/textbook.svg"
            alt="textbook "
            className="opacity-40"
          />
        </a>
        <a href="/profile">
          <img
            src="../images/profile.svg"
            alt="profile"
            className="opacity-40"
          />
        </a>
      </div>
    </footer>
  );
}
