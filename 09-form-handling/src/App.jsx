import { useState } from 'react'
import './App.css'

function App() {
  const [name, setname] = useState("")
  const [email, setemail] = useState("")
  const [contact, setcontact] = useState("")
  const [gender, setgender] = useState("")
  const submitHandler = (event)=>{
    event.preventDefault()
    alert("Form Submitted");
  }

  return (
    <div className="form-container">
      <h2>Form</h2>
      <form className="basic-form" onSubmit={(event)=>{
        submitHandler(event)
      }}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your name"
            required
            value={name}
            onChange={(event)=>
              setname(event.target.value)
            }
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            required
            value={email}
            onChange={(event)=>
              setemail(event.target.value)
            }
          />
        </div>
        <div className="form-group">
          <label htmlFor="contactNo">Contact No</label>
          <input
            type="tel"
            id="contactNo"
            name="contactNo"
            placeholder="Enter your contact number"
            required
            value={contact}
            onChange={(event)=>
              setcontact(event.target.value)
            }
          />
        </div>
        <div className="form-group">
          <label>Gender</label>
          <div className="radio-group">
            <label>
              <input
                type="radio"
                name="gender"
                value="male"
                required
                checked={gender === "male"}
                onChange={(event)=>
                  setgender(event.target.value)
                }
              />
              Male
            </label>
            <label>
              <input
                type="radio"
                name="gender"
                value="female"
                required
                checked={gender === "female"}
                onChange={(event)=>
                  setgender(event.target.value)
                }
              />
              Female
            </label>
          </div>
        </div>
        <button type="submit" className="submit-btn">Submit</button>
      </form>
    </div>
  )
}

export default App
