import React from "react";
import s from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return (
        <div className={s.content}>
            <div>
                <img
                    src="https://avatars.mds.yandex.net/i?id=bb2e0289e5e74b1bc15aab319ab2749444e89e9f-5209766-images-thumbs&n=13"
                    alt=""/>
            </div>
            <div>
                ava + description
            </div>
            <MyPosts />
        </div>
    )

}
export default Profile