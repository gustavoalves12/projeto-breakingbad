import React from 'react';

class People extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }

  componentDidMount() {
    fetch("https://www.breakingbadapi.com/api/characters")
      .then(res => res.json())
      .then(
        (result) => {
          console.log('result', result)
          this.setState({
            isLoaded: true,
            items: result.Items
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <>
          {items.map(item => (
            <div key={item.char_id} class="card">
              <img src={item.img} class="card-img-top" alt={`Foto de ${item.name}`} />
              <div class="card-body">
                <h5 class="card-title">{item.name}</h5>
                <p class="card-text">{item.birthday}</p>
                <p class="card-text">{item.status}</p>
              </div>
            </div>
          ))}
        </>
      );
    }
  }
}

export default People
