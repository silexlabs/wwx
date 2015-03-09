$(document).ready(function(){
    // links on top
    newAnchorLink('community', 1050);
    newAnchorLink('organizers', 3790);

    // nav
    newAnchorLink('about', 390);
    newAnchorLink('register', 1350);
    newAnchorLink('location', 2020);
    newAnchorLink('schedule', 2935);
    newAnchorLink('speakers', 3170);
/*
    $( window ).scroll(function(e) {
      console.log('scroll', $(document).scrollTop());
    });
*/
});
function newAnchorLink(link, pos){
    $('a[href="http://#'+link+'"]').click(function(){
        $('html, body').animate({
            scrollTop: pos
        }, 500);
        return false;
    });
}

///////////////////////////////////////////////////////////////
// Google analytics
var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-19608894-15']);
_gaq.push(['_trackPageview']);

(function() {
var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
})();
var switchTo5x=true;