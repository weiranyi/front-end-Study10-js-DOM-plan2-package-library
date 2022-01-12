// jQuery(".test")  // 选择元素，但不会返回元素，返回的是对其进行操作的API对象
//     .addClass('red')
//     .addClass('green')
//     .addClass('blue') // 链式操作；


const x = jQuery('.test')
//     .find('.child')
//
// x.each((div) => console.log(div));

// x.parent().print();
x.children().print();