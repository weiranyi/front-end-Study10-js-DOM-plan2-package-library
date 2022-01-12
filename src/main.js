const api = jQuery(".test") //不返回元素们，返回api对象
api.addClass('red')
    .addClass('green')
    .addClass('blue') // 链式操作；遍历所以刚才获取的元素，添加.red等