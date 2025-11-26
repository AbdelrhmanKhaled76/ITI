select * from Employee;

select fname, lname, salary,dno from employee;

select pname,plocation,dnum from project;

select fname, lname , salary * 10/100 * 12 as ANNUAL_COMM from employee;

select ssn as id, fname + '' + lname as name from employee where salary > 1000;

select ssn as id, fname + '' + lname as name, salary*12 as annual from employee where salary*12 > 10000;

select fname + '' + lname as name, salary from employee where sex = 'F';

select dno, fname + '' + lname as name, salary from employee where Superssn = 968574;

select Pnumber as id, pname as name , plocation from project where dnum = 10;