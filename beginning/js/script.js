// CREATE AN ARRAY OF EMPLOYEES

let employees = [
    [12345678, "Mark Timbone",  1234, "all@gmail.com", "Enginerring"],
    [87654321, "Mike Johnson",  5678, "smad@gmail.com", "Mail room"],
    [24681358, "Joe Joseph",    4321, "dud@gmail.com", "Office suppies"],
    [13572468, "Mary Campbell", 1212, "fall@gmail.com", "Web Development"], 
    [24687532, "Sue Harkin",    4454, "gate@gmail.com", "Server Side"]
];

// CHECK TO SEE IF STORAGE OBJECT EXISTS WHEN THE PAGE LOADS



// IF DOES, RETURN STORAGE OBJECT INTO ARRAY INSTEAD OF POPULATED ARRAY
 


    // GET DOM ELEMENTS

    let empForm = document.querySelector('#addForm');
    let empTable = document.querySelector('#employees');
    let empCount = document.querySelector('#empCount');

    // BUILD THE EMPLOYEES TABLE WHEN THE PAGE LOADS

    let count = 0;

 
    // ADD EMPLOYEE

    empForm.addEventListener('submit', (e) => {
   
        // PREVENT FORM SUBMISSION

        e.preventDefault();
    
        // GET THE VALUES FROM THE TEXT BOXES

        let empID = document.querySelector('#id').value;
        let empName = document.querySelector('#name').value;
        let empExt = document.querySelector('#extension').value;
        let empEmail = document.querySelector('#email').value;
        let empDept = document.querySelector('#department').value;
    
        
        // ADD THE NEW EMPLOYEE TO A NEW ARRAY OBJECT
    
        let empRow = empTable.insertRow();
          
        let cellID = empRow.insertCell();
        let cellName = empRow.insertCell();
        let cellExt = empRow.insertCell();
        let cellEmail = empRow.insertCell();
        let cellDept = empRow.insertCell();
        let cellDelete = empRow.insertCell();
        
        // BUILD THE GRID
    
        cellID.appendChild(document.createTextNode(empID));
        cellName.appendChild(document.createTextNode(empName));
        cellExt.appendChild(document.createTextNode(empExt));
        cellEmail.appendChild(document.createTextNode(empEmail));
        cellDept.appendChild(document.createTextNode(empDept));
     
         // PUSH THE NEW ARRAY TO THE *EXISTING* EMPLOYEES ARRAY
        
                
        table = document.querySelector("#employees");
        for (let i = 0; i < employees.length; i++) {
        let newRow = table.insertRow(table.length);
        for (var j = 0; j < employees[i].length; j++) {
        let cell = newRow.insertCell(j);
        cell.innerHTML = employees[i][j];
     
        // CREATE THE DELETE BUTTON
        
        let deleteBtn = document.createElement('button');
    
        // ADD APPROPRIATE BOOTSTRAP CLASSES
        deleteBtn.className = 'btn btn-sm btn-danger delete';
    
        // ADD THE 'X' TEXT TO BUTTON
            
        deleteBtn.appendChild(document.createTextNode('X'));
    
        // APPEND BUTTON TO THE CELL
            
        cellDelete.appendChild(deleteBtn);
        
        // RESET THE FORM

        document.querySelector('#addForm').reset();
    
        // SET FOCUS BACK TO THE ID TEXT BOX
    
        document.querySelector('#id').focus();
    
        count++;
            empCount.value = `(${count})`;
            
           };
};
           
    });

    // DELETE EMPLOYEE
    
    empTable.addEventListener('click', (e) => {
    
    // CONFIRM THE DELETE
    
    if (e.target.classList.contains('delete')) {
       
        if (confirm('Are you sure you want to delete this employee?')) {

            // GET THE SELECTED ROWINDEX FOR THE TR (PARENTNODE.PARENTNODE)

            empTable.deleteRow(e.target.parentElement.parentElement.rowIndex);
            
            
            count--;
            empCount.value = `(${count})`;
                
            // CALL DELETEROW() METHOD TO DELETE SPECIFIC ROW IN THE TABLE
            
            
            
            

            // REMOVE EMPLOYEE FROM ARRAY

            function del(employees) {
                
                // SPLICE OUT EMPLOYEE TO DELETE
                
            let employee = employees.splice(employee - 1, 1);
                    
            };
                // BUILD THE GRID
       
            
       

                // BUILD THE EMPLOYEES GRID
          
                 // REMOVE THE EXISTING SET OF ROWS BY REMOVING THE ENTIRE TBODY SECTION

                // REBUILD THE TBODY FROM SCRATCH

                // LOOP THROUGH THE ARRAY OF EMPLOYEES
            
            
                 for (i of employees) {
                 console.log(`${i[0]}: ${i[1]}: ${i[2]}: ${i[3]}:`);
                    };
            
            
            
            
            function view(employees) {

                // VARIABLE FOR EMPLOYEE NUMBERS
                
                                      
                // LOOP THROUGH EMPLOYEES ARRAY
   
            };
            
            for (let employee of employees) {
                 
             }
   
                 
                // REBUILDING THE ROW STRUCTURE


                // BIND THE TBODY TO THE EMPLOYEE TABLE

                // UPDATE EMPLOYEE COUNT
            
                function view(employees) {

             // VARIABLE FOR EMPLOYEE NUMBERS
                    
                    
                let i = 1;
    
             // LOOP THROUGH EMPLOYEES ARRAY
   
                employees.forEach(employee => {
                console.log(`${String(i)}. ${employee}`);
                i++;
             });
   
              console.log('');
}

                // STORE THE ARRAY IN STORAGE
                //Convert to STRING ARRAY USING STRINGIGY
                //RETRIEVE ARRAY FROM STORAGE
        
                localStorage.setItem('employees', JSON.stringify(employees));
                let newArray = JSON.parse(localStorage.getItem('employees'));
        
                
            };
        };
    });

