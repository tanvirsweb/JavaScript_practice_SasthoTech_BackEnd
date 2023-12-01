console.log(window)//window object = parent object of browser

// alert('This Is A GET Type form') 
//= window.alert(1) -->as window at top level,don't need to mention it to access it's elements
//window.document -->contain whole html

//Single Element
console.log(document.getElementById('my-form'))
const form = document.querySelector('#my-form') //h1 , #id, .class -->select 1st one Matches
console.log(form)

//Multiple Element
const ol = document.querySelector('#item-list'); // Use querySelector for the first matching element
ol.style.listStyleType='none'
if (ol) {
    // ol.remove(); // Uncomment this line if you want to remove the entire list
    // ol.lastElementChild.remove(); // Uncomment this line if you want to remove the last item
    // Manipulate the first, second, and last elements
    if (ol.children.length > 0) {
        ol.firstElementChild.textContent = 'Hello';
        ol.children[1].innerText = 'Brand';
        ol.lastElementChild.innerHTML = '<h1>Hello</h1>';
    }
}
console.log(ol)

const arr = document.querySelectorAll('.item') //h1 , #id, .class -->select all Matches
console.log(arr)

arr.forEach( element =>{ element.className += 'm-1 bg-light text-center'; console.log(element);} )
// querySelector() -->apply to .className , #id , tagName -->Array Methods can be applied
//getElementBY..()--> no dot/# need to be used-->as specific for class/id/tag --> Array methods can't be used

// ------------- Event Listener in Submit button ---------
const btn = document.querySelector('#submit-click')
btn.style.background = 'red'
// Edit css style: obj.style.property = 'css value'

// parameters: event = click /mouseover /mouseout , function(event){}
btn.addEventListener('click',(e)=>{
    e.preventDefault()//when we click don't flash/go away-> as the form is no longer actually submitting
    console.log('click')    
})
/*
when we click submit ->it actually submits the file 
so if you have either a click on a submit button or you have a form submit 
you have to stop/ the prevent default behavior event.preventDefault()
*/ 

document.querySelector('#dark-mode').addEventListener('click', function(e){
    document.querySelector('body').className='bg-dark'
})

document.querySelector('#light-mode').addEventListener('click', function(e){
    document.querySelector('body').className=''
    document.querySelector('body').style.background='#FFF'
})
document.querySelector('#primary-mode').addEventListener('mouseover', function(e){    
    document.querySelector('body').className='bg-primary'
})

document.querySelector('#secondary-mode').addEventListener('mouseover', function(e){    
    document.querySelector('body').className='bg-secondary'
})
//-----------------form submit----------------------
const myForm = document.querySelector('#my-form')
const nameInput = document.querySelector('#name')
const emailInput = document.querySelector('#email')
const msg = document.querySelector('.msg')
const userList = document.querySelector('#users')

myForm.addEventListener('submit', onSubmit)

function onSubmit(e){
    e.preventDefault();
    console.log(nameInput.value)
    if(nameInput.value === '' || emailInput.value === ''){
        msg.innerHTML='Please Enter Fields'
        msg.classList.add('bg-danger')
        // after 4s=4000ms of submit this msg.remove() will be called
        setTimeout(function(){msg.remove()}, 4000)
    }else{
        const li =document.createElement('li')
        li.appendChild(document.createTextNode(`Name: ${nameInput.value} , Email: ${emailInput.value}`))

        userList.appendChild(li)
        //clear field
        nameInput.value=''
        emailInput.value=''
    }

}