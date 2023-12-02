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
                 <div class='text-primary'>
                    ${post.title}: 
                 </div> 
                <div> 
                    ${post.body} 
                </div>
            </li>`;
        } );
        document.querySelector('#ol').innerHTML = output;
    }, 1000);
}

function createPost(post, callback){
    setTimeout( ()=>{ 
        posts.push(post);        
        callback(); 
    } ,2000);
}

// getPosts();

createPost( {title: 'Post Three', body: 'This is body of post three'}, getPosts );
//in place of CALLBACK parameter function getPosts() is passed
//after createPosts() is executed > getPosts() will be executed.
