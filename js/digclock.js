
            // create a time data function
            function currentTime() {
                // Declare Variables
                var d = new Date(); //get the current date
                var hr = d.getHours(); //get current hours
                var min = d.getMinutes(); //GET current minutes
                var sec = d.getSeconds(); //get current seconds
                var ampm; //declare empty variable to store AM or PM
                var utchr = d.getUTCHours(); //get the GMT
                var timeDiff; 
                var adjTimeDiff; 
                var timeZone;

                // add 0 to single digits for seconds
                if (sec < 10) {
                    sec = "0" + sec;
                }
                // add 0 to single digits for minutes
                if (min < 10) {
                    min = "0" + min;
                }
                //Determin AM or PM string
                if (hr == 12) {
                    ampm = "PM";
                } else if ( hr > 12) {
                    hr -= 12;
                    ampm = "PM";
                } else {
                    ampm = "AM";
                }

                if (utchr > 12) {
                    utchr -= 12;
                } 

                timeDiff = utchr + hr;
                adjTimeDiff = Math.abs(timeDiff);

                if(adjTimeDiff ==4) {
                    timeZone = 'ET';
                } else if (adjTimeDiff ==5) {
                    timeZone = 'CT';
                } else if (adjTimeDiff ==6) {
                    timeZone = 'MT';
                } else if (adjTimeDiff ==7) {
                    timeZone = 'PT';
                } else {
                    timeZone = '';
                }

                // Assemble time format to display
                var time = hr + ":"+ min +":" + sec + " "+ ampm + " " +timeZone;
                document.getElementById("clock").innerText = time;
                setInterval(currentTime,1000);
            }
            
            currentTime();

          
