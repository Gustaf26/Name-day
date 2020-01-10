
//TARGET ELEMENTS

nameButtonEl = document.querySelector(".namebutton");

dateButtonEl = document.querySelector(".datebutton");

nameEl = document.querySelector(".name");

dateEl = document.querySelector(".date");

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

function getDates(response_dates) {

    response_dates.forEach(element => {
        console.log(`the dates are the `+ element.day + 'th of ' + element.month);
})};

//function getNames()


const getDetails = (response)=> {
  
    if (target == nameButtonEl) {

        getDates(response.results);

        }

    else {console.log(`the names are `+ response.data[0].namedays.se);}

}


