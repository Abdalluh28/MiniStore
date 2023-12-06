let one = JSON.parse(localStorage.productOne);
let two = JSON.parse(localStorage.productTwo);
let three = JSON.parse(localStorage.productThree);


/* start of setting data */

function setData()
{
    document.querySelector("#imgOne>img").src = one.image;
    document.querySelector("#headOne").innerHTML = one.name;
    document.querySelector("#starsOne").innerHTML = one.stars;
    document.querySelector("#priceOne").innerHTML = one.price;
    document.querySelector("#descriptionOne").innerHTML = one.description;
    document.querySelector("#categoryOne").innerHTML = one.category;
}
setData();

/* end of setting data */


/* start of check input number */
function editValue(num, id) {
    if (num == 1) {
        document.querySelectorAll(".number>input")[id].value++;
    } else {
        document.querySelectorAll(".number>input")[id].value--;
    }
}
window.onload =  function() {
    if(localStorage.counter)
    {
        document.querySelectorAll(".counter")[0].innerHTML = localStorage.counter;
        document.querySelectorAll(".counter")[1].innerHTML = localStorage.counter;
    }
};
function checkValue(e)
{
    if((e.key>="0" && e.key<="9" )|| (e.key == "Backspace" || e.key == "Delete"));
    else
    {
        e.preventDefault();
    }
}

/* end of check input number */