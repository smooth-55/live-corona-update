    const country = document.querySelector("#country").value

    let death_count = document.querySelector(".card__label")
    death_count.innerHTML = "Fetching!!!"
    console.log("btn clicked")
    fetch(`https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/npm-covid-data/`, {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com",
            "x-rapidapi-key": "58143077ebmshbf1f9a97d92c8c5p1caa60jsnc4ed2ba83104",
        },

    })
    .then(response => {
        console.log("response", response.body);
        return response.json()
    }).then(data => {

        const api_data = data
        death_count.innerHTML = api_data[0].TotalDeaths
 
        for (let data of api_data){
            const country = document.querySelector("#country")
            let option = document.createElement("option");
            option.text = data.Country;
            option.value = data.Country;
            country.appendChild(option);

            

        }   
        
    })

const handleCountryChange=()=>{

    var getCountry = []
    const country = document.querySelector("#country").value

    if (country == "choose_country"){
        console.log("country not selected")

    } else{

        let death_count = document.querySelector(".card__label")
        death_count.innerHTML = "Fetching!!!"
        console.log("btn clicked")
        fetch(`https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/npm-covid-data/`, {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com",
                "x-rapidapi-key": "58143077ebmshbf1f9a97d92c8c5p1caa60jsnc4ed2ba83104",
            },
    
        })
        .then(response => {
            console.log("response", response.body);
            return response.json()
        }).then(data => {    
           
        console.log("selected, data", data) 
        const countryWiseDeathCount = data.find((element) => element.Country === country)   
        
        death_count.innerHTML = countryWiseDeathCount.TotalDeaths
            
        })



        
    }
}


