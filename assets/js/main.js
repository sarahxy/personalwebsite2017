$(document).ready(function() {
	
	$('.header-top').load('includes/navigation.html');
	$('.footer-bottom').load('includes/footer.html');

	/*
	$('#email').click(function() {
		console.log("Hello");
		copyToClipboard($(this));
	});
	*/
	
	$(document).on('click', '#email', function () {
		copyToClipboard($(this).children('em'));
		$('.popup').css('visibility','visible').hide().fadeIn('slow');
		setTimeout(function(){ $(".popup").fadeOut() }, 3000);

	});
	
	$(window).scroll(function() {
		var scroll = $(window).scrollTop();
		if (scroll > 0) {
			$(".nav").addClass("active");
		}
		else {
			$(".nav").removeClass("active");
		}
	});

	// listeners for the carousel-navigator
	$('#syncfab-about').on({ 'click': function() {
		$('.carousel-container img').attr('src', 'assets/img/syncfab/about.jpg');
		$('#syncfab-page').text("ABOUT US");
	}
	});

	$('#syncfab-about').on({ 'hover': function() {
		$('#syncfab-page').text("ABOUT US");
	}
	});

	$('#syncfab-contact').on({ 'click': function() {
		$('.carousel-container img').attr('src', 'assets/img/syncfab/contact.jpg');
		$('#syncfab-page').text("CONTACT US");
	}
	});

	$('#syncfab-contact').on({ 'hover': function() {
		$('#syncfab-page').text("CONTACT US");
	}
	});

	$('#syncfab-faqs').on({ 'click': function() {
		$('.carousel-container img').attr('src', 'assets/img/syncfab/faqs.jpg');
		$('#syncfab-page').text("FAQs");
	}
	});

	$('#syncfab-faqs').on({ 'hover': function() {
		$('#syncfab-page').text("FAQs");
	}
	});

	$('#syncfab-press').on({ 'click': function() {
		$('.carousel-container img').attr('src', 'assets/img/syncfab/press.jpg');
		$('#syncfab-page').text("PRESS");
	}
	});

	$('#syncfab-press').on({ 'hover': function() {
		$('#syncfab-page').text("PRESS");
	}
	});

	$('#syncfab-buyer').on({ 'click': function() {
		$('.carousel-container img').attr('src', 'assets/img/syncfab/howitworksbuyer.jpg');
		$('#syncfab-page').text("HOW IT WORKS (BUYERS)");
	}
	});

	$('#syncfab-buyer').on({ 'hover': function() {
		$('#syncfab-page').text("HOW IT WORKS (BUYERS)");
	}
	});

	$('#syncfab-factory').on({ 'click': function() {
		$('.carousel-container img').attr('src', 'assets/img/syncfab/howitworksfactory.jpg');
		$('#syncfab-page').text("HOW IT WORKS (FACTORIES)");
	}
	});

	$('#syncfab-factory').on({ 'hover': function() {
		$('#syncfab-page').text("HOW IT WORKS (FACTORIES)");
	}
	});

	$('#syncfab-blog').on({ 'click': function() {
		$('.carousel-container img').attr('src', 'assets/img/syncfab/bloghome.jpg');
		$('#syncfab-page').text("BLOG HOME");
	}
	});

	$('#syncfab-blog').on({ 'hover': function() {
		$('#syncfab-page').text("BLOG HOME");
	}
	});

	$('#syncfab-blogpost').on({ 'click': function() {
		$('.carousel-container img').attr('src', 'assets/img/syncfab/blogpost.jpg');
		$('#syncfab-page').text("SAMPLE BLOG POST");
	}
	});

	$('#syncfab-blogpost').on({ 'hover': function() {
		$('#syncfab-page').text("SAMPLE BLOG POST");
	}
	});





	// init Masonry
	var $grid = $('.grid').masonry({
		itemSelector: '.grid-item',
		columnWidth: '.grid-sizer',
		percentPosition: true
	});
	// layout Masonry after each image loads
	$grid.imagesLoaded().progress( function() {
		$grid.masonry('layout');
	});

});

function copyToClipboard(element) {
    var $temp = $("<input>");
    $("body").append($temp);
    $temp.val($(element).text()).select();
    document.execCommand("copy");
    $temp.remove();
}