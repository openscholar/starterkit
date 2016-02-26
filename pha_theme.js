jQuery(document).ready(function($) {
	var num = 184;
	//number of pixels before modifying styles

	jQuery(window).bind('scroll', function() {
		if (jQuery(window).scrollTop() > num) {
			jQuery('#menu-bar').addClass('fixed');
		} else {
			jQuery('#menu-bar').removeClass('fixed');
		}
	});

	jQuery('.front .block-boxes-os_sv_list_box').each(function() {
		var $this = $(this);
		var count = jQuery('.node', $this).length;

		jQuery($this).addClass('lopz-' + count);
	});

});
