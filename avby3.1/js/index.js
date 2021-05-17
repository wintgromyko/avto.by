$(document).ready(function () {
    function openNav() {
        if ($(document).width() <= 768) {
            
            document.getElementById("mySidenav").style.width = "100%";
        } else {
            document.getElementById("mySidenav").style.width = "420px";
            document.body.style.overflow = "hidden";
            $('#my-owerlay').addClass('my-owerlay');

        }

    }
    $('.checkbox-btn').click(function(e){
        if ($('.checkbox-btn input').is(':checked')){
     $('.checkbox-btn span').text('ЗАКРЫТ');
     }else{
     $('.checkbox-btn span').text('ОТКРЫТ');
     }});
     $('.kplus').on('click', function () {
        var theClass = $(this).attr('id');
        $('.msg' + theClass).toggle();
        if ($('.text' + theClass).css('display') == 'none') {
            $('.text' + theClass).animate({ height: 'show' }, 500);
            $('#' + theClass + '.kplus').addClass('viz');
            $('#' + theClass + '.kplus span').replaceWith('<span>Отменить</span>');
        } else {
            $('.text' + theClass).animate({ height: 'hide' }, 100);
            $('#' + theClass + '.kplus').removeClass('viz');
            $('#' + theClass + '.kplus span').replaceWith('<span>Изменить</span>');
        }
    });

    $('body').on('click', '.password-control-old', function () {
        if ($('#password-old').attr('type') == 'password') {
            $(this).addClass('view');
            $('#password-old').attr('type', 'text');
        } else {
            $(this).removeClass('view');
            $('#password-old').attr('type', 'password');
        }
        return false;
    });
    $('body').on('click', '.password-control-new', function () {
        if ($('#password-new').attr('type') == 'password') {
            $(this).addClass('view');
            $('#password-new').attr('type', 'text');
        } else {
            $(this).removeClass('view');
            $('#password-new').attr('type', 'password');
        }
        return false;
    });

    $('.checkbox-btn input').focusout(function(){
        $(this).parent().removeClass('focused');
    });

    $(document).scroll(function(){
        if ($(document).width() <= 768 && $('.settings').html() !=undefined) {
        if($(document).scrollTop() >= $('.settings').offset().top-$(window).height() || $(document).scrollTop() <=1100){
            $('.btn-show').removeClass('btn-fixed');
        }else{
            $('.btn-show').addClass('btn-fixed');
        }
        }
        });
        $('#btn-add-foto').click(function (e) {
            $('.add-foto-right input').click();
        });
    /* Установите ширину боковой навигации на 0 */
    function closeNav() {
        document.getElementById("mySidenav").style.width = "0";
        document.body.style.overflow = "unset";
        $('#my-owerlay').removeClass('my-owerlay');
    }
    $('.hide a').click(function (e) {
        var aval = e.target.textContent;
        $('.hide').hide();
        $('.showModelCar').text(aval);
        $('input[name="brend"]').val(aval);
    });
    $('.car-model a').click(function (e) {
        var model = e.target.textContent;
        $('.model-list').hide();
        $('.model-title').addClass('colorGreen');
        $('.car-model path').attr('d','M4 12.3137L9.65685 17.9706L20.9706 6.65687');
        $('.model-title').text(model);
        $('.car-model').append('<div class="hr"></div>');
        $('input[name="model"]').val(model);
        $('.years').show();
    });
    $('.years a').click(function (e) {
        var year = e.target.textContent;
        $('.years-list').hide();
        $('.year-title').addClass('colorGreen');
        $('.years path').attr('d','M4 12.3137L9.65685 17.9706L20.9706 6.65687');
        $('.year-title').text(year);
        $('.years').append('<div class="hr"></div>');
        $('input[name="year"]').val(year);
        $('.parameters').show();
        $('.video-wrap').show();
        $('.add-foto').show();
        $('.equipment').show();
        $('.description-price').show();
        $('.hr-hide').show();
        $('.vin').show();
        $('.color-car').show();
        
    });
    $('#a-car').click(function () {
        $('input[name="transport"][value="a-car"]').prop('checked', true);
        $('.hide').hide();
        $('.a-car').show();
    });
     $('.hide a').click(function () {
         $('.showModel').show();
    });

    $('#mototechnics').click(function () {
        $('input[name="transport"][value="mototechnics"]').prop('checked', true);
        $('.hide').hide();
        $('.mototechnics').show();
    });

    $('#truck').click(function () {
        $('input[name="transport"][value="truck"]').prop('checked', true);
        $('.hide').hide();
        $('.truck').show();
    });
    $('#special-equipment').click(function () {
        $('input[name="transport"][value="special-equipment"]').prop('checked', true);
        $('.hide').hide();
        $('.special-equipment').show();
    });

    $('#agricultural-machinery').click(function () {
        $('input[name="transport"][value="agricultural-machinery"]').prop('checked', true);
        $('.hide').hide();
        $('.agricultural-machinery').show();
    });
    $('#buses').click(function () {
        $('input[name="transport"][value="buses"]').prop('checked', true);
        $('.hide').hide();
        $('.buses').show();
    });

    $('#trailers').click(function () {
        $('input[name="transport"][value="trailers"]').prop('checked', true);
        $('.hide').hide();
        $('.trailers').show();
    });


    $('.btn-set').click(function () {
        $('.set-wrap').toggle();
    });

    $(".nav-block-item").click(function (e) {
        var $clicked_el = $(e.currentTarget);
        var clicked_class = e.currentTarget.className;
        $(".nav-block-item").css('background-color', '#1E1E1E');
        $clicked_el.css('background-color', '#00AF68');
        $(".nav-block-item path").css('fill', '#00AF68');
        $clicked_el.children('svg').children('path').css('fill', '#fff');
        $clicked_el.children('svg').children('g').children('path').css('fill', '#fff');
    });
    $('.btn-login').click(function () {
        openNav();
    });
    $('.closebtn').click(function () {
        closeNav();
    });
    $('#my-owerlay').click(function () {
        closeNav();
    });
    $('.back-login').click(function () {
        $('.check_in').hide();
        $('.recovery').hide();
        $('.login').show();
    });
    $('.wat a').click(function () {
        $('.login').hide();
        $('.recovery').show();
    });
    $('#reg').click(function () {
        $('.login').hide();
        $('.check_in').show();
    });
    $(".switch input").click(function () {
        if ($(this).is(':checked')) {
            $("head").append('<link href="css/white.css" rel="stylesheet">');
            $('.filter').first().css('background-color', ' rgba(0, 0, 0, 0.8)');
            $('.set-color').text('Светлая');
            $('.navbar-toggler-icon>svg path').first().attr('stroke', '#282828');
            $('.navbar-toggler-icon>svg path').last().attr('stroke', '#282828');
            // $('.navbar-toggler-icon>svg path').first().attr('d' ,'M6 6L18.7742 18.7742');
            // $('.navbar-toggler-icon>svg path').last().attr('d' ,'M6.47821 3.33331L2.00016 7.99998L6.47821 12.6666');
        } else {
            $('link[href="css/white.css"]').remove();
            $('.set-color').text('Тёмная');
            $('.navbar-toggler-icon>svg path').first().attr('stroke', '#fff');
            $('.navbar-toggler-icon>svg path').last().attr('stroke', '#fff');
        }

    });
    $("#btn-next-4").click(function () {
        $('.form-check').css('display', 'block');

    });
    $(".form-2 .back").click(function (b) {
        $('.bread-crumbs').removeClass('d-flex');
        $('#one,#two,#three').removeClass('p-2');
        $('#one').removeClass('mr-auto');
        $('.form-buy').removeClass('w-500');
        $('.data-time input').last().removeClass('m-l-24');
        $('.form-2').hide();
        $('.bread-crumbs').hide();
        $('.title h1').show();
        $('.form-1').show();


        b.preventDefault();
    });
    $(".form-3 .back").click(function (b) {
        $('.form-3').hide();
        $('.form-2').show();
        $('.full-name input').last().removeClass('m-l-24');
        $('#two').css('opacity', '80%');
        $('#two>svg circle ').first().attr('fill', '#fff');
        $('#two>svg text ').attr('fill', '#282828');
        if (768 > $(document).width()) {
            $('#two').removeClass('mr-auto');
            $('#two span').hide();
            $('#one').addClass('mr-auto');
            $('#one span').show();
        }
        b.preventDefault();
    });
    $("#btn-next").click(function (e) {
        $.ajaxSetup({
            headers: {
            }
        });
        e.preventDefault();
        if (1200 < $(document).width()) {
            $('.form-buy').addClass('w-500');
            $('.data-time').addClass('d-flex', ' justify-content-md-between');
            $('.data-time input').last().addClass('m-l-24');
        }
        if (768 > $(document).width()) {
            $('.bread-crumbs').addClass('d-flex');
            $('#one,#two,#three').addClass('p-2');
            $('#one').addClass('mr-auto');
            $('#one span').show();

        }
        $('.form-1').hide();
        $('.title h1').hide();
        $('.bread-crumbs').show();
        $('.form-2').show();
        $("#btn-next-2").click(function (l) {
            $.ajaxSetup({
                headers: {
                }
            });
            l.preventDefault();
            if (1200 < $(document).width()) {
                $('.full-name').addClass('d-flex', ' justify-content-md-between');
                $('.full-name input').last().addClass('m-l-24');
            }
            if (768 > $(document).width()) {
                $('.bread-crumbs').addClass('d-flex');
                $('#one').addClass('mr-auto');
                $('#one').removeClass('mr-auto');
                $('#two').addClass('mr-auto');
                $('#one span').show();
                $('#one span').hide();
                $('#two span').show();
            }
            $('.form-2').hide();
            $('.form-3').show();
            $('#two').css('opacity', '100%');
            $('#two>svg circle ').first().attr('fill', '#00AF68');
            $('#two>svg text ').attr('fill', '#fff');
            $("#btn-next-3").click(function (m) {
                $.ajaxSetup({
                    headers: {
                    }
                });
                m.preventDefault();
                if (768 > $(document).width()) {
                    $('#two').removeClass('mr-auto');
                    $('#three span').show();
                    $('#two span').hide();
                    $('.form-buy').css('width', '100%');
                }
                if (1200 < $(document).width()) {
                    $('.form-buy').removeClass('w-500');
                    $('.form-buy').addClass('w-748');
                    $('.end-form').addClass('d-flex');
                    $('.end-form-left').addClass('col-md-8');
                    $('.end-form-right').addClass('col-md-4');
                    $('.end-form-right').addClass('d-flex');
                    $('.end-form-right').addClass('align-items-end');
                    $('.end-form-right').addClass('flex-column');
                    $('.end-form-right p').addClass('p-2');
                    $('.end-form-right span').addClass('p-2');
                    $('.end-form-right button').addClass('mt-auto p-2');

                }

                $('.form-buy form').hide();
                $('.end-form').show();
                $('#three').css('opacity', '100%');
                $('#three>svg circle ').first().attr('fill', '#00AF68');
                $('#three>svg text ').attr('fill', '#fff');
                var formData = {
                    'car-brand': jQuery('select[name = "car-brand"]').val(),
                    'model': jQuery('select[name = "model"]').val(),
                    'year': jQuery('input[name = "year"]').val(),
                    'email': jQuery('input[name = "email"]').val(),
                    'region': jQuery('input[name = "region"]').val(),
                    'сity': jQuery('input[name = "сity"]').val(),
                    'office': jQuery('input[name = "office"]').val(),
                    'date': jQuery('input[type = "date"]').val(),
                    'time': jQuery('input[type = "time"]').val(),
                    'name': jQuery('input[name = "name"]').val(),
                    'surname': jQuery('input[name = "surname"]').val(),
                    'emali2': jQuery('input[name = "emali2"]').val(),
                    'tel': jQuery('input[type = "tel"]').val()
                };
                $('.data').text(formData['date'] + ', ' + formData['time']);
                $('.office').text(formData['office']);
                $('.car').text(formData['car-brand'] + ', ' + formData['model'] + ' ,[' + formData['year'] + ']');
                console.log(formData);
                // $.ajax({
                //             type: "POST",
                //             url: "",
                //             data: formData,
                //             dataType: 'json',
                //             success: function (data) {
                //                  console.log(data);
                //             },
                //             error: function (data) {
                //                  console.log(data);
                //             }
                //         });
            });
        });
    });
});
// $(window).keyup(function(e){
//     var target = $('.checkbox-btn input:focus');
//     if (e.keyCode == 9 && $(target).length){
//         $(target).parent().addClass('focused');
//     }
// });
//  $('.checkbox-btn').click(function(){
//      if ($('.checkbox-btn input').is(':checked')){
//   $('.checkbox-btn span').text('ЗАКРЫТ');
//   }else{
//   $('.checkbox-btn span').text('ОТКРЫТ');
//   }
//  });

