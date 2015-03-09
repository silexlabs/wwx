$(function() {
	sh_highlightDocument();

	$('img[data-src]').each(function() {
		$(this).attr('src', "images/blank.gif");
	});

	$('#presentation').jmpress({});

	function enter() {
		var self = this;
		$(self).find('> .split img[data-src], > .split-big img[data-src], > figure img[data-src]').each(function(_, image) {
			$(image).attr("src", $(image).attr("data-src"));
		});
		setTimeout(function() {
			$(self).find('> .split iframe[data-src], > .split-big img[data-src], > figure iframe[data-src]').each(function(_, iframe) {
				$(iframe).attr("src", $(iframe).attr("data-src"));
			});
		}, 2000);
	}

	$('.step')
		.on('enterStep', enter)
		.on('leaveStep', function() {
			var self = this;
			setTimeout(function() {
				if(self === $('.active')[0])
					return;
				$(self).find('> figure [data-src], > .split-big [data-src], > .split [data-src]').each(function(_, iframe) {
					$(iframe).attr("src", "images/blank.gif");
				});
			}, 6000);
		});

	// random logo effect
	var $bg = $('body > div.bg'),
		mindelay = 1000,
		maxdelay = 8000,
		delay = maxdelay;
	function animate() {
		$bg.toggleClass('blur');
		setTimeout(animate, delay * Math.random());
		if(Math.random() < .2)
			delay = delay === maxdelay ? mindelay : maxdelay;
	}

	$('.step.active').each(enter);

	animate();
});