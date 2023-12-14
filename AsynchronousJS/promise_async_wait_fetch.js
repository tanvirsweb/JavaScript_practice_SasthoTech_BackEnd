const posts = [
    {title: 'Post One', body: 'This is body of post one'},
    {title: 'Post Two', body: 'This is body of post two'}
];

function getPosts(){
    setTimeout( function(){
        let output = '';
        posts.forEach( function(post){
            output += 
            `<li>
                 <u class='text-primary '>
                    ${post.title}: 
                 </u> 
                <div> 
                    ${post.body}. 
                </div>
            </li>`;
        } );
        document.querySelector('#ol').innerHTML = output;
    }, 1000);
}

function createPost(post){
    return new Promise( (resolve, reject)=>{
        setTimeout( ()=>{ 
            posts.push(post); 
            //add an item in posts array

            const error = false;
            if(!error){
                resolve();
            }else{
                reject('Error: Something went wrong');
            }
        } ,2000);
    } );
}

// getPosts();

createPost( {title: 'Post Three', body: 'This is body of post three'})
.then( getPosts )
.catch( err=>console.log(err) );
//after createPosts() is executed >then> getPosts() will be executed.
// resolve() --> function inside then() will be executed.
//reject() --> function inside catch() will be executed.

//promise.all
console.log('Promise.all().then() used:')
const promise1 = Promise.resolve('Hello World!');
const promise2 = new Promise((resolve, reject)=>setTimeout(resolve, 2000, 'Goodbye'));
const promise3 = 10;
const promise4 = fetch('https://jsonplaceholder.typicode.com/users').then(res=>res.json());

Promise.all( [promise1, promise2, promise3, promise4] ).then(values=>console.log(values));

// -------------------------------------------------
//Async / Await ->more elegant way to handle JS
console.log('Async / Await :')
async function init(){
    try{
        await createPost( {title: 'Post Four', body: 'This is body of post Four'});
    // await -> waits for an asynchronous process/action to complete
        getPosts();
    } catch(err){
        console.log("Error occured!! \n",err);
    }
    
}
init();
// -------------------------------------------------
//Async / Await / Fetch (parent function: asynchronous , call another asynchronous function inside it 
// --> use await --> 1st wait to execute it then execute rest)
// use try{ }catch(e){ } for async..await --> best way , avoid nested (4 level max) coding style
console.log('Async / Await / Fetch :')
async function fetchUsers(){
    try{
        const res = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await res.json();
        console.log(data);
    } catch(err){
        console.log("Error occured!! \n",err);
    }
    
}