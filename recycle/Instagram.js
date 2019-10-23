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
                    <div className="insta-wrapper" style={{ backgroundColor: '#111111', width: '100%', flexWrap: 'wrap', display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                            {this.state.images.map((image) => { return(
                                <div className='post-container' style={{ flex: 1, position: 'relative', minWidth: '180px', minHeight: '180px', width: '23.5%', marginTop: 0, marginLeft: 0, marginRight: 0, marginBottom: 2}}>
                                    <a href={image.link}>
                                        <img className='ig-image' alt={image.images.id} style={{ display: 'block', flex: 1, height: '90%', width: '90%'}} src={image.images.standard_resolution.url} />
                                        <div className='ig-overlay'>
                                                <img className='ig-icon' src={process.env.PUBLIC_URL + '/assets/instagram.png'}>
                                                </img>
                                        </div>
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
