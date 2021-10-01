import styles from './App.css';
import {useEffect, useState} from 'react';
import API from './Covid Components/API';
import Cards from './Covid Components/Cards/Stats';
import Chart from './Covid Components/Charts/Chart';
import Country from './Covid Components/Country Picker/Country';
import coronaImage from './Covid Components/Image/Image.png';

function App(){
  const [apiData , setApiData] = useState(
    {confirmed:{detail:'',value:0},deaths:{detail:'',value:0},lastUpdate:'',recovered:{ detail:'',value:0}}
    );
  const [country , setCountry] = useState('');

  useEffect(()=>{
  const APIData = async ()=>{
    setApiData(await API(country));
  };
    APIData();
  });

  const handleCountryChange = async(country) => {
    const fetchedData = await API(country);
      setCountry(country);
      console.log(fetchedData);
  }

  return (
    <div>
      <div className = {styles.images}><img src = {coronaImage} alt = "COVID-19"/></div>
      <Cards data = {apiData}/>
      <Country handleCountryChange = {handleCountryChange}/>
      <Chart data = {apiData} country = {country}/>
    </div>
  );
}

export default App;
