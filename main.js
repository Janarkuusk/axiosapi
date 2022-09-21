import API from './config/API';

let dropDown = document.getElementById("countries");
dropDown.addEventListener('input', (e) => {
    console.log(e)
    API.get('/statistics', {params:{country: e.target.value}}).then(response => console.log(response))
})

try {
    await API.get('countries')
    .then(response => {
        const allCountries = response.data.response;
        console.log(allCountries)
        allCountries.forEach(country => {
            var tag = document.createElement("option");
            tag.innerHTML = country;
            var element = document.getElementById("countries")
            element.appendChild(tag);
        });


    })
} catch (error) {
   throw new Error(error.response.message);
}