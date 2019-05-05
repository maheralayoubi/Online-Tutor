// for operation check
// @TODO Need to rewrite to Vue.js

$profileItem  = $('.js-profile-item');
$modalClose   = $('.js-modal-close');
$ellipsisMenuButton = $('.js-ellipsis-menu-button')

$profileItem.on('click', function () {
  openModal();
});

$modalClose.on('click', function () {
  closeModal();
});

$ellipsisMenuButton.on('click', function () {
  $(this).next($('.js-ellipsis-menu-list')).toggleClass('_open')
});

function openModal() {
  $('body').addClass('modal-open')
}

function closeModal() {
  $('body').removeClass('modal-open')
}
