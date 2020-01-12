
//TARGET ELEMENTS

nameButtonEl = document.querySelector(".namebutton");

dateButtonEl = document.querySelector(".datebutton");

nameEl = document.querySelector(".name");

dateEl = document.querySelector(".date");

dateWrapperEl = document.querySelector(".dateWrapper");

nameWrapperEl = document.querySelector(".nameWrapper");

dropdownEl = document.querySelector(".dropdown");


//EVENT HANDLERS

target = "";

targetTwo="";

country = "";

nameButtonEl.addEventListener('click', e => {

    e.preventDefault();

    name = nameEl.value;

    target = e.target;

    getUrl(name, country, 0, 0);


});

dateButtonEl.addEventListener('click', e => {

    e.preventDefault();

    date =dateEl.value;
     month = date.slice(5,7);
    month = Math.round(month);
     day = date.slice(8,10);
     day = Math.round(day);

     target = e.target;
     
     setCountry();

     if (country=="") {alert("You need to set a country")}
     
     else {getUrl(0, country, month, day)};});

dropdownEl.addEventListener('click', e => {

    e.preventDefault();

     targetTwo = e.target;

     setCountry();});

// AUXILIARY FUNCTIONS TO RENDER THE RIGHT DATA

const setCountry= () =>{

    if (targetTwo == document.getElementById("Czechia")) {country="cz"}
    else if (targetTwo == document.getElementById("Germany")) {country="de"}
    else if (targetTwo == document.getElementById("Austria")) {country="at"}
    else if (targetTwo == document.getElementById("Denmark")) {country="dk"}
    else if (targetTwo == document.getElementById("Spain")) {country="es"}
    else if (targetTwo == document.getElementById("Finland")) {country="fi"}
    else if (targetTwo == document.getElementById("France")) {country="fr"}
    else if (targetTwo == document.getElementById("Croatia")) {country="hr"}
    else if (targetTwo == document.getElementById("Hungary")) {country="hu"}
    else if (targetTwo == document.getElementById("Italy")) {country="it"}
    else if (targetTwo == document.getElementById("Poland")) {country="pl"}
    else if (targetTwo == document.getElementById("Sweden")) {country="se"}
    else if (targetTwo == document.getElementById("Slovakia")) {country="sk"}
    else if (targetTwo == document.getElementById("USA")) {country="us"}}



//MAIN FUNCTION TO GET THE DATES

function getDates(result) {
        
        dateWrapperEl.innerHTML = `<li>The name day of <em>${result.name}</em> is the ${result.day} of ${getMonth(result.month)}</li>
        <li><a class="newsearch" href="#">Find other people with the same name day</a></li>`; 
        
        document.querySelector(".newsearch").addEventListener('click', e =>{
            target = e.target;
            
            getUrl(0, country, result.month, result.day)})};


//AUXILIARY FUNCTION


function getMonth(monthNumber) {
    a = monthNumber;
    if (a==1) {return "January"}
    else if  (a==2) {return "February"}
    else if  (a==3) {return "March"}
    else if  (a==4) {return "April"}
    else if  (a==5) {return "May"}
    else if  (a==6) {return "June"}
    else if  (a==7) {return "July"}
    else if (a==8) {return "August"}
    else if  (a==9) {return "September"}
    else if  (a==10) {return "October"}
    else if  (a==11) {return "November"}
    else {return "December"};}

//MAIN FUNCTION FOR GETTING THE NAMES

function getNames(response) {

    getCountry(response) };


const getCountry = (response)=> {

        let b ="";
        if (response.data[0].namedays.at) {country="at"; b=response.data[0].namedays.at; setOutputNames(b)}

        else if (response.data[0].namedays.cz) {country="cz"; b=response.data[0].namedays.cz; setOutputNames(b)}

        else if (response.data[0].namedays.de) {country="de"; b=response.data[0].namedays.de; setOutputNames(b)}
        else if (response.data[0].namedays.dk) {country="dk"; b=response.data[0].namedays.dk; setOutputNames(b)}
        else if (response.data[0].namedays.es) {country="es"; b=response.data[0].namedays.es; setOutputNames(b)}
        else if (response.data[0].namedays.fi) {country="fi"; b=response.data[0].namedays.fi; setOutputNames(b)}
        else if (response.data[0].namedays.fr) {country="fr"; b=response.data[0].namedays.fr; setOutputNames(b)}
        else if (response.data[0].namedays.hr) {country="hr"; b=response.data[0].namedays.hr; setOutputNames(b)}
        else if (response.data[0].namedays.hu) {country="hu"; b=response.data[0].namedays.hu; setOutputNames(b)}
        else if (response.data[0].namedays.it) {country="it"; b=response.data[0].namedays.it; setOutputNames(b)}
        else if (response.data[0].namedays.pl) {country="pl"; b=response.data[0].namedays.pl; setOutputNames(b)}
        else if (response.data[0].namedays.se) {country="se"; b=response.data[0].namedays.se; setOutputNames(b)}
        else if (response.data[0].namedays.sk) {country="sk"; b=response.data[0].namedays.sk; setOutputNames(b)}
        else {b=response.data[0].namedays.us; setOutputNames(b)}};



const setOutputNames = (sameCountryNames)=> {

        if (target == document.querySelector(".newsearch")) {

            if (sameCountryNames== nameEl.value) {
     
             dateWrapperEl.innerHTML +=`<li>Only <em>${sameCountryNames}</em> has name day that day in that country</li>`;}
     
            else { dateWrapperEl.innerHTML +=`<li><em>${sameCountryNames}</em> has / have the same name day</li>`;}  
     
         } else {nameWrapperEl.innerHTML = `<li>On that date <em>${sameCountryNames}</em> has / have a name day</li>`
    }};



//SENDING THE URL DATA TO RIGHT FUNCTION (FOR NAMES OR FOR DATES)

const getDetails = (response)=> {

    if (response.results) { 
        
        if (response.results < 1) {
        alert("The name you search has no match")}

        else {response.results.forEach(result => {

                if (result.name.includes(nameEl.value)) {            
                    ind= result.name.indexOf(nameEl.value);
                    indTwo = ind + nameEl.value.length;
                    result.name = result.name.slice(ind, indTwo);
                    getDates(result)}


            else {alert("You need to write exactly the complete name")}})}}

    else {getNames(response);}}


