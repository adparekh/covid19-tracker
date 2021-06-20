import axios from "axios";
import { DEFAULT_SCHEMA } from "js-yaml";
import { deleteDatabase } from "workbox-core/_private";

const URL = "https://covid19.mathdro.id/api";

export const fetchData = async (country) => {
  let changeableURL = URL;

  if (country) {
    changeableURL = `${URL}/countries/${country}`;
  }

  try {
    const {
      data: { confirmed, recovered, deaths, lastUpdate },
    } = await axios.get(changeableURL); // Gets the "data" structure from the API. Warning: Depends on the API.

    const modifiedData = {
      confirmed,
      recovered,
      deaths,
      lastUpdate,
    };

    return modifiedData;
  } catch (error) {
    console.log(error);
  }
};

export const fetchDailyData = async () => {
  try {
    const { data } = await axios.get(`${URL}/daily`);

    const modifiedData = data.map((dailyData) => ({
      confirmed: dailyData.confirmed.total,
      deaths: dailyData.deaths.total,
      date: dailyData.reportDate,
    }));
    return modifiedData;
  } catch (error) {}
};

export const fetchCountries = async () => {
  try {
    const {
      data: { countries },
    } = await axios.get(`${URL}/countries`);
    return countries.map((country) => country.name);
  } catch (error) {}
};
