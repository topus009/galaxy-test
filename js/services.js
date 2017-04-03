$(document).ready(function() {

    $("#accordion").accordion({collapsible: true, active: false, heightStyle: "content"});
    $("#accordion").accordion("option", "icons", {
        'header': 'ui-icon-triangle-1-e',
        'headerSelected': 'ui-icon-triangle-1-s'
    });

    $("#accordion h3").on("click", function() {

        $("#accordion").find('h3').removeClass('uppercase').removeClass('lowercase');
        var x = $(this);
        var y = x.text();
        
        if ($(this).hasClass('ui-accordion-header-active')) {
            $(this).html('<span class="ui-accordion-header-icon ui-icon"></span>' + y);
            x.addClass('uppercase');
        } else {
            $(this).html('<span class="ui-accordion-header-icon ui-icon ui-icon-triangle-1-e"></span>' + y);
            $("#accordion h3").removeClass('uppercase').addClass('lowercase');
        }

    });

});
