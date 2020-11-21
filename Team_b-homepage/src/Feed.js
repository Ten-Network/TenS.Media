import React from 'react';
import "./Feed.css";
import StoryReel from "./StoryReel.js";
import MessageSender from "./MessageSender.js";
import Post from "./Post.js";

function Feed() {
    return (
        <div className="feed">
            {/*Story Reels */}
            <StoryReel/>
            {/*Post & messagng */}
            <MessageSender/>

            <Post
            profilePic="https://www.google.co.in/url?sa=i&url=https%3A%2F%2Fpeople.desktopnexus.com%2Fwallpaper%2F2487414%2F&psig=AOvVaw0pWsp4c-mqQlms91521G6H&ust=1605209372044000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCOj1q4ed--wCFQAAAAAdAAAAABAD"
            message="This is the first sample post"
            username="Akash Fredric"
            timestamp="1:00 AM 12 Nov 2020"
            image="https://images.unsplash.com/photo-1455849318743-b2233052fcff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80://images.unsplash.com/photo-1600096194534-95cf5ece04cf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1234&q=80"
            />
        </div>
    )
}

export default Feed;
