let temp_click = 0
let length_click = 0
let volume_click = 0

let length_units = ["Kilometer", "Meter", "Centimeters", "Millimetre", "Micrometer", "Mile", "Foot", "Inch"]
let length_conv = [1, 1000, 100000, 1000000, 100000000, 0.621371, 3280.838879986877, 39370.1]

let temp_units = ["Farenheit", "Kelvin", "Celcius"]
let temp_conv = [1, 1, 1]

let vol_units = ["Litres", "Mililiters", "Gallons"]
let vol_conv = [1, 1000, 0.264172]

var currentArrayNames
var currentArrayUnits


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
                currentArrayNames = temp_units
                currentArrayUnits = temp_conv
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
                currentArrayNames = length_units
                currentArrayUnits = length_conv
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
                currentArrayNames = vol_units
                currentArrayUnits = vol_conv
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
        option.id = i;
        x.add(option);
    }
    var x = document.getElementById("units2");
    for (let i = 0; i < inptuArray.length; i++) {
        var option = document.createElement("option");
        option.text = inptuArray[i];
        option.id = i;
        x.add(option);
    }
}

convertValue = input => {

    var input = document.getElementById("inputValue").value;
    var e = document.getElementById("units1");
    var convertFromIndex = currentArrayNames.findIndex(val => val === e.value);
    var e = document.getElementById("units2");
    var convertToIndex = currentArrayNames.findIndex(val => val === e.value);

    let res = input * currentArrayUnits[convertToIndex] / currentArrayUnits[convertFromIndex]

    if (currentArrayNames == temp_units)
        res = convertTemprature(input, convertFromIndex, convertToIndex)

    document.getElementById("outputValue").value = res;
}

convertTemprature = (input, convertFromIndex, convertToIndex) => {
    let output
    switch (convertFromIndex | convertToIndex) {
        case 0 | 1:
            output = (input - 32) * 5 / 9 + 273.15
            break;
        case 0 | 2:
            output = (input - 32) * 5 / 9
            break;
        case 1 | 0:
            output = (input - 273.15) * 9 / 5 + 32
            break;
        case 1 | 2:
            output = input - 273.15
            break;
        case 2 | 0:
            output = 5 * input / 9 + 32
            break;
        case 2 | 1:
            output = input + 273.15
            break;
    }
    return output
}