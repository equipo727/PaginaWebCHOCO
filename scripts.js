const header = document.querySelector('.navbar');

window.onscroll = function(){
    var top = window.scrollY;
    console.log(top)
    if(top >= 600) {
        header.classList.add('dark');  
    }
    else{
        header.classList.remove('dark')
    }
}
