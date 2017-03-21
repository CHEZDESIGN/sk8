/*(function() {
            
            var documentEl = $(document),
                parallaxBg = $('header');
            
            documentEl.on('scroll', function() {
                var currScrollPos = documentEl.scrollTop();
                parallaxBg.css('background-position', '0 ' + -currScrollPos/4 + 'px');
            });
            
            
            
        })();*/

function openNav() {
    document.getElementById("myNav").style.height = "100%";
}

function closeNav() {
    document.getElementById("myNav").style.height = "0%";
}

function openNav1() {
    document.getElementById("myNav2").style.height = "100%";
}

function closeNav1() {
    document.getElementById("myNav2").style.height = "0%";
}

$(document).ready(function() {
    $(window).scroll(function() {
        if ($(this).scrollTop() > 2) {
            $('nav').addClass('sticky');
        }
        else {
            $('nav').removeClass('sticky');
        }
    });
});
