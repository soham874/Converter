let temp_click = 0
let length_click = 0
let volume_click = 0

$(document).ready(function() {

    $(".temperature_rectangle").on(
        'mouseleave mouseenter click',
        function(event) {

            if (temp_click == 0 && event.type != "click")
                togglestate("temperature")

            if (event.type == "click") {
                temp_click = 1
                removestate("volume")
                volume_click = 0
                removestate("length")
                length_click = 0
            }

        }
    )

    $(".length_rectangle").on(
        'mouseleave mouseenter click',
        function(event) {
            if (length_click == 0 && event.type != "click")
                togglestate("length")

            if (event.type == "click") {
                length_click = 1
                removestate("volume")
                volume_click = 0
                removestate("temperature")
                temp_click = 0
            }

        }
    )

    $(".volume_rectangle").on(
        'mouseleave mouseenter click',
        function(event) {
            if (volume_click == 0 && event.type != "click")
                togglestate("volume")

            if (event.type == "click") {
                volume_click = 1
                removestate("length")
                length_click = 0
                removestate("temperature")
                temp_click = 0
            }

        }
    )
});

//toggles state of buttons
togglestate = (parameter) => {
    let dead1 = "." + parameter + "_rectangle"
    let dead2 = "." + parameter
    let dead3 = "." + parameter + "_image"
    let active1 = parameter + "_rectangle_active"
    let active2 = parameter + "_active"
    let active3 = parameter + "_image_active"
    $(dead1).toggleClass(active1)
    $(dead2).toggleClass(active2)
    $(dead3).toggleClass(active3)
}

//resets state of buttons
removestate = (parameter) => {
    let dead1 = "." + parameter + "_rectangle"
    let dead2 = "." + parameter
    let dead3 = "." + parameter + "_image"
    let active1 = parameter + "_rectangle_active"
    let active2 = parameter + "_active"
    let active3 = parameter + "_image_active"
    $(dead1).removeClass(active1)
    $(dead2).removeClass(active2)
    $(dead3).removeClass(active3)
}