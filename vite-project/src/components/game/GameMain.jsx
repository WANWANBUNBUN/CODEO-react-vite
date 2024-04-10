import { Link } from "react-router-dom";

export default function GameMain() {
  return (
    <main className="max-w-4xl">
      <section className="z-0 flex flex-col justify-center sm:flex-row px-6 items-center gap-8 mt-5">
        <div className="text-white flex w-full">
          <h2 className="text-xl font-bold">Python Programming Basics</h2>
        </div>
        <div className="flex justify-center items-center">
          <section>
            {/* go to last question */}
            <Link to="/game2">
              <img
                src="../images/triangle.svg"
                alt="goBackQuestion"
                className="items-center"
              />
            </Link>
          </section>
          {/* game question here */}
          <section className="bg-white rounded-lg p-3 w-full">
            <p className="code-text">
              if <span className="text-blue-400">(loveTeamwork)</span> {"{"}
            </p>
            <p className="ml-4">joinCodingCrew();</p>
            <p className="ml-4">collaborateOnProjects();</p>
            <p className="ml-4">createAmazingThingsTogether();</p>
            <p className="code-text">} else {"{"}</p>
            <p className="ml-4 text-purple-400">shineAsASoloCoder();</p>
            <p className="code-text">}</p>
          </section>
          {/* go to next question */}
          <section>
            <Link to="/game2">
              <img src="../images/triangleR.svg" alt="goNextQuestion" />
            </Link>
          </section>
        </div>
        {/* answers here */}
        <div className="grid grid-rows-2 grid-flow-col w-full">
          <div className="flex justify-between w-full">
            <button className="ops">Option 1</button>
            <button className="ops">Option 2</button>
          </div>
          <div className="flex justify-between w-full">
            <button className="ops">Option 3</button>
            <button className="ops">Option 4</button>
          </div>
        </div>
      </section>
    </main>
  );
}
