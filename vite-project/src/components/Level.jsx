import { Link } from "react-router-dom";
import React from "react";

export default function Level() {
  return (
    <>
      <div>
        <div className="absolute inset-0 flex flex-col space-y-4 justify-center items-center">
          <div className="moveIcon">
            <a href="/game">
              <img src="/images/level1button.svg" alt="gogame" />
            </a>
          </div>
        </div>
      </div>

      <div>
        <img src="/images/linebutton.sve" alt="line" />
      </div>
    </>
  );
}
