function showCart()
{
    if(localStorage.counter)
    {
        document.querySelectorAll(".counter")[0].innerHTML = localStorage.counter;
        document.querySelectorAll(".counter")[1].innerHTML = localStorage.counter;
    }
}
showCart();

var products = document.querySelector(".products");
var cartItems = localStorage.productInCart;
cartItems = JSON.parse(cartItems);

function displayCart()
{
    if(cartItems)
    {
        products.innerHTML = ' ';
        Object.values(cartItems).map(item => {
            products.innerHTML += `
            <div class="row content">
                <div class="col-4 d-flex align-items-center">
                    <div class="img"><img src="${item.img}" alt=""></div>
                    <p class="title ms-4">${item.title}</p>
                </div>
                <div class="col-4 d-flex align-items-center">
                    <i class="fa-solid fa-plus me-4" onclick="plusOrMinus(${item.id},1)"></i>
                    <div class="quantity">${item.incart}</div>
                    <i class="fa-solid fa-minus ms-4 " onclick="plusOrMinus(${item.id},0)"></i>
                </div>
                <div class="col-4 d-flex align-items-center">
                    <div class="price">$${item.price*item.incart}</div>
                    <i class="fa-solid fa-xmark ms-5" onclick="removeItem(${item.id})"></i>
                </div>
            </div>
            `;
        });
    }
    if(parseInt(localStorage.counter) > 0)
    {
        document.querySelector(".empty>div").style.display = "none"; 
        document.querySelector(".total").innerHTML = "TOTAL COST: $" + localStorage.cost;
    }
    else
    {
        document.querySelector(".empty>div").style.display = "flex";
        document.querySelector(".total").innerHTML = "TOTAL COST: $0";
    }
    document.querySelector(".total").style.fontSize = "22px";
}
displayCart();


function plusOrMinus(num,plus)
{
    var newItems = cartItems;
    Object.values(cartItems).map(item => {
        if((item.id == num) && (plus == 1))
        {
            newItems[item.title].incart += 1;
            localStorage.counter = parseInt(localStorage.counter) + 1;
            localStorage.cost = parseInt(localStorage.cost) + item.price;
            document.querySelectorAll(".counter")[0].innerHTML = localStorage.counter;
            document.querySelectorAll(".counter")[1].innerHTML = localStorage.counter;
        }
        else if((item.id == num) && (plus != 1))
        {
            newItems[item.title].incart -= 1;
            localStorage.counter = parseInt(localStorage.counter) - 1;
            localStorage.cost = parseInt(localStorage.cost) - item.price;
            document.querySelectorAll(".counter")[0].innerHTML = localStorage.counter;
            document.querySelectorAll(".counter")[1].innerHTML = localStorage.counter;
            if(newItems[item.title].incart == 0)
            {
                delete newItems[item.title];
            }
        }
    });
    cartItems = newItems;
    localStorage.productInCart = JSON.stringify(cartItems);
    displayCart();
}

function removeItem(num)
{
    var newItems = {} ;
    Object.values(cartItems).map(item => {
        if((item.id != num))
        {
            newItems = {
                ...newItems,
                [item.title] : item
            };
        }
        else
        {
            localStorage.counter = parseInt(localStorage.counter) - parseInt(item.incart);
            localStorage.cost = parseInt(localStorage.cost) - ( parseInt(item.price) * parseInt(item.incart) );
        }
    });
    document.querySelectorAll(".counter")[0].innerHTML = localStorage.counter;
    document.querySelectorAll(".counter")[1].innerHTML = localStorage.counter;
    cartItems = newItems;
    localStorage.productInCart = JSON.stringify(newItems);
    displayCart();
}



function clearCart()
{
    cartItems = {};
    localStorage.counter = 0;
    localStorage.cost = 0;
    localStorage.productInCart = JSON.stringify(cartItems);
    document.querySelectorAll(".counter")[0].innerHTML = 0;
    document.querySelectorAll(".counter")[1].innerHTML = 0;
    displayCart();
}
function continueShop()
{
    location.href = "../shop/shop.html";
}