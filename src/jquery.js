window.$ = window.jQuery = function (selectorOrArray) {
    /*
    * 选择器或者数组
    * */
    let elements;
    if (typeof selectorOrArray === 'string') {
        elements = document.querySelectorAll(selectorOrArray); // 获取元素
    } else if (selectorOrArray instanceof Array) {
        elements = selectorOrArray;
    }

    const api = Object.create(jQuery.prototype) // 创建一个对象，这个对象的__proto__指向括号里的东西
    // api.elements = elements;
    // api.oldApi =selectorOrArray.oldApi
    Object.assign(api, {
        elements : elements,
        oldApi: selectorOrArray.oldApi
    })
    return api;
}

jQuery.fn = jQuery.prototype = {
    jQuery: true,
    constructor: jQuery,
    addClass(className) {
        // 遍历所以刚才获取的元素，添加.red等
        for (let i = 0; i < this.elements.length; i++) {
            this.elements[i].classList.add(className)
        }
        return this;// 能够进行链式操作关键是返回了同样的api对象，this指的就是api
    },
    find(selector) {
        let array = []
        for (let i = 0; i < this.elements.length; i++) {
            array = array.concat(Array.from(this.elements[i].querySelectorAll(selector)));
        }
        array.oldApi = this; // 将旧的api放到数组身上
        return jQuery(array);
    },
    end() {
        return this.oldApi; // 将当前新的api中旧的api返回
    },
    each(fn) {
        for (let i = 0; i < this.elements.length; i++) {
            fn.call(null, this.elements[i], i);
        }
        return this;
    },
    parent() {
        const array = [];
        this.each((node) => {
            if (array.indexOf(node.parentNode) === -1) {
                array.push(node.parentNode)
            }
        })
        return jQuery(array);
    },
    children() {
        const array = []
        this.each((node) => {
            array.push(...node.children) //...把每个节点分开

        })
        return jQuery(array)
    },
    print() {
        console.log(this.elements);
    }
}
