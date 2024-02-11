const foodCard=document.querySelectorAll(".foodCard");

foodCard.forEach(function(food)
{
    food.addEventListener("click",function()
    {
        let div=document.createElement("div");
        div.classList.add("detailCard");
        div.innerHTML=` <i id="icon" class="fa-solid fa-xmark"></i>
        <img src=${food.firstElementChild.src} alt="">
        <p>Eact Best Eat Delicous</p> <br/>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae pariatur possimus at reprehenderit, accusantium unde est nisi dolore laudantium repudiandae magni sed.</p>
        `
        document.querySelector("body").appendChild(div);
       document.getElementById("icon").addEventListener("click", function(){
        div.remove()
       })
    })
})

