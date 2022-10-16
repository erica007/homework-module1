// Create a time data function
function currentTime() {
    // Declare variables
    var d = new Date(); //Get current date
    var hr = d.getHours(); //Get current hours
    var min = d.getMinutes(); //Get current minutes
    var sec = d.getSeconds(); //Get current seconds
    var ampm; //Declare empty variable to store AM or PM

    //Add 0 to single digits for seconds
    if(sec < 10) {
        sec = "0" + sec;
    };
    //Add 0 to single digits for minutes
    if(min < 10) {
        min = "0" + min;
    };

    //Determine AM ot PM string
    if(hr == 12) {
        ampm = "PM"; //Set to PM
    } else if(hr > 12) {
        hr -= 12; //Deduct 12 from hours greater than 12 (military time)
        ampm = "PM"; //Set to PM
    } else {
        ampm = "AM"; //Set to AM
    };

    var utchr = d.getUTCHours(); //Get current Greenwich Mean Time(GMT)
    var timeDiff = utchr - hr; //To store time difference between GMT hour and Local hour
    var adjTimeDiff; //To store time difference converted to positive number
    if (timeDiff < 0) {
        adjTimeDiff = timeDiff + 12;
    } else if (timeDiff > 11) {
        adjTimeDiff = timeDiff - 12;
    } else {
        adjTimeDiff = timeDiff;
    };
    var timeZone; //To store the 4 time zones
    // if (adjTimeDiff == 4) {
    //     timeZone = "ET";
    // } else if (adjTimeDiff == 5) {
    //     timeZone = "CT";
    // } else if (adjTimeDiff == 6) {
    //     timeZone = "MT";
    // } else if (adjTimeDiff == 7) {
    //     timeZone = "PT";
    // }

    // Switch case takes longer time.
    switch(adjTimeDiff) {
        case '4':
            timeZone = "ET";
            break;
        case 5:
            timeZone = "CT";
            break;
        case 6:
            timeZone = "MT";
            break;
        case 7:
            timeZone = "PT";
            break;
    }

    //Assemble time format to display
    var time = hr +  ":"  + min + ":" +  sec + " " +  ampm+ " " + timeZone;

    //Display current local time and time zone on HTML elements
    document.getElementById("clock").innerText = time; //adding time

    //Run time data function every 1 second
    setInterval(currentTime, 1000); //setting timer
}

// Initial run of time data function
currentTime();