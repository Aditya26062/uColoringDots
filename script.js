(function(){

let colooor;

init()
initl()
function init()
{
    let dots = document.querySelector('.container');
    for(let i=0 ;i<dots.children.length;i++)
    {
        let dot = dots.children[i];
        dot.addEventListener('click' , colorDot );
    }
}
function initl()
{
    let colors = document.querySelector('#Pallet');
    let a = ['red' ,'yellow','cyan','white','green'];
    for(let i=0 ;i<colors.children.length;i++)
    {
        let color = colors.children[i];
        color.style.backgroundColor = a[i];
        color.addEventListener('click' , setColor );
    }
}
function colorDot(e)
{
    if(e.target.style.backgroundColor != colooor)
        e.target.style.backgroundColor = colooor;
    else {
        e.target.style.backgroundColor = 'rgb(82, 82, 82)';
    }
}
function setColor(e)
{
    colooor = e.target.style.backgroundColor;
}

})()