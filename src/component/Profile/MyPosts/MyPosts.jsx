import React from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post"

const MyPosts = (props) => {
    return <div>
            My post
            <div>
                <textarea name="" id="" cols="30" rows="10"></textarea>
                <button>Add post</button>
            </div>
            <div className={s.post}>
                <Post message='Hi, how are you?' name='Lena' likecount='17'/>
                <Post message='What are you?' name='What' likecount='20'/>

        </div>
    </div>
}
export default MyPosts;