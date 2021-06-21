import React from "react";
import styles from "./App.module.css";
import { Cards, Chart, CountryPicker } from "./components";
import { fetchData } from "./api";
import image from "./images/image.png";

class App extends React.Component {
  state = {
    data: {},
    country: "",
  };

  async componentDidMount() {
    const fetchedData = await fetchData();
    this.setState({ data: fetchedData });
  }

  handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country);

    this.setState({ data: fetchedData, country: country });
  };

  render() {
    const { data, country } = this.state;
    return (
      <div className={styles.container}>
        <img className={styles.image} src={image} alt="COVID-19" />
        <Cards data={data} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Chart data={data} country={country} />
        <div>
          <p className={styles.footer}>
            Made By Aditya Parekh using the React.js Framework.
          </p>
          <p className={styles.smaller}>
            <a
              href="https://github.com/adparekh/covid19-tracker"
              target="_blank"
              rel="noreferrer"
            >
              You can find the code here
            </a>
          </p>
        </div>
      </div>
    );
  }
}

export default App;
