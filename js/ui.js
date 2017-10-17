//UI
// png
jQuery.fn.supersleight = function(settings) {
	settings = jQuery.extend({
		imgs: true,
		backgrounds: true,
		shim: 'x.gif',
		apply_positioning: false
	}, settings);
	
	return this.each(function(){
		if (jQuery.browser.msie && parseInt(jQuery.browser.version, 10) < 7 && parseInt(jQuery.browser.version, 10) > 4) {
			jQuery(this).find('*').andSelf().each(function(i,obj) {
				var self = jQuery(obj);
				// background pngs
				if (settings.backgrounds && self.css('background-image').match(/\.png/i) !== null) {
					var bg = self.css('background-image');
					var src = bg.substring(5,bg.length-2);
					
					
					var mode = (self.css('background-repeat') == 'no-repeat' ? 'crop' : 'scale');
					var styles = {
						'filter': "progid:DXImageTransform.Microsoft.AlphaImageLoader(src='" + src + "', sizingMethod='" + mode + "')",
						'background-image': 'url('+settings.shim+')'
					};
					self.css(styles);
					
					
				};
				// image elements
				if (settings.imgs && self.is('img[src$=png]')){
					var styles = {
						'width': self.width() + 'px',
						'height': self.height() + 'px',
						'filter': "progid:DXImageTransform.Microsoft.AlphaImageLoader(src='" + self.attr('src') + "', sizingMethod='scale')"
					};
					self.css(styles).attr('src', settings.shim);
				};
				// apply position to 'active' elements
				if (settings.apply_positioning && self.is('a, input') && (self.css('position') === '' || self.css('position') == 'static')){
					self.css('position', 'relative');
				};
			});
		};
	});
};
// *Png


// a click
function unblur() {
this.blur();
}
function blurLinks() {
if (!document.getElementById) return;
theLinks = document.getElementsByTagName("a");
for(i=0; i<theLinks.length; i++) {
theLinks[i].onfocus = unblur;
}
}
// * a click


var browser;
var vs=jQuery.browser.version;
var ie=jQuery.browser.msie;
var ie6=ie ? (vs.slice(0,1)==6 ? true: false) :false;
var ie7=ie ? (vs.slice(0,1)==7 ? true: false) :false;
$(document).ready(function()
{
	if(ie6)
	{	
		DD_belatedPNG.fix('.menu_top ul li ul li');
		$('.menu_top ul li').hover(function(){
			$(this).addClass('active');
			
			},function(){$(this).removeClass('active');})
		
	}
	// loai bo border khi click a
	if(ie6 || ie7)
	{
		blurLinks();// remove bordor dotted around link when click
	}
	
})
