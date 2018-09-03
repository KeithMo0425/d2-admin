(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2686"],{"73fc":function(e,n){e.exports="通过给 `D2 Crud` 传入 `rowHandle` 可开启表格操作列，传入 `remove` 对象可以开启删除模式，`confirm` 属性的值为 `Boolean` 类型，控制删除前是否弹出confirm框进行提示， `row-remove` 事件控制数据删除，参数： `index` 是当前删除行的索引， `row` 是当前删除行的数据， `done` 用于控制删除成功，可以在 `done()` 之前加入自己的逻辑代码。代码如下：\n"},d3ad:function(e,n,t){"use strict";t.r(n);var d=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("d2-container",[t("template",{slot:"header"},[e._v("删除数据")]),t("d2-crud",{attrs:{columns:e.columns,data:e.data,title:"D2 CRUD",rowHandle:e.rowHandle},on:{"row-remove":e.handleRowRemove}}),t("el-card",{staticClass:"d2-mb",attrs:{shadow:"never"}},[t("d2-markdown",{attrs:{source:e.doc}})],1),t("el-card",{staticClass:"d2-mb",attrs:{shadow:"never"}},[t("d2-highlight",{attrs:{code:e.code}})],1),t("template",{slot:"footer"},[t("d2-link-btn",{attrs:{title:"文档",link:"https://d2-projects.github.io/d2-admin-doc/zh/ecosystem-d2-crud/"}})],1)],2)},a=[],o=(t("cadf"),t("551c"),t("097d"),t("73fc")),s=t.n(o),r="<template>\n  <div>\n    <d2-crud\n      :columns=\"columns\"\n      :data=\"data\"\n      title=\"D2 CRUD\"\n      :rowHandle=\"rowHandle\"\n      @row-remove=\"handleRowRemove\"/>\n  </div>\n</template>\n\n<script>\nexport default {\n  data () {\n    return {\n      columns: [\n        {\n          title: '日期',\n          key: 'date'\n        },\n        {\n          title: '姓名',\n          key: 'name'\n        },\n        {\n          title: '地址',\n          key: 'address'\n        }\n      ],\n      data: [\n        {\n          date: '2016-05-02',\n          name: '王小虎',\n          address: '上海市普陀区金沙江路 1518 弄'\n        },\n        {\n          date: '2016-05-04',\n          name: '王小虎',\n          address: '上海市普陀区金沙江路 1517 弄'\n        },\n        {\n          date: '2016-05-01',\n          name: '王小虎',\n          address: '上海市普陀区金沙江路 1519 弄'\n        },\n        {\n          date: '2016-05-03',\n          name: '王小虎',\n          address: '上海市普陀区金沙江路 1516 弄'\n        }\n      ],\n      rowHandle: {\n        remove: {\n          icon: 'el-icon-delete',\n          size: 'small',\n          fixed: 'right',\n          confirm: true\n        }\n      }\n    }\n  },\n  methods: {\n    handleRowRemove ({index, row}, done) {\n      setTimeout(() => {\n        console.log(index)\n        console.log(row)\n        this.$message({\n          message: '删除成功',\n          type: 'success'\n        })\n        done()\n      }, 300)\n    }\n  }\n}\n<\/script>",l={data:function(){return{doc:s.a,code:r,columns:[{title:"日期",key:"date"},{title:"姓名",key:"name"},{title:"地址",key:"address"}],data:[{date:"2016-05-02",name:"王小虎",address:"上海市普陀区金沙江路 1518 弄"},{date:"2016-05-04",name:"王小虎",address:"上海市普陀区金沙江路 1517 弄"},{date:"2016-05-01",name:"王小虎",address:"上海市普陀区金沙江路 1519 弄"},{date:"2016-05-03",name:"王小虎",address:"上海市普陀区金沙江路 1516 弄"}],rowHandle:{remove:{icon:"el-icon-delete",size:"small",fixed:"right",confirm:!0}}}},methods:{handleRowRemove:function(e,n){var t=this,d=e.index,a=e.row;setTimeout(function(){console.log(d),console.log(a),t.$message({message:"删除成功",type:"success"}),n()},300)}}},c=l,i=t("2877"),m=Object(i["a"])(c,d,a,!1,null,null,null);m.options.__file="index.vue";n["default"]=m.exports}}]);
//# sourceMappingURL=chunk-2686.e26fe428.js.map