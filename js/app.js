
$(document).ready(function(){
	var images = {
		man: {
			heading: 'Man Image',
			description: 'Image of a man.',
			path: 'images/man.jpg'
		},
		wizard: {
			heading: 'Wizard Image',
			description: 'Image of a wizard.',
			path: 'images/wizard.jpg'
		},
		beast: {
			heading: 'Beast Image',
			description: 'Image of a beast.',
			path: 'images/beast.jpg'
		}
	};

	var imageContainer = $('#imageContainer');
	var innerHtml = '';
	$.each( images, function( key, value ) {
		var html = '';
		html += "<div data-id='"+key+"' class='gallery' style='background: url("+value['path']+")'>";
		html += "<div class='galleryWrapper'>";
		html += "<div id='"+key+"' class='galleryDescription'>";
		html += "<h3 class='textGalleryTitle'>" + value['heading'] + "</h3>";
		html += "<h4 class='textGalleryDescription'>" + value['description'] + "</h4>";
		html += "</div>";
		html += "</div>";
		html += "</div>";

		innerHtml += html;
		imageContainer.html(innerHtml);
	});

	$('body').delegate('.gallery','mouseover',function(){
		var id = '#' +$(this).data('id');
		$(id).css('opacity','1');
	});

	$('body').delegate('.gallery','mouseout',function(){
		$('.galleryDescription').css('opacity','0');
	});

	$('body').delegate('.links','click',function(){
		$('.links').removeClass('active');
		$(this).addClass('active');
	});

	$('body').delegate('.mobileLinks','click',function(){
		$('.mobileLinks').removeClass('active');
		$(this).addClass('active');
	});
});

function myFunction(x) {
  x.classList.toggle("change");
  $('#mobileMenu').slideToggle("slow");
}