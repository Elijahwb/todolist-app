let animator = ()=>{
    let item = document.getElementsByClassName("items"),
            itemCount = item.length,
            body = document.body,
            offset = 621,
            scrollPos,
            i = 0,
        docElem = document.documentElement;
        setInterval(()=>{
            for(i;i < itemCount;i++){
                let height = item[i].offsetTop;
                console.log(height);
                console.log(item[i].style.width);
                if(item[i].style.height < height*100){
                    item[i].classList.remove("invisible")
                }else{
                    item[i].classList.add("invisible")
                }
                
            }
        },300)
}
