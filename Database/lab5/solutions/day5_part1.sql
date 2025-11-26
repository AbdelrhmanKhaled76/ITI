use ITI;

select * from Student;
select * from Instructor;
select * from Topic;

--> 1
select count(*) from  Student as students_number
where St_Age is not NULL;

--> 2
select distinct Ins_Name 
from Instructor;

--> 3
select isnull(St_Id, 0) as 'Student ID', 
isnull(St_Fname+' '+St_Lname, '') as 'Student Full Name',
isnull(Dept_Name, '') as 'Department Name'
from student S inner join Department D
on S.Dept_Id = D.Dept_Id;

--> 4
select Ins_Name as 'Instructor Name', Dept_Name as 'Department Name'
from Instructor I left outer join Department D
on I.Dept_Id = D.Dept_Id

--> 5
select St_Fname+' '+St_Lname as 'Student Full Name', Crs_Name as 'Course Name'
from Student S inner join Stud_Course SC
on S.St_Id = SC.St_Id and SC.Grade is not NULL inner join Course C
on SC.Crs_Id = C.Crs_Id;

--> 6
select count(Crs_name) as 'Number Of Courses', Top_Name as 'Topic Name'
from Course C inner join Topic T
on C.Top_Id = T.Top_Id
group by Top_Name;

--> 7
select min(Salary) as 'minimum salary', max(Salary) as 'maximum salary'
from Instructor

--> 8
select * 
from Instructor
where Salary < (select avg(Salary) from Instructor);

--> 9
select dept_name
from Department D inner join Instructor I
on D.Dept_Id = I.Dept_Id and Salary = (select min(salary) from Instructor);

--> 10
select top 2 Salary
from Instructor
order by Salary desc;

--> 11
select Ins_Name, COALESCE(convert(varchar(50),Salary),'bonus')
from Instructor

--> 12
select avg(Salary) as  'Average Salary'
from Instructor

--> 13
select X.St_Fname as 'Student Name', Y.*
from Student X inner join Student Y
on Y.St_Id = X.St_super

--> 14
select Salary, Dept_Id
from (select *, Row_number() over(partition by dept_id order by Salary desc) as RN 
	from Instructor) as newTable
where RN <= 2

--> 15
select *
from (select *, Row_number() over(partition by dept_id order by newid()) as RN 
	from Student) as newTable
where RN = 1

