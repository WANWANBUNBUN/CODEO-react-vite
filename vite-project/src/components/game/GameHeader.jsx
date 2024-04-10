export default function Header() {
  return (
    <>
      <div className="bg-white z-50 opacity-90 backdrop-blur-xl rounded-bl-[7vw] rounded-br-[7vw] h-36 w-full top-0 px-2 justify-center items-center p-4">
        {/* <!--back arrow and logo--> */}
        <section className="flex justify-between ml-8">
          <div>
            <img
              className="w-7 h-7 object-cover mb-4"
              alt="Icon"
              src="../images/backarrow.svg"
            />
          </div>
          <div className="logo">
            <img src="../images/CODEO.png" alt="logo" className="h-16" />
          </div>
        </section>
        {/* <!--progress bar text--> */}
        <section className="pt-2">
          <div className="self-stretch flex justify-between text-sm sm:text-base">
            <strong>4/10</strong>
            <strong className="font-cabin">CSS</strong>
          </div>
        </section>
        {/* <!--progress bar placeholder rn!!!! --> */}
        <div className="w-full h-4 bg-gray-200 rounded-full overflow-hidden relative">
          <div
            className="h-full bg-gradient-to-r from-blue-500 to-pink-500 rounded-full"
            style={{ width: "40%" }}
          ></div>
          <div
            className="w-6 h-6 bg-yellow-400 rounded-full absolute"
            style={{
              left: "calc(40% - 12px)",
              bottom: "50%",
              transform: "translate(0, 50%)",
            }}
          ></div>
        </div>
      </div>
    </>
  );
}
