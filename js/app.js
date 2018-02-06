const chartTrafficId = document.getElementById("traffic").getContext('2d');
const chartTraffic = function(labels, data) {
    new Chart(chartTrafficId, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: 'Traffic',
                data: data,
                backgroundColor: 'rgba(115, 119, 191, 0.2)',
                borderColor: 'rgba(115, 119, 191, 1)',
                borderWidth: 1,
                pointBackgroundColor: 'rgba(255, 255, 255, 1)',
                pointRadius: 6,
                pointBorderWidth: 2,
                pointHoverRadius: 6,
            }]
        },
        options: {
            maintainAspectRatio: false,
            legend: {
                display: false
            },
            elements: {
                line: {
                    tension: 0
                }
            },
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: false
                    }
                }]
            }
        }
    });
}



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

chartTraffic(["9:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00"], [100, 150, 250, 300, 250, 350, 250]);

tabs.addEventListener('click', function(e) {
    if (e.target.tagName === 'BUTTON') {
        e.preventDefault();

        anchors = tabs.getElementsByTagName('BUTTON');
        for (i = 0; i < anchors.length; i ++) {
            anchors[i].classList.remove('active');
        }     
        e.target.classList.add('active')

    

        // console.log(e.target.innerText);

        if (e.target.innerText === 'Hourly' ) {
            chartTraffic(["9:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00"], [100, 150, 250, 300, 250, 350, 250]);
        } else if (e.target.innerText === 'Daily' ) {
            chartTraffic(["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"], [500, 750, 1250, 1000, 1500, 500, 400]);
        } else if (e.target.innerText === 'Weekly' ) {
            chartTraffic(["16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3", "4-10", "11-17", "18-24", "25-31"], [500, 750, 1250, 1000, 1500, 750, 1250, 1000, 1500, 750, 1250]);
        } else if (e.target.innerText === 'Monthly' ) {
            chartTraffic(["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dev"], [2000, 1750, 2250, 2000, 2200, 2100, 2300, 2000, 2100, 2200, 1950, 2200]);
        }
    }
});

/*
Create a “Send” button and use JS to allow you to submit the form and display a confirmation the message was sent. You won't actually submit the form, just simulate the action using JavaScript.
Use JS to display error messages if user isn’t selected or message field is empty.

Add an "autocomplete" feature for the "Search for User" box, listing names that match the search term.
Use local storage to save the settings.
When page is reloaded the settings are remembered.
*/
