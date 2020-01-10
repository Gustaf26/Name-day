
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
        
        
        dateWrapperEl.innerHTML = `<li>The name day of ${result.name} is the ${result.day} of ${result.month}</li>
        <li><a class="newsearch" href="#">Find other people with the same name day</a></li>`; 
        
        document.querySelector(".newsearch").addEventListener('click', e =>{
            target = e.target;
            getUrl(0, result.month, result.day)
        })
        
};

function getNames(response) {

    if (target == document.querySelector(".newsearch")) {
        
        dateWrapperEl.append(`${response.data[0].namedays.se} has or have the same name day`);

    } else {nameWrapperEl.innerHTML = `<li>On that date ${response.data[0].namedays.se} has a name day</li>`}}


//DOING SOMETHING DEPENDING ON THE DATA

const getDetails = (response)=> {

    if (response.results) {
  
        response.results.forEach(result => {
        
        if(result.name == nameEl.value && target == nameButtonEl)
            {getDates(result)}})}        

    else {getNames(response);}

    };


