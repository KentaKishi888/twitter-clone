import { Avatar, Button } from '@mui/material'
import React, { useState } from 'react'
import "./TweetBox.css";
import {collection, addDoc, serverTimestamp} from "firebase/firestore"
import db from "../../firebase";

const TweetBox = () => {
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");

  const sendTweet  = (e) => {
    // DB追加
    e.preventDefault();

    addDoc(collection(db, "posts"), {
      displayName: "test",
        username: "kishikun",
        verified: true,
        text: tweetMessage,
        avatar:"https://source.unsplash.com/random",
        image:tweetImage,
        timestamp:serverTimestamp(),
    });

    setTweetMessage("");
    setTweetImage("");

  }

  return (
    <div className='tweetBox'>
      <form>
          <div className='tweetBox_input'>
            <Avatar />
            <input placeholder='いまどうしてる？？' type="text" value={tweetMessage}
             onChange={(e) => setTweetMessage(e.target.value)}/>
          </div>
            <input className='tweetBox_imageInput' placeholder='画像のURLを入力してください' type="text"
              value={tweetImage} 
              onChange={(e) => setTweetImage(e.target.value)}/>
            <Button className='tweetBox_tweetButton' type="submit"
              onClick={sendTweet}>ツイートする</Button>
      </form>
    </div>
  )
}

export default TweetBox
