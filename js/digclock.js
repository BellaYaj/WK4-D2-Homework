/*JavaScript Codes*/
    <script>
        //Time data function
        function currentTime() {
            var d = new Date();
            var hr = d.getHours();
            var min = d.getMinutes();
            var sec = d.getSeconds();
            var ampm;
            var utchr = d.getUTCHours();
            var timeDiff;
            timeDiff = utchr - hr; // difference between UTC and Current Time
            var adjTimeDiff;
            // 5,6,7,8
            var timeZone;
            if (sec < 10) {
                sec = "0" + sec;
            }
            if (min < 10) {
                min = "0" + min;
            }
            if (hr == 12) {
                ampm = "PM";
            } else if (hr > 12) {
                hr -= 12;
                ampm = "PM";
            } else {
                ampm = "AM";
            }
            if (timeDiff == 5) {
                timeZone = "EST";
            } else if (timeDiff == 6) {
                timeZone = "CST";
            } else if (timeDiff == 7) {
                timeZone = "MT";
            } else {
                timeZone = "PST";
            }
            var time = hr + ":" + min + ":" + sec + " " + ampm + " " + timeZone;
            document.getElementById("clock").innerText = time;
            setInterval(currentTime, 1000);
        }
        currentTime();
        //Partner Pictures
        var photos = [];
        var fileNames = [];
        var imageList = [];
        var image;
        var openList = "<li id='partner'>";
        var closeList = "</li>";
        //Loop for partner photos
        for (var i = 0; i < 6; i++) {
            fileNames.push("partner" + (i + 1));
            photos.push("<img src+'images/partners/" + fileNames[i] + ".png'>");
            image = openList + partner[i] + closeList;
            imageList.push(image);
        }
        //Displaying partner photos
        document.getElementbyID("partners").innerHTML = imageList;
        // var link = document.createElement('link');
        // document.getElementsByTagName('section')[0].apendChild(link);
        // link.rel= 'stylesheet';
        // link.type = 'img/css';
        // link.href = 'styles.css';
    </script>