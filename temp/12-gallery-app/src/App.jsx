import { useEffect, useState } from "react"
import placeholderImg from "./assets/image-placeholder.png"

function App() {
  const [data, setData] = useState([])
  const [index, setIndex] = useState(1)

  useEffect(function () {
    let active = true

    const getData = async () => {
      const response = await fetch(`https://picsum.photos/v2/list?page=${index}&limit=20`)
      const resData = await response.json()
      if (active) {
        setData(resData)
      }
    }

    getData()

    return function () {
      active = false
      setData([])
    }
  }, [index])

  return (
    <div className="gallery-container">
      <h1 id="main-heading">Gallery</h1>
      <div id="gallery">
        {(data.length === 0 ? Array.from({ length: 20 }, (_, i) => ({ id: i, isPlaceholder: true })) : data).map((item) => {
          return (
            <div key={item.id} className="gallery-item">
              <img src={item.isPlaceholder ? placeholderImg : item.download_url} alt={item.author || "Loading"} />
              <p className="author-name">{item.isPlaceholder ? "Loading..." : `Image by ${item.author}`}</p>
            </div>
          )
        })}
      </div>
      <div className="navigation-buttons">
        <button id="prev" disabled={index <= 1} onClick={() => {
          setIndex(index - 1)
        }}>Previous</button>
        <button id="next" onClick={() => {
          setIndex(index + 1)
        }}>Next</button>
      </div>
    </div>
  )
}

export default App
