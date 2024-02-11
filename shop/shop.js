/* start of adding items */

var carts ; 
let items ;
var products = [];
var j=1;
fetch("../products.json").then( (data) => { // fetch the file and method promise then and transfer into data var    
    items =  data.json(); //   ***converte data to json
    return items;
}).then( (items) => {
    items.forEach(element => {
        element.id = j; // make id to each product 
        j++;
        element.incart = 0;
        addToBody(element);
        carts = document.querySelectorAll(".addToCart"); // array of buttons make to each product 
        products.push(element); // make array of products
    });
    localStorage.single = JSON.stringify(products[0]); // if the user enter the singleProduct page without clicking on any product 
})



function addToBody(item)
{
    let one = JSON.stringify(item); 
    let discount = (item.originalPrice - item.price) / item.originalPrice * 100;
    if(discount < 0)
        discount = 0;
    discount = Math.floor(discount);
    let element = document.createElement("div"); // to create the element in html dynamically
    element.innerHTML += `
        <div class = "h-50 d-flex justify-content-center img-container" onclick='goToSingleProduct(${one})'>
            <img src = "${item.image}" class="img-fluid">
        </div>
        <hr onclick='goToSingleProduct(${one})'>
        <div class="d-flex justify-content-between align-items-center ms-2 rate" onclick='goToSingleProduct(${one})'>
            <p class="name"> ${item.name} </p>
            <div class="d-flex">
                <p class="me-2"> ${item.stars} </p>
                <i class="fa-solid fa-star mt-1"></i>
            </div>
        </div>
        <div class="d-flex ms-2 cost" onclick='goToSingleProduct(${one})'>
            <p class="price me-4"> $${item.price} </p>
            <p class="original opacity-50 me-4"> $${item.originalPrice} </p>
            <p class="discount me-4"> (${discount}% off) </p>
        </div>
        <div class="d-flex justify-content-center">
            <button class="btn btn-primary addToCart w-75" onclick='cartNumbers(${one}); totalCost(${item.price})'>Add To Cart</button>
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
        document.getElementsByTagName("select")[0].value = 'All'; // get select and make its value with all
        if(e.checked)
        {
            document.querySelector(".products").innerHTML = "";
            items.then ( (items) => { // arrow function to prefom ops in data 
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
    else
    {
        document.querySelectorAll(".counter")[0].innerHTML = 0;
        document.querySelectorAll(".counter")[1].innerHTML = 0;
    }
}; // this function  is called when you  onload in any page


function putProductsInCart(product)
{
    let cartitems = localStorage.getItem("productInCart");
    cartitems = JSON.parse(cartitems);
    if((cartitems != null))
    {
        if(cartitems[product.name] == undefined)
        {
            cartitems = {
                ...cartitems, // spreed operator for get all in cartitems  into cartitems 
                [product.name] : product // add this product to cartitems
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
        // this 'else' for the product in the cart in case of a there is no thing in carts
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
var array = [];
function goToSingleProduct(item)
{
    console.log(products[item.id])
    localStorage.productOne = JSON.stringify(item);
    products.forEach( (product) => {
        if(product.category == item.category && product.name != item.name) 
        {
            array.push(product);
        }
    })
    localStorage.productTwo = JSON.stringify(array[0]);
    localStorage.productThree = JSON.stringify(array[1]);
    localStorage.productFour = JSON.stringify(array[2]);
    localStorage.productFive = JSON.stringify(array[3]);
    location.href = "../singleProduct/singleProduct.php";
}

/* end of single product */



var perfEntries = performance.getEntriesByType("navigation");

if (perfEntries[0].type === "back_forward") {
    location.reload();
}