# 1、知识点
- jQuery是构造函数吗？
  - 是（因为jQuery函数确实构造了一个对象，暂简称：api对象）
  - 也不是（不需要写new jQuery()就能构造一个对象，jQuery用了些技巧）
  - 综上：jQuery是一个不需要new的构造的函数，但不是常规意义上的构造函数