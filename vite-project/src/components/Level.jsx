import { Link } from "react-router-dom";
import React from "react";
import Footer from "./Footer";
import Header from "./Header";

export default function Level() {
  return (
    <>
      <Header />
      <div className="mt-40 mb-20 relative">
        <div className="absolute inset-0 flex flex-col space-y-4 justify-center items-center">
          <div className="moveIcon">
            <a href="/game">
              <img src="/images/level1button.svg" alt="gogame" />
            </a>
          </div>
        </div>

        <div className="flex place-content-center">
          <img src="/images/linebutton.svg" alt="line" />
        </div>
      </div>
      <Footer />
    </>
  );
}
