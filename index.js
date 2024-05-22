const qaContainers = document.getElementsByClassName("qa-container");

for(i=0; i<qaContainers.length ;i++){
    let qaContainer = qaContainers[i];
    qaContainer.addEventListener("click", ()=>{
        qaContainer.classList.toggle("active");
    })
}


