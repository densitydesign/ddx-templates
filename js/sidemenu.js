$('#sidebar').affix({
      offset: {
        top: $('#viz').height() + 300
      }
});

var $body   = $(document.body);
var navHeight = $('.navbar').outerHeight(true) + 10;

$body.scrollspy({
	target: '#leftCol',
	offset: navHeight
});