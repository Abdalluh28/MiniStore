/* start of adding items */

var carts ; 
let items ;
var products = [];
var j=1;
fetch("../products.json").then( (data) => {
    items =  data.json();
    return items;
}).then( (items) => {
    items.forEach(element => {
        element.id = j;
        j++;
        element.incart = 0;
        addToBody(element);
        carts = document.querySelectorAll(".addToCart");
        products.push(element);
    });
})



function addToBody(item)
{
    let one = JSON.stringify(item);
    let discount = (item.originalPrice - item.price) / item.originalPrice * 100;
    discount = Math.floor(discount);
    let element = document.createElement("div");
    element.innerHTML += `
        <div class = "h-50 d-flex justify-content-center img-container" onclick='goToSingleProduct(${one})'>
            <img src = "${item.image}" class="img-fluid">
        </div>
        <hr onclick='goToSingleProduct(${one})'>
        <div class="d-flex justify-content-between align-items-center ms-2" onclick='goToSingleProduct(${one})'>
            <p class="name"> ${item.name} </p>
            <div class="d-flex">
                <p class="me-2"> ${item.stars} </p>
                <i class="fa-solid fa-star mt-1"></i>
            </div>
        </div>
        <div class="d-flex ms-2" onclick='goToSingleProduct(${one})'>
            <p class="price me-4"> $${item.price} </p>
            <p class="original opacity-50 me-4"> $${item.originalPrice} </p>
            <p class="discount me-4"> (${discount}% off) </p>
        </div>
        <div class="d-flex justify-content-center">
            <button class="btn btn-primary addToCart w-75" onclick='cartNumbers(${one}); totalCost(${item.price})'>Add To Cart</button>
        </div>
        <div class="d-flex justify-content-center mt-3">
            <button class="btn btn-primary addToFav w-75">Add To favourites</button>
        </div>
    `;
    document.querySelector(".products").appendChild(element);
}

/* end of adding items */

/* start of filters */

function filterProducts(e,name="",filter="")
{
    if(filter==="company")
    {
        document.getElementById("all").checked = true;
        if(e.value!="All")
        {
            document.querySelector(".products").innerHTML = "";
            items.then ( (items) => {
                items.forEach( (item) => {
                    if(item.company === e.value)
                        addToBody(item);
                })
            })
        }
        else
        {
            document.querySelector(".products").innerHTML = "";
            items.then ( (items) => {
                items.forEach( (item) => {
                    addToBody(item);
                })
            })
        }
    }
    if(filter==="category")
    {
        document.getElementsByTagName("select")[0].value = 'All';
        if(e.checked)
        {
            document.querySelector(".products").innerHTML = "";
            items.then ( (items) => {
                items.forEach( (item) => {
                    if(item.category === name)
                        addToBody(item);
                })
            })
        }
        else
        {
            document.querySelector(".products").innerHTML = "";
            items.then ( (items) => {
                items.forEach( (item) => {
                    addToBody(item);
                })
            })
        }
    } 
}

function clearFilters()
{
    document.getElementById("all").checked = true;
    document.getElementsByTagName("select")[0].value = 'All';
    document.querySelector(".products").innerHTML = "";
    items.then ( (items) => {
        items.forEach( (item) => {
            addToBody(item);
        })
    })
};

/* end of filters */



/* start of adding in cart */


function cartNumbers(product)
{
    console.log(product)
    if(localStorage.counter )
    {
        var nums = localStorage.getItem("counter") ;
        localStorage.counter = parseInt(nums) +1;
    }
    else{
        localStorage.counter = 1;
    }
    document.querySelectorAll(".counter")[0].innerHTML = localStorage.counter;
    document.querySelectorAll(".counter")[1].innerHTML = localStorage.counter;
    putProductsInCart(product);
}


window.onload =  function() {
    if(localStorage.counter)
    {
        document.querySelectorAll(".counter")[0].innerHTML = localStorage.counter;
        document.querySelectorAll(".counter")[1].innerHTML = localStorage.counter;
    }
};


function putProductsInCart(product)
{
    let cartitems = localStorage.getItem("productInCart");
    cartitems = JSON.parse(cartitems);
    if((cartitems != null))
    {
        if(cartitems[product.name] == undefined)
        {
            cartitems = {
                ...cartitems,
                [product.name] : product
            }
        }
        cartitems[product.name].incart = parseInt(cartitems[product.name].incart) + 1;
    }
    else
    {
        product.incart = 1;
        cartitems = { 
            [product.name] : product
        }
    }
    localStorage.productInCart = JSON.stringify(cartitems);
}


var temp = 0;
function totalCost(price)
{
    if(localStorage.cost)
    {
        temp = parseInt(price) ;
        localStorage.cost = parseInt(localStorage.cost)+ temp;
    }
    else
    {
        localStorage.cost = parseInt(price);
    }
    
}

/* end of adding in cart */



/* start of single product */

function goToSingleProduct(item)
{
    console.log(products[item.id])
    localStorage.productOne = JSON.stringify(item);
    if(item.id === 50)
        localStorage.productTwo = JSON.stringify(products[item.id-3]);
    else
        localStorage.productTwo = JSON.stringify(products[item.id]);//after
    if(item.id === 1)
        localStorage.productThree = JSON.stringify(products[item.id+1]);
    else
        localStorage.productThree = JSON.stringify(products[item.id-2]);//before
    location.href = "../singleProduct/singleProduct.html";
}

/* end of single product */