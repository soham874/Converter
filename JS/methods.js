let temp_click = 0
let length_click = 0
let volume_click = 0

let length_units = ["Kilometer", "Meter", "Centimeters", "Millimetre", "Micrometer", "Mile", "Foot", "Inch"]
let length_conv = [1, 1000, 100000, 1000000, 100000000, 0.621371, 3280.838879986877, 39370.1]

let temp_units = ["Farenheit", "Kelvin", "Celcius"]

let vol_units = ["Litres", "Mililiters", "Gallons"]


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
                myFunction(temp_units)
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
                myFunction(length_units)
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
                myFunction(vol_units)
            }

        }
    )

    $("#convert_from").on(
        'click',
        function() {
            $("#convert_from").toggleClass("rotation")
        }
    )

    $("#convert_to").on(
        'click',
        function() {
            $("#convert_to").toggleClass("rotation")
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

function myFunction(inptuArray) {
    document.getElementById("units1").innerHTML = "";
    document.getElementById("units2").innerHTML = "";
    var x = document.getElementById("units1");
    for (let i = 0; i < inptuArray.length; i++) {
        var option = document.createElement("option");
        option.text = inptuArray[i];
        x.add(option);
    }
    var x = document.getElementById("units2");
    for (let i = 0; i < inptuArray.length; i++) {
        var option = document.createElement("option");
        option.text = inptuArray[i];
        x.add(option);
    }
}