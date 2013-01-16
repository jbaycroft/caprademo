//Button Populate Javascript
//This determines which hazard buttons are shown in the task show view based on what checkboxes are selected in the task form
$(document).ready(function(){
	var value = $('li.yes_no > #value, li.yes_no > #comma').text();
	var value = value.split(",");
	var index = $('li.yes_no > #index, li.yes_no > #comma').text();
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
//Hazard Form Populate Javascript
//This determines which hazard form is shown when a hazard button is activated
jQuery(function($){
	function changeTab(e) {
		e.preventDefault();
		$('li.yes_no div.active').removeClass("active");
		$(this).addClass("active");
		var det = $('.active').attr('id');
		var $$ = {
        'ha1': $('div.haz1'),
        'ha2': $('div.haz2'),
        'ha3': $('div.haz3'),
        'ha4': $('div.haz4')
   		 };
		if (det == "haz1") {
            $$.ha1.show('slow');
            $$.ha2.hide('slow');
            $$.ha3.hide('slow');
            $$.ha4.hide('slow');
        } else if (det == "haz2") {
            $$.ha1.hide('slow');
            $$.ha2.show('slow');
            $$.ha3.hide('slow');
            $$.ha4.hide('slow');
        } else if (det == "haz3") {
            $$.ha1.hide('slow');
            $$.ha2.hide('slow');
            $$.ha3.show('slow');
            $$.ha4.hide('slow');
        } else if (det == "haz4") {
            $$.ha1.hide('slow');
            $$.ha2.hide('slow');
            $$.ha3.hide('slow');
            $$.ha4.show('slow');
        } else {
            $$.ha1.hide('slow');
            $$.ha2.hide('slow');
            $$.ha3.hide('slow');
            $$.ha4.hide('slow');
        }
	}
	$("li.yes_no div").click(changeTab);
	$('div.complete').bind('click', function() {
        $('input#hazard_complete').prop("checked",true);
    });
});
