import React from 'react'
import axios from 'axios';


export default class Instagram extends React.Component {
    state = {
        images: [],
    };

    componentDidMount() {
        let token = '7717816710.1677ed0.d56d417ec975467b9af5fe8b2ae7ac8c';
        let num_photos = 4;


        axios.get('https://api.instagram.com/v1/users/self/media/recent/?access_token=' + token + '&count=' + num_photos )
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
                    <div className='ig-gallery'>
                        {this.state.images.map((image) => { return(
                            <div className='gallery-item' key={image.id}>
                                <a href={image.link}>
                                    <img className='gallery-image' alt={image.images.id} src={image.images.standard_resolution.url} />
                                </a>
                            </div>
                            ) }
                            )}
                            
                        </div>
                    </div>
                </div>
        )
    }
}
