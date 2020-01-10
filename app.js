

nameButtonEl = document.querySelector(".namebutton");

dateButtonEl = document.querySelector(".datebutton");

nameEl = document.querySelector(".name");

dateEl = document.querySelector(".date");

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
     if (month[0]==0) {month = month[1]; return month;};
     day = date.slice(8,10);

     target = e.target;

   getUrl(0, month, day);

});

const getDetails = (response)=> {
  
    if (target == nameButtonEl) {

        response.results.forEach(element => {
            console.log(`the dates are `+ element.day + '  ' + element.month);
        });

    } 

    else {console.log(`the names are `+ response.data[0].namedays.se);}

}


