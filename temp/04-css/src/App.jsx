import Button from "./components/Button/Button"
import Header from "./components/Header/Header"

const App = () => {
  return (
    <div>
      <Header></Header>
      {/* Passing a custom click handler and text */}
      <Button onClick={() => alert("Main button clicked!")}>Click Here</Button>
    </div>
  )
}

export default App
