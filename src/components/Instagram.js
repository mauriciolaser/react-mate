import React from 'react'
import axios from 'axios';

export default function Instagram() {
    return (
        <div className='App-instagramm' style={{ display: 'flex', width: '100%', backgroundColor: '#111111', flex: 1, justifyContent: 'center'}}>
            <div className='instagram-div' style={{ backgroundColor: '#111111', maxWidth: 1100, display: 'flex' }}>
                <h1 style={{color: 'pink'}}>
                    Instagram
                </h1>
            </div>
        </div>
    )
}


// class Instagram extends React.Component {
//     state = {
//         images: [],
//     };

//     componentDidMount() {
//         let token = 'access-token';
//         let num_photos = 10;


//         axios.get('https://api.instagram.com/v1/users/self/media/recent/?access_token=' + token + '&count=' + num_photos)
//             .then(res => {
//                 console.log(res.data.data);
//                 this.setState({ images: res.data.data });
//             })
//             .catch(err => {
//                 console.log(err)
//             })

//     }

//     render() {
//         return (
//             <div className="instafeed">
//                 <ul>
//                     {this.state.images.map((image) => { image }
//                     )};
//                 </ul>
//             </div>
//         )
//     }
// }

// export default Instagram;