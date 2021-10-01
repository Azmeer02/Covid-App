import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';
import styles from './Stats.module.css';
import cx from 'classnames';

const Cards = ({data}) => {
    // console.log(data)

    return (
        <div className = {styles.container}>
        <Grid container spacing = {3} justify = "center">
            <Grid xs = {12} sm = {4} item component = {Card} className = {cx(styles.card,styles.infected)}>
            <CardContent>
                <Typography color = "textSecondary" gutterBottom><b>Infected</b></Typography>
                <Typography variant = "h5">{data && data.confirmed.value}</Typography>
                <Typography color = "textSecondary">
                    <b><u>{new Date (data && data.lastUpdate).toDateString()}</u></b>
                </Typography>
            </CardContent>
            </Grid>
            <Grid xs = {12} sm = {4} item component = {Card} className = {cx(styles.card,styles.recovered)}>
            <CardContent>
                <Typography color = "textSecondary" gutterBottom><b>Recovered</b></Typography>
                <Typography variant = "h5">{data && data.recovered.value}</Typography>
                <Typography color = "textSecondary">
                    <b><u>{new Date (data && data.lastUpdate).toDateString()}</u></b>
                </Typography>
            </CardContent>
            </Grid>
            <Grid xs = {12} sm = {4} item component = {Card} className = {cx(styles.card,styles.deaths)}>
            <CardContent>
                <Typography color = "textSecondary" gutterBottom><b>Deaths</b></Typography>
                <Typography variant = "h5">{data && data.deaths.value}</Typography>
                <Typography color = "textSecondary">
                    <b><u>{new Date (data && data.lastUpdate).toDateString()}</u></b>
                </Typography>
            </CardContent>
            </Grid>
        </Grid>
        </div>
  );
}

export default Cards;