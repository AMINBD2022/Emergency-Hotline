// Heart Counter 

let heartNumberCount = parseInt(document.getElementById("heart-number-count").innerText);

let hearts = document.getElementsByClassName("fa-heart");
for (let heart of hearts){
    heart.addEventListener("click", function(){
        heartNumberCount = heartNumberCount + 1;
        document.getElementById("heart-number-count").innerText = heartNumberCount;
    })
}
