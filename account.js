document.addEventListener("load", setTimeout(function(){
    document.querySelector(".cover").style.right = "100%"
}, 1000))

// document.querySelector("#mybtn").addEventListener("click", function(){
//     document.querySelector(".cover").style.right = "100%"
// })

btns = document.querySelectorAll(".btn")
for(let i=0; i<btns.length; i++){
    btns[i].addEventListener("click", function(){
        btns[i].parentElement.querySelector("input").readOnly = false
        val = btns[i].parentElement.querySelector("input").value
        btns[i].parentElement.querySelector("input").value = ""
        btns[i].parentElement.querySelector("input").value = val
        btns[i].parentElement.querySelector("input").focus()
        document.querySelector("#buttons button:nth-child(1)").style.opacity = "1"
        document.querySelector("#buttons button:nth-child(2)").style.opacity = "1"
        document.querySelector("#buttons button:nth-child(1)").disabled = false
        document.querySelector("#buttons button:nth-child(2)").disabled = false
    })
}

document.querySelector("#buttons button:nth-child(1)").addEventListener("click", function(){
    alert("Sas")
})