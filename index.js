let inboxContainer = document.getElementById("inboxcontainer");
let textArea = document.getElementById("textarea");
let dateValue = document.getElementById("date");
function createInbox(){
    let inboxBox = document.createElement("div");
    inboxContainer.appendChild(inboxBox);
    inboxBox.setAttribute("class","inbox-box");
    let smallCircleBox = document.createElement("div");
    inboxBox.appendChild(smallCircleBox);
    smallCircleBox.setAttribute("class","small-circle-box");
    let circleButton = document.createElement("div");
    smallCircleBox.appendChild(circleButton);
    circleButton.setAttribute("class","circle-button");
    let smallInboxBox = document.createElement("div");
    inboxBox.appendChild(smallInboxBox);
    smallInboxBox.setAttribute("class","small-inbox-box");
    let smallInboxBox2= document.createElement("div");
    inboxBox.appendChild(smallInboxBox2);
    smallInboxBox2.setAttribute("class","small-inbox-box-2");
    let inboxFirstParagraph = document.createElement("p");
    smallInboxBox.appendChild(inboxFirstParagraph);
    inboxFirstParagraph.setAttribute("class","inbox-paragraph-1");
    inboxFirstParagraph.textContent = textArea.value;
    let dateIcon = document.createElement("i");
    smallInboxBox2.appendChild(dateIcon);
    dateIcon.setAttribute("class","far fa-calendar");
    dateIcon.setAttribute("id","dateIcon")
    let inboxSecondParagraph = document.createElement("p");
    smallInboxBox2.appendChild(inboxSecondParagraph);
    inboxSecondParagraph.setAttribute("class","inbox-paragraph-2");
    inboxSecondParagraph.textContent = dateValue.value;
    let trashIcon = document.createElement("i");
    inboxBox.appendChild(trashIcon);
    trashIcon.setAttribute("class","far fa-trash-alt");
    trashIcon.setAttribute("id","trashIcon");

    let count = 0; 
    circleButton.addEventListener("click",function(){
        count++;
        if(count % 2 == 0){
              circleButton.style.backgroundColor = "rgba(255, 255, 255, 0.2)";
                circleButton.style.border = "none";
                inboxFirstParagraph.style.textDecoration ="none"
                inboxBox.style.backgroundColor ="rgba(48, 71, 94, 0.45)";
        }
        else{
            circleButton.style.backgroundColor = "#f05454";
            circleButton.style.border = "3px solid grey";
            inboxBox.style.backgroundColor ="rgba(48, 71, 94, 0.2)";
            inboxFirstParagraph.style.textDecoration ="line-through";
        }
        
    })
    trashIcon.addEventListener("click",function(){
      this.parentNode.parentNode.removeChild(this.parentNode);
      counter--;
      countValue.innerHTML = " " + counter;

    })
}
let createTaskButton = document.getElementById("createbutton");
let firstPage = document.getElementById("body1");
let secondPage = document.getElementById("body2");
let body = document.getElementById("body");
let closeIcon = document.getElementById("close");
createTaskButton.addEventListener("click",function(){
     firstPage.style.display = "none";
     secondPage.style.display = "grid";
     body.style.backgroundColor="#283645";
})
closeIcon.addEventListener("click",function(){
    secondPage.style.display = "none";
    firstPage.style.display = "grid";
    body.style.backgroundColor="#222831";
})
let addTask = document.getElementById("addbutton");
let countValue = document.getElementById("countValue");
let counter = 0;
addTask.addEventListener("click",function(){
    secondPage.style.display = "none";
    firstPage.style.display = "grid";
    body.style.backgroundColor="#222831";
    counter++;
    if(dateValue.value !== "" && textArea.value!== ""){
        createInbox();
        dateValue.value = "";
    textArea.value ="";
    countValue.innerHTML = " " + counter;
    }
})
let menuIcon =document.getElementById("menu");
let menuPage = document.getElementById("body3");

let menuCloseIcon = document.getElementById("closer");
menuIcon.addEventListener("click",function(){
    menuPage.style.display = "block";
})
menuCloseIcon.addEventListener("click",function(){
     menuPage.style.display = "none";
})
let newListLink = document.getElementById("list1");
newListLink.addEventListener("click",function(){
    menuPage.style.display = "none";
    firstPage.style.display ="none";
    secondPage.style.display = "grid";
    body.style.backgroundColor="#283645";
})