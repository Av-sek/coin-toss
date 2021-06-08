var button= document.getElementById("button");
var value=button;
var luck=document.getElementById("luck")
function heads()
{
    document.getElementById("cointoss").src="heads.jpg";
    luck.innerHTML="Heads";
    value.innerHTML="Flip again";
    button=value;
}
function tails()
{
    document.getElementById("cointoss").src="tails.png";
    luck.innerHTML="Tails";
    value.innerHTML="Flip again";
    button=value;
}
function flipping()
{
    console.log("called")
    document.getElementById("cointoss").src="coin.gif";
}
function myfunction()
{
    button.innerHTML="flipping";
    button=null;
    var random=Math.ceil(Math.random()*9+1);
    console.log(random);
    flipping();

    if(random%2==0)
    {
        window.setTimeout(() => {
            heads()
        }, 5000);
    }
    else
    {
        window.setTimeout(() => {
            tails()
        }, 4000);
   }
}

