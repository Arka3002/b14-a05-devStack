import { useState, useEffect } from "react"
import { toast } from "react-toastify"
import TechCard from "./TechCard"
import Sidebar from "./Sidebar"

const MainLayout = ({ stack, setStack }) => {
  const [technologies, setTechnologies] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        const response = await fetch("./data.json");
        if (!response.ok) throw new Error("Failed to fetch data")
        const data = await response.json()
        setTechnologies(data)
      } catch (err) {
        toast.error("Failed to load technologies!")
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  const handleAddToStack = (tech) => {
    const isAlreadyAdded = stack.some((item) => item.id === tech.id)

    if (isAlreadyAdded) {
      toast.warning(`${tech.name} is already in your stack!`)
      return
    }

    setStack((prev) => [...prev, tech])
    toast.success(`Added ${tech.name} to your stack!`)
  }

  const handleRemoveFromStack = (id) => {
    const itemToRemove = stack.find((item) => item.id === id)
    setStack((prev) => prev.filter((item) => item.id !== id))
    toast.info(`Removed ${itemToRemove?.name || "item"} from your stack`)
  }

  const handleRemoveAll = () => {
    if (stack.length === 0) return
    setStack([])
    toast.error("All technologies removed from your stack!")
  }

  return (
    <section className="max-w-7xl mx-auto px-6 py-12">
      <div className="flex flex-col lg:flex-row gap-8 items-start">
        {/* Left Side: Technology Cards Grid */}
        <div className="grow w-full">
          {loading ? (
            <div className="flex justify-center items-center min-h-[300px]">
              <div className="w-10 h-10 border-4 border-slate-200 border-t-pink-500 rounded-full animate-spin"></div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {technologies.map((tech) => {
                const isAdded = stack.some((item) => item.id === tech.id)
                return (
                  <TechCard
                    key={tech.id}
                    tech={tech}
                    isAdded={isAdded}
                    onAddToStack={handleAddToStack}
                  />
                )
              })}
            </div>
          )}
        </div>

        {/* Right Side: Stack Sidebar */}
        <Sidebar
          stack={stack}
          onRemoveFromStack={handleRemoveFromStack}
          onRemoveAll={handleRemoveAll}
        />
      </div>
    </section>
  )
}

export default MainLayout