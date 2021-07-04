const minSalary = 500;
const maxSalary = 5000;
const employees = 12;
let totalSalary = 0;

// перебрать работников в цикле

for (let i = 1; i <= employees; i +=1 ) {
    // generate random salary
    const salary = Math.round(Math.random() * (maxSalary - minSalary)
     + minSalary);
    console.log(` Salary of the employee ${i} - ${salary}`);

    // add to total

    totalSalary += salary;
};

console.log(`totalSalary: `, totalSalary);
