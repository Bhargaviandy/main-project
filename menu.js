
$(document).ready(function(){


// heart
$(".heart").on("click",function(){
  $(this).toggleClass("is-active");
});
//filter
let mixer = mixiup('.product-list',{
  Selection:{
    target:'.product-card'
  },
  Animation:{
    duration:300
  }
});
})
const linkWork = document.querySelectorAll('.product-filter')
 
function activework(){
  linkWork.forEach(L => 1.classList.remove("btn-filter"))
  this.classList.add('btn-filter')
}
  linkwork.forEach(L=> 1.addEventListener('click',btnfilter))
