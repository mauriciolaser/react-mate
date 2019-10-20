import React from 'react'


export default function BannerImage() {
    return (
        <div className='App-bannerimage' style={{width: '100%', height: '100%'}}>
            <img style={{ height: '100%', width: '100%' }} src={process.env.PUBLIC_URL + '/assets/banner.jpg'} alt='nepe'/>
        </div>
    )
}
