const contanier = document.querySelector(".contanier")

fetch("https://restcountries.com/v3.1/all")

    .then(function (repons) {
        return repons.json()

            .then((data) => {
                console.log(data)
                const result = data

                result.map((item) => {
                    contanier.innerHTML += `
               <div class="city">
        <img src="${item.flags.png}" alt="${item.flag}">
        <b>${item.name.common}</b>
        <p><b>Population</b> ${item.population}</p>
        <p><b>Region</b> ${item.region}</p>
        <p><b>Capital</b> ${item.capital}</p>
       </div>`
                })
            })
    })