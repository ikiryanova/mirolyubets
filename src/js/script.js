// $(document).ready(function() {
  
//   $('.menu-btn').on('click', function(event) {
//     event.preventDefault();
//     $(this).toggleClass('menu-btn_active');
//   });
// });

// $(document).ready(function() {
//   $('a[href^="#"]').click(function () { 
//     elementClick = $(this).attr("href");
//     destination = $(elementClick).offset().top;
//     if($.browser.safari){
//       $('body').animate( { scrollTop: destination }, 1100 );
//     }else{
//       $('html').animate( { scrollTop: destination }, 1100 );
//     }
//     return false;
//   });
// });

$(document).ready(function(){

  // // Якорная ссылка about
  // $("#navbar-menu").on("click","a", function (event) {
  //     event.preventDefault();
  //     var id  = $(this).attr('href'),
  //         top = $(id).offset().top;
  //     $('body,html').animate({scrollTop: top}, 1000);
  // });


  // Валидация формы
  $('form').each(function () {
    $(this).validate({

      rules: {
        username: {
          required: true,
          minlength: 2,
          maxlength: 15
        },
        userphone: {
          required: true
        },
        email: {
          required: true,
          email: true
        }
      },
      messages: {
        username: {
          required: "Укажите имя",
          minlength: jQuery.validator.format("Ещё {0} символа"),
          maxlength: jQuery.validator.format("Надо меньше {0} символов")
        },
        email: {
          required: "Нам нужен ваш email",
          email: "email введен не верно"
        },
        userphone: {
          required: "Укажите телефон"
        }
      },

      errorClass: "invalid",
      errorElement: "label"
    });
  })

  // Маска для телефона
  $('.phone').mask('+7 (999) 999-99-99');

  // Скрипт слайдера
  $(document).ready(function () {
    $('.slider').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      prevArrow: $('.previe-buttons__previous'),
      nextArrow: $('.previe-buttons__next')
    })
  });
  
  // mobile-menu
	var overay = $('.overlay');
	var menuLink = $('.menu-btn');
	var menu = $('.mobile-menu');
	var close = $('.mobile-menu__close');

	menuLink.click(function() {
		menu.toggleClass('active-menu');
		overay.toggleClass('overlay-vizible');
	});
	close.click(function() {
		menu.toggleClass('active-menu');
		overay.toggleClass('overlay-vizible');
	});
	

	// Модальное окно с формой
	var button = $('.button-call');
  var modal = $('#modal');
  var close = $('#close');
	var cardLink = $('.card__link');
	var contacts = $('.contacts-modal')

  button.on('click', function() {
    modal.addClass('modal_active');
  //   setInterval(function() {
  //   modal.removeClass('modal_active');
  // }, 5000);
  });

  cardLink.on('click', function(event) {
    event.preventDefault();
    modal.addClass('modal_active');
	});
	
	contacts.on('click', function(event) {
    event.preventDefault();
    modal.addClass('modal_active');
  });

  close.on('click', function() {
    modal.removeClass('modal_active');
  });
	

	// Обработка и отправка формы через AJAX
	var thank = $('#thank');
  var close_thank = $('#close-thank');

  $('#modal-form').on('submit', function(event) {
    event.preventDefault();
    var username = $('.username').val();
    var userphone = $('.userphone').val();
    if (username == '' || userphone == '' || username.length<2 ||username.length>15) {
      valid = false;
      return valid;
    };
    $.ajax({
      url: 'smart.php',
      type: 'POST',
      data: $(this).serialize(),
      success: function(valid) {
        if (valid == true) {

          modal.removeClass('modal_active');
          // Модуль Спасибо
          thank.addClass('modal-thank_active');
          $("#modal-form").trigger('reset');
        }
      }
    });
  });

	close_thank.on('click', function() {
    thank.removeClass('modal-thank_active');
    $('.success').hide();
	});
	

});

