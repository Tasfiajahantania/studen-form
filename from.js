var stName = document.getElementById('name');
var stRoll = document.getElementById('roll');
var stDprt = document.getElementById('dprt');
var stGpa = document.getElementById('gpa');
var btn = document.getElementById('btn');

btn.addEventListener('click', function (pera) {
    pera.preventDefault();

    if (stName.value == '') {
        alert('set student name');
    }
    else if (stRoll.value == '') {
        alert('set student Roll');
    }
    else if (stDprt.value == '') {
        alert('set student Dprt');
    }
    else if (stGpa.value == '') {
        alert('set student gpa');
    }
    else {
        // stnamr
        var tbody = document.getElementById('tbody');
        var tr = document.createElement('tr');
        var td = document.createElement('td');
        td.innerHTML = stName.value;
        tr.appendChild(td);

        // student-roll

        var td1 = document.createElement('td');
        td1.innerHTML = stRoll.value;
        tr.appendChild(td1);

        // student-dprt
        var td2 = document.createElement('td');
        td2.innerHTML = stDprt.value;
        tr.appendChild(td2);
        // student-cgpa
        var td3 = document.createElement('td');
        td3.innerHTML = stGpa.value;
        tr.appendChild(td3);


        tbody.appendChild(tr);
    }
})