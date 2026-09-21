import { IoClose } from "react-icons/io5"

const Sidebar = ({ stack, onRemoveFromStack, onRemoveAll }) => {
  return (
    <div className="w-full lg:w-80 bg-white border border-slate-100 rounded-2xl p-6 h-fit sticky top-24 shadow-xs">
      <div className="mb-4">
        <h2 className="font-bold text-lg text-slate-900">Your Stack</h2>
        <p className="text-xs text-slate-400 mt-0.5">
          {stack.length} {stack.length === 1 ? "Technology" : "Technologies"} Selected
        </p>
      </div>

      {/* Stack Items List */}
      {stack.length === 0 ? (
        <div className="text-center py-12 px-4 border border-dashed border-slate-200 rounded-xl">
          <p className="text-xs text-slate-400">Your stack is empty.</p>
          <p className="text-[11px] text-slate-400 mt-1">Click "Add to Stack" to build your toolkit.</p>
        </div>
      ) : (
        <div className="space-y-3">
          <div className="space-y-2.5 max-h-[420px] overflow-y-auto pr-1">
            {stack.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between p-3 border border-slate-100 rounded-xl bg-slate-50/50 hover:bg-slate-50 transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <img src={item.icon} alt={item.name} className="w-6 h-6 object-contain" />
                  <div>
                    <h4 className="font-bold text-xs text-slate-900">{item.name}</h4>
                    <span className="text-[10px] text-slate-400 uppercase tracking-wider">{item.category}</span>
                  </div>
                </div>
                <button
                  onClick={() => onRemoveFromStack(item.id)}
                  className="text-slate-400 hover:text-rose-500 p-1 rounded-md transition-colors cursor-pointer"
                  title="Remove technology"
                >
                  <IoClose className="text-base" />
                </button>
              </div>
            ))}
          </div>

          {/* Remove All Button */}
          <button
            onClick={onRemoveAll}
            className="w-full mt-4 py-2.5 border border-rose-200 text-rose-500 rounded-xl text-xs font-semibold hover:bg-rose-50 transition-colors cursor-pointer"
          >
            Remove All
          </button>
        </div>
      )}
    </div>
  )
}

export default Sidebar