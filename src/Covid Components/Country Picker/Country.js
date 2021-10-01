import React, { useEffect, useState } from 'react';
import { FormControl, NativeSelect } from '@material-ui/core';
import styles from './Country.module.css';
import {country} from '../../Covid Components/API'

const Country = ({handleCountryChange}) => {
    const [Mulk,setMulk] = useState([]);

    useEffect(()=>{
        const fetchMulk = async() => {
            setMulk(await country());
        }
        
        fetchMulk();
    },[setMulk])

    return(
        <FormControl className={styles.countries}>
            <h3 className = {styles.heading}><b>SELECT COUNTRY</b></h3>
            <NativeSelect defaultValue="" onChange={(e) => handleCountryChange(e.target.value)}>
                <option value="">Global</option>
                {Mulk.map((country,i) => <option key = {i} value={country}>{country}</option>)}
            </NativeSelect>
        </FormControl>
    )
}

export default Country;