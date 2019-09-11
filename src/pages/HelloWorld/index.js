
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
          setItems(result)
        },
        (error) => {
          setIsLoaded(false)
          setError(error)
        }
      )
  })
  
  const peopleList = () => {
    return (
      
      <div className="people-list">
        {
          isLoaded && items.map(item => (
            <div key={item.char_id} class="card m-2">
              <img src={item.img} class="card-img-top" alt={`Foto de ${item.name}`} />
              <div class="card-body">
                <h5 class="card-title">{item.name}</h5>
                <p class="card-text">{item.birthday}</p>
                
                <p class="card-text">{item.status}</p>
              </div>
            </div>
          ))
          
        }
      </div>
    )
  }

  return (
    <>
      <h1>Lista de personagens</h1>
      {
        error
          ? (
            <div>Error: {error.message}</div>
          ) : (
            peopleList()
          )
      }
    </>
  )
}

export default People
