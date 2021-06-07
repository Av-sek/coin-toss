var button= document.getElementById("button");
var luck=document.getElementById("luck")
function heads()
{
    document.getElementById("cointoss").src="heads.jpg";
    luck.innerHTML="Heads";
}
function tails()
{
    document.getElementById("cointoss").src="tails.png";
    luck.innerHTML="Tails";
}
function flipping()
{
    console.log("called")
    document.getElementById("cointoss").src="coin.gif";
}
function myfunction()
{
    luck.innerHTML="Flipping";
    var random=Math.floor(Math.random()*9+1);
    console.log(random);
    flipping();

    if(random%2==0)
    {
        window.setTimeout(() => {
            heads()
        }, 4000);
    }
    else
    {
        window.setTimeout(() => {
            tails()
        }, 4000);
   }
}

