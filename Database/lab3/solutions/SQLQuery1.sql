use Company_SD;

select * from Departments;
select * from Project;
select * from Employee;
select * from Dependent;
select * from Works_for;
-- 1 
select Dnum, Dname, Fname+' '+lname as manger_name
from Departments inner join Employee
on MGRSSN = ssn;

-- 2
select dname, pname
from Departments as D inner join  Project as P
on  D.Dnum = P.Dnum;

-- 3
select D.*, P.Fname as employee_name
from Dependent as D inner join Employee as P
on D.ESSN = P.SSN;

-- 4
select Pnumber, Pnumber, Plocation
from Project
where City in('cairo', 'alex');

-- 5
select *
from Project
where Pname like 'a%';

-- 6
select *
from Employee
where Dno = 30 and Salary between 1000 and 2000;

-- 7
select Fname+' '+Lname as name
from Employee as E inner join Works_for as W
on E.SSN = W.ESSn and E.Dno = 10 inner join Project as P 
on W.Pno = P.Pnumber and w.Hours >= 10 and P.Pname = 'al rabwah'

-- 8
select Y.Fname+' '+Y.Lname as name
from Employee as X inner join Employee as Y
on X.SSN = Y.Superssn and X.Fname = 'kamel' and X.lname = 'mohamed';

-- 9
select fname+' '+lname as emp_name, Pname as project_name
from Employee as E inner join Works_for as W
on E.SSN = W.ESSn inner join Project as P
on W.Pno = P.Pnumber
order by Pname;

-- 10
select P.Pname, D.Dname, E.Lname, E.Bdate, E.Address
from Departments as D inner join Project as P
on D.Dnum = P.Dnum and City like 'cairo%' inner join Employee as E
on E.SSN = D.MGRSSN;

-- 11
select distinct X.* 
from Employee as X inner join Employee as Y
on X.SSN = Y.Superssn 

-- 12
select * 
from Employee as E left outer join Dependent as D
on E.SSN = D.ESSN

-- 13
insert into Employee(Dno, SSN, Superssn, Salary)
values (30,102672,112233,3000);

-- 14
insert into Employee(Dno, SSN)
values (30,102660);

-- 15
update Employee
set Salary += 0.2 * Salary
where SSN = 102672;