$(document).ready(function() {

    $('.img__links').waypoint(function(direction) {
        if (direction == "down" ) {
            $('.logo_name').text('Aric Hylton');
        } else {
            $('.logo_name').text('AH');
        }
    }, {
        offset: '0%'
    });

    $('.tooltip').tooltipster({
        animation: 'fade',
        delay: 0,
        theme: 'tooltipster-punk'

    });

});

