import React from "react";

// Imports
// Conventional imports
// import Cards from "./components/Cards/Cards";
// import CountryPicker from "./components/CountryPicker/CountryPicker";
// import Chart from "./components/Chart/Chart";

// Cool trick using index.js
import { Cards, Chart, CountryPicker } from './components';
import styles from './App.module.css';


class App extends React.Component {
  render() {
    return (
      <div className={styles.container}>
        <Cards />
        <CountryPicker />
        <Chart />
      </div>
    )
  }
}

export default App;
