

nameButtonEl = document.querySelector(".namebutton");

dateButtonEl = document.querySelector(".datebutton");

nameEl = document.querySelector(".name");

dateEl = document.querySelector(".date");

nameButtonEl.addEventListener('click', e => {

    e.preventDefault();

    name = nameEl.value;

    getUrl(name, 0, 0);


});

dateButtonEl.addEventListener('click', e => {

    e.preventDefault();

    date =dateEl.value;
     month = date.slice(5,7);
     if (month[0]==0) {month = month[1]; return month;};
     day = date.slice(8,10);

   getUrl(0, month, day);

});


