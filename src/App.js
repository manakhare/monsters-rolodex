import { Component } from "react";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) =>
        this.setState(
          () => {
            return { monsters: users };
          }
          // },
          // () => {
          //   console.log(this.state);
          //   // console.log("componentDidMount");
          // }
        )
      );
  }

  onSearchChange = (event) => {
    // console.log(event); // logs the value of the event i.e. we typed something in the search box
    // console.log(event.target.value);  // logs the value of what we have typed

    const searchField = event.target.value.toLowerCase();

    this.setState(() => {
      return { searchField };
    });
  };

  render() {
    // console.log("render");

    const { monsters, searchField } = this.state; //this.state gets destructured and its variables get stored in monsters and searchField
    const { onSearchChange } = this;

    const filteredMonsters = monsters.filter((monster) => {
      //After destructuring, this.change.monsters.filter() ---> monsters.filter()
      return monster.name.toLowerCase().includes(searchField); //filters the string that contains the string that we have typed in the search box
    });

    return (
      <div className="App">
        <h1 className="app-title"><u>FIND YOUR MONSTER!</u></h1>
        <SearchBox 
        className='search-box'
        placeholder='Search monsters....'
        onChangeHandler={onSearchChange} />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }

}

export default App;
