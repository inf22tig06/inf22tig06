let terrestre = document.getElementById("terrestre")
let aquatico = document.getElementById("aquatico")
let aereo = document.getElementById("aereo")

let cardArea = document.getElementById("card-area")

cardArea.innerHTML = `

                    <div class="card row-1">
                        <img src="./img/teres1.webp">
                        
                    </div>
                    <div class="card row-1">
                        <img src="./img/teres2.webp">
                        
                    </div>
                    <div class="card row-1">
                        <img src="./img/teres3.jpg">
                        
                    </div>
                    <div class="card row-1">
                        <img src="./img/teres4.webp">
                        
                    </div>
                    <div class="card row-2">
                        <img src="./img/teres5.jpg">
                        
                    </div>
                    <div class="card row-2">
                        <img src="./img/teres6.jpg">
                        
                    </div>
                    <div class="card row-2">
                        <img src="./img/teres7.webp">
                        
                    </div>
                    <div class="card row-2">
                        <img src="./img/teres8.jpg">
                        
                    </div>
`



terrestre.addEventListener("click",function(event){
    cardArea.innerHTML =  `
                    <div class="card row-1">
                        <img src="./img/teres1.webp">
                        
                    </div>
                    <div class="card row-1">
                        <img src="./img/teres2.webp">
                        
                    </div>
                    <div class="card row-1">
                        <img src="./img/teres3.jpg">
                        
                    </div>
                    <div class="card row-1">
                        <img src="./img/teres4.webp">
                        
                    </div>
                    <div class="card row-2">
                        <img src="./img/teres5.jpg">
                        
                    </div>
                    <div class="card row-2">
                        <img src="./img/teres6.jpg">
                        
                    </div>
                    <div class="card row-2">
                        <img src="./img/teres7.webp">
                        
                    </div>
                    <div class="card row-2">
                        <img src="./img/teres8.jpg">
                       
                    </div>
`
})

aquatico.addEventListener("click",function(event){
    cardArea.innerHTML = `
                    <div class="card row-1">
                        <img src="./img/aqua1.jpg">
                        
                    </div>
                    <div class="card row-1">
                        <img src="./img/aqua2.jpg">
                        
                    </div>
                    <div class="card row-1">
                        <img src="./img/aqua3.jpg">
                        
                    </div>
                    <div class="card row-1">
                        <img src="./img/aqua4.jfif">
                        
                    </div>
                    <div class="card row-2">
                        <img src="./img/aqua5.jpg">
                        
                    </div>
                    <div class="card row-2">
                        <img src="./img/aqua6.jpg">
                       
                    </div>
                    <div class="card row-2">
                        <img src="./img/aqua7.jpg">
                      
                    </div>
                    <div class="card row-2">
                        <img src="./img/aqua8.jpg">
                        
                    </div>
`
})

aereo.addEventListener("click",function(event){
    cardArea.innerHTML = `
                    <div class="card row-1">
                        <img src="./img/ar1.jpg">
                        
                    </div>
                    <div class="card row-1">
                        <img src="./img/ar2.jpg">
                        
                    </div>
                    <div class="card row-1">
                        <img src="./img/ar3.jpg">
                        
                    </div>
                    <div class="card row-1">
                        <img src="./img/ar4.jpg">
                        
                    </div>
                    <div class="card row-2">
                        <img src="./img/ar5.avif">
                        
                    </div>
                    <div class="card row-2">
                        <img src="./img/ar6.avif">
                       
                    </div>
                    <div class="card row-2">
                        <img src="./img/ar7.jpg">
                        
                    </div>
                    <div class="card row-2">
                        <img src="./img/ar8.jfif">
                      
                    </div>
`
})