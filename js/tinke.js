var Tinke = function() {

    var win, doc;

    var sectionLength = [];
    var sectionIndex = [
        0 //home
        , .5 //color
        , 1.5 //feature
        , 2.7 //cardio
        , 3.5 //index
        , 4.5 //less is more
        , 7.5 //share
        , 8.5 //mobile
        , 10 //mobility
    ];



    this.taehoon = function() {
        console.log('Taehoon start!');


    };

	this.taehoon = function () {
		//console.log('init');

		//도큐먼트, 윈도우 객체 캐싱
		doc = $(document);
		win = $(window);

		//윈도우객체 이벤트 바인딩
		win.bind('scroll', this.onWindowScroll);
		win.resize(this.onWindowResize);

//		// tinke ios
//		div_ios = $('#toplayer');
//		div_product = $('#toplayer #product');
//
//		div_tinke_light = $('#toplayer #tinke_light');
//		div_tinke_whole = $('#toplayer #tinke_whole');
//		div_tinke_outline = $('#toplayer #tinke_outline');
//		div_tinke_parts = $('#toplayer #tinke_parts');
//
//		div_tinke_parts_cap_top = $('#toplayer #tinke_cap_top');
//		div_tinke_parts_cap_btm = $('#toplayer #tinke_cap_btm');
//		div_tinke_parts_body = $('#toplayer #tinke_body');
//
//		div_hand = $('#splash .hand_1_img');
//		div_colorselector = $('#toplayer #colorselector');
//		div_featurehand = $('#toplayer #featurehand');
//		div_featurehandthumb = $('#toplayer #featurehandthumb');
//		div_iphoneholder = $('#toplayer #iphone_wrapper');
//		div_iphonescreens = $('#toplayer #iphone .screen img');
//
//
//		// tinke android
//		div_android = $('#android_toplayer');
//
//		div_android_product = $('#android_toplayer #android_product');
//
//		div_android_tinke_light = $('#android_toplayer #android_tinke_light');
//		div_android_tinke_whole = $('#android_toplayer #android_tinke_whole');
//		div_android_tinke_outline = $('#android_toplayer #android_tinke_outline');
//
//		div_android_hand = $('#splash .hand_1b_img');
//		div_android_colorselector = $('#android_toplayer #android_colorselector');
//		div_android_featurehand = $('#android_toplayer #android_featurehand');
//		div_android_featurehandthumb = $('#android_toplayer #android_featurehandthumb');
//		div_androidholder = $('#android_toplayer #phone_wrapper');
//		div_androidscreens = $('#android_toplayer #phone .screen img');
//
//		div_android_connect = $('#android_toplayer #android_connect');
//
//
//		// nav
//		div_logo = $('#logowrapper');
//		div_btm_nav = $('#bottomnavwrapper');
//		div_top_nav = $('#topnav');
//
//		nextBtns = $("a.btn_next_section");
//		nextBtns.click(nextSection);
//		nextBtns.css({cursor: "pointer"});
//
//		// content
//		div_para = $('#para');
//		div_para_navs = $('#para a.btn_more');
//		div_para_content = $('#para_content');
//		div_para_wrapper = $('#para_content #wrapper');
//		div_para_scrollwrapper = $('#para_content .scroll_wrapper');
//		div_para_arrow_next = $('#para_content #arrow_next');
//		div_para_arrow_prev = $('#para_content #arrow_prev');
//		div_para_close = $('#para_content .btn_close');
//
//		div_cardio = $('#cardio_stress');
//		div_cardio_navs = $('#cardio_stress a.btn_more');
//		div_cardio_content = $('#cardiostress_content');
//		div_cardio_wrapper = $('#cardiostress_content #wrapper');
//		div_cardio_scrollwrapper = $('#cardiostress_content .scroll_wrapper');
//		div_cardio_arrow_next = $('#cardiostress_content #arrow_next');
//		div_cardio_arrow_prev = $('#cardiostress_content #arrow_prev');
//		div_cardio_close = $('#cardiostress_content .btn_close');
//
//		div_share_badges = $('#share .badges');
//		div_share_nodes = $('#share .nodes');
//
//		div_running_brain = $('#cardio_stress .graphic .top ul#brain');
//		div_running_heart = $('#cardio_stress .mid .heart');
//		div_running_circle = $('#cardio_stress .mid .circle');
//
//		div_side_nav = $('#sidenav');
//		div_side_nav_btn = $('#sidenav .indicator');
//
//		div_deviceToggle = $('#toggle');
//
//		div_index_vita = $('#indexes #vita_content');
//		div_index_vita_btn = $('#indexes #vita a.btn_more');
//		div_index_vita_btn_text = $('#indexes #vita a.btn_more span');
//		div_index_vita_btn_icon = $('#indexes #vita a.btn_more .icon');
//
//		div_index_zenIndex = $('#indexes #zen_content');
//		div_index_zenIndex_btn = $('#indexes #zen a.btn_more');
//		div_index_zenIndex_btn_text = $('#indexes #zen a.btn_more span');
//		div_index_zenIndex_btn_icon = $('#indexes #zen a.btn_more .icon');
//
//		div_index_vita_btn.css('cursor', 'pointer');
//		div_index_vita_btn.click(function () {
//			toggleIndexVita();
//		});
//		div_index_zenIndex_btn.css('cursor', 'pointer');
//		div_index_zenIndex_btn.click(function () {
//			toggleIndexZen();
//		});
//
//
//		$('#toggleIOSBt').click(function () {
//			toggleDevice();
//			return false;
//		});
//		$('#toggleAndroidBt').click(function () {
//			toggleDevice();
//			return false;
//		});
//
//		$('.selection .ios').click(function () {
//			toggleIOS();
//			return false;
//		});
//		$('.selection .android').click(function () {
//			toggleAndroid();
//			return false;
//		});
//
//		$('#splash .btn_down').css('cursor', 'pointer');
//		$('#splash .btn_down').click(function () {
//			that.scrollToSection(1);
//			return false;
//		});
//
//		$('.wrapper_sidenav').each(
//			function (index, item) {
//				var jItem = $(item);
//				var btn = jItem.find('.indicator');
//				var text = jItem.find('.text');
//
//				text.css('opacity', 0);
//				text.css('visibility', 'hidden');
//				text.css('display', 'none');
//				btn.css('cursor', 'pointer');
//				btn.click(function () {
//					that.scrollToSection(index);
//					return false;
//				});
//				btn.mouseover(function () {
//					text.css('display', 'block');
//					TweenMax.to(text, .5, { css: {autoAlpha: .8}, ease: Cubic.easeInOut });
//				});
//				btn.mouseout(function () {
//					text.css('display', 'none');
//					TweenMax.to(text, .5, { css: {autoAlpha: 0}, ease: Cubic.easeInOut });
//				});
//
//			}
//		);
//
//		// android connect
//		androidConnect = {};
//		androidConnect.myFrame = 0;
//		androidConnect.setFrame = function (val) {
//			androidConnect.myFrame = val;
//			div_android_connect.css('background-position', -Math.floor(val) * 124 + 'px 0px');
//		}
//		androidConnect.getFrame = function () {
//			return androidConnect.myFrame;
//		}
//
//		var androidTween = TweenMax.to(androidConnect, 1, { setFrame: 4, ease: Linear.easeNone, repeat: -1, useFrame: true });
//
//		// para
//		initParaTween();
//
//		// cardio
//		initCardioTween();
//
//		// indexes
//		initIndex();
//
//		// less is more
//		initLess();
//
//		// color selector
//		div_colorselector.children().each(
//			function (index, item) {
//				var jItem = $(item);
//				//console.log(jItem);
//				jItem.click(function () {
//					setTinkeColor(index);
//					return false;
//				});
//			}
//		);
//
//		div_android_colorselector.children().each(
//			function (index, item) {
//				var jItem = $(item);
//				//console.log(jItem);
//				jItem.click(function () {
//					setAndroidTinkeColor(index);
//					return false;
//				});
//			}
//		);
//
//
//		//para
//		div_para_close.click(
//			function () {
//				closePara();
//				return false;
//			}
//		);
//		div_para_navs.each(
//			function (index, item) {
//				var jItem = $(item);
//				//console.log(jItem);
//				jItem.click(function () {
//					openPara(index);
//
//					return false;
//				});
//			}
//		);
//		div_para_arrow_next.click(
//			function () {
//				nextPara();
//				return false;
//			}
//		);
//		div_para_arrow_prev.click(
//			function () {
//				prevPara();
//				return false;
//			}
//		);
//
//		//cardio
//		div_cardio_close.click(
//			function () {
//				closeCardio();
//				return false;
//			}
//		);
//		div_cardio_navs.each(
//			function (index, item) {
//				var jItem = $(item);
//				//console.log(jItem);
//				jItem.click(function () {
//					openCardio(index);
//					return false;
//				});
//			}
//		);
//		div_cardio_arrow_next.click(
//			function () {
//				nextCardio();
//				return false;
//			}
//		);
//		div_cardio_arrow_prev.click(
//			function () {
//				prevCardio();
//				return false;
//			}
//		);
//
//
//		// running man
//		runningMan = {};
//		runningMan.myFrame = 0;
//		runningMan.setFrame = function (val) {
//			runningMan.myFrame = val;
//			div_running_brain.css('top', -Math.floor(val) * 40);
//		}
//		runningMan.getFrame = function () {
//			return runningMan.myFrame;
//		}
//
//		runningTween = TweenMax.to(runningMan, 1, { setFrame: 13, ease: Linear.easeNone, repeat: -1, useFrame: true });
//		runningHeartTween = TweenMax.to(div_running_heart, .2, { css: {scaleX: .8, scaleY: .8}, ease: Cubic.easeInOut, yoyo: true, repeat: -1 });
//		runningCircleTween = TweenMax.to(div_running_circle, 3, { css: {rotation: 360}, ease: Linear.easeNone, repeat: -1 });
//		hideRunningMan();
//
//		// scroll interrupt
//		$('body,html').bind('scroll mousedown DOMMouseScroll mousewheel keyup', function (e) {
//			if (e.which > 0 || e.type == "mousedown" || e.type == "mousewheel") {
//				TweenMax.killTweensOf($('html,body'));
//				$("html,body").stop();
//			}
//		})


		this.onWindowResize();
	}

	this.onWindowScroll = function () {
		//console.log('onWindowScroll');

		currentScroll = win.scrollTop();
		currentScroll = currentScroll < 0 ? 0 : currentScroll;

		console.log(currentScroll);

		if (currentScroll != 0) {
			hideTopNav(0);
			//showBtnNav();
		} else {
			showTopNav();
			//hideBtnNav(0);
		}

		updateBottomNav();
		// maxscroll = contentHeight * number of 100% content + footerheight(220) + paraheight(1000) - screenHeight
		var maxScroll = contentHeight * 4 + 220 + 1000 - contentHeight;
		currentScrollPercent = currentScroll / maxScroll;
		//console.log(contentHeight + ' : ' + currentScroll + ' : ' + currentScroll/maxScroll);

		//productTween.seek(currentScrollPercent*6);
		var seek = getTweenPercent(currentScroll)
		/*
		 console.log('seek ' + seek);
		 console.log("currentScroll " + currentScroll);
		 */
		productTween.seek(seek);
		productTween.pause();

		productAndroidTween.seek(seek);
		productAndroidTween.pause();


		updateSideNav(seek);

		if (currentIndex < 2 || currentIndex > 3) {
			hideRunningMan();
		} else {
			showRunningMan();
		}

		if (contentWidth < 960) {
			var setLeft = -(960 - contentWidth) * .5
			$('#toplayer').css('left', -$(window).scrollLeft());
		}


	}

	this.onWindowResize = function () {
		contentHeight = win.height();
		contentWidth = win.width();


		//console.log('width : ' + contentWidth + "    ::    height :" + contentHeight);
		initBadges();

		resetCSS();
		resetAndroidCSS();

		resetTween();
		resetAndroidTween();

		if (contentWidth < 960) {
			div_logo.css('left', 480);
		} else {
			div_logo.css('left', '50%');
			$('#toplayer').css('left', 0);
		}

		that.onWindowScroll();
	}
};