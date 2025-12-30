var arr = [1, 2, 3, 4, 5, 'abc', [4, 5, 6, [66, 77, 88]], 66]
arr[6][3][1]

arr[90] = 100

var arr2 = []

for (let i = 0; i < arr.length; i++) {
  arr2[i] = arr[i]
}

for (i in arr) {
  arr2[i] = arr[i]
}

var associativeArr = []
associativeArr['name'] = 'John'
associativeArr['age'] = 30

var x = 'addr'
associativeArr[x] = '123st.'

associativeArr[0] = 10
associativeArr[1] = 20

associativeArr.addr //dot notation
associativeArr['addr'] //subscript notation
associativeArr[x]

var obj = {
  sal: 1000,
  dept: 'IT',
  skills: ['Js', 'HTML', 'CSS']
}
obj.nm = 'ali'
obj.age = 10

for (i in obj) {
  console.log(i + ': ' + obj[i])
}
