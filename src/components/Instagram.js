import React from 'react'
import axios from 'axios';


export default class Instagram extends React.Component {
    state = {
        images: [],
    };

    componentDidMount() {
        let token = '7717816710.1677ed0.d56d417ec975467b9af5fe8b2ae7ac8c';
        let num_photos = 4;


        axios.get('https://api.instagram.com/v1/users/self/media/recent/?access_token=' + token + '&count=' + num_photos)
            .then(res => {
                console.log(res.data.data);
                this.setState({ images: res.data.data });
            })
            .catch(err => {
                console.log(err)
            })

    }

    render() {
        return (
            <div className='wrapper-child'>
                <div className='child-column' >
                    <div className='child-content'>
                        <div className="insta-wrapper" style={{ backgroundColor: '#111111', width: '100%', flexWrap: 'wrap', display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                                {this.state.images.map((image) => { return(
                                    <div className='post-container' style={{ position: 'relative', minWidth: '110px', width: '23.5%', marginTop: 0, marginLeft: 0, marginRight: 0, marginBottom: 2}}>
                                        <img alt={image.images.id} style={{ flex: 1, height: '90%', width: '90%'}} src={image.images.standard_resolution.url}>
                                        </img>
                                    </div>
                                ) }
                                )}
                           
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
