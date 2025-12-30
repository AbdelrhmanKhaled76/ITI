// document.write('from external file')

// alert('This is an external JavaScript file.')
// var userName = prompt('Enter your name:', 'Anonymous')
// console.log('User name is: ' + userName)

// var result = confirm('Do you want to proceed?')
// console.log('User choice is: ' + result)

function adding (a = 10, b = 20) {
  //   var a = a || 10;
  //   var b = (b == undefined) ? 20 : b;
  //
  //

  var sum = 0
  if (typeof a == 'number' && typeof b == 'number') sum = a + b
  return sum
}
//   return 'resutl is: ' + (a + b)
// }

adding(prompt('Enter first number:'), prompt('Enter second number:'))
