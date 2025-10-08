const fs = require('fs');

// Nested Callbacks (callback hell style)

function readEmployeesFile(callback){
   fs.readFile('employees.json', 'utf-8', (err, data) => {
      if (err){
         callback(err);
      } else {
         callback(null, data);
      }
   })
}

function addSalaryBonus(employeeData, callback){
   try {
      const employees = JSON.parse(employeeData);
      const employeesWithBonus = employees.map(emp => ({
      name: emp.name,
      salary: emp.salary,
      bonus: emp.salary * 0.1,
      totalSalary: emp.salary + emp.salary * 0.1
    }));

      callback(null, employeesWithBonus);
   } catch (err) {
      callback(err);
   }
}

function writeUpdatedEmployeesFile(updatedEmployees, callback){
   const jsonData = JSON.stringify(updatedEmployees, null, 2);
   fs.writeFile('updated_employees.json', jsonData, 'utf8', (err) => {
      if (err){
         callback(err);
      } else {
         callback(null, 'Updated employees file written successfully.');
      }
    });
}

function handleError(err) {
   console.error('Error:', err.message);
 }

readEmployeesFile((err, employeesData) => {
   if (err) return handleError(err);
   console.log('Employees file read successfully.');

     addSalaryBonus(employeesData, (err, updatedEmployees) => {
         if (err) return handleError(err);
         console.log('Bonus calculation done.');

         writeUpdatedEmployeesFile(updatedEmployees, (err, message) =>{
            if (err) return handleError(err);
            console.log(message);
      })
   })
})