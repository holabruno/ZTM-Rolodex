import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';

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
    console.log('render from App.js');

    //cast state values to class variables
    const { monsters, searchField } = this.state;
    const { onSearchChange } = this;

    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });

    return (
      <div className="App" >
        <h1 className='app-title'>Monster Rolodex</h1>

        <SearchBox onChangeHandler={onSearchChange} placeholder="Search Monsters" className="searchbox" />

        {filteredMonsters.map((el) => {
          return (
            <>
              <div key={el.id}>
                <CardList monsters={filteredMonsters} name={el.name} />
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
