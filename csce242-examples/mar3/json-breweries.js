//https://api.openbrewerydb.org/breweries

const getMap = async(latitude, longitude) => {
    try {
        return (
            await fetch(
                `https://maps.google.com/maps?q=${latitude},${longitude}&t=&z=15&ie=UTF8&iwloc=&&output=embed`
            )
        ).url;
    } catch (error) {
        console.log(error);
    }
};

const getBreweries = async() => {
    const url = "https://api.openbrewerydb.org/breweries";

    try {
        const response = await fetch(url);
        return response.json();
    } catch(error){
        console.log(error);
    }
};


const showBreweries = async() => {
    const breweriesSection = document.getElementById("breweries");
    const breweries =  await getBreweries();

    breweries.forEach( async brewery => {
        const section = document.createElement("section");
        breweriesSection.append(section);

        const name = document.createElement("h3");
        name.innerHTML = brewery.name;
        section.append(name);

        const type = document.createElement("p");
        type.innerHTML = `Type: ${brewery.brewery_type}`;
        section.append(type);

        const a = document.createElement("a");
        a.href = brewery.website_url;
        section.append(a);
        
        const address = document.createElement('p');
        address.innerHTML = `Address: ${brewery.address_1}`;
        section.append(address);

        const phone = document.createElement("p");
        phone.innerHTML = `Phone Number: ${brewery.phone}`;
        section.append(phone);

        const iframe = document.createElement("iframe");
        iframe.src = await getMap(brewery.latitude, brewery.longitude);
        section.append(iframe);
    });
}

showBreweries();