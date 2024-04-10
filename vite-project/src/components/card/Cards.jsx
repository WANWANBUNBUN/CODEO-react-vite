import Card from "./Card";
import CardR from "./CardRed";

const topics = [
  { name: "HTML", progress: "100" },
  { name: "CSS", progress: "50" },
  { name: "mySQL", progress: "100" },
  { name: "HTML", progress: "10" },
  { name: "CSS", progress: "50" },
  { name: "mySQL", progress: "100" },
];

export default function Cards() {
  return (
    <div className="z-0 flex flex-col justify-center sm:flex-row items-center gap-8 my-40">
      {topics.map((topic, index) =>
        Number(topic.progress) === 100 ? (
          <CardR key={index} topic={topic.name} progress={topic.progress} />
        ) : (
          <Card key={index} topic={topic.name} progress={topic.progress} />
        )
      )}
    </div>
  );
}
