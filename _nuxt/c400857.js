(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{679:function(t,o,e){var content=e(691);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(66).default)("243346f0",content,!0,{sourceMap:!1})},690:function(t,o,e){"use strict";e(679)},691:function(t,o,e){var n=e(65)(!1);n.push([t.i,".operator_main_button[data-v-4d85334e]{width:450px;box-sizing:border-box;text-align:center}.operator_main_button button[data-v-4d85334e]{width:220px;border:1px solid #94febf;border-radius:5px;color:#94febf;padding:10px 0;text-align:center;cursor:pointer;font-size:22px;font-weight:bolder;font-family:sans-serif;background:#0e2017;height:60px}.operator_main_button button[data-v-4d85334e]:hover{color:#000;cursor:pointer;background:#4a8161}",""]),t.exports=n},714:function(t,o,e){"use strict";e.r(o);var n={name:"OpNavbar",components:!0,data:function(){return{deposit_name:"Deposit",withdraw_name:"Withdraw"}},mounted:function(){this.onDeposit()},methods:{onDeposit:function(){this.setStyle("button_deposit","#94FEBF","black"),this.setStyle("button_withdraw","#0e2017","#94febf"),this.$emit("onDeposit")},onWithdraw:function(){this.setStyle("button_withdraw","#94FEBF","black"),this.setStyle("button_deposit","#0e2017","#94febf"),this.$emit("onWithdraw")},setStyle:function(t,o,e){var button=document.getElementById(t);button.style.background=o,button.style.color=e}}},r=(e(690),e(24)),component=Object(r.a)(n,(function(){var t=this,o=t._self._c;return o("div",{staticClass:"operator_main_button"},[o("table",[o("tr",[o("td",[o("button",{staticClass:"button_deposit",attrs:{id:"button_deposit"},on:{click:t.onDeposit}},[t._v("\n          "+t._s(t.deposit_name)+"\n        ")])]),t._v(" "),o("td",[o("button",{staticClass:"button_withdraw",attrs:{id:"button_withdraw"},on:{click:t.onWithdraw}},[t._v("\n          "+t._s(t.withdraw_name)+"\n        ")])])])])])}),[],!1,null,"4d85334e",null);o.default=component.exports}}]);