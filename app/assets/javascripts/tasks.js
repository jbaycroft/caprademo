//Button Populate Javascript
//This determines which hazard buttons are shown in the task show view based on what checkboxes are selected in the task form
$(document).ready(function () {
    var value = $('li.yes_no > #value, li.yes_no > #comma').text();
    var value = value.split(",");
    var index = $('li.yes_no > #index, li.yes_no > #comma').text();
    var index = index.split(",");
    var result = new Array();
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
        if (t == 5) {
            $('li.five').removeClass('hidden');
        }
        if (t == 6) {
            $('li.six').removeClass('hidden');
        }
        if (t == 7) {
            $('li.seven').removeClass('hidden');
        }
        if (t == 8) {
            $('li.eight').removeClass('hidden');
        }
        if (t == 9) {
            $('li.nine').removeClass('hidden');
        }
        if (t == 10) {
            $('li.ten').removeClass('hidden');
        }
        if (t == 11) {
            $('li.eleven').removeClass('hidden');
        }
        if (t == 12) {
            $('li.twelve').removeClass('hidden');
        }
        if (t == 13) {
            $('li.thirteen').removeClass('hidden');
        }
        if (t == 14) {
            $('li.fourteen').removeClass('hidden');
        }
        if (t == 15) {
            $('li.fifteen').removeClass('hidden');
        }
        if (t == 16) {
            $('li.sixteen').removeClass('hidden');
        }
        if (t == 17) {
            $('li.seventeen').removeClass('hidden');
        }
        if (t == 18) {
            $('li.eighteen').removeClass('hidden');
        }
        if (t == 19) {
            $('li.nineteen').removeClass('hidden');
        }
        if (t == 20) {
            $('li.twenty').removeClass('hidden');
        }
    }
});
//Hazard Form Populate Javascript
//This determines which hazard form is shown when a hazard button is activated
jQuery(function ($) {
    function changeTab(e) {
        e.preventDefault();
        $('li.yes_no div.active').removeClass("active");
        $(this).addClass("active");
        var det = $('.active').attr('id');
        var $$ = {
            'ha1': $('div.haz1'),
                'ha2': $('div.haz2'),
                'ha3': $('div.haz3'),
                'ha4': $('div.haz4'),
                'ha5': $('div.haz5'),
                'ha6': $('div.haz6'),
                'ha7': $('div.haz7'),
                'ha8': $('div.haz8'),
                'ha9': $('div.haz9'),
                'ha10': $('div.haz10'),
                'ha11': $('div.haz11'),
                'ha12': $('div.haz12'),
                'ha13': $('div.haz13'),
                'ha14': $('div.haz14'),
                'ha15': $('div.haz15'),
                'ha16': $('div.haz16'),
                'ha17': $('div.haz17'),
                'ha18': $('div.haz18'),
                'ha19': $('div.haz19'),
                'ha20': $('div.haz20')
        };
        //ACCESS
        if (det == "haz1") {
            $$.ha1.show('slow');
            $$.ha2.hide('slow');
            $$.ha3.hide('slow');
            $$.ha4.hide('slow');
            $$.ha5.hide('slow');
            $$.ha6.hide('slow');
            $$.ha7.hide('slow');
            $$.ha8.hide('slow');
            $$.ha9.hide('slow');
            $$.ha10.hide('slow');
            $$.ha11.hide('slow');
            $$.ha12.hide('slow');
            $$.ha13.hide('slow');
            $$.ha14.hide('slow');
            $$.ha15.hide('slow');
            $$.ha16.hide('slow');
            $$.ha17.hide('slow');
            $$.ha18.hide('slow');
            $$.ha19.hide('slow');
            $$.ha20.hide('slow');
            // BIOHAZ
        } else if (det == "haz2") {
            $$.ha1.hide('slow');
            $$.ha2.show('slow');
            $$.ha3.hide('slow');
            $$.ha4.hide('slow');
            $$.ha5.hide('slow');
            $$.ha6.hide('slow');
            $$.ha7.hide('slow');
            $$.ha8.hide('slow');
            $$.ha9.hide('slow');
            $$.ha10.hide('slow');
            $$.ha11.hide('slow');
            $$.ha12.hide('slow');
            $$.ha13.hide('slow');
            $$.ha14.hide('slow');
            $$.ha15.hide('slow');
            $$.ha16.hide('slow');
            $$.ha17.hide('slow');
            $$.ha18.hide('slow');
            $$.ha19.hide('slow');
            $$.ha20.hide('slow');
            // COWRK
        } else if (det == "haz3") {
            $$.ha1.hide('slow');
            $$.ha2.hide('slow');
            $$.ha3.show('slow');
            $$.ha4.hide('slow');
            $$.ha5.hide('slow');
            $$.ha6.hide('slow');
            $$.ha7.hide('slow');
            $$.ha8.hide('slow');
            $$.ha9.hide('slow');
            $$.ha10.hide('slow');
            $$.ha11.hide('slow');
            $$.ha12.hide('slow');
            $$.ha13.hide('slow');
            $$.ha14.hide('slow');
            $$.ha15.hide('slow');
            $$.ha16.hide('slow');
            $$.ha17.hide('slow');
            $$.ha18.hide('slow');
            $$.ha19.hide('slow');
            $$.ha20.hide('slow');
            // CUT
        } else if (det == "haz4") {
            $$.ha1.hide('slow');
            $$.ha2.hide('slow');
            $$.ha3.hide('slow');
            $$.ha4.show('slow');
            $$.ha5.hide('slow');
            $$.ha6.hide('slow');
            $$.ha7.hide('slow');
            $$.ha8.hide('slow');
            $$.ha9.hide('slow');
            $$.ha10.hide('slow');
            $$.ha11.hide('slow');
            $$.ha12.hide('slow');
            $$.ha13.hide('slow');
            $$.ha14.hide('slow');
            $$.ha15.hide('slow');
            $$.ha16.hide('slow');
            $$.ha17.hide('slow');
            $$.ha18.hide('slow');
            $$.ha19.hide('slow');
            $$.ha20.hide('slow');
            // ERGO
        } else if (det == "haz5") {
            $$.ha1.hide('slow');
            $$.ha2.hide('slow');
            $$.ha3.hide('slow');
            $$.ha4.hide('slow');
            $$.ha5.show('slow');
            $$.ha6.hide('slow');
            $$.ha7.hide('slow');
            $$.ha8.hide('slow');
            $$.ha9.hide('slow');
            $$.ha10.hide('slow');
            $$.ha11.hide('slow');
            $$.ha12.hide('slow');
            $$.ha13.hide('slow');
            $$.ha14.hide('slow');
            $$.ha15.hide('slow');
            $$.ha16.hide('slow');
            $$.ha17.hide('slow');
            $$.ha18.hide('slow');
            $$.ha19.hide('slow');
            $$.ha20.hide('slow');
            // FALL
        } else if (det == "haz6") {
            $$.ha1.hide('slow');
            $$.ha2.hide('slow');
            $$.ha3.hide('slow');
            $$.ha4.hide('slow');
            $$.ha5.hide('slow');
            $$.ha6.show('slow');
            $$.ha7.hide('slow');
            $$.ha8.hide('slow');
            $$.ha9.hide('slow');
            $$.ha10.hide('slow');
            $$.ha11.hide('slow');
            $$.ha12.hide('slow');
            $$.ha13.hide('slow');
            $$.ha14.hide('slow');
            $$.ha15.hide('slow');
            $$.ha16.hide('slow');
            $$.ha17.hide('slow');
            $$.ha18.hide('slow');
            $$.ha19.hide('slow');
            $$.ha20.hide('slow');
            // FIRE
        } else if (det == "haz7") {
            $$.ha1.hide('slow');
            $$.ha2.hide('slow');
            $$.ha3.hide('slow');
            $$.ha4.hide('slow');
            $$.ha5.hide('slow');
            $$.ha6.hide('slow');
            $$.ha7.show('slow');
            $$.ha8.hide('slow');
            $$.ha9.hide('slow');
            $$.ha10.hide('slow');
            $$.ha11.hide('slow');
            $$.ha12.hide('slow');
            $$.ha13.hide('slow');
            $$.ha14.hide('slow');
            $$.ha15.hide('slow');
            $$.ha16.hide('slow');
            $$.ha17.hide('slow');
            $$.ha18.hide('slow');
            $$.ha19.hide('slow');
            $$.ha20.hide('slow');
            //HAZATM
        } else if (det == "haz8") {
            $$.ha1.hide('slow');
            $$.ha2.hide('slow');
            $$.ha3.hide('slow');
            $$.ha4.hide('slow');
            $$.ha5.hide('slow');
            $$.ha6.hide('slow');
            $$.ha7.hide('slow');
            $$.ha8.show('slow');
            $$.ha9.hide('slow');
            $$.ha10.hide('slow');
            $$.ha11.hide('slow');
            $$.ha12.hide('slow');
            $$.ha13.hide('slow');
            $$.ha14.hide('slow');
            $$.ha15.hide('slow');
            $$.ha16.hide('slow');
            $$.ha17.hide('slow');
            $$.ha18.hide('slow');
            $$.ha19.hide('slow');
            $$.ha20.hide('slow');
            // HAZENGY
        } else if (det == "haz9") {
            $$.ha1.hide('slow');
            $$.ha2.hide('slow');
            $$.ha3.hide('slow');
            $$.ha4.hide('slow');
            $$.ha5.hide('slow');
            $$.ha6.hide('slow');
            $$.ha7.hide('slow');
            $$.ha8.hide('slow');
            $$.ha9.show('slow');
            $$.ha10.hide('slow');
            $$.ha11.hide('slow');
            $$.ha12.hide('slow');
            $$.ha13.hide('slow');
            $$.ha14.hide('slow');
            $$.ha15.hide('slow');
            $$.ha16.hide('slow');
            $$.ha17.hide('slow');
            $$.ha18.hide('slow');
            $$.ha19.hide('slow');
            $$.ha20.hide('slow');
            // HAZMAT
        } else if (det == "haz10") {
            $$.ha1.hide('slow');
            $$.ha2.hide('slow');
            $$.ha3.hide('slow');
            $$.ha4.hide('slow');
            $$.ha5.hide('slow');
            $$.ha6.hide('slow');
            $$.ha7.hide('slow');
            $$.ha8.hide('slow');
            $$.ha9.hide('slow');
            $$.ha10.show('slow');
            $$.ha11.hide('slow');
            $$.ha12.hide('slow');
            $$.ha13.hide('slow');
            $$.ha14.hide('slow');
            $$.ha15.hide('slow');
            $$.ha16.hide('slow');
            $$.ha17.hide('slow');
            $$.ha18.hide('slow');
            $$.ha19.hide('slow');
            $$.ha20.hide('slow');
            // LAZ
        } else if (det == "haz11") {
            $$.ha1.hide('slow');
            $$.ha2.hide('slow');
            $$.ha3.hide('slow');
            $$.ha4.hide('slow');
            $$.ha5.hide('slow');
            $$.ha6.hide('slow');
            $$.ha7.hide('slow');
            $$.ha8.hide('slow');
            $$.ha9.hide('slow');
            $$.ha10.hide('slow');
            $$.ha11.show('slow');
            $$.ha12.hide('slow');
            $$.ha13.hide('slow');
            $$.ha14.hide('slow');
            $$.ha15.hide('slow');
            $$.ha16.hide('slow');
            $$.ha17.hide('slow');
            $$.ha18.hide('slow');
            $$.ha19.hide('slow');
            $$.ha20.hide('slow');
            // LONEWRK
        } else if (det == "haz12") {
            $$.ha1.hide('slow');
            $$.ha2.hide('slow');
            $$.ha3.hide('slow');
            $$.ha4.hide('slow');
            $$.ha5.hide('slow');
            $$.ha6.hide('slow');
            $$.ha7.hide('slow');
            $$.ha8.hide('slow');
            $$.ha9.hide('slow');
            $$.ha10.hide('slow');
            $$.ha11.hide('slow');
            $$.ha12.show('slow');
            $$.ha13.hide('slow');
            $$.ha14.hide('slow');
            $$.ha15.hide('slow');
            $$.ha16.hide('slow');
            $$.ha17.hide('slow');
            $$.ha18.hide('slow');
            $$.ha19.hide('slow');
            $$.ha20.hide('slow');
            // MAG
        } else if (det == "haz13") {
            $$.ha1.hide('slow');
            $$.ha2.hide('slow');
            $$.ha3.hide('slow');
            $$.ha4.hide('slow');
            $$.ha5.hide('slow');
            $$.ha6.hide('slow');
            $$.ha7.hide('slow');
            $$.ha8.hide('slow');
            $$.ha9.hide('slow');
            $$.ha10.hide('slow');
            $$.ha11.hide('slow');
            $$.ha12.hide('slow');
            $$.ha13.show('slow');
            $$.ha14.hide('slow');
            $$.ha15.hide('slow');
            $$.ha16.hide('slow');
            $$.ha17.hide('slow');
            $$.ha18.hide('slow');
            $$.ha19.hide('slow');
            $$.ha20.hide('slow');
            // MECHAND
        } else if (det == "haz14") {
            $$.ha1.hide('slow');
            $$.ha2.hide('slow');
            $$.ha3.hide('slow');
            $$.ha4.hide('slow');
            $$.ha5.hide('slow');
            $$.ha6.hide('slow');
            $$.ha7.hide('slow');
            $$.ha8.hide('slow');
            $$.ha9.hide('slow');
            $$.ha10.hide('slow');
            $$.ha11.hide('slow');
            $$.ha12.hide('slow');
            $$.ha13.hide('slow');
            $$.ha14.show('slow');
            $$.ha15.hide('slow');
            $$.ha16.hide('slow');
            $$.ha17.hide('slow');
            $$.ha18.hide('slow');
            $$.ha19.hide('slow');
            $$.ha20.hide('slow');
            // NOISE
        } else if (det == "haz15") {
            $$.ha1.hide('slow');
            $$.ha2.hide('slow');
            $$.ha3.hide('slow');
            $$.ha4.hide('slow');
            $$.ha5.hide('slow');
            $$.ha6.hide('slow');
            $$.ha7.hide('slow');
            $$.ha8.hide('slow');
            $$.ha9.hide('slow');
            $$.ha10.hide('slow');
            $$.ha11.hide('slow');
            $$.ha12.hide('slow');
            $$.ha13.hide('slow');
            $$.ha14.hide('slow');
            $$.ha15.show('slow');
            $$.ha16.hide('slow');
            $$.ha17.hide('slow');
            $$.ha18.hide('slow');
            $$.ha19.hide('slow');
            $$.ha20.hide('slow');
            // OVRHEAD
        } else if (det == "haz16") {
            $$.ha1.hide('slow');
            $$.ha2.hide('slow');
            $$.ha3.hide('slow');
            $$.ha4.hide('slow');
            $$.ha5.hide('slow');
            $$.ha6.hide('slow');
            $$.ha7.hide('slow');
            $$.ha8.hide('slow');
            $$.ha9.hide('slow');
            $$.ha10.hide('slow');
            $$.ha11.hide('slow');
            $$.ha12.hide('slow');
            $$.ha13.hide('slow');
            $$.ha14.hide('slow');
            $$.ha15.hide('slow');
            $$.ha16.show('slow');
            $$.ha17.hide('slow');
            $$.ha18.hide('slow');
            $$.ha19.hide('slow');
            $$.ha20.hide('slow');
            // RAD
        } else if (det == "haz17") {
            $$.ha1.hide('slow');
            $$.ha2.hide('slow');
            $$.ha3.hide('slow');
            $$.ha4.hide('slow');
            $$.ha5.hide('slow');
            $$.ha6.hide('slow');
            $$.ha7.hide('slow');
            $$.ha8.hide('slow');
            $$.ha9.hide('slow');
            $$.ha10.hide('slow');
            $$.ha11.hide('slow');
            $$.ha12.hide('slow');
            $$.ha13.hide('slow');
            $$.ha14.hide('slow');
            $$.ha15.hide('slow');
            $$.ha16.hide('slow');
            $$.ha17.show('slow');
            $$.ha18.hide('slow');
            $$.ha19.hide('slow');
            $$.ha20.hide('slow');
            // ROAD
        } else if (det == "haz18") {
            $$.ha1.hide('slow');
            $$.ha2.hide('slow');
            $$.ha3.hide('slow');
            $$.ha4.hide('slow');
            $$.ha5.hide('slow');
            $$.ha6.hide('slow');
            $$.ha7.hide('slow');
            $$.ha8.hide('slow');
            $$.ha9.hide('slow');
            $$.ha10.hide('slow');
            $$.ha11.hide('slow');
            $$.ha12.hide('slow');
            $$.ha13.hide('slow');
            $$.ha14.hide('slow');
            $$.ha15.hide('slow');
            $$.ha16.hide('slow');
            $$.ha17.hide('slow');
            $$.ha18.show('slow');
            $$.ha19.hide('slow');
            $$.ha20.hide('slow');
            // TEMP
        } else if (det == "haz19") {
            $$.ha1.hide('slow');
            $$.ha2.hide('slow');
            $$.ha3.hide('slow');
            $$.ha4.hide('slow');
            $$.ha5.hide('slow');
            $$.ha6.hide('slow');
            $$.ha7.hide('slow');
            $$.ha8.hide('slow');
            $$.ha9.hide('slow');
            $$.ha10.hide('slow');
            $$.ha11.hide('slow');
            $$.ha12.hide('slow');
            $$.ha13.hide('slow');
            $$.ha14.hide('slow');
            $$.ha15.hide('slow');
            $$.ha16.hide('slow');
            $$.ha17.hide('slow');
            $$.ha18.hide('slow');
            $$.ha19.show('slow');
            $$.ha20.hide('slow');
            // TOOL
        } else if (det == "haz20") {
            $$.ha1.hide('slow');
            $$.ha2.hide('slow');
            $$.ha3.hide('slow');
            $$.ha4.hide('slow');
            $$.ha5.hide('slow');
            $$.ha6.hide('slow');
            $$.ha7.hide('slow');
            $$.ha8.hide('slow');
            $$.ha9.hide('slow');
            $$.ha10.hide('slow');
            $$.ha11.hide('slow');
            $$.ha12.hide('slow');
            $$.ha13.hide('slow');
            $$.ha14.hide('slow');
            $$.ha15.hide('slow');
            $$.ha16.hide('slow');
            $$.ha17.hide('slow');
            $$.ha18.hide('slow');
            $$.ha19.hide('slow');
            $$.ha20.show('slow');
        } else {
            $$.ha1.hide('slow');
            $$.ha2.hide('slow');
            $$.ha3.hide('slow');
            $$.ha4.hide('slow');
            $$.ha5.hide('slow');
            $$.ha6.hide('slow');
            $$.ha7.hide('slow');
            $$.ha8.hide('slow');
            $$.ha9.hide('slow');
            $$.ha10.hide('slow');
            $$.ha11.hide('slow');
            $$.ha12.hide('slow');
            $$.ha13.hide('slow');
            $$.ha14.hide('slow');
            $$.ha15.hide('slow');
            $$.ha16.hide('slow');
            $$.ha17.hide('slow');
            $$.ha18.hide('slow');
            $$.ha19.hide('slow');
            $$.ha20.hide('slow');
        }
    }
    $("li.yes_no div").click(changeTab);
    $('li.complete').bind('click', function () {
        $('input#task_complete').prop("checked", true);
    });
});

