//prompt will give a pop up message
//let input=prompt("give me your message");
//console.log("the message is",input);

/*query selector
document.querySelector();
in this we can pass class, id or tagname
this works on the first matched element
i.e., if we have same ele it will consider first matched one
*/

let button=document.getElementById("btn");
let ip=document.getElementById("input");
let op=document.getElementById("output");
//var c=0;
var serverUrl = "https://api.funtranslations.com/translate/shakespeare.json";
function getTranslationUrl(text){
    return serverUrl+"?"+"text="+text;
}

function errorHandler(error){
    alert("Sorry,Something is wrong.Please try again after sometime!");
}
const handleClick = () =>{
   /* button.onclick=function()
    {
      c++;//this count is taken to check the number of times it is clicked
      console.log("Clicked",c);
    }*/
    //inner text is given to check what appears there
    //op.innerText= ip.value;
    //op.innerText += " "+ip.value;
    //if we want to append the text of ip
    //console.log("the input is: ", ip.value);
    //c++;op.innerText=c;//will print the count of click

    fetch(getTranslationUrl(ip.value)).then(res=>res.json()).then(json=>{
      op.innerText=json.contents.translated;
    
  }).catch(errorHandler) 
};
//this function will handle what happens when a event is done
button.addEventListener("click",handleClick);
