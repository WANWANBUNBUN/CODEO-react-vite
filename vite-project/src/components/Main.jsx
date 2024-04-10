export default function Main() {
    return (
        <main className="max-w-4xl">
      <section
        id="hero"
        className="z-0 flex flex-col-reverse justify-center sm:flex-row p-6 items-center gap-8 my-20"
      >
        <figure className="my-12">
          <a href="level.html"
            ><div
              className="bg-white dark:bg-black pl-14 pr-8 py-12 rounded-2xl h-36 w-60 shadow-sm"
            >
              <h2>HTML</h2>
            </div></a
          >
          <div
            className="bg-white dark:bg-black pl-14 pr-8 py-12 rounded-2xl relative h-36 w-60 shadow-sm mt-8"
          >
            <p className="text-2xl sm:text-3xl text-center">CSS</p>
          </div>
          <div
            className="bg-white dark:bg-black pl-14 pr-8 py-12 rounded-2xl relative h-36 w-60 shadow-sm mt-8"
          >
            <p className="text-2xl sm:text-3xl text-center">CSS</p>
          </div>
          <div
            className="bg-white dark:bg-black pl-14 pr-8 py-12 rounded-2xl relative h-36 w-60 shadow-sm mt-8"
          >
            <p className="text-2xl sm:text-3xl text-center">CSS</p>
          </div>
        </figure>
      </section>
      </main>
    );
  }