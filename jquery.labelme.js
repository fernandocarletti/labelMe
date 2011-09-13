(function($) {
	$.fn.labelMe = function(settings) {
		
		var s = $.extend({
			'labelAttr': 'rel',
			'blurClass': 'label_blur',
			'labelClass': 'label',
			'addLineBreak': false,
			'labelBefore': false,
			'cleanOnFormSubmit': true,
		}, settings);

		return $(this).each(function() {
			var e = $(this);

			if(s.cleanOnFormSubmit) {
				var form = $(this).parents("form:first");
				if(form) {
					form.submit(function() {
						if(e.val() == e.attr('rel')) {
							e.val('');
						}
					});
				}
			}

			e.focus(function() { 
				if(e.prop('tagName') in { 'INPUT':1, 'TEXTAREA':1 }) {
					if(e.attr('type') != undefined && e.attr('type') == 'hidden') {
						return;
					}

					if(e.prop('tagName') == 'TEXTAREA' || e.attr('type').toLowerCase() == 'text') {
						if(e.val() == e.attr(s.labelAttr)) {
							e.val('').removeClass(s.blurClass);
						}
					}
				}
				else if(e.prop('tagName') == 'SELECT') {
					if(e.val() == e.attr(s.labelAttr)) {
						$('option:first', e).remove();
						e.removeClass(s.blurClass);
					}
				}
			});

			e.blur(function() {
				if(e.prop('tagName') in { 'INPUT':1, 'TEXTAREA':1 }) {
					if(e.attr('type') != undefined && e.attr('type') == 'hidden') {
						return;
					}

					if(e.prop('tagName') == 'TEXTAREA' || e.attr('type').toLowerCase() == 'text') {
						if(e.val() == '') {
							e.val(e.attr(s.labelAttr)).addClass(s.blurClass);
						}
					}
					else if(e.attr('type').toLowerCase() in { 'radio':1, 'checkbox':1 }) {
						var label = '<label for="' + e.attr('id') + '" class="' + s.labelClass + '">' + e.attr(s.labelAttr) + '</label>';

						if(s.addLineBreak) {
							if(s.labelBefore) {
								e.after('<br />');
							} else {
								label = label + '<br />';
							}
						}

						if(s.labelBefore) {
							if(e.before().prop('tagName') != 'LABEL') {
								e.before(label);
							}
						} else {
							if(e.after().prop('tagName') != 'LABEL') {
								e.after(label);
							}
						}
					}
				}
				else if(e.prop('tagName') == 'SELECT') {
					if(e.val() == '') {
						var option = new Option(e.attr(s.labelAttr));
						e.prepend(option);
						$('option:first', e).attr('selected', 'selected');
						e.addClass(s.blurClass);
					}
				}
			});
			
			e.blur();

			if(s.addLineBreak) {
				if(!(e.attr('type') in { 'radio':1, 'checkbox':1 })) {
					e.after('<br />');
				}
			}
		});
	};
})(jQuery);