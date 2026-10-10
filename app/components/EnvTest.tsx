
export default function EnvTest() {
  const apiKey = process.env.API_KEY;
  const secret = process.env.SECRET;

  return (
    <div className="space-y-6 rounded-xl border border-gray-700 bg-gray-900 p-6 text-white">
      <h1 className="text-2xl font-bold">
        Environment Variable Test
      </h1>

      <div>
        <h2 className="font-semibold">API_KEY:</h2>
        <p className="break-all text-green-400">
          {apiKey ? "API_KEY is accessible" : "API_KEY is not accessible"}
        </p>
      </div>

      <div>
        <h2 className="font-semibold">SECRET:</h2>
        <p className="break-all text-green-400">
          {secret ? "SECRET is accessible" : "SECRET is not accessible"}
        </p>
      </div>
    </div>
  );
}
