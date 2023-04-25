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

  onSearchChange = (evt) => {
    const searchField = evt.target.value.toLocaleLowerCase();
    this.setState(() => {
      return { searchField }; //key/value
    },
      () => { console.log({ endingArray: this.state.monsters }) }
    )

  }

  render() {
    console.log('render');

    //cast state values to class variables
    const { monsters, searchField } = this.state;
    const { onSearchChange } = this;

    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });

    return (
      <div className="App" >
        <h1>Monster Rolodex</h1>
        <input
          name="search"
          type="search"
          placeholder="search monsters"
          onChange={onSearchChange}
        />
        {filteredMonsters.map((el) => {
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
