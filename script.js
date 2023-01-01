/*Get all the buttons in an array called btns*/
const btns = document.getElementsByClassName("button")

/*Use a for loop to add event listeners on all buttons of list*/
    for (i of btns) {
        i.addEventListener("click", function () {
          /*Adds the id of the clicked button into variable user_choice*/
          var user_choice = this.id;
          document.getElementById("span1").innerText = user_choice;
          
          /*Let computer choose a random number*/
          var computer_choice = Math.floor(Math.random()*3 + 1)
          if (computer_choice == 1){
            document.getElementById("span2").innerText = "Rock"
          } else if(computer_choice == 2){
            document.getElementById("span2").innerText = "Paper"
          }
          else{
            document.getElementById("span2").innerText = "Scisccors"
          }

          /*Compare user and computer choices to declare the winner*/
          if((user_choice=="Rock" && computer_choice==1)||(user_choice=="Paper" && computer_choice==2) ||(user_choice=="Scissors" && computer_choice==3))
          {
            document.getElementById("span3").innerText ="Draw"
          } else if((user_choice=="Rock" && computer_choice==2) || 
          (user_choice == "Paper" && computer_choice==3)||
          (user_choice == "Scissors" && computer_choice==1))
          {
            document.getElementById("span3").innerText ="Computer Wins"
          }
          else {
            document.getElementById("span3").innerText ="User Wins"
          }
        })
      }
    





