//Javascript to change fields shown based on select box type
$(document).ready(function() {
    //Define hash of variables to be used in select change function
    var $$ = {
        'haztype': $('select#hazard_haztype'),
        'ha1': $('div#haz1'),
        'ha2': $('div#haz2'),
        'ha3': $('div#haz3'),
        'ha4': $('div#haz4')

    };
    //When select option is changed show the fields associated with the hazard type
    $('select').on('change', function() {
        var det = $$.haztype.val();
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
    }).trigger('change');//call the handler immediately, with initially selected options;
    $('div.complete').bind('click', function() {
        $('input#hazard_complete').prop("checked",true);
    });
});