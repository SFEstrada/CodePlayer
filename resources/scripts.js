/*
Load scripts after the document is ready
 */
$(function () {
    let firstLoad = true;
    if (firstLoad){
        updateDisplay();
        firstLoad = false;
    }


    /*
    Handle menu button status
     */
    $(".menu-btn").on({
        mouseover: function () {
            $(this).removeClass("no-hover");
        },
        mouseleave: function () {
            $(this).removeClass("no-hover")
        },
        click: function () {
            $(this).toggleClass("active");
            $(this).addClass("no-hover");
        }
    });

    /*
    Coding area
     */
    // Coding area height
    function updateDisplay() {
        $("iframe").contents().find("html").html("<html><head><style type='text/css'>" + $("#area-css").val() + "</style></head><body>" + $("#area-html").val() + "</body></html>");

        document.getElementById("area-output").contentWindow.eval($("#area-javascript").val());
        //document.getElementById("area-output").contentWindow().eval($("#area-javascript").val());

    }

    const headerPx = 70;

    let areaHeight = $(window).height() - headerPx;
    $(".section-container").height(areaHeight);

    // Binding textarea changes to the iframe
    let oldValue = "";
    $(".area-code").on('change keyup paste', function () {
        // Check if values has changed
        let currentValue = $(this).val();
        if(currentValue == oldValue){
            return;
        }

        oldValue = currentValue;
        // Updating iframe display
        updateDisplay();

    });

    // Hide or show each area
    $("#html-btn").on("click", function () {
       $("#area-html").toggleClass("area-hide");
    });

    $("#css-btn").on("click", function () {
        $("#area-css").toggleClass("area-hide");
    });

    $("#js-btn").on("click", function () {
        $("#area-javascript").toggleClass("area-hide");
    });

    $("#output-btn").on("click", function () {
        $("#area-output").toggleClass("area-hide");
    });

});