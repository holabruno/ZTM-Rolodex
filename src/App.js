import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: '',
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => {
        this.setState(
          () => {
            return { monsters: users };
          },
          () => {
            console.log(this.state);
          }
        );
      });
  }


  render() {
    return (
      <div className="App" >
        <h1>Monster Rolodex</h1>
        <input
          name="search"
          type="search"
          placeholder="search monsters"
          onChange={(evt) => {
            console.log({ startingArray: this.state.monsters });
            const filteredMonsters = this.state.monsters.filter((monster) => {
              const searchString = evt.target.value.toLocaleLowerCase();
              return monster.name.toLocaleLowerCase().includes(searchString);
            });

            this.setState(() => {
              return { monsters: filteredMonsters };
            },
              () => { console.log({ endingArray: this.state.monsters }) }
            )
          }}
        />
        {this.state.monsters.map((el) => {
          return (
            <>
              <div key={el.id}>
                <h2>{el.name}</h2>
              </div>
            </>
          );
        })
        }
      </div >
    );
  }
}
export default App;
