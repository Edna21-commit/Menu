var name="edna";
var greetings="hellow";
console.log( greetings, "name")
for (i=0; i<=6; i++){
    console.log(i)
}
function changeText(){
    const myButton=document.getElementById("myButton");
    myButton.textContent="I'm Edna";
    myButton.style.color="blue";
    myButton.addEventListener("click", function(){ alert("let's work together")});
}
function validateform(){
const form=
document.getElementById("my form")
form.addEventListener("submit",function(event){
    event.preventDefault();
    const name=document.getElementById("name").value.trim();
    const email=document.getElementById("email").value.trim();
    const password=document.getElementById("password").value.trim();
    const erroMessage=document.getElementById("error");
    let error="";
    if (name===""){
        error="Name is required";
    }else if(!email.includes("@")){
        error="please enter a valid email.";
    }else if(password.length<6){
        error="password must be at least 6 characters"
    }
    if(error){
        document.getElementById("error-message").textContent=error;
    }else{
        document.getElementById("error-message").textContent="";alert("Form submitted successfully");
    }
});
form.addEventListener("submit",function(event){
    event.preventDefault();
    if(validateform()){
        alert("form submitted successfully");
        form.reset();
    }
})
}
const themeToggle=
document.getElementById("themeToggle");
document.body.style.transition="background-color 0.5s, color 0.5s";
function applyTheme(theme){
    if(theme==="dark"){
        document.body.style.backgroundColor="#121212";
        document.body.style.color="white";
        themeToggle.textContent="Switch to light mode";
    }else{
        document.body.style.backgroundColor="white";
        document.body.style.color="black";
        themeToggle.textContent="Switch to Dark Mode";
    }
}
let currentTheme=
localStorage.getItem("theme")||"light";
applyTheme(currentTheme);
 
themeToggle.addEventListener("click",()=>{
    currentTheme=currentTheme==="light"? "dark": "light";
    applyTheme(currentTheme);
    localStorage.setItem("theme", currentTheme);
});
function startClock(){
    function UpdateClock(){
        const now=new Date();
        document.getElementById("clock").innerText=now.toLocaleTimeString();
    }
setInterval(UpdateClock,1000);
UpdateClock();
}
function SetupHoverText(){
    const text=
    document.getElementById("hoverText");
    text.addEventListener("mouseover",()=>{text.innerText="You're hovering!"});
    text.addEventListener("mouseout",()=>{text.innerText="Hover over me!"});
}
function filterMenu(category, button){
    const items=
    document.querySelectorAll('.menu-item')
    items.forEach(item=>{
        item.classList.remove('show');
        if(category==='all'||
            item.classList.contains(category)){
                setTimeout(()=>
                item.classList.add('show'),10);
            }  
});
const buttons=
document.querySelectorAll('menu-buttons button');
buttons.forEach(btn=>
    btn.classList.add('active'));
    buttons.classList.add('active');
}

function showMenu(){
    const exploreMenuBtn=
    document.getElementById('exploreMenuBtn');
    const menus=
    document.getElementById('menu-buttons');
        menus.style.display="block";
        exploreMenuBtn.style.display="none"
    }
 function googleTranslateElementInit()  {
    new google.translate.TranslateElement(
        {pageLanguage: 'en', includedLanguages: 'en,sw'},
        'google_translate_element'
    );
 } 
 const scanButton=
 document.getElementById("scanBtn");
 const readerDiv=
 document.getElementById("reader");
 const resultDiv=
 document.getElementById("result");
    scanButton.addEventListener('click',()=>{
        readerDiv.style.display="block";
        startScanner();
    });
 
 startScanner();
showMenu(); 
startClock();
SetupHoverText();
applyTheme();
filterMenu('all', 
    document.querySelector('.menu-buttons button'));
googleTranslateElementInit();