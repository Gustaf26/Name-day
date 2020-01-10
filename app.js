

nameButtonEl = document.querySelector(".namebutton");

dateButtonEl = document.querySelector(".datebutton");

nameEl = document.querySelector(".name");

dateEl = document.querySelector(".date");

nameButtonEl.addEventListener('click', e => {

    e.preventDefault();

    name = nameEl.value;

    apiname.getInfo(`https://api.abalin.net/getdate?name=${name}&country=se`);


});

dateButtonEl.addEventListener('click', e => {

    e.preventDefault();

    date =dateEl.value;
     month = date.slice(5,7);
     if (month[0]==0) {month = month[1]; return month;};
     day = date.slice(8,10);

    apidate.getInfo(`https://api.abalin.net/namedays?country=se&month=${month}&day=${day}`);

});


