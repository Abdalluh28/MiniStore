var firstCardWidth, carousal;
carousal = document.querySelectorAll(".child");

var plusWidth = screen.width;


firstCardWidth = document.querySelector(".content").offsetWidth + 18;

var btns = document.querySelectorAll(".btns div");

btns.forEach(btn => {
    btn.addEventListener("click", () => {
        if(btn.id === "left")
        {
            carousal[0].scrollLeft = 0;
            btn.style.backgroundColor = "black";
            grayColor(btn,0);
        }
        else if(btn.id === "right")
        {
            carousal[0].scrollLeft = firstCardWidth;
            btn.style.backgroundColor = "black";
            grayColor(btn,0);
        }
        else if(btn.id === "lefttwo")
        {
            carousal[0].scrollLeft = (2*firstCardWidth);
            btn.style.backgroundColor = "black";
            grayColor(btn,0);
        }
        else if(btn.id === "righttwo")
        {
            carousal[0].scrollLeft = (3*firstCardWidth);
            btn.style.backgroundColor = "black";
            grayColor(btn,0);
        }
        else if(btn.id === "watchone")
        {
            carousal[1].scrollLeft = 0;
            btn.style.backgroundColor = "black";
            grayColor(btn,4);
        }
        else if(btn.id === "watchtwo")
        {
            carousal[1].scrollLeft = firstCardWidth;
            btn.style.backgroundColor = "black";
            grayColor(btn,4);
        }
        else if(btn.id === "watchthree")
        {
            carousal[1].scrollLeft = (2*firstCardWidth);
            btn.style.backgroundColor = "black";
            grayColor(btn,4);
        }
        else if(btn.id === "watchfour")
        {
            carousal[1].scrollLeft = (3*firstCardWidth);
            btn.style.backgroundColor = "black";
            grayColor(btn,4);
        }
    });
});

function grayColor(name,e)
{
    var size = btns.length;
    if(e==0)
        size = 4;
    for(let i=e;i<size;i++)
    {
        if(btns[i].id != name.id)
        {
            btns[i].style.backgroundColor = "gray";
        }
    }
}



function checkEmail(e)
{
    var exp = /^[A-Za-z0-9]{1,}(@)[a-z]{1,}(.)[a-z]{1,}$/;
    if(!(exp.test(e.value)))
    {
        e.focus();
    }
}


window.onload =  function() {
    if(localStorage.counter)
    {
        document.querySelectorAll(".counter")[0].innerHTML = localStorage.counter;
        document.querySelectorAll(".counter")[1].innerHTML = localStorage.counter;
    }
};

var perfEntries = performance.getEntriesByType("navigation");

if (perfEntries[0].type === "back_forward") {
    location.reload();
}


