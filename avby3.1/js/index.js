$(document).ready(function(){
  $(".page-link").hover(function(){
      
    $(this).children().children().attr('stroke','#00AF68');
    }, function(){
        $(this).children().children().attr('stroke','#fff');
  });
    $('.btn-set').click(function(){
        $('.set-wrap').toggle();
    });
    $('#reg').click(function(){
        $('.login').hide();
        $('.check_in').show();
    });
    $( ".switch input" ).click(function() {
        if ($(this).is(':checked')){
            $( "head" ).append('<link href="css/white.css" rel="stylesheet">');
            $('.filter').first().css('background-color',' rgba(0, 0, 0, 0.8)');
            $('.set-color').text('Светлая');
            $('.navbar-toggler-icon>svg path').first().attr('stroke' ,'#282828');
            $('.navbar-toggler-icon>svg path').last().attr('stroke' ,'#282828');
            // $('.navbar-toggler-icon>svg path').first().attr('d' ,'M6 6L18.7742 18.7742');
            // $('.navbar-toggler-icon>svg path').last().attr('d' ,'M6.47821 3.33331L2.00016 7.99998L6.47821 12.6666');
        } else {
            $('link[href="css/white.css"]').remove();
            $('.set-color').text('Тёмная');
            $('.navbar-toggler-icon>svg path').first().attr('stroke' ,'#fff');
            $('.navbar-toggler-icon>svg path').last().attr('stroke' ,'#fff');
        }
        
      });
          $( "#btn-next-4" ).click(function() {
            $('.form-check').css('display','block');
        
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
            $('#two').css('opacity','80%');
            $('#two>svg circle ').first().attr('fill','#fff');
            $('#two>svg text ').attr('fill','#282828');
            if(768 > $(document).width()){
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
        if(1200 < $(document).width()){
            $('.form-buy').addClass('w-500');
            $('.data-time').addClass('d-flex' ,' justify-content-md-between');
            $('.data-time input').last().addClass('m-l-24');
        }
        if(768 > $(document).width()){
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
            if(1200 < $(document).width()){
                $('.full-name').addClass('d-flex' ,' justify-content-md-between');
                $('.full-name input').last().addClass('m-l-24');
            }
            if(768 > $(document).width()){
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
            $('#two').css('opacity','100%');
            $('#two>svg circle ').first().attr('fill','#00AF68');
            $('#two>svg text ').attr('fill','#fff');
            $("#btn-next-3").click(function (m) {
                $.ajaxSetup({
                    headers: {
                    }
                });
                m.preventDefault();
                if(768 > $(document).width()){
                    $('#two').removeClass('mr-auto');
                    $('#three span').show();
                    $('#two span').hide();
                    $('.form-buy').css('width','100%');
                }
                if(1200 < $(document).width()){
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
                $('#three').css('opacity','100%');
                $('#three>svg circle ').first().attr('fill','#00AF68');
                $('#three>svg text ').attr('fill','#fff');
                var formData = {
                    'car-brand':jQuery('select[name = "car-brand"]').val(),
                    'model':jQuery('select[name = "model"]').val(),
                    'year':jQuery('input[name = "year"]').val(),
                    'email':jQuery('input[name = "email"]').val(),
                    'region':jQuery('input[name = "region"]').val(),
                    'сity':jQuery('input[name = "сity"]').val(),
                    'office':jQuery('input[name = "office"]').val(),
                    'date':jQuery('input[type = "date"]').val(),
                    'time':jQuery('input[type = "time"]').val(),
                    'name':jQuery('input[name = "name"]').val(),
                    'surname':jQuery('input[name = "surname"]').val(),
                    'emali2':jQuery('input[name = "emali2"]').val(),
                    'tel':jQuery('input[type = "tel"]').val()
                };
                $('.data').text(formData['date']+', '+formData['time']);
                $('.office').text(formData['office']);
                $('.car').text(formData['car-brand']+', '+formData['model']+' ,['+formData['year']+']');
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
    })