// $(function(){
//   $('.box1').css({
//     'background-color': '#0000FF',
//     'height': '100px'
//   });
// });

// $(function(){
//   $('.box1').slideDown();
// });

// $(function(){
//   $('.box1').slideUp();
// });

// $(function(){
//   $('.box1').show();
//   $('.box1').css({'background-color': '#0000FF'});
// });

// $(function(){
//   $('.box1').hide();
// });

// [js-5]確認問題
$(function(){
  $('.box1').slideDown(function(){
    $('.box1').css({
      'background-color': '#0000FF',
      'height': '100px'
    }).slideUp(1000);
  });
});