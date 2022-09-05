import React from "react";
import alreadyData from "../../../../data/TapData";
import "./videoGallery.css";
import YouTube from 'react-youtube';
var getYouTubeID = require('get-youtube-id');


const VideoGallery = ({data})=>{
    console.log("videoGallery: "+data)
    if(!data){
        data = alreadyData; 
    }
    const opts = {
        height: '240',
        width: "100%",
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 0,
        //   'origin': 'http://localhost:3000' 
        }
    };
    
    let youtubeLinks = data;
    return(
        <div className="videos">
            {youtubeLinks.map((item)=>{
                var id = getYouTubeID(item.link);
                console.log(id);
                return <YouTube style={{width:"100%", marginBottom:"20px"}} videoId={id} opts={opts} />
            })}
        </div>
    );
}

export { VideoGallery }