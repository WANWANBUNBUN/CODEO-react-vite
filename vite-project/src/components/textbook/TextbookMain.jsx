const textbookContent = [
  "1.HTML",
  "2.CSS",
  "3.mySQL",
  "1.HTML",
  "2.CSS",
  "3.mySQL",
  "1.HTML",
  "2.CSS",
  "3.mySQL",
];

export default function TextbookMain() {
  return (
    <main className="max-w-4xl">
      <section className="z-0 flex flex-col justify-center sm:flex-row p-6 items-center  mb-12 bg-white opacity-70 mt-40 rounded-tl-[7vw] rounded-tr-[7vw]">
        {textbookContent.map((content, index) => (
          <blockquote
            key={index}
            className="bg-zinc-300 py-2 h-10  w-dvw text-center my-1"
          >
            <p>{content}</p>
          </blockquote>
        ))}
      </section>
    </main>
  );
}
