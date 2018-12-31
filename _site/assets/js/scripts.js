//maps google function
function myMap() {
    var mapProp = {
        center: new google.maps.LatLng(47.155898, 27.589774),
        zoom: 20,
    };
    var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);

}
//modal for #works
$(document).ready(function () {
    $('.open-img-modal').on('click', function () {
        var image = $(this).closest('figure').find('img').attr('src');
        var titleImg = $(this).closest('figcaption').find('h6').text();
        var nameWork = $(this).closest('figcaption').find("p:eq(0)").text();
        var aboutWork = $(this).closest('figcaption').find("p:eq(1)").text();
        $('#ModalImage').on('show.bs.modal', function () {
            $(".showimage").attr("src", image);
            $(".title-image").text(titleImg);
            $(".name-work").text(nameWork);
            $(".about-work").text(aboutWork);


        });
    });
});
//count animation
var a = 0;
$(window).scroll(function () {
    var oTop = $('#Skill').offset().top - window.innerHeight;
    if (a == 0 && $(window).scrollTop() > oTop) {
        $('.counter-value').each(function () {
            var $this = $(this),
                countTo = $this.attr('data-count');
            $({
                countNum: $this.text()
            }).animate({
                    countNum: countTo
                },
                {
                    duration: 4500,
                    easing: 'swing',
                    step: function () {
                        $this.text(Math.floor(this.countNum));
                    },
                    complete: function () {
                        $this.text(this.countNum);
                        //alert('finished');
                    }
                });
        });
        a = 1;
    }
});
//year function
function myYear() {
    var d = new Date();
    var n = d.getFullYear();
    document.getElementById("Year").innerHTML = n;
}
myYear();
//scroll and go to top
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("GoTop").style.display = "block";
    } else {
        document.getElementById("GoTop").style.display = "none";
    }
}
// When the user clicks on the button, scroll to the top of the document
function ontop() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
//hide and show nav footer to pull up menu
$(window).scroll(function() {
    if($(window).scrollTop() + $(window).height() === $(document).height()) {
        $("#NavFooter nav").fadeIn(100, function() {
            $(this).removeClass("d-none");
        });

    }
    else {
        $("#NavFooter nav").fadeOut( function() {
            $(this).addClass("d-none");
        });

    }
});
//collapse menu on click
$('.navbar-nav>li>a').on('click', function(){
    $('.navbar-collapse').collapse('hide');
});
