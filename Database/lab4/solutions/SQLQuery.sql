use Company_SD;

select * from Dependent;
select * from Departments
select * from Employee;
select * from Project;
select * from Works_for;

--> 1
select D.Dependent_name , E.Fname+' '+E.Lname as employee_name
from Dependent D inner join Employee E
on D.ESSN = E.SSN and D.Sex = 'F' and E.Sex = 'F'
union
select D.Dependent_name , E.Fname+' '+E.Lname
from Dependent D inner join Employee E
on D.ESSN = E.SSN and D.Sex = 'M' and E.Sex = 'M'

--> 2
select P.Pname, sum(W.Hours) as total_hours
from Works_for W inner join Project P
on w.Pno = p.Pnumber
group by P.Pname

--> 3
select D.*
from Departments D inner join Employee E
on D.Dnum = E.Dno
where ssn = (select min(SSN) from Employee) 

--> 4
select D.Dname, max(salary) as maximum_salary, min(salary) as minimum_salary, avg(salary) as average
from Departments D inner join Employee E
on D.Dnum = E.Dno
group by D.Dname

--> 5
select E.Fname+' '+E.Lname as fullname
from Departments De inner join Employee E
on De.MGRSSN = E.SSN and MGRSSN not in (select Essn from Dependent);

--> 6
select Dname, Dnum, count(SSn) as number_of_employees
from Departments D inner join Employee E
on D.Dnum = E.Dno
group by Dname, Dnum
having avg(E.Salary) < (select avg(salary) from Employee)

--> 7
select Pname, Fname+' '+Lname as fullname
from Project P inner join Works_for W
on P.Pnumber = W.Pno
inner join Employee E
on E.SSN = W.ESSn
order by Dno, Lname, Fname 

--> 8
SELECT MAX(Salary) AS Salary
FROM Employee
UNION
SELECT MAX(Salary)
FROM Employee
WHERE Salary < (SELECT MAX(Salary) FROM Employee);

--> 9
select fname+' '+lname as fullname
from employee E inner join Dependent D
on E.SSN = D.ESSN
where fname+' '+lname = D.Dependent_name;

--> 10
select fname+' '+lname as fullname,SSN
from Employee
where Exists (select * from Dependent)

--> 11
insert into Departments(Dname, Dnum, MGRSSN, [MGRStart Date])
values('DEPT IT', 100, 112233, '1-11-2006')

--> 12 
-- a
update Departments 
set MGRSSN = 968574
where Dnum = 100;
-- b
update Departments
set MGRSSN = 102672
where dnum = 20;
-- c
update Employee
set superssn = 102672
where SSn = 102660

--> 13
--223344
update Employee 
set Superssn = 102672
where Superssn = 223344;

update Departments
set MGRSSN = 102672,[MGRStart Date] = getdate()
where MGRSSN = 223344;

update Works_for
set ESSn = 102672
where Essn = 223344;

delete from Dependent
where Essn = 223344

delete from Employee
where ssn = 223344

--> 14 
update employee
set Salary += Salary * 0.3
from Employee, Works_for, Project
where Employee.SSN = Works_for.ESSn and 
Project.Pnumber = Works_for.Pno
and Pname = 'Al Rabwah'
