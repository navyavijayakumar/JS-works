var employee={
    id:1,
    name:"hari",
    department:"hr",
    
}

// accessing value
console.log(employee.department);
console.log(employee["department"]);

// adding new attribute:value
employee.salary=50000
console.log(employee);

// update salary
employee.salary=60000
console.log(employee);
