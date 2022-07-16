var title = document.getElementById("title");
var des = document.getElementById("des");
var nm = document.getElementById("nm");
var a = document.getElementById("a");

a.addEventListener("click", function(){
    a.style.color = ("red")
    list.innerHTML = list.innerHTML + `
    <div class="essay">
        <h2>${title.value}</h2>
        <h3>${des.value}</h3>
        <h4>使用者名称:${nm.value}</h4>
        <hr>
    </div>
    `;
    title.value = "";
    des.value = "";
    nm.value = "";
})