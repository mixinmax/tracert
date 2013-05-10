var typeCount = 0;
var tracertEngage = 0;
var typePeriod = 30;

if (window.location.hash == '#auto') {
    typePeriod = 15;
}

var message = "Welcome Stranger... ******* %%";
message += "You have been granted permission to use the single most powerful hacker tool in the history %";
message += "of hacker tools: ***** tracert (pronounced 'tracer-tee'). ***** With great power, comes great responsibility.%%*****";
message += "When you are ready to invoke the powers of tracert, type it in the prompt below.%%";
message += "haxor@hack-server:/ $  ";

var tracert = "%%";
tracert += "Tracing route to fbi.gov [72.21.81.85]... ** %%";
tracert += "1   ********1   ********1   ********1       ********70.84.211.97    61.d3.5446.static.theplanet.com **%";
tracert += "2   ****0   ****0   ****0       ****70.87.254.1 po101.dsr01.dllstx5.networklayer.com **%";
tracert += "3   ********1   ****0   ****0       ****70.85.127.105   po51.dsr01.dllstx3.networklayer.com **%";
tracert += "4   ****0   ****0   ****0       ****173.192.18.224  ae16.bbr01.eq01.dal03.networklayer.com **%";       
tracert += "6   **0   **0   **0       *****72.21.81.85 **%%";
tracert += "Hacking complete. You've successfully infiltrated the FBI servers. You hacker, you.";

function reddify() {
    $("#hacker-interface-blur").animate({opacity: 0.2}, 50, function() {
        $(".haxxx").fadeIn(200);
        $(this).animate({opacity:0}, 50, function() { 
            $(".haxxx").fadeOut(200);
        });
    });
}

function killInterval() {
    clearInterval(typeInterval);
    if (window.location.hash == '#auto') {
        // Auto tracert
        $("#content").append("<span id='command'>tracert</span>");
        reddify();
        var omgHax = setInterval(function() { reddify(); }, 500);
        typeCount = 0; 
        tracertEngage = 1;
        var doTheT = setInterval(function() { typeLetter(tracert, typeCount); }, 30);
    } else {
        $("#content").append("<span id='command'></span>");
        $('body').bind('keydown', function(e) {
            e.preventDefault();
            var key = e.keyCode;
            if (key == 13) { 
                if ($("#command").text() == 'tracert') {
                    // Makes the credits visible
                    $("#credits").css({"display":"inline"});
                    reddify();
                    var omgHax = setInterval(function() { reddify(); }, 500);
                    typeCount = 0; 
                    tracertEngage = 1;
                    var doTheT = setInterval(function() { typeLetter(tracert, typeCount); }, 30);
                } else {
                    console.log("aint no posts foo");
                }
            } else if (key == 8) { 
                var contents = $("#command").text();
                $("#command").text(contents.substring(0,(contents.length - 1)));
            } else {
                $("#command").append(String.fromCharCode(key).toLowerCase());
            }
        });
    }    
}

function typeLetter(msg, pos) {
    var letter = msg.charAt(pos);
    if (letter == "%") { 
        $("#content").append("<br>");
    } else if (letter == "*") {
        // do nothing
    } else {
        $("#content").append(letter);
    }
    typeCount++;
    if (typeCount == msg.length) { 
        if (tracertEngage == 1) {
            clearInterval(doTheT);
            return;
        }
        killInterval(); 
    }
}

var typeInterval = setInterval(function() { typeLetter(message, typeCount) }, typePeriod);
