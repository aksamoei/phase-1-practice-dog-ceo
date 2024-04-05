//console.log('%c HI', 'color: firebrick')
//challenge 1
function loadDogImages(){
    fetch("https://dog.ceo/api/breeds/image/random/4")
    .then(function(res){
        return res.json();
    })
    .then(function(dogImages){
        const dogContainer = document.getElementById("dog-image-container");
        for (let item of dogImages.message){
            dogContainer.innerHTML += `<img src=${item}>`
        }

    })

    // challenge 2
    fetch("https://dog.ceo/api/breeds/list/all")
    .then(response => response.json())
    .then(function(breedData){
        let dogBreedName = document.getElementById("dog-breeds");
        for (let breed in breedData["message"]){
            dogBreedName.innerHTML += `<li>${breed}</li>`
        }
        //challenge 3
        let dogBreedList = document.querySelector("#dog-breeds").children
        let dogArray = Array.from(dogBreedList)
        for (let i = 0; i < dogArray.length; i++){
            dogArray[i].addEventListener("click", function(){
                dogArray[i].style.color = "gold";
        })   
        }
        //challenge 4
        let dropDown = document.getElementById("breed-dropdown");
        
        dropDown.addEventListener("change", function(){  
            //let catchDogs = []
            dogBreedName.innerHTML = ''
            for (let n = 0; n < dogArray.length; n++){
                //console.log(dogArray[n])
                if (dropDown.value === dogArray[n].textContent.charAt(0)){
                  //console.log(dogArray[n])
                  //catchDogs.push(dogArray[n])
                  //dogBreedName.innerHTML
                  dogBreedName.innerHTML += `<li>${dogArray[n].textContent}</li>`
                }
            }
            /*Array.from(dogArray).forEach(function(ele){
                if (dropDown.value === ele.textContent.charAt(0))
                console.log(ele)
                catchDogs.push(ele)  
            });*/
            //console.log(catchDogs.length)
            //for (let dog of catchDogs){
                //console.log(dog)
            
            //}
        });
        
        
        
    })
    
   
    
} 

document.addEventListener("DOMContentLoaded", loadDogImages);




