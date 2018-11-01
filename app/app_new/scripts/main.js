$(document).ready(function() {

  // /*=============================================>>>>>
  // = Case Studies Expand Code(for future) =
  // ===============================================>>>>>*/
  // $( '#caseStudies .viewAll' ).on( 'click', function( e ) {
  //   $('#caseStudies .hiddenCaseStudies').toggleClass('open');
  //   if($('#caseStudies .hiddenCaseStudies').hasClass('open')) {
  //     $(this).text('View Few Case Studies');
  //   } else {
  //     $(this).text('View All Case Studies');
  //   }
  // });


  var dialog = new DialogFx( $('#dialogContainer').get(0) );
  /*=============================================>>>>>
  = Individual Case Studies =
  ===============================================>>>>>*/
  $( '.case-study a.link' ).on( 'click', function( e ) {
    dialog.toggle();
    var caseStudyNumber = $(this).attr('data-casestudy');
    $('#dialogContainer .dialog__content').removeClass('dialog__full-width');

    $('#dialogContainer header .headerInfo')
    .html(caseStudiesData[caseStudyNumber].header);

    $('#dialogContainer section.contentBody')
    .html(caseStudiesData[caseStudyNumber].content);
  });


  /*=============================================>>>>>
  = Our Clients Logo's =
  ===============================================>>>>>*/
  $( '#trusted-by a.link' ).on( 'click', function( e ) {
    dialog.toggle();
    $('#dialogContainer .dialog__content').addClass('dialog__full-width');

    $('#dialogContainer header .headerInfo')
    .html(trustedByData.header);

    $('#dialogContainer section.contentBody')
    .html(trustedByData.content);
  });


  /*=============================================>>>>>
  = Individual Item Modal Products | Softwares | Solutions =
  ===============================================>>>>>*/
  $( '.category__container a.link' ).on( 'click', function( e ) {
    dialog.toggle();
    var page = $(this).attr('data-page');
    var category = $(this).attr('data-category');
    var item = $(this).attr('data-item');

    // console.log(allCategoryItems[page][category][item]);

    $('#dialogContainer .dialog__content').addClass(`dialog__${page}`);

    $('#dialogContainer header .headerInfo')
    .html(allCategoryItems[page][category][item].header);

    $('#dialogContainer section.contentBody')
    .html(allCategoryItems[page][category][item].content);
  });


  /*=============================================>>>>>
  = Fixed Category Naviation for Products | Softwares | Solutions =
  ===============================================>>>>>*/
  var navpos = $('#allCategories').offset();
  $(window).bind('scroll', function() {
    if ($(window).scrollTop() > navpos.top) {
      $('#allCategories .all-categories__container').addClass('fixed');
    } else {
      $('#allCategories .all-categories__container').removeClass('fixed');
    }
  });


  /*=============================================>>>>>
  = Jquery Smooth Scroll =
  ===============================================>>>>>*/
  $('a[href*="#"]').on('click', function (e) {
    if(/^#/.test($(this).attr('href'))) {
        e.preventDefault();
        $('html, body').animate({
        	scrollTop: $($(this).attr('href')).offset().top
        }, 300, 'linear');
    }
  });



});
