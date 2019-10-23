import React from 'react'
import MailchimpSubscribe from "react-mailchimp-subscribe"
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';


const url = "https://mate.us10.list-manage.com/subscribe/post?u=b52725410daab27470667d3cf&amp;id=05515d4824";

export default function Newsletter() {
    
    return (
        <div className='wrapper-child'>
            <div className='child-column' >
                <CustomForm/>
                <MediaLinks/>
            </div>
        </div>
    )
}

class MyForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: '' };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label style={{fontSize: 21}}>
                    <input type="email" value={this.state.value} onChange={this.handleChange} style={{ minWidth: '200px', margin: '5px', border: '1px solid white', borderRadius: '6px'}} />
                </label>
                    <input type="submit" value="Enviar" />
            </form>
        );
    }
}

const CustomForm = () => (
    <MailchimpSubscribe
        url={url}
        render={({ subscribe, status, message }) => (
                <div className='newsletter-container' >
                    <div className='newsletter-form'>
                        <div style={{marginBottom: '10px', fontSize: '24px'}}>
                            Suscríbete a nuestra lista de correo.
                        </div>
                        <MyForm className='form-suscribe' onSubmitted={formData => subscribe(formData)} />
                        {console.log(status)}
                        {status === "sending" && <div style={{ height: '40px', width: '50px', color: "blue" }}>sending...</div>} {console.log(status)}
                        {status === "error" && <div style={{ height: '40px', width: '50px',color: "red" }} dangerouslySetInnerHTML={{ __html: message }} />}
                        {status === "success" && <div style={{ height: '40px', width: '50px',color: "green" }}>Subscribed !</div>}
                    </div>
                </div>
        )}
    />
)

const MediaLinks = () => {
    return (
        <div style={{direction: 'flex', flexDirection: 'row', color: 'white'}}>
            <a className='icon-link' href="https://www.instagram.com/bodega_mate/?hl=es"><InstagramIcon className='icon-newsletter'/></a>
                
            <a className='icon-link' href="https://www.facebook.com/pg/MuseoMATE/photos/?tab=album&album_id=330615733701705"><FacebookIcon className='icon-newsletter'/></a>
        </div>
    )
}
