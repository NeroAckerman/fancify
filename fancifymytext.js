document.getElementById("bigger").addEventListener("click",button);
function button()
{
    document.getElementById("text").style.fontSize = "4em";
}

document.getElementById("fancy").addEventListener("click",fancybutton);
function fancybutton()
{alert("Now Fancy");
    document.getElementById("text").style.fontWeight = "bold";
    document.getElementById("text").style.color = "blue";
    document.getElementById("text").style.textDecoration = "underline";
    
}

document.getElementById("betty").addEventListener("click",boringbutton);
function boringbutton()
{
    document.getElementById("text").style.fontWeight = null;
    document.getElementById("text").style.fontSize = null;
    document.getElementById("text").style.textDecoration = null;
}

document.getElementById("moo").addEventListener("click",button);
function button()
{
    document.getElementById("text").style.textTransform = "uppercase";
    let text = document.getElementById("text").value;
    let str = text.split(".");
    str = str.join("-Moo.");
    document.getElementById("text").value = str;
}

