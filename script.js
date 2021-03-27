// $(function () {
//   $(document).mousemove(function (e) {
//     $('#cube').css({
//       '-webkit-transform': 'rotateX(' + e.pageY + 'deg) rotateY(' + e.pageX + 'deg)'
//     });
//   });
// });
$(function () {
  $(document).touchmove(function (e) {
    $('#cube').css({
      '-webkit-transform': 'rotateX(' + e.pageY + 'deg) rotateY(' + e.pageX + 'deg)'
    });
  });
});