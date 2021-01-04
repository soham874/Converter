let temp_click = 0
let length_click = 0
let volume_click = 0

let length_units = ["Kilometer", "Meter", "Centimeters", "Millimetre", "Micrometer", "Mile", "Foot", "Inch"]
let length_conv = [1, 1000, 100000, 1000000, 100000000, 0.621371, 3280.838879986877, 39370.1]

let temp_units = ["Farenheit", "Kelvin", "Celcius"]
let temp_conv = [1, 1, 1]

let vol_units = ["Litres", "Mililiters", "Gallons"]
let vol_conv = [1, 1000, 0.264172]

let currentArrayNames
let currentArrayUnits


//driver for hover and select conversion type
$(document).ready(function() {

    changeType("volume", "temperature", length_units, length_conv)
    length_click = 1
    togglestate("length")

    $(".temperature_rectangle").on(
        'mouseleave mouseenter click',
        function(event) {

            if (temp_click == 0 && event.type != "click")
                togglestate("temperature")

            if (event.type == "click") {
                changeType("volume", "length", temp_units, temp_conv)
                temp_click = 1
            }

        }
    )

    $(".length_rectangle").on(
        'mouseleave mouseenter click',
        function(event) {
            if (length_click == 0 && event.type != "click")
                togglestate("length")

            if (event.type == "click") {
                changeType("volume", "temperature", length_units, length_conv)
                length_click = 1
            }
        }
    )

    $(".volume_rectangle").on(
        'mouseleave mouseenter click',
        function(event) {
            if (volume_click == 0 && event.type != "click")
                togglestate("volume")

            if (event.type == "click") {
                changeType("length", "temperature", vol_units, vol_conv)
                volume_click = 1
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

//dynamically updates 'inputArray' drop down menu options to menu with id 'ID'
updateOptions = (inptuArray, ID) => {
    document.getElementById(ID).innerHTML = "";
    var x = document.getElementById(ID);
    for (let i = 0; i < inptuArray.length; i++) {
        var option = document.createElement("option");
        option.text = inptuArray[i];
        x.add(option);
    }
}

//dynamic converter
convertValue = input => {

    var input = document.getElementById("inputValue").value;
    var e = document.getElementById("units1");
    var convertFromIndex = currentArrayNames.findIndex(val => val === e.value);
    var e = document.getElementById("units2");
    var convertToIndex = currentArrayNames.findIndex(val => val === e.value);

    let res = input * currentArrayUnits[convertToIndex] / currentArrayUnits[convertFromIndex]

    if (currentArrayNames == temp_units && convertToIndex != convertFromIndex)
        res = convertTemprature(input, convertFromIndex, convertToIndex)

    document.getElementById("outputValue").value = res;
}

//function for temperature convertion
convertTemprature = (input, convertFromIndex, convertToIndex) => {
    let output
    switch (convertFromIndex) {
        case 0: //from farenheit
            if (convertToIndex == 1) //to kelvin
                output = (input - 32) * 5 / 9 + 273.15
            if (convertToIndex == 2) //to celcius
                output = (input - 32) * 5 / 9
            break;
        case 1: //from kelvin
            if (convertToIndex == 0) //to farenheit
                output = (input - 273.15) * 9 / 5 + 32
            if (convertToIndex == 2) //to celcius
                output = input - 273.15
            break;
        case 2: //from celcius
            if (convertToIndex == 0) //to farenheit
                output = 5 * input / 9 + 32
            if (convertToIndex == 1) //to kelvin
                output = (input * 1) + (273.15 * 1)
            break;
    }
    return output
}

//update page accordingly when conversion type is selecetd
changeType = (close1, close2, currentArrayU, currentArrayN) => {
    temp_click = 0
    volume_click = 0
    length_click = 0
    removestate(close1)
    removestate(close2)
    updateOptions(currentArrayU, "units1")
    updateOptions(currentArrayU, "units2")
    currentArrayNames = currentArrayU
    currentArrayUnits = currentArrayN
    document.getElementById("inputValue").value = ""
    document.getElementById("outputValue").value = ""
}