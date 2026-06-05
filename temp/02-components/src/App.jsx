import Navbar from './components/Navbar.jsx'
import Card from './components/Card.jsx'
import './App.css'

const studentData = [
  {
    id: 1,
    name: "Shashank Shekhar Singh",
    rollNo: "2506070",
    course: "BTech CSE (2025-29)"
  },
  {
    id: 2,
    name: "Alice Smith",
    rollNo: "2506071",
    course: "BTech ECE (2025-29)"
  },
  {
    id: 3,
    name: "Bob Johnson",
    rollNo: "2506072",
    course: "BTech ME (2025-29)"
  }
];

const App = () => {
  return (
    <>
    <Navbar />
    <div className="card-container">
      {studentData.map((student) => (
        <Card key={student.id} name={student.name} rollNo={student.rollNo} course={student.course} />
      ))}
    </div>
    </>
  )
}

export default App
