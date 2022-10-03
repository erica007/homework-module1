$(document).ready(function() {
    $('table tbody tr td').not('td:first-child').hover(function() {
        DisplayText = $(this).text();
        if(DisplayText !== 'Not Available') {
            $(this).css({cursor: 'pointer'})
        }
    }).click(function() {
        var DisplayText;
        DisplayText = $(this).text();
        if(DisplayText !== 'Not Available') {
            $(this).toggleClass("activitiesTableSelected");
        } else { 
            $(this).toggleClass("activitiesTablenotSelected");
            
        };
    });
});