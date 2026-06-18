import RiskBadge from "./RiskBadge";

export default function ResultCard({ result }) {
  return (
    <div className="glass rounded-3xl p-6 hover:-translate-y-2 transition duration-300">

      <div className="flex justify-between items-center mb-4">

  <div className="flex items-center gap-3">

    <img
      src={`https://logo.clearbit.com/${result.appName.toLowerCase().replace(/\s/g, "")}.com`}
      alt={result.appName}
      className="w-12 h-12 rounded-full bg-white p-1"
      onError={(e) => {
        e.target.src =
          `https://ui-avatars.com/api/?name=${result.appName}&background=4F46E5&color=fff`;
      }}
    />

    <div>
      <h2 className="text-2xl font-bold">
        {result.appName}
      </h2>

      {[
        "instagram",
        "facebook",
        "truecaller",
        "snapchat",
        "tiktok"
      ].includes(result.appName.toLowerCase()) && (

        <span className="bg-red-600 text-white text-xs px-2 py-1 rounded-full">
          ⚠ DPDP Non-Compliant
        </span>

      )}
    </div>

  </div>

  <RiskBadge level={result.riskLevel} />

</div>

      <div className="mb-4">
        <p className="text-gray-400 text-sm">
          Privacy Footprint Score
        </p>

        <h2 className="text-5xl font-bold text-cyan-400">
          {result.score}
        </h2>
      </div>

      <div className="mb-5">
        <h4 className="font-semibold mb-2">
          Summary
        </h4>

        <p className="text-gray-300">
          {result.summary}
        </p>
      </div>

      <div className="mb-5">
        <h4 className="font-semibold mb-2">
          Data Collected
        </h4>

        <div className="flex flex-wrap gap-2">
          {result.dataCollected?.map((item) => (
            <span
              key={item}
              className="bg-slate-800 px-3 py-1 rounded-full text-sm"
            >
              {item}
            </span>
          ))}
        </div>
      </div>

      <div>
        <h4 className="font-semibold mb-2">
          Recommended Actions
        </h4>

        <ul className="space-y-2 text-gray-300">
          {result.recommendedActions?.map((action) => (
            <li key={action}>
              • {action}
            </li>
          ))}
        </ul>
      </div>

    </div>
  );
}