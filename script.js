jQuery(document).ready(function($) {
	$('body').click(function(){
		$('#w01').text(document.documentElement.clientWidth);
		$('#w02').text(document.body.clientWidth);
		$('#w03').text(window.innerWidth);
		$('#w04').text($(window).width());
		$('#w05').text($(document).width());

		$('#h01').text(document.documentElement.clientHeight);
		$('#h02').text(document.body.clientHeight);
		$('#h03').text(window.innerHeight);
		$('#h04').text($(window).height());
		$('#h05').text($(document).height());

		$('#x01').text(document.documentElement.scrollLeft);
		$('#x02').text(document.body.scrollLeft);
		$('#x03').text(window.pageXOffset);
		$('#x04').text($(window).scrollLeft());
		$('#x05').text($(document).scrollLeft());

		$('#y01').text(document.documentElement.scrollTop);
		$('#y02').text(document.body.scrollTop);
		$('#y03').text(window.pageYOffset);
		$('#y04').text($(window).scrollTop());
		$('#y05').text($(document).scrollTop());
	});
});