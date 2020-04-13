import $ from 'jquery';
export default class header {
    constructor(element) {
        this.html = $('html');
        this.header = $(element);
        this.wrapper = $('#wrapper');
        this.menuBar = $('#menu-bar');
        this.mainMenu = $('#main-menu');
        $(window).resize(this.onResizeWindow.bind(this));
        this.pinHeader();
        this.openMenuMobile();
        this.element = element;
    }

    onResizeWindow(){
    	this.pinHeader();
    }

    pinHeader(){
    	let scrollTop = $(window).scrollTop();
        if(scrollTop>0){
            this.header.addClass('fixed-menu');
        } 
        $(window).scroll(function(){
            let scrollTop = $(window).scrollTop();
            if(scrollTop>0){
                this.header.addClass('fixed-menu');
            } else{
                this.header.removeClass('fixed-menu');
            }
        }.bind(this));
    }

    openMenuMobile(){
        this.menuBar.click(function(e) {
            const ele = e.currentTarget;
            if($(ele).hasClass('open-menu')){
                $(ele).removeClass('open-menu');
                this.html.removeClass('open-menu');
                this.header.removeClass('open-menu');
            }else{
                $(ele).addClass('open-menu');
                this.html.addClass('open-menu');
                this.header.addClass('open-menu');
            }
        }.bind(this))
    }
}