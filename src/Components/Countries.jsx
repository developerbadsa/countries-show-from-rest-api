

function Countries(){
    fetch('https://restcountries.com/v3.1/all?fields=name,flags')
    .then(data=>data.json())
    .then(countriesData=> console.log(countriesData))
}


export default Countries