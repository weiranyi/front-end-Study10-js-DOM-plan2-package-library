// jQuery(".test")  // 选择元素，但不会返回元素，返回的是对其进行操作的API对象
//     .addClass('red')
//     .addClass('green')
//     .addClass('blue') // 链式操作；


const api1 = jQuery('.test')
api1.addClass('blue')
const api2 = api1.find('.child').addClass('red')
api1.addClass('green')
