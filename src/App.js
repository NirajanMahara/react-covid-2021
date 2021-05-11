import React from "react";

// Imports
// Conventional imports
// import Cards from "./components/Cards/Cards";
// import CountryPicker from "./components/CountryPicker/CountryPicker";
// import Chart from "./components/Chart/Chart";

// Cool trick using index.js
import { Cards, Chart, CountryPicker } from './components';
import styles from './App.module.css';
import { fetchData } from './api';


class App extends React.Component {
  state = {
    data: {},
  }

  async componentDidMount() {
    const fetchedData = await fetchData();

    console.log(fetchedData);

    this.setState({ data: fetchedData});
  }

  render() {
    const { data } = this.state;

    return (
      <div className={styles.container}>
        <Cards data={data} />
        <CountryPicker />
        <Chart />
      </div>
    )
  }
}

export default App;
