$(document).ready(function() {
    $('td').not('td:first-child').hover(function() {
        var DisplayText;
        DisplayText = $(this).text();
        if(DisplayText !== 'Not Available') {
            $(this).css({cursor: 'pointer'})
        }
    });

    $("td").click(function() {
        var DisplayText;
        var thIndex = $(this).index();
        var thText = $("table").find("th").eq(thIndex).text()
        DisplayText = $(this).text();
      
        if(DisplayText != 'Not Available') {
            $(this).toggleClass("selected");

            if ($(this).hasClass("selected")) {
                $("#displaySelected").css("visibility", "visible");
                $("#displaySelected").css("margin-top", "2em");
                $("#result").append("<p>" + DisplayText + " at " + thText + "</p>");             
            } else {
                $("#result p:contains(" + DisplayText + ")").remove();

                if ($("#result").has("p").length == false) {
                    $("#displaySelected").css("visibility", "hidden");
                    $("#displaySelected").css("margin-top", "0");
                }
            }
        }
    });

});

//Hide displaySelected when load
function hidedisplaySelected() {
    document.getElementById("displaySelected").style.visibility = "hidden";
};

hidedisplaySelected();