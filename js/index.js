function create() {
    let values = document.getElementById('form').elements;
    let formValues = [];
    for (let val of values) {
        if (val.value == '') {
            alert('Please fill all the fields.');
            return;
        }
        formValues.push(val.value);
    }
    document.getElementById('event-name').value = '';
    document.getElementById('venue').value = '';
    document.getElementById('date').value = '';
    document.getElementById('cost-per-day').value = '';
    document.getElementById('no-of-days').value = '';
    console.log(formValues);
    let tbody = document.getElementById('tbody');
    let tr = document.createElement('tr');
    for (let i = 0; i < formValues.length; i++) {
        let cell = tr.insertCell(i);
        cell.innerHTML = formValues[i];
    }
    tbody.append(tr);
}

setInterval(function () {
    // Sample Output : Today is : Tuesday.
    // Current time is : 10 PM : 30 : 38

    const today = new Date();
    let hours = today.getHours();
    let minutes = today.getMinutes();
    if (minutes < 10) {
        minutes = '0' + minutes;
    }
    let seconds = today.getSeconds();
    if (seconds < 10) {
        seconds = '0' + seconds;
    }
    const prepand = (hours >= 12) ? 'PM' : 'AM';
    hours = (hours > 12) ? hours - 12 : hours;
    if (hours === 0) {
        hours = 12;
    }
    document.getElementById("dayTime").innerHTML = hours + ' ' + prepand + ' ' + minutes + ' : ' + seconds;
    // document.getElementById("dayTime").innerHTML = today;
}, 1000);

// setInterval(function(){
//     const valitity = new Date('Jan 5, 2021 15:37:25');
//     let hours = valitity.getHours();
//     let minutes = valitity.getMinutes();
//     let seconds = valitity.getSeconds();
//     console.log(hours + ' ' + minutes + ' ' + seconds); 
// }, 1000);

