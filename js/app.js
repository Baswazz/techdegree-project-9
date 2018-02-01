// // Alert remove
const alert = document.querySelector('.alert');
const btnClose = alert.querySelector('.close');

btnClose.addEventListener('click', function() {
    btnClose.parentNode.remove();
});