
/*
const getName =() =>{
fetch(`https://api.abalin.net/getdate?name=${name}&country=sv`)
.then(response=>response.json())
.then(response=>getNameDetails(response))
.catch(err=>console.log(err))

};



const getName =() =>{
    fetch(`https://api.abalin.net/namedays?country=sv&month=${month}&day=${day}`)
    .then(response=>response.json())
    .then(response=>getDateNames(response))
    .catch(err=>console.log(err))
    };*/

let url = "";


class Apiurl {
    constructor (url){
        this.url = url;
    }

    getInfo(url){fetch(url)
    .then(response=>response.json())
    .then(response=>console.log(response))
    .catch(err=>console.log(err))}
}

const apiname = new Apiurl(url);

const apidate = new Apiurl(url);


