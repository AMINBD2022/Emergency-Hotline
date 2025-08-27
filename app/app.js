// Heart Counter 

let heartNumberCount = parseInt(document.getElementById("heart-number-count").innerText);

let hearts = document.getElementsByClassName("fa-heart");
for (let heart of hearts){
    heart.addEventListener("click", function(){
        heartNumberCount = heartNumberCount + 1;
        document.getElementById("heart-number-count").innerText = heartNumberCount;
    })
}

// hoistory delate button 

let delateHistory = document.getElementById("history-delate").addEventListener("click", function(){
    let hestoryContainer = document.getElementById("hestory-container");
    hestoryContainer.remove(hestoryContainer);
})




// Calling Function 

let availeAbleCoins = parseInt(document.getElementById("available-coins").innerText);
let callBtns = document.getElementsByClassName("call-btn");
for (let callBtn of callBtns){
    callBtn.addEventListener("click", function(){
        if( availeAbleCoins >= 20){
            availeAbleCoins = availeAbleCoins -20;
            document.getElementById("available-coins").innerText = availeAbleCoins;

        }else{
            alert("you don't have enougth Coin to call")
        }
        
        let nationals = document.getElementsByClassName("national");
        for(let national of nationals){
            alert(national.innerText)
        }
    })
}
