let url = "";

function getUrl (name, country, month, day){ 

    if (country ==0 && month==0) {alert("You need to set a country")}
    
    else if (name && country) {url=`https://api.abalin.net/getdate?name=${name}&country=${country}`}
    else {url = `https://api.abalin.net/namedays?country=se&month=${month}&day=${day}`;}
    
    getInfo(url);
    }


const getInfo = (url)=>{fetch(url)
.then(response=>response.json())
.then(response=>getDetails(response))
.catch(err=>console.log(err))}
    





