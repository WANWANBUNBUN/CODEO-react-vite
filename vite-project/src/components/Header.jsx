export default function Header() {
  return (
    <>
      <div className="justify-center items-center">
        <header className="bg-white  justify-center items-center z-50 opacity-90 backdrop-blur-xl rounded-bl-[7vw] rounded-br-[7vw] h-36 w-full flex space-x-8 fixed top-0">
          <section className="max-w-4xl mx-auto p-4 flex justify-between items-center">
            <div className="m-8">
              <div className="text-4xl">Hello,</div>
              <div className="text-4xl font-bold">Zabel</div>
            </div>
            <div className="logo">
              <img src="../images/CODEO.png" alt="logo" className="h-16 m-8" />
            </div>
          </section>
        </header>{" "}
      </div>
    </>
  );
}
