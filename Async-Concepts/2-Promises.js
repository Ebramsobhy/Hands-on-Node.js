const fs = require('fs');

// Promises to avoid callback hell

function readEmployeesFile(){
   return fs.promises.readFile('employees.json', 'utf-8');
}

function addSalaryBonus(employeeData) {
  const employees = JSON.parse(employeeData);
  return employees.map(emp => ({
    name: emp.name,
    salary: emp.salary,
    bonus: emp.salary * 0.1,
    totalSalary: emp.salary + emp.salary * 0.1
  }));
}
  
function writeUpdatedEmployeesFile(updatedEmployees){
    const jsonData = JSON.stringify(updatedEmployees, null, 2);
    return fs.promises.writeFile('updated_employees.json', jsonData, 'utf8')
}

readEmployeesFile()
        .then(addSalaryBonus)
        .then(writeUpdatedEmployeesFile)
        .then(()=> console.log('Updated employees file written successfully'))
        .catch(err => {
            console.error('Operation Failed');
            console.error(err);
})