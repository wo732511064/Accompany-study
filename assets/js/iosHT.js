//以下是阻止ios回弹兼容
document.body.addEventListener('touchmove', function (e) {
  if(e._isScroller) return;
  e.preventDefault(); 
}, {passive: false});

// 某些元素可以滚动的方法
function overscroll (el){
    el.addEventListener('touchstart', function() {
           let top = el.scrollTop
           let totalScroll = el.scrollHeight
           let currentScroll = top + el.offsetHeight
           if(top === 0) {
               el.scrollTop = 1;
           }else if(currentScroll === totalScroll) {
               el.scrollTop = top - 1;
           }
        })
 
        el.addEventListener('touchmove', function (evt) {
        if(el.offsetHeight < el.scrollHeight)
           evt._isScroller = true
        })
 
    }
    
   