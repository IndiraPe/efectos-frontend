(function(){
  transformicons.add(".tcon");

  document.querySelector(".toggle-menu").addEventListener("click",function(){
    console.log('jiji');
    document.querySelector(".main-container").classList.toggle("open");
  })
})()