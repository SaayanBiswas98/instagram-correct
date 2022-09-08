import React,{useState} from 'react';
import {Button} from '@material-ui/core';






function ImageUpload(){
    const[caption,setCaption]=useState('');
    const[image,setImage]=useState(null);
    const[url,SetUrl]=useState("");
    const[progress,setProgress]=useState(0);
    const handleChange=(e)=>{
        if(e.target.file[0]){
            const image=e.target.files[0];
            this.setState(() => ({image}));
        }
    };
    const handleUpload=()=>{
        const uploadTask=Storage.ref('image/${image.name}').put(image);
        uploadTask.on(
            "state_changed",
            (snapshot) => {
                const progress=Math.round(
                    (snapshot.bytesTransferred/snapshot.totalBytes)*100
                );
                setProgress(progress);

            },
            (error)=>{
                console.log(error);
                alert(error.message);
            },
            ()=>{
                //complete function
                Storage
                .ref("images")
                .child(image.name)
                .getDownloadURL()
            }


        )
        
    }

    return (
        <div>
            <input type="text" placeholder="enter caption"onChange={event=>setCaption(event.target.value)}/>
            <input type="file"onChange={handleChange}/>
            <button onClick={handleUpload}>Upload</button>


        </div>

    )
};
export default ImageUpload;
