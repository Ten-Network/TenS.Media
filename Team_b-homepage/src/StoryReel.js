import React from 'react';
import "./StoryReel.css";
import Story from "./Story.js";

function StoryReel() {
    return (
        <div className="storyReel">

            <Story image="https://images.unsplash.com/photo-1500049242364-5f500807cdd7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1881&q=80" profileSrc="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80" title="Adventure Trip"/>
           
            <Story image="https://i2-prod.manchestereveningnews.co.uk/incoming/article18340053.ece/ALTERNATES/s810/0_JS212772233.jpg" profileSrc="https://www.irreverentgent.com/wp-content/uploads/2018/03/Awesome-Profile-Pictures-for-Guys-look-away2.jpg" title="David Beckham"/>
            
            <Story image="https://wisdomquotessecure-af2a.kxcdn.com/wp-content/uploads/life-quotes-change-your-thoughts-and-you-change-your-world-norman-vincent-peale-wisdom-quotes.jpg" profileSrc="https://images.unsplash.com/photo-1519058082700-08a0b56da9b4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80" title="Motivational Quotes"/>
           
            <Story image="https://images.unsplash.com/photo-1576678927484-cc907957088c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1868&q=80" profileSrc="https://textgod.com/wp-content/uploads/2019/06/louis-roze-trui-pink.jpg" title="Fitness World"/>
            
            <Story image="https://images.unsplash.com/photo-1511886929837-354d827aae26?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80" profileSrc="https://image.shutterstock.com/image-photo/young-man-looking-his-side-260nw-113510497.jpg" title="Footy Feeds"/>
            
        </div>
    )
}

export default StoryReel;
