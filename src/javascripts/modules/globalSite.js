import bowser from 'bowser';
class globalSite{
	static showContentWhenPageLoadFinish(){
		setTimeout(function() {
			$('.over-loader').fadeOut('slow');
		}, 500);
	}

	static checkDevice(){
		let html = $('html');
		if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
			html.addClass('touch');
		}else{
			html.addClass('no-touch');
		}
	}
	static detectBrowser() {
		var browserName = bowser.name;
		var browserVersion = bowser.version;
		var $body = $('html')
		if (browserName === 'Chrome'){
			$body.addClass('chrome');
		}
		if (browserName === 'Firefox'){
			$body.addClass('firefox');
		}
		if (browserName === 'Internet Explorer'){
			$body.addClass('ie');
		}
		if (browserName === 'Microsoft Edge'){
			$body.addClass('edge');
		}
		if (browserName === 'Safari'){
			$body.addClass('safari');
		}
	}
	static compareSameHeight() {
        function setSameHeight(e) {
            if ($(window).innerWidth() > 767) {
                $('.content-row').each(function() {
                    var highestBox = 0;
                    $(this).find(e).each(function() {
                        if ($(this).height() > highestBox) {
                            highestBox = $(this).height();
                        }
                    });
                    $(this).find(e).height(highestBox);
                })
            }
        }
        setSameHeight($('.content_1'));
        setSameHeight($('.content_2'));
        setSameHeight($('.content_3'));
        setSameHeight($('.content_4'));
        setSameHeight($('.content_5'));
        setSameHeight($('.content_6'));
        setSameHeight($('.content_7'));
        setSameHeight($('.content_8'));
	}
	static openMenu() {
        $('.toggle-menu').click(function() {
            $('#menu').toggleClass('d-block');
            $('.header__menu').toggleClass('menu-active');
            $(this).toggleClass('active');
        });
    }
}
export default globalSite;