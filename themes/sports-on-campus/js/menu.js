(function($) {
  $(function() {
    // $('.Rugby-menu').on( "click", function() {
    //     $('.university-container').empty();
    //     $('.university-container').append("<h1>123</h1>");
    //   });
    $('.main-carousel').flickity({
      cellAlign: 'left',
      contain: true
    });

    //front page sport select
    let select = '';
    $('.Basketball-menu').on('click', function() {
      $('.Basketball-menu p').addClass('orange-underscore');
      $('.Rugby-menu p').removeClass('orange-underscore');
      $('.Other-menu p').removeClass('orange-underscore');
      $('.Soccer-menu p').removeClass('orange-underscore');
      $('.Volleyball-menu p').removeClass('orange-underscore');
      select = 'Basketball';
    });
    $('.Rugby-menu').on('click', function() {
      $('.Basketball-menu p').removeClass('orange-underscore');
      $('.Rugby-menu p').addClass('orange-underscore');
      $('.Other-menu p').removeClass('orange-underscore');
      $('.Soccer-menu p').removeClass('orange-underscore');
      $('.Volleyball-menu p').removeClass('orange-underscore');
      select = 'Rugby';
    });
    $('.Other-menu').on('click', function() {
      $('.Basketball-menu p').removeClass('orange-underscore');
      $('.Rugby-menu p').removeClass('orange-underscore');
      $('.Other-menu p').addClass('orange-underscore');
      $('.Soccer-menu p').removeClass('orange-underscore');
      $('.Volleyball-menu p').removeClass('orange-underscore');
      select = 'Other';
    });
    $('.Soccer-menu').on('click', function() {
      $('.Basketball-menu p').removeClass('orange-underscore');
      $('.Rugby-menu p').removeClass('orange-underscore');
      $('.Other-menu p').removeClass('orange-underscore');
      $('.Soccer-menu p').addClass('orange-underscore');
      $('.Volleyball-menu p').removeClass('orange-underscore');
      select = 'Soccer';
    });
    $('.Volleyball-menu').on('click', function() {
      $('.Basketball-menu p').removeClass('orange-underscore');
      $('.Rugby-menu p').removeClass('orange-underscore');
      $('.Other-menu p').removeClass('orange-underscore');
      $('.Soccer-menu p').removeClass('orange-underscore');
      $('.Volleyball-menu p').addClass('orange-underscore');
      select = 'Volleyball';
    });
    $('.front-page-search').on('click', function() {
     if(select!==''){
      console.log($('.'+select+'-menu p').attr('linkinfo'));
      location.href =$('.'+select+'-menu p').attr('linkinfo'); 
    }
     
    });

  });
})(jQuery);
