var haxConsole = {
    flicker: function() {
        $("#hacker-interface-blur").animate({opacity: 0.3}, 50, function() {
            $(this).animate({opacity:0.2}, 50, function() {
                console.log("done");
            });
        });
    },
}

var count = 0;
var message = "Welcome Stranger... ******* %%";
message += "You have been granted permission to use the single most powerful hacker tool in the history %";
message += "of hacker tools: ***** tracert (pronounced 'tracer-tee'). ***** With great power, comes great responsibility.%%*****";
message += "When you are ready to invoke the powers of tracert, invoke the command in the prompt below.%%";
message += "haxor@hack-server:/ $  ";

function killInterval() {
    clearInterval(interval);
}

function appendLinebreak() {
    $("#content").append("<br>");
}

function typeLetter(msg, pos) {
    var letter = msg.charAt(pos);
    if (letter == "%") { 
        appendLinebreak(); 
    } else if (letter == "*") {
        // do nothing
    } else {
        $("#content").append(letter);
    }
    count++;
    if (count == msg.length) { killInterval(); }
}

var interval = setInterval(function() { typeLetter(message, count) }, 60);
