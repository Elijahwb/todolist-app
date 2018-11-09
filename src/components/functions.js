/*import './components/jquery-1.8.3.min.js';

$(window).scroll(function(){
    var wScroll = $(this).scrollTop();
    console.log(wScroll);
})*/
window.addEventListener('scroll',()=>{
    var wScroll = window.pageYOffset; //this is supported by all browsers
                //document.documentElement.scrollTop || document.body.scrollTop;
    //console.log(wScroll+"px");
    
        var centerItems = document.getElementsByClassName('items');
    
            var iterator=0;
            for(iterator;iterator<=centerItems.length;iterator++){
                    console.log(centerItems[iterator].scrollTop+"px for element "+iterator+1);
                }
        
        //console.log(centerItems.length+" items");
})