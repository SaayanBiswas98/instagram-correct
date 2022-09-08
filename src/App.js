import ImageUpload from './ImageUpload';
import React ,{Component,useState} from 'react';
import './App.css';
 
import FileBase64 from 'react-file-base64';
import Post from './Post';



function App(){
  const [posts,setPosts]=useState([  
    {
      username:"saayanbiswas", 
      caption:"wow it works" ,
      imageUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1200px-Instagram_logo.svg.png",
    },
    {
      username:"saayanbiswas",
      caption:"wow it works",
      imageUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1200px-Instagram_logo.svg.png",
    }
  ]);
  
 


  return (
    <div className="app">
      
       <div class="app__logo">
         <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1200px-Instagram_logo.svg.png"width="90px"/>
         {
           posts.map(post=>(
             <Post username={post.username} caption={post.caption} imageUrl={post.imageUrl}/>

           ))
         }
         

         <Post  username="Suti dehra"caption="wow there"imageUrl="https://static.toiimg.com/thumb/msid-80690325,imgsize-205978,width-800,height-600,resizemode-75/80690325.jpg"/>
         <Post username="Jack Asprow" caption="hey good day"imageUrl="https://i.pinimg.com/originals/0f/4f/56/0f4f560ef645a2eb83d898e895ee7be0.jpg" />
         <Post username="Tim Bernard" caption="wow its a good day"imageUrl="https://www.filmibeat.com/wimg/desktop/2019/07/kiara-advani_9.jpg"/>
         <ImageUpload/>
         </div>
    </div>
    
  )
};
export default App;