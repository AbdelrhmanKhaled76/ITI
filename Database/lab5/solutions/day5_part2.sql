use AdventureWorks2012;

--> 1
select SalesOrderID ,ShipDate
from Sales.SalesOrderHeader
where ShipDate between '7/28/2002' and '7/29/2014'

--> 2
select ProductID, Name
from Production.Product
where StandardCost < 110

--> 3
select ProductID, Name
from Production.Product
where Weight is NULL

--> 4
select *
from Production.Product
where Color in ('silver', 'black', 'red');

--> 5
select *
from Production.Product
where Name like 'B%'

--> 6

--a
UPDATE Production.ProductDescription
SET Description = 'Chromoly steel_High of defects'
WHERE ProductDescriptionID = 3

--b
select Description
from Production.ProductDescription
where Description like '%[_]%'

--> 7
select sum(TotalDue) as 'Total period', OrderDate
from Sales.SalesOrderHeader
where OrderDate between '7/1/2001' and '7/31/2014'
group by OrderDate;

--> 8
select distinct HireDate
from HumanResources.Employee;

--> 9
select avg(distinct listPrice) as 'List Prices'
from Production.Product

--> 10
select 'The '+Name+' is only! '+convert(varchar(20),listPrice)
from Production.Product
where ListPrice between 100 and 120

--> 11
-- a --
select rowguid ,Name, SalesPersonID into Sales.store_Archive
from Sales.Store
-- b --
select rowguid ,Name, SalesPersonID into Sales.store_Archive2
from Sales.Store
where 1>2

--> 12
select Format(GETDATE(), 'yyyy-mm-dd') as 'date time'
union
select Format(GETDATE(), 'yyyy mm dd hh:mm:ss')
union
select Format(GETDATE(), 'dddd,mmm dd yyyy')