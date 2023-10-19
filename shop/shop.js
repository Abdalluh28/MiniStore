var carts = document.querySelectorAll(".content>span>button");



items = [
    {
        "id" : 1,
        "title" : "IPHONE 10",
        "price" : 980,
        "img" : "../imgs/product-item1.jpg",
        "incart" : 0
    },
    {
        "id" : 2,
        "title" : "IPHONE 11",
        "price" : 1100,
        "img" : "../imgs/product-item2.jpg",
        "incart" : 0
    },
    {
        "id" : 3,
        "title" : "IPHONE 8",
        "price" : 780,
        "img" : "../imgs/product-item3.jpg",
        "incart" : 0
    },
    {
        "id" : 4,
        "title" : "IPHONE 13",
        "price" : 1500,
        "img" : "../imgs/product-item4.jpg",
        "incart" : 0
    },
    {
        "id" : 5,
        "title" : "IPHONE 12",
        "price" : 1300,
        "img" : "../imgs/product-item5.jpg",
        "incart" : 0
    },
    {
        "id" : 6,
        "title" : "PINK WATCH",
        "price" : 870,
        "img" : "../imgs/product-item6.jpg",
        "incart" : 0
    },
    {
        "id" : 7,
        "title" : "HEAVY WATCH",
        "price" : 680,
        "img" : "../imgs/product-item7.jpg",
        "incart" : 0
    },
    {
        "id" : 8,
        "title" : "SPOTTED WATCH",
        "price" : 750,
        "img" : "../imgs/product-item8.jpg",
        "incart" : 0
    },
    {
        "id" : 9,
        "title" : "BLACK WATCH",
        "price" : 650,
        "img" : "../imgs/product-item9.jpg",
        "incart" : 0
    },
    {
        "id" : 10,
        "title" : "SMART WATCH",
        "price" : 750,
        "img" : "../imgs/product-item10.jpg",
        "incart" : 0
    }
]


for(let i=0; i<carts.length;i++)
{
    carts[i].addEventListener("click", function()
    {
        cartNumbers(items[i]);
        totalCost(items[i]);
    });
}
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
};


function putProductsInCart(product)
{
    let cartitems = localStorage.getItem("productInCart");
    cartitems = JSON.parse(cartitems);
    if((cartitems != null))
    {
        if(cartitems[product.title] == undefined)
        {
            cartitems = {
                ...cartitems,
                [product.title] : product
            }
        }
        cartitems[product.title].incart += 1;
    }
    else
    {
        product.incart = 1;
        cartitems = { 
            [product.title] : product
        }
    }
    localStorage.productInCart = JSON.stringify(cartitems);
}


var temp = 0;
function totalCost(product)
{
    if(localStorage.cost)
    {
        temp = parseInt(product.price) ;
        localStorage.cost = parseInt(localStorage.cost)+ temp;
    }
    else
    {
        localStorage.cost = parseInt(product.price);
    }
    
}