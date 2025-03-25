var employees=[

    {id:"e01",name:"jhon",department:"hr",salary:45000},
    {id:"e02",name:"smith",department:"hr",salary:55000},
    {id:"e03",name:"wilson",department:"it",salary:65000},
    {id:"e04",name:"hari",department:"it",salary:35000},
    {id:"e05",name:"dev",department:"qa",salary:25000},
    {id:"e06",name:"tom",department:"qa",salary:75000},
    {id:"e07",name:"vino",department:"ba",salary:25000},
]

// for(let emp of employees){
//     console.log(emp.name)
// }

// var empName=employees.map((emp)=>emp.name)
// console.log(empName);

// employees.forEach((empName)=>console.log(empName.name))



// display employees where salary>35000

var empSalName=employees.filter((emp)=>emp.salary>35000).map((emp)=>emp.name)
console.log(empSalName);

// display employees dept==hr
var empDept=employees.filter((emp)=>emp.department=="hr").map((emp)=>emp.name)
console.log(empDept);

// employee with highest salary

var empHighSal=employees.reduce((emp1,emp2)=>emp1.salary>emp2.salary?emp1:emp2)
console.log(empHighSal);

// sort employees wrt salary order descending order

employees.sort((emp1,emp2)=>emp2.salary-emp1.salary)
console.log(employees);

// salary sum

var salSum=employees.map((emp)=>emp.salary).reduce((emp1,emp2)=>emp1+emp2)
console.log(salSum);

