import Navbar from "./components/Navbar"
import Footer from "./components/Footer" // Fix: change 'footer' to 'Footer'

const App = () => {
  return (
    <div className="min-h-screen flex flex-col justify-between"> 
        <Navbar />
        <main className="flex-grow">main goes here</main>
        <Footer />
    </div>
  )
}

export default App