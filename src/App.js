import React, {useState, useEffect} from 'react';
import './App.css';
import Post from "./Post";
import { db } from './config';

function App() {

  const [posts, setPosts] = useState([
    // {
    //   imageUrl: "https://previews.123rf.com/images/artshock/artshock1209/artshock120900045/15221647-imag-of-heart-in-the-blue-sky-against-a-background-of-white-clouds-.jpg",
    //   username: "Username",
    //   caption: "Caption"
    // },
    // {
    //   imageUrl: "",
    //   username: "Username",
    //   caption: "Caption"
    // }
  ]);
  
  useEffect(() => {
    db.collection('posts').onSnapshot(snapshot => {
      setPosts(snapshot.docs.map(doc => ({
        id: doc.id, 
        post: doc.data()
      })));
    })
  }, [])

  return (
    <div className="app">
     <div className="app__header">
       <img 
         className=".app__headerImage"
         alt= "Add logo here "
       />
       {/* add source */}
     </div>
     <h1>hi</h1>
     {
       posts.map(({id, post}) => (
        <Post key={id} username={post.username} imageUrl={post.imageUrl} caption={post.caption}/>
       ))
     }
     {/* <Post />
     <Post />
     <Post /> */}
    </div>
    
  );
}

export default App;
