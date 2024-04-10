export default function CardR({ topic, progress }) {
  return (
    <div className="card flex justify-center items-center">
      <a href="/level">
        <div className="flex flex-col items-center justify-center text-center bg-gradient-to-r from-[#0CF362] to-[#47C0F4] rounded-2xl h-36 w-60 shadow-sm">
          <h2>{topic}</h2>
          <div className="w-40 h-2 bg-gray-200 rounded-full overflow-hidden relative mt-2">
            <div
              className="h-full bg-blue-500 rounded-full"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>
      </a>
    </div>
  );
}
