document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('form');
    const tableContainer = document.querySelector('#table tbody');
    const showFormbtn = document.getElementById('showform');
    const showTablebtn = document.getElementById('showtable');
    const formsec = document.getElementById('formsection');
    const tablesec = document.getElementById('table');
    const clearDatabtn=document.getElementById('clearData')

    
    showFormbtn.addEventListener('click', function() {
        tablesec.style.display = 'none';
        formsec.style.display = 'block';
    });

    
    showTablebtn.addEventListener('click', function() {
        formsec.style.display = 'none';
        tablesec.style.display = 'block';
        loadTableData(); 
    });

    clearDatabtn.addEventListener('click',function(){
        localStorage.clear()
        alert("Data Cleared");
    });

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const un = document.getElementById('username').value;
        const pwd = document.getElementById('password').value;
        const mail = document.getElementById('email').value;
        const num = document.getElementById('phnum').value;

        const formdata = {
            username: un,
            password: pwd,
            email: mail,
            phnum: num
        };

        addToTable(formdata);
        saveToLocalStorage(formdata); 
        form.reset(); 
    });

  
    function addToTable(data) {
        const row = document.createElement('tr');

        for (let key in data) {
            const cell = document.createElement('td');
            cell.textContent = data[key];
            row.appendChild(cell);
        }
        tableContainer.appendChild(row);
    }


    function saveToLocalStorage(data) {
        let tableData = JSON.parse(localStorage.getItem('tableData')) || [];
        tableData.push(data);
        localStorage.setItem('tableData', JSON.stringify(tableData));
    }

 
    function loadTableData() {
        const tableData = JSON.parse(localStorage.getItem('tableData')) || [];
        tableContainer.innerHTML = ''; 
        tableData.forEach(data => {
            addToTable(data);
        });
    }

    
});
