////Solving problems using array functions on rest countries data.

//// 1.Get all the countries from Asia continent /region using Filter function.

const countries = [
    { name: ‘Nigeria’, continent: ‘Africa’},
    { name: ‘china’, continent: ‘Asia’},
    { name: ‘India’, continent: ‘Asia’},
    { name: ‘Nepal’, continent: ‘Asia’},
    { name: ‘Angola’, continent: ‘Africa’},
    { name: ‘Greece’, continent: ‘Europe’},
    { name: ‘Kenya’, continent: ‘Africa’},
    { name: ‘Greece’, continent: ‘Europe’}
    ]
    
    let asianCountries = countries.filter(country => {
    return country.continent === ‘Asia’;
    })
    
    console.log(asianCountries);
    
    //// 2.Get all the countries with a population of less than 2 lakhs using Filter function
    
    const countries2 = [
    { name: ‘Nigeria’, continent: ‘Africa’, population:100123},
    { name: ‘china’, continent: ‘Asia’, population:270123},
    { name: ‘India’, continent: ‘Asia’, population:240123},
    { name: ‘Nepal’, continent: ‘Asia’, population:100123},
    { name: ‘Angola’, continent: ‘Africa’, population:100123},
    { name: ‘Greece’, continent: ‘Europe’, population:100123},
    { name: ‘Kenya’, continent: ‘Africa’, population:100123},
    { name: ‘London’, continent: ‘Europe’, population:55123}
    ]
    
    let asianCountries2 = countries2.filter(country =>
    country.population < 200000);
    
    console.log(asianCountries2);
    
    //// 3.Print the following details name, capital, flag using forEach function
    
    const countries3 = [
    { name: ‘Nigeria’, capital: ‘Abuja’},
    { name: ‘china’, capital: ‘Beijing’},
    { name: ‘India’, capital: ‘Delhi’},
    { name: ‘Nepal’, capital: ‘Kathmandu’},
    { name: ‘Angola’, capital: ‘Luanda’},
    { name: ‘Greece’, capital: ‘Athens’},
    { name: ‘pakistan’, capital: ‘islamabad’},
    { name: ‘UK’, capital: ‘London’}
    ]
    
    let asianCountries3 = countries3.forEach(country => {
    console.log(country);
    return country;
    });
    
    console.log(asianCountries3);
    
    //// 4.Print the total population of countries using reduce function.
    
    const countries4 = [
    { name: ‘Nigeria’, continent: ‘Africa’, population:100123},
    { name: ‘china’, continent: ‘Asia’, population:270123},
    { name: ‘India’, continent: ‘Asia’, population:240123},
    { name: ‘Nepal’, continent: ‘Asia’, population:100123},
    { name: ‘Angola’, continent: ‘Africa’, population:100123},
    { name: ‘Greece’, continent: ‘Europe’, population:100123},
    { name: ‘Kenya’, continent: ‘Africa’, population:100123},
    { name: ‘London’, continent: ‘Europe’, population:55123}
    ]
    
    let asianCountries4 = countries4.reduce((acc, current) =>{
    return acc + current.population;
    } ,0);
    
    console.log(asianCountries4);
    
    ////// 5.Print the country which uses US Dollars as currency.
    
    const countries5 = [
    { name: ‘Nigeria’,currency:’Naira’},
    { name: ‘china’, currency:’Yuan’},
    { name: ‘India’, currency:’Rs’},
    { name: ‘Nepal’, currency:’Nepalese’},
    { name: ‘Angola’, currency:’Kwanza’},
    { name: ‘Greece’, currency:’GRD’},
    { name: ‘Kenya’, currency:’Kenyan’},
    { name: ‘London’, currency:’Pound’},
    { name: ‘America(U.S)’, currency:’Dollar’}
    ]
    
    let asianCountries5 = (country) => {
    return countries5.filter(x => x.indexOf(country) > -1);
    }
    
    console.log(asianCountries5(‘amer’));