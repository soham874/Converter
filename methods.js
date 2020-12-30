$(document).ready(function() {
    $(".temperature_rectangle").on({

        mouseenter: function() {
            $(".temperature_rectangle").toggleClass("temperature_rectangle_active")
            $(".temperature").toggleClass("temperature_active")
            $(".temperature_image").toggleClass("temperature_image_active")
        },

        mouseleave: function() {
            $(".temperature_rectangle").toggleClass("temperature_rectangle_active")
            $(".temperature").toggleClass("temperature_active")
            $(".temperature_image").toggleClass("temperature_image_active")
        },

    });
});