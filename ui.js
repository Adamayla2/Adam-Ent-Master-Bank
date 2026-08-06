window.ENTApp=window.ENTApp||{};
window.ENTApp.ui={
refresh:function(){
console.log('UI initialized');
},
showToast:function(msg){
if(window.showToast){return window.showToast(msg);}
console.log(msg);
}
};
document.addEventListener('DOMContentLoaded',function(){
if(window.ENTApp&&window.ENTApp.ui){window.ENTApp.ui.refresh();}
});


// Step68 compatibility helpers
window.ENTApp=window.ENTApp||{};
window.ENTApp.ui=window.ENTApp.ui||window.ENTApp.ui;
window.ENTApp.ui.safeQuery=function(sel){return document.querySelector(sel);};
window.ENTApp.ui.safeQueryAll=function(sel){return Array.from(document.querySelectorAll(sel));};
