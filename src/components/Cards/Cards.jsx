import React from "react";
import { Grid } from "@material-ui/core";
import styles from "./Cards.module.css";
import CardComponent from "./Card/Card";

const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
  if (!confirmed) {
    return "Loading...";
  }
  return (
    <div className={styles.container}>
      <Grid container spacing={3} justify="center">
        <CardComponent
          className={styles.infected}
          dataTitle="Infected"
          date={lastUpdate}
          value={confirmed.value}
          subtitle="Number of active cases of COVID-19"
        />
        <CardComponent
          className={styles.recovered}
          dataTitle="Recovered"
          date={lastUpdate}
          value={recovered.value}
          subtitle="Number of recoveries from COVID-19"
        />
        <CardComponent
          className={styles.deaths}
          dataTitle="Deaths"
          date={lastUpdate}
          value={deaths.value}
          subtitle="Number of deaths cause by COVID-19"
        />
      </Grid>
    </div>
  );
};

export default Cards;
