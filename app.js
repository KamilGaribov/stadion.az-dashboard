classes = ["first", "second", "third", "fourth"]

var rect = document.querySelector("#dot").getBoundingClientRect();
// console.log(rect.top, rect.right, rect.bottom, rect.left);


topp = Math.round(rect.bottom)
leftt = Math.round(rect.left)
// console.log("dot right: ", leftt, ", dot bottom:",topp)

clicked = false

blocks = document.querySelectorAll("#block div")
for(let i=0; i<blocks.length; i++){
    blocks[i].addEventListener("click", function(){
        // blocks[i].style.zIndex = "1"
        if(clicked == false){
            clicked = true
            blocks[0].classList.remove("bigblock")
            document.querySelector("#block").classList.add("block2")
            blocks[i].style.zIndex = "1"
            
            blocks[i].classList.add("outside")
            blocks[i].style.bottom = "0px"
            blocks[i].style.right = "0px"
            let k=0
            for(let j=0; j<blocks.length; j++){
                if(i != j){
                    blocks[j].classList.add("inside")
                    blocks[j].style.bottom = "0px"
                    blocks[j].style.right = "0px"
                    blocks[j].classList.add(`${classes[k]}`)
                    k++
                }
            }
            blokleft = document.querySelector(".block2").offsetLeft
            bloktop = document.querySelector(".block2").offsetTop
            block2Width = 10
            block2Height = 10
            blokw = (window.innerWidth / 100) * block2Width
            blokh = (window.innerWidth / 100) * block2Height
            windowl = window.innerWidth
            windowh = window.innerHeight
            rightmargin = 51
            bottommargin = 51
            trleft = windowl - blokleft - rightmargin - blokw
            trtop = windowh - bloktop - bottommargin - blokh
            blocks[i].style.transform = `translate(${trleft}px, ${trtop}px)`

            x = i
        }
        else{
            blocks[x].classList.add("inside")
            blocks[x].classList.remove("outside")
            blocks[i].classList.add("outside")
            blocks[i].classList.remove("inside")
            blocks[x].style.bottom = "0px"
            blocks[x].style.right = "0px"
            for(let l=0; l<classes.length; l++){
                if(blocks[i].classList.contains(`${classes[l]}`)){
                    blocks[x].classList.add(`${classes[l]}`)
                    blocks[i].classList.remove(`${classes[l]}`)
                }
            }
            blocks[x].style.transform = `translate(${0}px, ${0}px)`

            blocks[i].style.bottom = "0px"
            blocks[i].style.right = "0px"

            blokleft = document.querySelector(".block2").offsetLeft
            bloktop = document.querySelector(".block2").offsetTop
            block2Width = 10
            block2Height = 10
            blokw = (window.innerWidth / 100) * block2Width
            blokh = (window.innerWidth / 100) * block2Height
            windowl = window.innerWidth
            windowh = window.innerHeight
            rightmargin = 51
            bottommargin = 51
            trleft = windowl - blokleft - rightmargin - blokw
            trtop = windowh - bloktop - bottommargin - blokh
            blocks[i].style.transform = `translate(${trleft}px, ${trtop}px)`

            x = i
        }
    })
}
