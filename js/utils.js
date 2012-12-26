var hp_latestnews_timeout = 10000;
var max_height_for_footer_floating = 800;

$(document).keypress(function(e) { 
    if (e.keyCode == 27) { 
		var openmodalbox = jQuery(".openmodalbox");
		if (openmodalbox.length > 0) {
			jQuery.fn.modalBox('close');
		}
    } 
});

$(document).ready(function(){
	initHPLatestNews();
	initFooter();
	initCGTVSlide();
	initXSXSlide();
	initServiceTKNT();
	initServiceCPTH();
	initShowcase();
	initOnlineQuestion();
});

function initOnlineQuestion() {
	jQuery(".openmodalbox").modalBox({
		setStylesOfFadingLayer:  {black : 'background-color:#000; filter:alpha(opacity=80); -moz-opacity:0.8; opacity:0.8;'},
		setWidthOfModalLayer : 740,
		minimalTopSpacing : -8,
		callFunctionAfterShow : function(){
			$('#modalBox #modalBoxBody .cgtv_popup a').click(function(e){
				var s = parseInt($(this).attr('data-rel'));
				slide.cycle(s);
		
				jQuery.fn.modalBox("close");
				e.preventDefault();
			});
		}
	});
}
function initShowcase(){
	var sc = $('.showcase_wrapper .sc_items');
	if (sc.length > 0) {
		$('.hover', sc).append('<span class="deco"></span>');
		
		sc.hover(
			function(){
				$('.hover', this).fadeIn(10);
				$('.summary', this).fadeOut('fast');
			},
			function(){
				$('.hover', this).fadeOut('fast');
				$('.summary', this).fadeIn(10);
			}
		);
	}
}
function initServiceCPTH(){
	var cpth = $('.service_cpth_wrapper .cpth_items');
	if (cpth.length > 0) {	
		$('.hover', cpth).append('<span class="deco"></span>');
		cpth.hover(
			function(){
				$('.hover', this).fadeIn(10);
				$('.summary', this).fadeOut('fast');
			},
			function(){
				$('.hover', this).fadeOut('fast');
				$('.summary', this).fadeIn(10);
			}
		);
		
		jQuery(".openmodalbox").modalBox({
			setStylesOfFadingLayer:  {black : 'background-color:#000; filter:alpha(opacity=80); -moz-opacity:0.8; opacity:0.8;'},
			setWidthOfModalLayer : 740,
			minimalTopSpacing : -8
		});
	}
}
function initServiceTKNT(){
	var tknt = $('.service_tknt_wrapper .noithat_items');
	if (tknt.length > 0) {
		$('.hover', tknt).append('<span class="deco"></span>');
		
		tknt.hover(
			function(){
				$('.hover', this).fadeIn(10);
				$('.summary', this).fadeOut('fast');
			},
			function(){
				$('.hover', this).fadeOut('fast');
				$('.summary', this).fadeIn(10);
			}
		);
		
		jQuery(".openmodalbox").modalBox({
			setStylesOfFadingLayer:  {black : 'background-color:#000; filter:alpha(opacity=80); -moz-opacity:0.8; opacity:0.8;'},
			setWidthOfModalLayer : 740,
			minimalTopSpacing : 10
		});
	}
}
function initXSXSlide(){
	var slide = $('.fullsize_gallery .fullsize_slide');
    if (slide.length > 0) {
        slide.cycle({
            fx: 'fadeZoom',
            next: '.fullsize_controller .prev',
            prev: '.fullsize_controller .next',
            speed: 400,
            timeout: 0,
			after: _increaseCounter,
			before: _hideAllDetail,
			cleartypeNoBg: true
        });
    }
	
	$('.fullsize_controller .info').click(function(){
		var parent = $('.fullsize_slide .items:visible');
		var isHideInfo = $('> .detail', parent).hasClass('hidden');

		if (isHideInfo) {
			$('> .detail', parent).fadeIn('fast');
			$('.fullsize_gallery .fullsize_slide').css('background-color', '#B11116');
		} else {
			$('> .detail', parent).hide();
			$('.fullsize_gallery .fullsize_slide').css('background-color', '#363636');
		}
		
		$('> img', parent).toggleClass('hidden');
		$('> .detail', parent).toggleClass('hidden');
	});
	
	$('.fullsize_slide .items .detail .close').click(function(){
		var parent = $('.fullsize_slide .items:visible');

		$('> .detail', parent).hide();
		$('.fullsize_gallery .fullsize_slide').css('background-color', '#363636');
		$('> img', parent).toggleClass('hidden');
		$('> .detail', parent).toggleClass('hidden');
	});
}
function initCGTVSlide(){
	var slide = $('#about_content .chuyengiatuvan');
    if (slide.length > 0) {
        slide.cycle({
            fx: 'scrollVert',
            next: '.chuyengiatuvan_controller .prev',
            prev: '.chuyengiatuvan_controller .next',
            speed: 400,
            timeout: 0,
			after: _increaseCounter,
			cleartypeNoBg: true

        });
		
		
		jQuery(".openmodalbox").modalBox({
			setStylesOfFadingLayer:  {black : 'background-color:#000; filter:alpha(opacity=80); -moz-opacity:0.8; opacity:0.8;'},
			setWidthOfModalLayer : 740,
			minimalTopSpacing : -8,
			callFunctionAfterShow : function(){
				$('#modalBox #modalBoxBody .cgtv_popup a').click(function(e){
					var s = parseInt($(this).attr('data-rel'));
					slide.cycle(s);
			
					jQuery.fn.modalBox("close");
					e.preventDefault();
				});
			}
		});
    }
}
function _increaseCounter(curr,next,opts) {
	var caption = opts.slideCount - opts.currSlide + 1;
	if (caption > opts.slideCount){
		caption = caption - opts.slideCount;
	}
	
	$('.chuyengiatuvan_counter span').html(caption);
}
function _hideAllDetail(curr,next,opts) {	
	$('.fullsize_slide .detail').hide().addClass('hidden');
	$('.fullsize_slide img').removeClass('hidden');
	$('.fullsize_gallery .fullsize_slide').css('background-color', '#363636');
}


// slide latest news tren trang chu
function initHPLatestNews(){
    var slide = $('.latest_news .slide');
    if (slide.length > 0) {
        slide.cycle({
            fx: 'scrollHorz',
            next: '.latest_news .controller .next',
            prev: '.latest_news .controller .prev',
            speed: 400,
            timeout: hp_latestnews_timeout,
			cleartypeNoBg: true
        });
    }
}

// dam bao footer chiem het chieu cao con lai cua trinh duyet 
// tinh toan lai vi tri cua anh deco o footer
function initFooter(){
	
	var h = $(document).height();
	var h1 = $(window).height();
	var inf = $('#inside_footer');

	if (h < h1) { // document dai, phai co scroll
		if (h > max_height_for_footer_floating) {
			var ah = h-max_height_for_footer_floating;
			inf.height(inf.height() + ah);
		}
	} else {
		// padding-top:50px of .inside_content_wrapper
		// border-top: 20px solid of #inside_footer
		h = $('.inside_content_wrapper').height()+50+20; 
		if (h < max_height_for_footer_floating) h = max_height_for_footer_floating;

		var ah = h1-h;
		inf.height(ah);
	}
	
	
	// tinh toan lai vi tri cua anh deco o footer
	var aa = $('a.active', inf);
	if (aa.length == 1) {
		aa.after('<span class="triangle"> </span><span class="gradient"> </span>');
		
		var pos = aa.position();
		
		var left = pos.left;
		aa.next().css('left', parseInt(left+75)+'px').next().css('left', parseInt(left)+'px');
	}
}

// add event to window.onload so they don't overwrite each other. Given func will be executed after content is loaded
function addOnLoadEvent(func){
	if (window.addEventListener){
		window.addEventListener('load', func, false); 
	} else if (window.attachEvent) { 
		window.attachEvent('onload', func);
	}
}
