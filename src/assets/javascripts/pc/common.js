// for operation check
// @TODO Need to rewrite to Vue.js

$showDetailedProfile  = $('.js-show-detailed-profile');
$createClass          = $('.js-create-class');
$modalClose           = $('.js-modal-close');
$ellipsisMenuButton   = $('.js-ellipsis-menu-button')
$tweetButton          = $('.js-tweet-button')
$showReply            = $('.js-show-reply')
$messageButton        = $('.js-message-button')


$tweetButton.on('click', function () {
  openModal(getTargetModalId($(this)));
});

$showReply.on('click', function () {
  openModal(getTargetModalId($(this)));
});

$showDetailedProfile.on('click', function () {
  openModal(getTargetModalId($(this)));
});

$messageButton.on('click', function () {
  var message = $('textarea').val();
  var old = $('#myMessage').html();
  $('#myMessage').html(old + '<div class="balloon">' + message + '</div>');
  $('textarea').val('').empty();
  return false;
});

$createClass.on('click', function () {
  openModal(getTargetModalId($(this)));
});

$modalClose.on('click', function () {
  closeModal();
});

$ellipsisMenuButton.on('click', function () {
  $(this).next($('.js-ellipsis-menu-list')).toggleClass('_open')
});

function getTargetModalId($target) {
  return $target.data('target-modal-id');
}

function openModal(targetModalId) {
  $('body').addClass('modal-open');
  $(targetModalId).show();
}

function closeModal() {
  $('body').removeClass('modal-open');
  $('.modal').hide();
}
