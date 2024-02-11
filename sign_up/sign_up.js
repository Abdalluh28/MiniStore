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
};


function checkName(e)
{
    if( ( e.key >= 'a' && e.key <= 'z') || ( e.key >= 'A' && e.key <= 'Z' ) );
    else
    {
        e.preventDefault();
    }
}

function checkEmail(e)
{
    var exp = /^[A-Za-z]{7,}[0-9]{0,}[@][a-z]{5,}[.][a-z]{3,}$/;
    if(!(exp.test(e.value)))
    {
        e.focus();
    }
}

function checkpassword(e)
{
    var exp = /^[A-Za-z0-9]{9,}$/;
    if(!(exp.test(e.value)))
    {
        e.focus();
    }
}

function checkPhone(e)
{
    if(e.key<"0" || e.key>"9")
    {
        if(e.key == "Backspace" || e.key == "Delete");
        else
            e.preventDefault();
    }
}
function checkPass(e)
{
    if(e.target.value != document.getElementById("pass").value)
    {
        document.querySelector(".wrongPass").classList.remove("d-none");
    }
    else
    {
        document.querySelector(".wrongPass").classList.add("d-none");
    }
}

function checkSubmit(e)
{
    var flag = document.querySelector("#email").value;
    var flagPhone = document.querySelector("#phone").value;
    if(document.querySelector(".wrongPass").classList.contains("d-none") && flag.includes('.') && flagPhone.length > 9);
    else
    {
        e.preventDefault();
    }

    let male = document.querySelectorAll(".gender")[0];
    let female = document.querySelectorAll(".gender")[1];
    if(!male.checked && !female.checked ) 
        e.preventDefault();
}



var modalId = document.getElementById('modalId');

modalId.addEventListener('show.bs.modal', function (event) {
        // Button that triggered the modal
        let button = event.relatedTarget;
        // Extract info from data-bs-* attributes
        let recipient = button.getAttribute('data-bs-whatever');

    // Use above variables to manipulate the DOM
});


var perfEntries = performance.getEntriesByType("navigation");

if (perfEntries[0].type === "back_forward") {
    location.reload();
}