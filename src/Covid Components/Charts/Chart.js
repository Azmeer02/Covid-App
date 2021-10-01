import React, {useState,useEffect} from 'react';
import {covid} from '../../Covid Components/API';
import {Line, Bar} from 'react-chartjs-2';
import styles from './Chart.module.css';

const Chart = ({data: {confirmed,recovered,deaths} , country}) =>{
    const [dailyData,setDailyData] = useState([]);

    useEffect(()=>{
        const fetchData = async() => {
            setDailyData(await covid());
        }
        fetchData();
    },[])

    const lineChart = (
        dailyData.length 
        ? (             // if the dailyData is available for the first day then it will return the <Line/>
        <Line
            data = {{
                labels: dailyData.map(({date}) => date),
                datasets: [{
                    data: dailyData.map(({confirmed}) => confirmed),
                    label: 'Infected',
                    BorderColor: 'blue',
                    backgroundColor: 'teal',
                    fill: true,
                },{
                    data: dailyData.map(({deaths}) => deaths),
                    label: 'Deaths',
                    BorderColor: 'red',
                    backgroundColor: 'firebrick',
                    fill: true,
                }]
            }}
        />) : null      // if dailyData is not available for the first day then it will return null.
        )
        // console.log(confirmed,recovered,deaths);

    const barChart = (
        confirmed
        ? (
            <Bar
                data = {{
                    labels : ['Infected' , 'Recovered' , 'Deaths'],
                    datasets : [{
                        label : 'People',
                        backgroundColor : ['blue' , 'green' , 'red'],
                        data : [confirmed.value,recovered.value,deaths.value]
                    }]
                }}
                options = {{
                    legend : {display : false},
                    title : {display : true, text : `Current State in ${country}`}
                }}
            />
        ) : null
    )

    return(
        <div className={styles.container}>
            {country ? barChart : lineChart}
        </div>
    )
}

export default Chart;