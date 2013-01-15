$(document).ready(function(){
	var value = $('li#yes_no > #value, li#yes_no > #comma').text();
	var value = value.split(",");
	var index = $('li#yes_no > #index, li#yes_no > #comma').text();
	var index = index.split(",");
	var result = new Array ();
	for (i = 0; i < index.length; i++) {
		var x = parseInt(index[i]);
		var y = parseInt(value[i]);
		result[i] = x * y;
	}
	for (var i = 0; i < result.length; i++) {
		var t = result[i];
		if (t == 1) {
			$('li.one').removeClass('hidden');
		}
		if (t == 2) {
			$('li.two').removeClass('hidden');
		}
		if (t == 3) {
			$('li.three').removeClass('hidden');
		}
		if (t == 4) {
			$('li.four').removeClass('hidden');
		}
	}
});
jQuery(function($){
	function changeTab(e) {
		e.preventDefault();
		$('li.checkbox1 div.active').removeClass("active");
		$(this).addClass("active");
	}
	$("li.checkbox1 div").click(changeTab);

})
