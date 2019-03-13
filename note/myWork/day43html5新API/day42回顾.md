
>目标
+  ondragstart	应用于拖拽元素，当拖拽开始时调用
+  ondrag 		应用于拖拽元素，整个拖拽过程都会调用
+  ondragleave	应用于拖拽元素，当鼠标离开拖拽元素时调用
+  ondragend	应用于拖拽元素，当拖拽结束时调用
>目标元素
+  ondragenter	应用于目标元素，当拖拽元素进入时调用
+  ondragover	应用于目标元素，当停留在目标元素上时调用
+  ondrop		应用于目标元素，当在目标元素上松开鼠标时调用
+  ondragleave	应用于目标元素，当鼠标离开目标元素时调用
+ 一般需要设置一个临时变量,来表示被拖拽的元素
// 无法触发ondrop事件.是因为默认html元素不允许连个标签在同一个位置显示
+  e.preventDefault();

+ setItem(key, value) 设置存储内容
+ getItem(key) 读取存储内容
+ removeItem(key) 删除键值为key的存储内容
+ clear() 清空所有存储内容
+ key(n) 以索引值来获取存储内容

> onmouseenter onmosueleave 与onmouseover onmouseout区别
+ onmosueover只要穿过一次内部元素就会触发

+ autocomplete="off" 不会显示保存的地址
+ 
+ window.localStorage.
+ prop() 方法设置或返回被选元素的属性和值。
+ prop() 方法应该用于检索属性值，例如 DOM 属性（如 selectedIndex, tagName, nodeName, nodeType, ownerDocument, defaultChecked, 和 defaultSelected）。
+ 提示：如需检索 HTML 属性，请使用 attr() 方法代替

+  setItem(key, value)只能存字符串,
+  json对象==> 字符串 stringify


+ 通过getItem(key)读取到的数据是字符串
+  字符串==>json对象  parse
+  然后读取对象的属性保存在输入框中