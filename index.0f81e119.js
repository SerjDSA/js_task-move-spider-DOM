document.addEventListener("click",function(t){t.preventDefault();var e=document.querySelector(".wall"),n=document.querySelector(".spider"),i=e.getBoundingClientRect(),c=n.getBoundingClientRect();if(t.target.closest(".wall")){var l=t.clientY-i.top-e.clientTop-c.height/2,a=t.clientX-i.left-e.clientLeft-c.width/2;l=Math.max(0,Math.min(l,e.clientHeight-n.clientHeight)),a=Math.max(0,Math.min(a,e.clientWidth-n.clientWidth)),n.style.top="".concat(l,"px"),n.style.left="".concat(a,"px")}});
//# sourceMappingURL=index.0f81e119.js.map