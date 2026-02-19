//document.body.firstChild.nextSibling.nextSibling.nextSibling.nextSibling
//document.body.firstElementChild.firstChild.nodeType
//document.body.firstElementChild.firstChild.nodeValue//return null--has value when its text,comment
//document.body.firstElementChild.firstChild.tagName
//document.body.firstElementChild.firstChild.nodeName

//setAttribute
// document.getElementsByTagName('h1')[0].setAttribute('id','h1id')
// // document.getElementsByTagName('h1')[0].setAttribute('class','c1')
// document.getElementsByTagName('img')[0].setAttribute('src','images/opacity.jpg')

// //classList
// /**
//  * add
//  * remove
//  * toggle
//  * replace
//  */
// console.log(document.getElementsByTagName('h1')[0].classList)
// document.getElementsByTagName('h1')[0].classList.add('c1')
// document.getElementById('btn').onclick = function(){
//     // document.getElementsByTagName('h1')[0].classList.toggle('c4')
// // document.getElementsByTagName('h1')[0].classList.replace('c1','c4')
// var elem2 = document.createElement('script')
// elem2.src = 'script2.js'
// elem2.type = 'text/javascript'
// document.head.append(elem2)

// }

// //dynamic creation
// var elem = document.createElement('span')
// // elem.innerHTML = 'new text'
// var text = document.createTextNode('<h1>hello</h1>')
// elem.appendChild(text)
// document.body.prepend(elem)

// /* <span>
//     new text added
// </span> */


// elem = document.createElement('span')
// elem.innerHTML = 'Hello'

// document.body.insertBefore(elem,document.getElementById('item1'))//error
// document.getElementsByTagName('ul')[0].insertBefore(elem,document.getElementById('item1'))
// document.body.ins

// var elem = document.getElementsByTagName('table')
// elem.innerHTML = '<tr> <td>cell1</td><td>'+x+'</td></tr>'
// document.getElementsByTagName('img')[0].addEventListener('click',function(){
//     console.log('img clicked')
// })


// var elem = document.getElementsByTagName('img')[0].cloneNode(true)
// console.log(elem)

// document.body.append(elem)

// var elem = document.getElementById('dv1').cloneNode(true)
// console.log(elem)
// document.body.append(elem)


/**
 * Selectors
 * Basic Selectors
 * Attribute Selectors
 * combinator selectors
 * pesudo classes
 * pesudo elements
 */
//dynamic Object
// var elem = document.getElementsByTagName('h1')
// console.log(elem)

// //static Object
// var elem2 = document.querySelectorAll('h1')
// console.log(elem2)



// var newElem = document.createElement('h1')
// newElem.innerHTML = '.............'
// document.body.append(newElem)


// console.log(elem)
// console.log(elem2)

// var obj = document.querySelectorAll('h1')
// console.log(obj)

var myImg = document.images[0]
// console.log(myImg.style.left)
var leftPos = parseInt(getComputedStyle(myImg).left)
setInterval(function(){
    leftPos+=50
    myImg.style.left =leftPos+"px"
},1000)




