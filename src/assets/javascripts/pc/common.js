// for operation check
// @TODO Need to rewrite to Vue.js

$profileItem  = $('.js-profile-item');
$modalClose   = $('.js-modal-close');

$profileItem.on('click', function () {
  openModal();
});

$modalClose.on('click', function () {
  closeModal();
});

function openModal() {
  $('body').addClass('modal-open')
}

function closeModal() {
  $('body').removeClass('modal-open')
}
