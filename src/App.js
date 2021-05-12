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

import covidLogo from './img/image.png';

class App extends React.Component {
  state = {
    data: {},
    country: '',
  }

  async componentDidMount() {
    const fetchedData = await fetchData();

    console.log(fetchedData);

    this.setState({ data: fetchedData});
  }

  handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country);

    // console.log(fetchedData);

    this.setState({ data: fetchedData, country: country});
    // console.log(country);

  }

  render() {
    const { data, country } = this.state;

    return (
      <div className={styles.container}>
        <img className={ styles.image } src={ covidLogo } alt="COVID-19" />
        <Cards data={data} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Chart data={data} country={country} />

        <a className={styles.footer} href="https://github.com/NirajanWEB/"><h4>Nirajan Mahara © 2021</h4></a>
      </div>
    )
  }
}

export default App;
