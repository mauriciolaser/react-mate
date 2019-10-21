import React from 'react'
import '../../node_modules/video-react/dist/video-react.css';
import { Player, ControlBar, BigPlayButton  } from 'video-react';

export default function BannerVideo() {
    return (
    
                <div>
                    <Player
                        playsInline
                        poster="/assets/banner.png"
                        preload={'auto'}
                        autoPlay
                        loop 
                        muted
                        src="https://srv-file2.gofile.io/download/sRaCTL/mate.mp4">
                            <BigPlayButton disabled='true' />
                            <ControlBar disableCompletely= 'true'/>
                    </Player>
                </div>
   
    )
}

// export default function BannerVideo() {
//     return (
//         <div style={{ backgroundColor: '#111111' }}>
//             <video id="background-video" loop autoPlay muted style={{ width: '100%', }}>
//                 <source src="https://srv-file2.gofile.io/download/sRaCTL/mate.mp4" type="video/mp4" />
//                 Your browser does not support the video tag.
//                 </video>
//         </div>
//     )
// }

