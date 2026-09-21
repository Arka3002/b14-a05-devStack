import { FaStar } from "react-icons/fa"

const TechCard = ({ tech, isAdded, onAddToStack }) => {
  return (
    <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between space-y-4">
      {/* Top Header: Icon & Badge */}
      <div className="flex items-center justify-between">
        <img src={tech.icon} alt={tech.name} className="w-10 h-10 object-contain" />
        <span className="text-[11px] font-medium text-sky-600 bg-sky-50 px-2.5 py-1 rounded-full border border-sky-100">
          {tech.badge}
        </span>
      </div>

      {/* Name & Description */}
      <div>
        <h3 className="font-bold text-lg text-slate-900">{tech.name}</h3>
        <p className="text-slate-500 text-xs mt-1.5 leading-relaxed min-h-[3rem]">
          {tech.description}
        </p>
      </div>

      {/* Meta Chips & Rating */}
      <div className="flex items-center justify-between text-xs pt-1 border-t border-slate-50">
        <div className="flex items-center gap-2">
          <span className="bg-slate-100 text-slate-600 px-2 py-0.5 rounded font-medium text-[11px]">
            {tech.category}
          </span>
          <span className="text-slate-400 text-[11px]">{tech.difficulty}</span>
        </div>
        <div className="flex items-center gap-1 font-bold text-slate-800 text-[11px]">
          <FaStar className="text-amber-400 text-xs" />
          <span>{tech.rating}</span>
        </div>
      </div>

      {/* Action Button */}
      <button
        onClick={() => onAddToStack(tech)}
        disabled={isAdded}
        className={`w-full py-2.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
          isAdded
            ? "bg-slate-100 text-slate-400 cursor-not-allowed"
            : "bg-slate-900 text-white hover:bg-slate-800 active:scale-[0.99]"
        }`}
      >
        {isAdded ? "✓ Added to Stack" : "Add to Stack"}
      </button>
    </div>
  )
}

export default TechCard