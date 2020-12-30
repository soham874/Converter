let temp_click = 0
let length_click = 0
let volume_click = 0

$(document).ready(function() {
    $(".temperature_rectangle").on(
        'mouseleave mouseenter click',
        function(event) {
            if (temp_click == 0 && event.type != "click") {
                $(".temperature_rectangle").toggleClass("temperature_rectangle_active")
                $(".temperature").toggleClass("temperature_active")
                $(".temperature_image").toggleClass("temperature_image_active")
            }

            if (event.type == "click")
                temp_click = 1;
        }
    );
});