/*!
 * jQuery Credit Card Type Detector plugin
 * version 0.9
 * by Christian Reed - http://christianreed.org
 * with support from Nick James - http://nickjames.info
 * for Athletepath - http://athletepath.com
 * https://github.com/christianreed/Credit-Card-Type-Detector
 * Copyright (c) 2012 Christian Reed
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 *
 * Basic Use:
 * $('#credit_card_input_field').creditCardTypeDetector({ 'credit_card_logos_id' : '#card_logos_ele' });
 *
 * Default requires no arguments, but looks for the logos to have the class
 * .card_logos
 *
 * See accompanying files for HTML structure, CSS, and png of card logos.
 */


(function( $ ) {
	$.fn.creditCardTypeDetector = function( options ) {
		var settings = $.extend( {
				'credit_card_logos_id': '.card_logos'
			}, options),
			
			// the object that contains the logos
			logos_obj = $(settings.credit_card_logos_id),
			
			// the regular expressions check for possible matches as you type, hence the OR operators based on the number of chars
			regexs = {
				'visa': new RegExp('^4[0-9]{0,15}$'),
				'mastercard': new RegExp('^5$|^5[1-5][0-9]{0,14}$'),
				'amex': new RegExp('^3$|^3[47][0-9]{0,13}$'),
				'diners': new RegExp('^3$|^3[068]$|^3(?:0[0-5]|[68][0-9])[0-9]{0,11}$'),
				'discover': new RegExp('^6$|^6[05]$|^601[1]?$|^65[0-9][0-9]?$|^6(?:011|5[0-9]{2})[0-9]{0,12}$'),
				'jcb': new RegExp('^2[1]?$|^21[3]?$|^1[8]?$|^18[0]?$|^(?:2131|1800)[0-9]{0,11}$|^3[5]?$|^35[0-9]{0,14}$')
			};

		return this.each(function(){
			// as the user types
			$(this).keyup(function(){
				var cur_val = $(this).val();

				// get rid of spaces and dashes before using the regular expression
				cur_val = cur_val.replace(/ |-/g,'');

				// check each regex, as there could be multiple hits
				$.each(regexs, function(name, regex) {
					var selector = settings.credit_card_logos_id + " li.card_" + name;
					if(cur_val.match(regex)) {
						$(selector).addClass('on');
						$(selector).removeClass('off');
					} else {
						$(selector).addClass('off');
						$(selector).removeClass('on');
					}
				});
			});
		});
	};
})( jQuery );