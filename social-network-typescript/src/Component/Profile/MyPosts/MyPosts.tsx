import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';


const user = {
    firstName: "Tim",
    lastName: "Buzmakov"
}

const user1 = {
    firstName: "Kevin",
    lastName: "Miller"
}

const MyPosts = () => {
    return (

        <div>

            <textarea></textarea>
            <div>
                <button>Add post</button>
            </div>
            
            <h3>My Posts</h3>
        <div>
            <Post postText="This is first Post" likes={19} user={user}/>
            <Post postText="This is second Post" likes={10} user={user1}/>
            <Post postText="This is third Post" likes={9} user={user}/>
            <Post postText="This is fourth Post" likes={4} user={user}/>
        </div>
        

        </div>

    )
}

export default MyPosts;
