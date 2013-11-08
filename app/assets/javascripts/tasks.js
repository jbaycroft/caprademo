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
$(document).ready(function () {
    $('li.yes_no div').on('click', function(){
        var di = $('li.yes_no div.active').attr('id');
        var si = 'div.'+di;
        $(si).hide("slow");
        $('li.yes_no div.active').removeClass("active");
        $(this).addClass("active");
        var d = $('li.yes_no div.active').attr('id');
        var s = 'div.'+d;
        $(s).show("slow");
        
    })});

// Accesses Calculation
    $(document).ready(function(){
        //cache of static jQuery objects
        var $$ = {
            'often':     $('#task_hazards_attributes_0_access_frequency_often'),
            'time':      $('#task_hazards_attributes_0_access_frequency_time'),
            'sever':     $('#task_hazards_attributes_0_access_risk_severity'),
            'master':    $('#task_hazards_attributes_0_access_risk_mastery'),
            'frequency': $('#access_risk_frequency'),
            'total':     $('input#access_risk_total')
        };
        $('select').on('change', function(){
            var often = parseInt($$.often.val()),
                time = parseInt($$.time.val()),
                sever = parseInt($$.sever.val()),
                master = parseInt($$.master.val()),
                ot = often * time,//keep this member name short, it's about to be used 4 times in the next line
                freq = (ot == 0) ? 0 : (ot <= 2) ? 1 : (ot <= 4) ? 3 : (ot <= 9) ? 6 : (ot <= 16) ? 10 : "Incomplete" ;
            $$.frequency.html(freq);
            $$.total.val(freq * sever * master);
        }).trigger('change');//call the handler immediately, with initially selected options
    });
    $(document).ready(function(){
        //cache of static jQuery objects
        var $$ = {
            'often':     $('#task_hazards_attributes_0_access_new_frequency_often'),
            'time':      $('#task_hazards_attributes_0_access_new_frequency_time'),
            'sever':     $('#task_hazards_attributes_0_access_new_risk_severity'),
            'master':    $('#task_hazards_attributes_0_access_new_risk_mastery'),
            'frequency': $('#access_new_risk_frequency'),
            'total':     $('input#access_new_risk_total')
        };
        $('select').on('change', function(){
            var often = parseInt($$.often.val()),
                time = parseInt($$.time.val()),
                sever = parseInt($$.sever.val()),
                master = parseInt($$.master.val()),
                ot = often * time,//keep this member name short, it's about to be used 4 times in the next line
                freq = (ot == 0) ? 0 : (ot <= 2) ? 1 : (ot <= 4) ? 3 : (ot <= 9) ? 6 : (ot <= 16) ? 10 : "Incomplete" ;
            $$.frequency.html(freq);
            $$.total.val(freq * sever * master);
        }).trigger('change');//call the handler immediately, with initially selected options
    });
// biohaz Calculation
    $(document).ready(function(){
        //cache of static jQuery objects
        var $$ = {
            'often':     $('#task_hazards_attributes_0_biohaz_frequency_often'),
            'time':      $('#task_hazards_attributes_0_biohaz_frequency_time'),
            'sever':     $('#task_hazards_attributes_0_biohaz_risk_severity'),
            'master':    $('#task_hazards_attributes_0_biohaz_risk_mastery'),
            'frequency': $('#biohaz_risk_frequency'),
            'total':     $('input#biohaz_risk_total')
        };
        $('select').on('change', function(){
            var often = parseInt($$.often.val()),
                time = parseInt($$.time.val()),
                sever = parseInt($$.sever.val()),
                master = parseInt($$.master.val()),
                ot = often * time,//keep this member name short, it's about to be used 4 times in the next line
                freq = (ot == 0) ? 0 : (ot <= 2) ? 1 : (ot <= 4) ? 3 : (ot <= 9) ? 6 : (ot <= 16) ? 10 : "Incomplete" ;
            $$.frequency.html(freq);
            $$.total.val(freq * sever * master);
        }).trigger('change');//call the handler immediately, with initially selected options
    });
    $(document).ready(function(){
        //cache of static jQuery objects
        var $$ = {
            'often':     $('#task_hazards_attributes_0_biohaz_new_frequency_often'),
            'time':      $('#task_hazards_attributes_0_biohaz_new_frequency_time'),
            'sever':     $('#task_hazards_attributes_0_biohaz_new_risk_severity'),
            'master':    $('#task_hazards_attributes_0_biohaz_new_risk_mastery'),
            'frequency': $('#biohaz_new_risk_frequency'),
            'total':     $('input#biohaz_new_risk_total')
        };
        $('select').on('change', function(){
            var often = parseInt($$.often.val()),
                time = parseInt($$.time.val()),
                sever = parseInt($$.sever.val()),
                master = parseInt($$.master.val()),
                ot = often * time,//keep this member name short, it's about to be used 4 times in the next line
                freq = (ot == 0) ? 0 : (ot <= 2) ? 1 : (ot <= 4) ? 3 : (ot <= 9) ? 6 : (ot <= 16) ? 10 : "Incomplete" ;
            $$.frequency.html(freq);
            $$.total.val(freq * sever * master);
        }).trigger('change');//call the handler immediately, with initially selected options
    });
// cowrk Calculation
    $(document).ready(function(){
        //cache of static jQuery objects
        var $$ = {
            'often':     $('#task_hazards_attributes_0_cowrk_frequency_often'),
            'time':      $('#task_hazards_attributes_0_cowrk_frequency_time'),
            'sever':     $('#task_hazards_attributes_0_cowrk_risk_severity'),
            'master':    $('#task_hazards_attributes_0_cowrk_risk_mastery'),
            'frequency': $('#cowrk_risk_frequency'),
            'total':     $('input#cowrk_risk_total')
        };
        $('select').on('change', function(){
            var often = parseInt($$.often.val()),
                time = parseInt($$.time.val()),
                sever = parseInt($$.sever.val()),
                master = parseInt($$.master.val()),
                ot = often * time,//keep this member name short, it's about to be used 4 times in the next line
                freq = (ot == 0) ? 0 : (ot <= 2) ? 1 : (ot <= 4) ? 3 : (ot <= 9) ? 6 : (ot <= 16) ? 10 : "Incomplete" ;
            $$.frequency.html(freq);
            $$.total.val(freq * sever * master);
        }).trigger('change');//call the handler immediately, with initially selected options
    });
    $(document).ready(function(){
        //cache of static jQuery objects
        var $$ = {
            'often':     $('#task_hazards_attributes_0_cowrk_new_frequency_often'),
            'time':      $('#task_hazards_attributes_0_cowrk_new_frequency_time'),
            'sever':     $('#task_hazards_attributes_0_cowrk_new_risk_severity'),
            'master':    $('#task_hazards_attributes_0_cowrk_new_risk_mastery'),
            'frequency': $('#cowrk_new_risk_frequency'),
            'total':     $('input#cowrk_new_risk_total')
        };
        $('select').on('change', function(){
            var often = parseInt($$.often.val()),
                time = parseInt($$.time.val()),
                sever = parseInt($$.sever.val()),
                master = parseInt($$.master.val()),
                ot = often * time,//keep this member name short, it's about to be used 4 times in the next line
                freq = (ot == 0) ? 0 : (ot <= 2) ? 1 : (ot <= 4) ? 3 : (ot <= 9) ? 6 : (ot <= 16) ? 10 : "Incomplete" ;
            $$.frequency.html(freq);
            $$.total.val(freq * sever * master);
        }).trigger('change');//call the handler immediately, with initially selected options
    });
// cut Calculation
    $(document).ready(function(){
        //cache of static jQuery objects
        var $$ = {
            'often':     $('#task_hazards_attributes_0_cut_frequency_often'),
            'time':      $('#task_hazards_attributes_0_cut_frequency_time'),
            'sever':     $('#task_hazards_attributes_0_cut_risk_severity'),
            'master':    $('#task_hazards_attributes_0_cut_risk_mastery'),
            'frequency': $('#cut_risk_frequency'),
            'total':     $('input#cut_risk_total')
        };
        $('select').on('change', function(){
            var often = parseInt($$.often.val()),
                time = parseInt($$.time.val()),
                sever = parseInt($$.sever.val()),
                master = parseInt($$.master.val()),
                ot = often * time,//keep this member name short, it's about to be used 4 times in the next line
                freq = (ot == 0) ? 0 : (ot <= 2) ? 1 : (ot <= 4) ? 3 : (ot <= 9) ? 6 : (ot <= 16) ? 10 : "Incomplete" ;
            $$.frequency.html(freq);
            $$.total.val(freq * sever * master);
        }).trigger('change');//call the handler immediately, with initially selected options
    });
    $(document).ready(function(){
        //cache of static jQuery objects
        var $$ = {
            'often':     $('#task_hazards_attributes_0_cut_new_frequency_often'),
            'time':      $('#task_hazards_attributes_0_cut_new_frequency_time'),
            'sever':     $('#task_hazards_attributes_0_cut_new_risk_severity'),
            'master':    $('#task_hazards_attributes_0_cut_new_risk_mastery'),
            'frequency': $('#cut_new_risk_frequency'),
            'total':     $('input#cut_new_risk_total')
        };
        $('select').on('change', function(){
            var often = parseInt($$.often.val()),
                time = parseInt($$.time.val()),
                sever = parseInt($$.sever.val()),
                master = parseInt($$.master.val()),
                ot = often * time,//keep this member name short, it's about to be used 4 times in the next line
                freq = (ot == 0) ? 0 : (ot <= 2) ? 1 : (ot <= 4) ? 3 : (ot <= 9) ? 6 : (ot <= 16) ? 10 : "Incomplete" ;
            $$.frequency.html(freq);
            $$.total.val(freq * sever * master);
        }).trigger('change');//call the handler immediately, with initially selected options
    });
// ergo Calculation
    $(document).ready(function(){
        //cache of static jQuery objects
        var $$ = {
            'often':     $('#task_hazards_attributes_0_ergo_frequency_often'),
            'time':      $('#task_hazards_attributes_0_ergo_frequency_time'),
            'sever':     $('#task_hazards_attributes_0_ergo_risk_severity'),
            'master':    $('#task_hazards_attributes_0_ergo_risk_mastery'),
            'frequency': $('#ergo_risk_frequency'),
            'total':     $('input#ergo_risk_total')
        };
        $('select').on('change', function(){
            var often = parseInt($$.often.val()),
                time = parseInt($$.time.val()),
                sever = parseInt($$.sever.val()),
                master = parseInt($$.master.val()),
                ot = often * time,//keep this member name short, it's about to be used 4 times in the next line
                freq = (ot == 0) ? 0 : (ot <= 2) ? 1 : (ot <= 4) ? 3 : (ot <= 9) ? 6 : (ot <= 16) ? 10 : "Incomplete" ;
            $$.frequency.html(freq);
            $$.total.val(freq * sever * master);
        }).trigger('change');//call the handler immediately, with initially selected options
    });
    $(document).ready(function(){
        //cache of static jQuery objects
        var $$ = {
            'often':     $('#task_hazards_attributes_0_ergo_new_frequency_often'),
            'time':      $('#task_hazards_attributes_0_ergo_new_frequency_time'),
            'sever':     $('#task_hazards_attributes_0_ergo_new_risk_severity'),
            'master':    $('#task_hazards_attributes_0_ergo_new_risk_mastery'),
            'frequency': $('#ergo_new_risk_frequency'),
            'total':     $('input#ergo_new_risk_total')
        };
        $('select').on('change', function(){
            var often = parseInt($$.often.val()),
                time = parseInt($$.time.val()),
                sever = parseInt($$.sever.val()),
                master = parseInt($$.master.val()),
                ot = often * time,//keep this member name short, it's about to be used 4 times in the next line
                freq = (ot == 0) ? 0 : (ot <= 2) ? 1 : (ot <= 4) ? 3 : (ot <= 9) ? 6 : (ot <= 16) ? 10 : "Incomplete" ;
            $$.frequency.html(freq);
            $$.total.val(freq * sever * master);
        }).trigger('change');//call the handler immediately, with initially selected options
    });
// fall Calculation
    $(document).ready(function(){
        //cache of static jQuery objects
        var $$ = {
            'often':     $('#task_hazards_attributes_0_fall_frequency_often'),
            'time':      $('#task_hazards_attributes_0_fall_frequency_time'),
            'sever':     $('#task_hazards_attributes_0_fall_risk_severity'),
            'master':    $('#task_hazards_attributes_0_fall_risk_mastery'),
            'frequency': $('#fall_risk_frequency'),
            'total':     $('input#fall_risk_total')
        };
        $('select').on('change', function(){
            var often = parseInt($$.often.val()),
                time = parseInt($$.time.val()),
                sever = parseInt($$.sever.val()),
                master = parseInt($$.master.val()),
                ot = often * time,//keep this member name short, it's about to be used 4 times in the next line
                freq = (ot == 0) ? 0 : (ot <= 2) ? 1 : (ot <= 4) ? 3 : (ot <= 9) ? 6 : (ot <= 16) ? 10 : "Incomplete" ;
            $$.frequency.html(freq);
            $$.total.val(freq * sever * master);
        }).trigger('change');//call the handler immediately, with initially selected options
    });
    $(document).ready(function(){
        //cache of static jQuery objects
        var $$ = {
            'often':     $('#task_hazards_attributes_0_fall_new_frequency_often'),
            'time':      $('#task_hazards_attributes_0_fall_new_frequency_time'),
            'sever':     $('#task_hazards_attributes_0_fall_new_risk_severity'),
            'master':    $('#task_hazards_attributes_0_fall_new_risk_mastery'),
            'frequency': $('#fall_new_risk_frequency'),
            'total':     $('input#fall_new_risk_total')
        };
        $('select').on('change', function(){
            var often = parseInt($$.often.val()),
                time = parseInt($$.time.val()),
                sever = parseInt($$.sever.val()),
                master = parseInt($$.master.val()),
                ot = often * time,//keep this member name short, it's about to be used 4 times in the next line
                freq = (ot == 0) ? 0 : (ot <= 2) ? 1 : (ot <= 4) ? 3 : (ot <= 9) ? 6 : (ot <= 16) ? 10 : "Incomplete" ;
            $$.frequency.html(freq);
            $$.total.val(freq * sever * master);
        }).trigger('change');//call the handler immediately, with initially selected options
    });
// fire Calculation
    $(document).ready(function(){
        //cache of static jQuery objects
        var $$ = {
            'often':     $('#task_hazards_attributes_0_fire_frequency_often'),
            'time':      $('#task_hazards_attributes_0_fire_frequency_time'),
            'sever':     $('#task_hazards_attributes_0_fire_risk_severity'),
            'master':    $('#task_hazards_attributes_0_fire_risk_mastery'),
            'frequency': $('#fire_risk_frequency'),
            'total':     $('input#fire_risk_total')
        };
        $('select').on('change', function(){
            var often = parseInt($$.often.val()),
                time = parseInt($$.time.val()),
                sever = parseInt($$.sever.val()),
                master = parseInt($$.master.val()),
                ot = often * time,//keep this member name short, it's about to be used 4 times in the next line
                freq = (ot == 0) ? 0 : (ot <= 2) ? 1 : (ot <= 4) ? 3 : (ot <= 9) ? 6 : (ot <= 16) ? 10 : "Incomplete" ;
            $$.frequency.html(freq);
            $$.total.val(freq * sever * master);
        }).trigger('change');//call the handler immediately, with initially selected options
    });
    $(document).ready(function(){
        //cache of static jQuery objects
        var $$ = {
            'often':     $('#task_hazards_attributes_0_fire_new_frequency_often'),
            'time':      $('#task_hazards_attributes_0_fire_new_frequency_time'),
            'sever':     $('#task_hazards_attributes_0_fire_new_risk_severity'),
            'master':    $('#task_hazards_attributes_0_fire_new_risk_mastery'),
            'frequency': $('#fire_new_risk_frequency'),
            'total':     $('input#fire_new_risk_total')
        };
        $('select').on('change', function(){
            var often = parseInt($$.often.val()),
                time = parseInt($$.time.val()),
                sever = parseInt($$.sever.val()),
                master = parseInt($$.master.val()),
                ot = often * time,//keep this member name short, it's about to be used 4 times in the next line
                freq = (ot == 0) ? 0 : (ot <= 2) ? 1 : (ot <= 4) ? 3 : (ot <= 9) ? 6 : (ot <= 16) ? 10 : "Incomplete" ;
            $$.frequency.html(freq);
            $$.total.val(freq * sever * master);
        }).trigger('change');//call the handler immediately, with initially selected options
    });
// hazatm Calculation
    $(document).ready(function(){
        //cache of static jQuery objects
        var $$ = {
            'often':     $('#task_hazards_attributes_0_hazatm_frequency_often'),
            'time':      $('#task_hazards_attributes_0_hazatm_frequency_time'),
            'sever':     $('#task_hazards_attributes_0_hazatm_risk_severity'),
            'master':    $('#task_hazards_attributes_0_hazatm_risk_mastery'),
            'frequency': $('#hazatm_risk_frequency'),
            'total':     $('input#hazatm_risk_total')
        };
        $('select').on('change', function(){
            var often = parseInt($$.often.val()),
                time = parseInt($$.time.val()),
                sever = parseInt($$.sever.val()),
                master = parseInt($$.master.val()),
                ot = often * time,//keep this member name short, it's about to be used 4 times in the next line
                freq = (ot == 0) ? 0 : (ot <= 2) ? 1 : (ot <= 4) ? 3 : (ot <= 9) ? 6 : (ot <= 16) ? 10 : "Incomplete" ;
            $$.frequency.html(freq);
            $$.total.val(freq * sever * master);
        }).trigger('change');//call the handler immediately, with initially selected options
    });
    $(document).ready(function(){
        //cache of static jQuery objects
        var $$ = {
            'often':     $('#task_hazards_attributes_0_hazatm_new_frequency_often'),
            'time':      $('#task_hazards_attributes_0_hazatm_new_frequency_time'),
            'sever':     $('#task_hazards_attributes_0_hazatm_new_risk_severity'),
            'master':    $('#task_hazards_attributes_0_hazatm_new_risk_mastery'),
            'frequency': $('#hazatm_new_risk_frequency'),
            'total':     $('input#hazatm_new_risk_total')
        };
        $('select').on('change', function(){
            var often = parseInt($$.often.val()),
                time = parseInt($$.time.val()),
                sever = parseInt($$.sever.val()),
                master = parseInt($$.master.val()),
                ot = often * time,//keep this member name short, it's about to be used 4 times in the next line
                freq = (ot == 0) ? 0 : (ot <= 2) ? 1 : (ot <= 4) ? 3 : (ot <= 9) ? 6 : (ot <= 16) ? 10 : "Incomplete" ;
            $$.frequency.html(freq);
            $$.total.val(freq * sever * master);
        }).trigger('change');//call the handler immediately, with initially selected options
    });
// hazengy Calculation
    $(document).ready(function(){
        //cache of static jQuery objects
        var $$ = {
            'often':     $('#task_hazards_attributes_0_hazengy_frequency_often'),
            'time':      $('#task_hazards_attributes_0_hazengy_frequency_time'),
            'sever':     $('#task_hazards_attributes_0_hazengy_risk_severity'),
            'master':    $('#task_hazards_attributes_0_hazengy_risk_mastery'),
            'frequency': $('#hazengy_risk_frequency'),
            'total':     $('input#hazengy_risk_total')
        };
        $('select').on('change', function(){
            var often = parseInt($$.often.val()),
                time = parseInt($$.time.val()),
                sever = parseInt($$.sever.val()),
                master = parseInt($$.master.val()),
                ot = often * time,//keep this member name short, it's about to be used 4 times in the next line
                freq = (ot == 0) ? 0 : (ot <= 2) ? 1 : (ot <= 4) ? 3 : (ot <= 9) ? 6 : (ot <= 16) ? 10 : "Incomplete" ;
            $$.frequency.html(freq);
            $$.total.val(freq * sever * master);
        }).trigger('change');//call the handler immediately, with initially selected options
    });
    $(document).ready(function(){
        //cache of static jQuery objects
        var $$ = {
            'often':     $('#task_hazards_attributes_0_hazengy_new_frequency_often'),
            'time':      $('#task_hazards_attributes_0_hazengy_new_frequency_time'),
            'sever':     $('#task_hazards_attributes_0_hazengy_new_risk_severity'),
            'master':    $('#task_hazards_attributes_0_hazengy_new_risk_mastery'),
            'frequency': $('#hazengy_new_risk_frequency'),
            'total':     $('input#hazengy_new_risk_total')
        };
        $('select').on('change', function(){
            var often = parseInt($$.often.val()),
                time = parseInt($$.time.val()),
                sever = parseInt($$.sever.val()),
                master = parseInt($$.master.val()),
                ot = often * time,//keep this member name short, it's about to be used 4 times in the next line
                freq = (ot == 0) ? 0 : (ot <= 2) ? 1 : (ot <= 4) ? 3 : (ot <= 9) ? 6 : (ot <= 16) ? 10 : "Incomplete" ;
            $$.frequency.html(freq);
            $$.total.val(freq * sever * master);
        }).trigger('change');//call the handler immediately, with initially selected options
    });
// hazmat Calculation
    $(document).ready(function(){
        //cache of static jQuery objects
        var $$ = {
            'often':     $('#task_hazards_attributes_0_hazmat_frequency_often'),
            'time':      $('#task_hazards_attributes_0_hazmat_frequency_time'),
            'sever':     $('#task_hazards_attributes_0_hazmat_risk_severity'),
            'master':    $('#task_hazards_attributes_0_hazmat_risk_mastery'),
            'frequency': $('#hazmat_risk_frequency'),
            'total':     $('input#hazmat_risk_total')
        };
        $('select').on('change', function(){
            var often = parseInt($$.often.val()),
                time = parseInt($$.time.val()),
                sever = parseInt($$.sever.val()),
                master = parseInt($$.master.val()),
                ot = often * time,//keep this member name short, it's about to be used 4 times in the next line
                freq = (ot == 0) ? 0 : (ot <= 2) ? 1 : (ot <= 4) ? 3 : (ot <= 9) ? 6 : (ot <= 16) ? 10 : "Incomplete" ;
            $$.frequency.html(freq);
            $$.total.val(freq * sever * master);
        }).trigger('change');//call the handler immediately, with initially selected options
    });
    $(document).ready(function(){
        //cache of static jQuery objects
        var $$ = {
            'often':     $('#task_hazards_attributes_0_hazmat_new_frequency_often'),
            'time':      $('#task_hazards_attributes_0_hazmat_new_frequency_time'),
            'sever':     $('#task_hazards_attributes_0_hazmat_new_risk_severity'),
            'master':    $('#task_hazards_attributes_0_hazmat_new_risk_mastery'),
            'frequency': $('#hazmat_new_risk_frequency'),
            'total':     $('input#hazmat_new_risk_total')
        };
        $('select').on('change', function(){
            var often = parseInt($$.often.val()),
                time = parseInt($$.time.val()),
                sever = parseInt($$.sever.val()),
                master = parseInt($$.master.val()),
                ot = often * time,//keep this member name short, it's about to be used 4 times in the next line
                freq = (ot == 0) ? 0 : (ot <= 2) ? 1 : (ot <= 4) ? 3 : (ot <= 9) ? 6 : (ot <= 16) ? 10 : "Incomplete" ;
            $$.frequency.html(freq);
            $$.total.val(freq * sever * master);
        }).trigger('change');//call the handler immediately, with initially selected options
    });
// laz Calculation
    $(document).ready(function(){
        //cache of static jQuery objects
        var $$ = {
            'often':     $('#task_hazards_attributes_0_laz_frequency_often'),
            'time':      $('#task_hazards_attributes_0_laz_frequency_time'),
            'sever':     $('#task_hazards_attributes_0_laz_risk_severity'),
            'master':    $('#task_hazards_attributes_0_laz_risk_mastery'),
            'frequency': $('#laz_risk_frequency'),
            'total':     $('input#laz_risk_total')
        };
        $('select').on('change', function(){
            var often = parseInt($$.often.val()),
                time = parseInt($$.time.val()),
                sever = parseInt($$.sever.val()),
                master = parseInt($$.master.val()),
                ot = often * time,//keep this member name short, it's about to be used 4 times in the next line
                freq = (ot == 0) ? 0 : (ot <= 2) ? 1 : (ot <= 4) ? 3 : (ot <= 9) ? 6 : (ot <= 16) ? 10 : "Incomplete" ;
            $$.frequency.html(freq);
            $$.total.val(freq * sever * master);
        }).trigger('change');//call the handler immediately, with initially selected options
    });
    $(document).ready(function(){
        //cache of static jQuery objects
        var $$ = {
            'often':     $('#task_hazards_attributes_0_laz_new_frequency_often'),
            'time':      $('#task_hazards_attributes_0_laz_new_frequency_time'),
            'sever':     $('#task_hazards_attributes_0_laz_new_risk_severity'),
            'master':    $('#task_hazards_attributes_0_laz_new_risk_mastery'),
            'frequency': $('#laz_new_risk_frequency'),
            'total':     $('input#laz_new_risk_total')
        };
        $('select').on('change', function(){
            var often = parseInt($$.often.val()),
                time = parseInt($$.time.val()),
                sever = parseInt($$.sever.val()),
                master = parseInt($$.master.val()),
                ot = often * time,//keep this member name short, it's about to be used 4 times in the next line
                freq = (ot == 0) ? 0 : (ot <= 2) ? 1 : (ot <= 4) ? 3 : (ot <= 9) ? 6 : (ot <= 16) ? 10 : "Incomplete" ;
            $$.frequency.html(freq);
            $$.total.val(freq * sever * master);
        }).trigger('change');//call the handler immediately, with initially selected options
    });
// lonewrk Calculation
    $(document).ready(function(){
        //cache of static jQuery objects
        var $$ = {
            'often':     $('#task_hazards_attributes_0_lonewrk_frequency_often'),
            'time':      $('#task_hazards_attributes_0_lonewrk_frequency_time'),
            'sever':     $('#task_hazards_attributes_0_lonewrk_risk_severity'),
            'master':    $('#task_hazards_attributes_0_lonewrk_risk_mastery'),
            'frequency': $('#lonewrk_risk_frequency'),
            'total':     $('input#lonewrk_risk_total')
        };
        $('select').on('change', function(){
            var often = parseInt($$.often.val()),
                time = parseInt($$.time.val()),
                sever = parseInt($$.sever.val()),
                master = parseInt($$.master.val()),
                ot = often * time,//keep this member name short, it's about to be used 4 times in the next line
                freq = (ot == 0) ? 0 : (ot <= 2) ? 1 : (ot <= 4) ? 3 : (ot <= 9) ? 6 : (ot <= 16) ? 10 : "Incomplete" ;
            $$.frequency.html(freq);
            $$.total.val(freq * sever * master);
        }).trigger('change');//call the handler immediately, with initially selected options
    });
    $(document).ready(function(){
        //cache of static jQuery objects
        var $$ = {
            'often':     $('#task_hazards_attributes_0_lonewrk_new_frequency_often'),
            'time':      $('#task_hazards_attributes_0_lonewrk_new_frequency_time'),
            'sever':     $('#task_hazards_attributes_0_lonewrk_new_risk_severity'),
            'master':    $('#task_hazards_attributes_0_lonewrk_new_risk_mastery'),
            'frequency': $('#lonewrk_new_risk_frequency'),
            'total':     $('input#lonewrk_new_risk_total')
        };
        $('select').on('change', function(){
            var often = parseInt($$.often.val()),
                time = parseInt($$.time.val()),
                sever = parseInt($$.sever.val()),
                master = parseInt($$.master.val()),
                ot = often * time,//keep this member name short, it's about to be used 4 times in the next line
                freq = (ot == 0) ? 0 : (ot <= 2) ? 1 : (ot <= 4) ? 3 : (ot <= 9) ? 6 : (ot <= 16) ? 10 : "Incomplete" ;
            $$.frequency.html(freq);
            $$.total.val(freq * sever * master);
        }).trigger('change');//call the handler immediately, with initially selected options
    });
// mag Calculation
    $(document).ready(function(){
        //cache of static jQuery objects
        var $$ = {
            'often':     $('#task_hazards_attributes_0_mag_frequency_often'),
            'time':      $('#task_hazards_attributes_0_mag_frequency_time'),
            'sever':     $('#task_hazards_attributes_0_mag_risk_severity'),
            'master':    $('#task_hazards_attributes_0_mag_risk_mastery'),
            'frequency': $('#mag_risk_frequency'),
            'total':     $('input#mag_risk_total')
        };
        $('select').on('change', function(){
            var often = parseInt($$.often.val()),
                time = parseInt($$.time.val()),
                sever = parseInt($$.sever.val()),
                master = parseInt($$.master.val()),
                ot = often * time,//keep this member name short, it's about to be used 4 times in the next line
                freq = (ot == 0) ? 0 : (ot <= 2) ? 1 : (ot <= 4) ? 3 : (ot <= 9) ? 6 : (ot <= 16) ? 10 : "Incomplete" ;
            $$.frequency.html(freq);
            $$.total.val(freq * sever * master);
        }).trigger('change');//call the handler immediately, with initially selected options
    });
    $(document).ready(function(){
        //cache of static jQuery objects
        var $$ = {
            'often':     $('#task_hazards_attributes_0_mag_new_frequency_often'),
            'time':      $('#task_hazards_attributes_0_mag_new_frequency_time'),
            'sever':     $('#task_hazards_attributes_0_mag_new_risk_severity'),
            'master':    $('#task_hazards_attributes_0_mag_new_risk_mastery'),
            'frequency': $('#mag_new_risk_frequency'),
            'total':     $('input#mag_new_risk_total')
        };
        $('select').on('change', function(){
            var often = parseInt($$.often.val()),
                time = parseInt($$.time.val()),
                sever = parseInt($$.sever.val()),
                master = parseInt($$.master.val()),
                ot = often * time,//keep this member name short, it's about to be used 4 times in the next line
                freq = (ot == 0) ? 0 : (ot <= 2) ? 1 : (ot <= 4) ? 3 : (ot <= 9) ? 6 : (ot <= 16) ? 10 : "Incomplete" ;
            $$.frequency.html(freq);
            $$.total.val(freq * sever * master);
        }).trigger('change');//call the handler immediately, with initially selected options
    });
// mechand Calculation
    $(document).ready(function(){
        //cache of static jQuery objects
        var $$ = {
            'often':     $('#task_hazards_attributes_0_mechand_frequency_often'),
            'time':      $('#task_hazards_attributes_0_mechand_frequency_time'),
            'sever':     $('#task_hazards_attributes_0_mechand_risk_severity'),
            'master':    $('#task_hazards_attributes_0_mechand_risk_mastery'),
            'frequency': $('#mechand_risk_frequency'),
            'total':     $('input#mechand_risk_total')
        };
        $('select').on('change', function(){
            var often = parseInt($$.often.val()),
                time = parseInt($$.time.val()),
                sever = parseInt($$.sever.val()),
                master = parseInt($$.master.val()),
                ot = often * time,//keep this member name short, it's about to be used 4 times in the next line
                freq = (ot == 0) ? 0 : (ot <= 2) ? 1 : (ot <= 4) ? 3 : (ot <= 9) ? 6 : (ot <= 16) ? 10 : "Incomplete" ;
            $$.frequency.html(freq);
            $$.total.val(freq * sever * master);
        }).trigger('change');//call the handler immediately, with initially selected options
    });
    $(document).ready(function(){
        //cache of static jQuery objects
        var $$ = {
            'often':     $('#task_hazards_attributes_0_mechand_new_frequency_often'),
            'time':      $('#task_hazards_attributes_0_mechand_new_frequency_time'),
            'sever':     $('#task_hazards_attributes_0_mechand_new_risk_severity'),
            'master':    $('#task_hazards_attributes_0_mechand_new_risk_mastery'),
            'frequency': $('#mechand_new_risk_frequency'),
            'total':     $('input#mechand_new_risk_total')
        };
        $('select').on('change', function(){
            var often = parseInt($$.often.val()),
                time = parseInt($$.time.val()),
                sever = parseInt($$.sever.val()),
                master = parseInt($$.master.val()),
                ot = often * time,//keep this member name short, it's about to be used 4 times in the next line
                freq = (ot == 0) ? 0 : (ot <= 2) ? 1 : (ot <= 4) ? 3 : (ot <= 9) ? 6 : (ot <= 16) ? 10 : "Incomplete" ;
            $$.frequency.html(freq);
            $$.total.val(freq * sever * master);
        }).trigger('change');//call the handler immediately, with initially selected options
    });
// noise Calculation
    $(document).ready(function(){
        //cache of static jQuery objects
        var $$ = {
            'often':     $('#task_hazards_attributes_0_noise_frequency_often'),
            'time':      $('#task_hazards_attributes_0_noise_frequency_time'),
            'sever':     $('#task_hazards_attributes_0_noise_risk_severity'),
            'master':    $('#task_hazards_attributes_0_noise_risk_mastery'),
            'frequency': $('#noise_risk_frequency'),
            'total':     $('input#noise_risk_total')
        };
        $('select').on('change', function(){
            var often = parseInt($$.often.val()),
                time = parseInt($$.time.val()),
                sever = parseInt($$.sever.val()),
                master = parseInt($$.master.val()),
                ot = often * time,//keep this member name short, it's about to be used 4 times in the next line
                freq = (ot == 0) ? 0 : (ot <= 2) ? 1 : (ot <= 4) ? 3 : (ot <= 9) ? 6 : (ot <= 16) ? 10 : "Incomplete" ;
            $$.frequency.html(freq);
            $$.total.val(freq * sever * master);
        }).trigger('change');//call the handler immediately, with initially selected options
    });
    $(document).ready(function(){
        //cache of static jQuery objects
        var $$ = {
            'often':     $('#task_hazards_attributes_0_noise_new_frequency_often'),
            'time':      $('#task_hazards_attributes_0_noise_new_frequency_time'),
            'sever':     $('#task_hazards_attributes_0_noise_new_risk_severity'),
            'master':    $('#task_hazards_attributes_0_noise_new_risk_mastery'),
            'frequency': $('#noise_new_risk_frequency'),
            'total':     $('input#noise_new_risk_total')
        };
        $('select').on('change', function(){
            var often = parseInt($$.often.val()),
                time = parseInt($$.time.val()),
                sever = parseInt($$.sever.val()),
                master = parseInt($$.master.val()),
                ot = often * time,//keep this member name short, it's about to be used 4 times in the next line
                freq = (ot == 0) ? 0 : (ot <= 2) ? 1 : (ot <= 4) ? 3 : (ot <= 9) ? 6 : (ot <= 16) ? 10 : "Incomplete" ;
            $$.frequency.html(freq);
            $$.total.val(freq * sever * master);
        }).trigger('change');//call the handler immediately, with initially selected options
    });
// ovrhead Calculation
    $(document).ready(function(){
        //cache of static jQuery objects
        var $$ = {
            'often':     $('#task_hazards_attributes_0_ovrhead_frequency_often'),
            'time':      $('#task_hazards_attributes_0_ovrhead_frequency_time'),
            'sever':     $('#task_hazards_attributes_0_ovrhead_risk_severity'),
            'master':    $('#task_hazards_attributes_0_ovrhead_risk_mastery'),
            'frequency': $('#ovrhead_risk_frequency'),
            'total':     $('input#ovrhead_risk_total')
        };
        $('select').on('change', function(){
            var often = parseInt($$.often.val()),
                time = parseInt($$.time.val()),
                sever = parseInt($$.sever.val()),
                master = parseInt($$.master.val()),
                ot = often * time,//keep this member name short, it's about to be used 4 times in the next line
                freq = (ot == 0) ? 0 : (ot <= 2) ? 1 : (ot <= 4) ? 3 : (ot <= 9) ? 6 : (ot <= 16) ? 10 : "Incomplete" ;
            $$.frequency.html(freq);
            $$.total.val(freq * sever * master);
        }).trigger('change');//call the handler immediately, with initially selected options
    });
    $(document).ready(function(){
        //cache of static jQuery objects
        var $$ = {
            'often':     $('#task_hazards_attributes_0_ovrhead_new_frequency_often'),
            'time':      $('#task_hazards_attributes_0_ovrhead_new_frequency_time'),
            'sever':     $('#task_hazards_attributes_0_ovrhead_new_risk_severity'),
            'master':    $('#task_hazards_attributes_0_ovrhead_new_risk_mastery'),
            'frequency': $('#ovrhead_new_risk_frequency'),
            'total':     $('input#ovrhead_new_risk_total')
        };
        $('select').on('change', function(){
            var often = parseInt($$.often.val()),
                time = parseInt($$.time.val()),
                sever = parseInt($$.sever.val()),
                master = parseInt($$.master.val()),
                ot = often * time,//keep this member name short, it's about to be used 4 times in the next line
                freq = (ot == 0) ? 0 : (ot <= 2) ? 1 : (ot <= 4) ? 3 : (ot <= 9) ? 6 : (ot <= 16) ? 10 : "Incomplete" ;
            $$.frequency.html(freq);
            $$.total.val(freq * sever * master);
        }).trigger('change');//call the handler immediately, with initially selected options
    });
// rad Calculation
    $(document).ready(function(){
        //cache of static jQuery objects
        var $$ = {
            'often':     $('#task_hazards_attributes_0_rad_frequency_often'),
            'time':      $('#task_hazards_attributes_0_rad_frequency_time'),
            'sever':     $('#task_hazards_attributes_0_rad_risk_severity'),
            'master':    $('#task_hazards_attributes_0_rad_risk_mastery'),
            'frequency': $('#rad_risk_frequency'),
            'total':     $('input#rad_risk_total')
        };
        $('select').on('change', function(){
            var often = parseInt($$.often.val()),
                time = parseInt($$.time.val()),
                sever = parseInt($$.sever.val()),
                master = parseInt($$.master.val()),
                ot = often * time,//keep this member name short, it's about to be used 4 times in the next line
                freq = (ot == 0) ? 0 : (ot <= 2) ? 1 : (ot <= 4) ? 3 : (ot <= 9) ? 6 : (ot <= 16) ? 10 : "Incomplete" ;
            $$.frequency.html(freq);
            $$.total.val(freq * sever * master);
        }).trigger('change');//call the handler immediately, with initially selected options
    });
    $(document).ready(function(){
        //cache of static jQuery objects
        var $$ = {
            'often':     $('#task_hazards_attributes_0_rad_new_frequency_often'),
            'time':      $('#task_hazards_attributes_0_rad_new_frequency_time'),
            'sever':     $('#task_hazards_attributes_0_rad_new_risk_severity'),
            'master':    $('#task_hazards_attributes_0_rad_new_risk_mastery'),
            'frequency': $('#rad_new_risk_frequency'),
            'total':     $('input#rad_new_risk_total')
        };
        $('select').on('change', function(){
            var often = parseInt($$.often.val()),
                time = parseInt($$.time.val()),
                sever = parseInt($$.sever.val()),
                master = parseInt($$.master.val()),
                ot = often * time,//keep this member name short, it's about to be used 4 times in the next line
                freq = (ot == 0) ? 0 : (ot <= 2) ? 1 : (ot <= 4) ? 3 : (ot <= 9) ? 6 : (ot <= 16) ? 10 : "Incomplete" ;
            $$.frequency.html(freq);
            $$.total.val(freq * sever * master);
        }).trigger('change');//call the handler immediately, with initially selected options
    });
// road Calculation
    $(document).ready(function(){
        //cache of static jQuery objects
        var $$ = {
            'often':     $('#task_hazards_attributes_0_road_frequency_often'),
            'time':      $('#task_hazards_attributes_0_road_frequency_time'),
            'sever':     $('#task_hazards_attributes_0_road_risk_severity'),
            'master':    $('#task_hazards_attributes_0_road_risk_mastery'),
            'frequency': $('#road_risk_frequency'),
            'total':     $('input#road_risk_total')
        };
        $('select').on('change', function(){
            var often = parseInt($$.often.val()),
                time = parseInt($$.time.val()),
                sever = parseInt($$.sever.val()),
                master = parseInt($$.master.val()),
                ot = often * time,//keep this member name short, it's about to be used 4 times in the next line
                freq = (ot == 0) ? 0 : (ot <= 2) ? 1 : (ot <= 4) ? 3 : (ot <= 9) ? 6 : (ot <= 16) ? 10 : "Incomplete" ;
            $$.frequency.html(freq);
            $$.total.val(freq * sever * master);
        }).trigger('change');//call the handler immediately, with initially selected options
    });
    $(document).ready(function(){
        //cache of static jQuery objects
        var $$ = {
            'often':     $('#task_hazards_attributes_0_road_new_frequency_often'),
            'time':      $('#task_hazards_attributes_0_road_new_frequency_time'),
            'sever':     $('#task_hazards_attributes_0_road_new_risk_severity'),
            'master':    $('#task_hazards_attributes_0_road_new_risk_mastery'),
            'frequency': $('#road_new_risk_frequency'),
            'total':     $('input#road_new_risk_total')
        };
        $('select').on('change', function(){
            var often = parseInt($$.often.val()),
                time = parseInt($$.time.val()),
                sever = parseInt($$.sever.val()),
                master = parseInt($$.master.val()),
                ot = often * time,//keep this member name short, it's about to be used 4 times in the next line
                freq = (ot == 0) ? 0 : (ot <= 2) ? 1 : (ot <= 4) ? 3 : (ot <= 9) ? 6 : (ot <= 16) ? 10 : "Incomplete" ;
            $$.frequency.html(freq);
            $$.total.val(freq * sever * master);
        }).trigger('change');//call the handler immediately, with initially selected options
    });
// temp Calculation
    $(document).ready(function(){
        //cache of static jQuery objects
        var $$ = {
            'often':     $('#task_hazards_attributes_0_temp_frequency_often'),
            'time':      $('#task_hazards_attributes_0_temp_frequency_time'),
            'sever':     $('#task_hazards_attributes_0_temp_risk_severity'),
            'master':    $('#task_hazards_attributes_0_temp_risk_mastery'),
            'frequency': $('#temp_risk_frequency'),
            'total':     $('input#temp_risk_total')
        };
        $('select').on('change', function(){
            var often = parseInt($$.often.val()),
                time = parseInt($$.time.val()),
                sever = parseInt($$.sever.val()),
                master = parseInt($$.master.val()),
                ot = often * time,//keep this member name short, it's about to be used 4 times in the next line
                freq = (ot == 0) ? 0 : (ot <= 2) ? 1 : (ot <= 4) ? 3 : (ot <= 9) ? 6 : (ot <= 16) ? 10 : "Incomplete" ;
            $$.frequency.html(freq);
            $$.total.val(freq * sever * master);
        }).trigger('change');//call the handler immediately, with initially selected options
    });
    $(document).ready(function(){
        //cache of static jQuery objects
        var $$ = {
            'often':     $('#task_hazards_attributes_0_temp_new_frequency_often'),
            'time':      $('#task_hazards_attributes_0_temp_new_frequency_time'),
            'sever':     $('#task_hazards_attributes_0_temp_new_risk_severity'),
            'master':    $('#task_hazards_attributes_0_temp_new_risk_mastery'),
            'frequency': $('#temp_new_risk_frequency'),
            'total':     $('input#temp_new_risk_total')
        };
        $('select').on('change', function(){
            var often = parseInt($$.often.val()),
                time = parseInt($$.time.val()),
                sever = parseInt($$.sever.val()),
                master = parseInt($$.master.val()),
                ot = often * time,//keep this member name short, it's about to be used 4 times in the next line
                freq = (ot == 0) ? 0 : (ot <= 2) ? 1 : (ot <= 4) ? 3 : (ot <= 9) ? 6 : (ot <= 16) ? 10 : "Incomplete" ;
            $$.frequency.html(freq);
            $$.total.val(freq * sever * master);
        }).trigger('change');//call the handler immediately, with initially selected options
    });
// tool Calculation
    $(document).ready(function(){
        //cache of static jQuery objects
        var $$ = {
            'often':     $('#task_hazards_attributes_0_tool_frequency_often'),
            'time':      $('#task_hazards_attributes_0_tool_frequency_time'),
            'sever':     $('#task_hazards_attributes_0_tool_risk_severity'),
            'master':    $('#task_hazards_attributes_0_tool_risk_mastery'),
            'frequency': $('#tool_risk_frequency'),
            'total':     $('input#tool_risk_total')
        };
        $('select').on('change', function(){
            var often = parseInt($$.often.val()),
                time = parseInt($$.time.val()),
                sever = parseInt($$.sever.val()),
                master = parseInt($$.master.val()),
                ot = often * time,//keep this member name short, it's about to be used 4 times in the next line
                freq = (ot == 0) ? 0 : (ot <= 2) ? 1 : (ot <= 4) ? 3 : (ot <= 9) ? 6 : (ot <= 16) ? 10 : "Incomplete" ;
            $$.frequency.html(freq);
            $$.total.val(freq * sever * master);
        }).trigger('change');//call the handler immediately, with initially selected options
    });
    $(document).ready(function(){
        //cache of static jQuery objects
        var $$ = {
            'often':     $('#task_hazards_attributes_0_tool_new_frequency_often'),
            'time':      $('#task_hazards_attributes_0_tool_new_frequency_time'),
            'sever':     $('#task_hazards_attributes_0_tool_new_risk_severity'),
            'master':    $('#task_hazards_attributes_0_tool_new_risk_mastery'),
            'frequency': $('#tool_new_risk_frequency'),
            'total':     $('input#tool_new_risk_total')
        };
        $('select').on('change', function(){
            var often = parseInt($$.often.val()),
                time = parseInt($$.time.val()),
                sever = parseInt($$.sever.val()),
                master = parseInt($$.master.val()),
                ot = often * time,//keep this member name short, it's about to be used 4 times in the next line
                freq = (ot == 0) ? 0 : (ot <= 2) ? 1 : (ot <= 4) ? 3 : (ot <= 9) ? 6 : (ot <= 16) ? 10 : "Incomplete" ;
            $$.frequency.html(freq);
            $$.total.val(freq * sever * master);
        }).trigger('change');//call the handler immediately, with initially selected options
    });