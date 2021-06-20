import React from "react";
import { Card, CardContent, Typography, Grid } from "@material-ui/core";
import styles from "./Card.module.css";
import CountUp from "react-countup";
import cx from "classnames";

const CardComponent = ({ className, dataTitle, date, value, subtitle }) => {
  return (
    <Grid
      item
      component={Card}
      xs={12}
      md={3}
      className={cx(styles.card, className)}
    >
      <CardContent>
        <Typography color="textSecondary" gutterBottom>
          {dataTitle}
        </Typography>
        <Typography variant="h5">
          <CountUp start={0} end={value} duration={1.5} separator="," />
        </Typography>
        <Typography color="textSecondary">
          {new Date(date).toDateString()}
        </Typography>
        <Typography variant="body2">{subtitle}</Typography>
      </CardContent>
    </Grid>
  );
};

export default CardComponent;
