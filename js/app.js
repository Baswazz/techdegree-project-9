// Alert remove
const alert    = document.querySelector('.alert');
const btnClose = alert.querySelector('.close');

btnClose.addEventListener('click', function(e) {
    btnClose.parentNode.remove();
});

// Dropdown toggle
const dropdown        = document.querySelector('.dropdown');
const dropdownContent = document.querySelector('.dropdown-content');

dropdown.addEventListener('click', function(e) {
    dropdownContent.parentNode.classList.toggle('dropdown-show');
});

// Tabs
const tabs       = document.querySelector('.tabs');
const tabContent = document.querySelectorAll('.tab-content');

tabs.addEventListener('click', function(e) {
    if (e.target.tagName === 'A') {
        e.preventDefault();

        anchors = tabs.getElementsByTagName('a');
        for (i = 0; i < anchors.length; i ++) {
            anchors[i].classList.remove('active');
        }
        
        e.target.classList.add('active')
        const tabHref = e.target.getAttribute('href');

        for (i = 0; i < tabContent.length; i ++) {
            const tabId = '#' + tabContent[i].id;
            tabContent[i].classList.remove('show');

            if (tabId === tabHref) {
                tabContent[i].classList.add('show');
                // console.log('yeahhhh!');
            }
        }
    }
});