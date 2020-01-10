let url = "";

function getUrl (name, month, day){ name
    ? url=`https://api.abalin.net/getdate?name=${name}&country=se`
    : url = `https://api.abalin.net/namedays?country=se&month=${month}&day=${day}`;
    api.getInfo(url);
    }


class Apiurl {
    constructor (url){
        this.url = url;
    }

    getInfo(url){fetch(url)
    .then(response=>response.json())
    .then(response=>getDetails(response))
    .catch(err=>console.log(err))}
    }

const api = new Apiurl(url);




