import React, { useEffect, useState } from 'react'
import Post from './Post';
import "./Timeline.css";
import TweetBox from './TweetBox';
import db from "../../firebase";
import {collection, getDocs, onSnapshot, orderBy, query} from "firebase/firestore"
import FlipMove from 'react-flip-move';

const Timeline = () => {

  const[posts, setPosts] = useState([]);

  

  useEffect(() => {
    // Firebaseからデータ取得
    const postData = collection(db, "posts");
    const q = query(postData, orderBy("timestamp", "desc"));
    // getDocs(q).then((querySnapshot) => {
    //   setPosts(querySnapshot.docs.map((doc) => doc.data()));
    // });

    //RTでデータ取得
    onSnapshot(q, (querySnapShot) => {
      setPosts(querySnapShot.docs.map((doc) => doc.data()));
    })
  },[])

  return (
    <div className='timeline'>
      {/* ヘッダー */}
        <div className='timeline_header'></div>
        <h2>ホーム</h2>
      {/* ツイートボックス */}
        <TweetBox/>
      {/* 投稿一覧*/}
      <FlipMove>
      {posts.map((post) => (
        <Post 
        key={post.text}
        displayName={post.displayName}
        username={post.username}
        verified={post.verified}
        text={post.text}
        avatar={post.avatar}
        image={post.image}
      />
      ))}
      </FlipMove>
      
    </div>
  )
}

export default Timeline
