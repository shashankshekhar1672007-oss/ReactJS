import Card from "./components/Card";
import "./App.css";
import userData from "./userData.json";

const App = () => {
  return (
    <div className='card-container'>
      {userData.map((user) => (
        <Card 
          key={user.id} 
          name={user.name}
          tagline={user.tagline}
          likes={user.likes}
          posts={user.posts}
          views={user.views}
          experience={user.experience}
        />
      ))}
    </div>
  )
}

export default App
