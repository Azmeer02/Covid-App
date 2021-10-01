const API = async(country)=> {
    const url = "https://covid19.mathdro.id/api"
    let  changeableURL = url;
        if (country){
            changeableURL = `${url}/countries/${country}`;
        }
        const data = await fetch (changeableURL);
        let {confirmed,recovered,deaths,lastUpdate} = await data.json();
            return {confirmed,recovered,deaths,lastUpdate}
    }

export default API;

export async function covid(){
    const api = await fetch ("https://covid19.mathdro.id/api");
    const a = await api.json();
        const b = await fetch(a.dailySummary);
        const read = await b.json();
            // console.log(read);
            const modifiedData = read.map((dailyData) =>({
                confirmed: dailyData.confirmed.total,
                deaths: dailyData.deaths.total,
                date: dailyData.reportDate,
            }));
            return modifiedData;
}

export async function country(){
    const global = await fetch ("https://covid19.mathdro.id/api");
    const c = await global.json();
        const d = await fetch(c.countries);
        const {countries} = await d.json();
            return countries.map((country) => country.name);
}