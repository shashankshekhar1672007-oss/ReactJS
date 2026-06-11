import Section1 from './components/Section1/Section1'
import Section2 from './components/Section2/Section2'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Section1></Section1>
      <Section2></Section2>
      <Footer></Footer>
    </div>
  )
}

export default App
