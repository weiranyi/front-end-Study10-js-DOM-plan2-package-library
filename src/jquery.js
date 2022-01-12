window.jQuery = function (selector) {
    const elements = document.querySelectorAll(selector);
    // 返回一个可以操作elements的api
    return {
        // 闭包：函数访问外部变量
        addClass(className) {
            for (let i = 0; i < elements.length; i++) {
                elements[i].classList.add(className)
            }
            return api;// 能够进行链式操作关键是返回了同样的api对象，this指的就是api
        }
    }
}