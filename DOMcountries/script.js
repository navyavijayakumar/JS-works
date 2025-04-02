// fetch("https://restcountries.com/v2/all").then(res=>res.json()).then(data=>displayCountries(data))

async function getAllCountries(){
    var response=await fetch("https://restcountries.com/v2/all")
    var data=await response.json()
    displayCountries(data)
}
getAllCountries()

function displayCountries(countries){
    let htmlData=""
    for(let c of countries){
    htmlData+=`<div class="group">
                    <div class="bg-gray-100 rounded-lg overflow-hidden">
                        <img src="${c.flag}" alt="Product 1" class="w-full h-48 object-cover group-hover:opacity-75">
                    </div>
                    <div class="mt-4">
                        <h3 class="text-lg font-medium text-gray-900">${c.name}</h3>
                        <p class="text-sm text-gray-500">${c.capital}</p>
                        <p class="mt-2 text-lg font-semibold text-indigo-600">${c.population}</p>
                    </div>
                </div>`    
}
document.querySelector("#root").innerHTML=htmlData
}


