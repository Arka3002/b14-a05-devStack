import { useState } from "react"
import { ToastContainer } from "react-toastify"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import MainLayout from "./components/MainLayout"
import Footer from "./components/Footer"

const App = () => {
  const [stack, setStack] = useState([])

  return (
    <div className="min-h-screen flex flex-col justify-between bg-white">
      <ToastContainer position="bottom-right" autoClose={3000} theme="light" />
      <Navbar />
      <main className="grow">
        <Hero />
        <MainLayout stack={stack} setStack={setStack} />
      </main>
      <Footer />
    </div>
  )
}

export default App