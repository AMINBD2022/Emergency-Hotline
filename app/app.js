// Shared Content 

let availableCopy = parseInt(document.getElementById("available-copy").innerText);

let heartNumberCount = parseInt(document.getElementById("heart-number-count").innerText);

let availableCoins = parseInt(document.getElementById("available-coins").innerText);

let contentBoxes = document.getElementsByClassName("content-box");

let callHistory = document.getElementById("history-container");

















// Heart Counter  Section 

let hearts = document.getElementsByClassName("fa-heart");
for (let heart of hearts){
    heart.addEventListener("click", function(){
        heartNumberCount = heartNumberCount + 1;
        document.getElementById("heart-number-count").innerText = heartNumberCount;
    })
}

// hoistory delate Function 

let delateHistory = document.getElementById("history-delate").addEventListener("click", function(){
    let historyContainer = document.getElementById("history-container");
    historyContainer.innerHTML = " "; 
})
 
// Calling Function 


for(let box of contentBoxes){
        box.addEventListener("click", function(e){
        if(e.target.classList.contains("call-btn")){
            e.preventDefault();
            if(availableCoins >= 20){
            availableCoins = availableCoins - 20;
            document.getElementById("available-coins").innerText = availableCoins;
            }else{
            alert("need 20 coins");
            return;
            }
            let callTitle = box.querySelector(".national").innerText;
            let callNumber = box.querySelector(".number").innerText;
            alert( "Calling " + callTitle + " " + callNumber + " ...");
            let cresteElement = document.createElement("div");
            let date = new Date().toLocaleTimeString();
            cresteElement.innerHTML = `
            <div class="history-box p-4 bg-[#fafafa] rounded-lg flex justify-between items-center mb-4">
                <div class="left">
                    <h3 class="text-lg font-semibold">${callTitle}</h3>
                    <span class="font-[400] text-lg">${callNumber}</span>
                </div>
                <span class="font-[400] text-lg">${date}</span>
               </div>
            ` 
            callHistory.appendChild(cresteElement);  
        }
    })
}


// Copy Button section 


for(let box of contentBoxes){
        box.addEventListener("click", function(e){
        if(e.target.classList.contains("copy-button")){
            e.preventDefault();
            availableCopy = availableCopy + 1;
            document.getElementById("available-copy").innerText = availableCopy;
        
            let callNumber = box.querySelector(".number").innerText;
            navigator.clipboard.writeText(callNumber).then(function(){
                alert("Number has been copied : " + callNumber);
            })          
        }
    })
}