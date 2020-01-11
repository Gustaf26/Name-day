
//TARGET ELEMENTS

nameButtonEl = document.querySelector(".namebutton");

dateButtonEl = document.querySelector(".datebutton");

nameEl = document.querySelector(".name");

dateEl = document.querySelector(".date");

dateWrapperEl = document.querySelector(".dateWrapper");

nameWrapperEl = document.querySelector(".nameWrapper");


//EVENT HANDLERS

target = "";

nameButtonEl.addEventListener('click', e => {

    e.preventDefault();

    name = nameEl.value;

    target = e.target;

    getUrl(name, 0, 0);


});

dateButtonEl.addEventListener('click', e => {

    e.preventDefault();

    date =dateEl.value;
     month = date.slice(5,7);
    month = Math.round(month);
     day = date.slice(8,10);
     day = Math.round(day);

     target = e.target;

   getUrl(0, month, day);

});

//OUTPUT INFO

function getDates(result) {
        
        
        dateWrapperEl.innerHTML = `<li>The name day of ${result.name} is the ${result.day} of ${getMonth(result.month)}</li>
        <li><a class="newsearch" href="#">Find other people with the same name day</a></li>`; 
        
        document.querySelector(".newsearch").addEventListener('click', e =>{
            target = e.target;
            getUrl(0, result.month, result.day)
        })
        
};

function getMonth(monthNumber) {
    a = monthNumber;
    if (a=1) {return "January"}
    else if  (a=2) {return "February"}
    else if  (a=3) {return "March"}
    else if  (a=4) {return "April"}
    else if  (a=5) {return "May"}
    else if  (a=6) {return "June"}
    else if  (a=7) {return "July"}
    else if (a=8) {return "August"}
    else if  (a=9) {return "September"}
    else if  (a=10) {return "October"}
    else if  (a=11) {return "November"}
    else {return "December"};
    
}

function getNames(response) {

    if (target == document.querySelector(".newsearch")) {
        
       dateWrapperEl.innerHTML +=`<li>${response.data[0].namedays.se} has or have the same name day</li>`;

    } else {nameWrapperEl.innerHTML = `<li>On that date ${response.data[0].namedays.se} has a name day</li>`}}


//DOING SOMETHING DEPENDING ON THE DATA

const getDetails = (response)=> {

    if (response.results) { 
        
        if (response.results < 1) {
        alert("The name you search has no match")}

        else {response.results.forEach(result => {
        
            if(result.name == nameEl.value)
                {getDates(result)}})}}

    else {getNames(response);}}


