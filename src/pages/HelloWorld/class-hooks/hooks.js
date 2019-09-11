import React, {useState, useEffect} from 'react'

const People = () => {
  const [items, setItems] = useState([])
  const [isLoaded, setIsLoaded] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetch("https://www.breakingbadapi.com/api/characters")
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true)
          setItems(result.Items)
        },
        (error) => {
          setIsLoaded(false)
          setError(error)
        }
      )
  })

  const peopleList = () => {
    return (
      <div className="d-flex">
        {
          items.map(item => (
            <div key={item.char_id} class="card">
              <img src={item.img} class="card-img-top" alt={`Foto de ${item.name}`} />
              <div class="card-body">
                <h5 class="card-title">{item.name}</h5>
                <p class="card-text">{item.occupation}</p>
              </div>
            </div>
          ))
        }
      </div>
    )
  }

  return (
    <>
      {
        error
          ? (
            <div>Error: {error.message}</div>
          ) : (
            isLoaded && peopleList()
          )
      }
    </>
  )
}

export default People
