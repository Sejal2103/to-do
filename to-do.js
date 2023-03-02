var input= document.getElementById('input').value;
const button = document.getElementById('add');
const container = document.querySelector('#container');
 
button.addEventListener('click',function(){
    
    var input= document.getElementById('input');
    if(input.value != ''){
    var list= document.createElement('li');
    list.className='tasks';
   

    let listItem=document.createTextNode(`${input.value}`);
    
    
    list.appendChild(listItem);
   
    container.appendChild(list);
    list.addEventListener('click',function(){
        list.style.textDecoration = "line-through";
           
    })
    list.addEventListener('dblclick',function(){
       listItem.textContent = 'done';
       list.style.textDecoration = "none";
       list.style.fontSize = "20px";
       list.style.fontWeight = "bold";
       list.style.color = "rgb(13, 240, 70)";
       setTimeout(()=>   container.removeChild(list), 3000);
    })
   
   
    
    }
    input.value='';
});

   




