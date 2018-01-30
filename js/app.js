// Alert remove
btnClose = alert.querySelector('.close');

btnClose.addEventListener('click', function() {
    btnClose.parentNode.remove();
});