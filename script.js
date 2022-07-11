  function display(num){
  
             document.getElementById('img'+num).innerHTML="<img src='./assets/player"+num+".png'>";
        }

        function myFunction() {
                var popup = document.getElementById("myPopup");
                popup.classList.toggle("show");
              }