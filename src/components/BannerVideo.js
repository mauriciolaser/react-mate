import React from 'react'

export default function BannerVideo() {
    return (
        <div style={{ backgroundColor: '#111111'}}>
                <video id="background-video" loop autoPlay muted style={{width: '100%', }}>
                <source src="https://srv-file2.gofile.io/download/sRaCTL/mate.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
    )
}


