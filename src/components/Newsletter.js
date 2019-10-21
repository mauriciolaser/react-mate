import React from 'react'
import MailchimpSubscribe from "react-mailchimp-subscribe"

const url = "https://mate.us10.list-manage.com/subscribe/post?u=b52725410daab27470667d3cf&amp;id=05515d4824";
const SimpleForm = () => <MailchimpSubscribe url={url} />

export default function Newsletter() {
    
    return (
        <div className='App-newsletter' style={{ width: '100%', backgroundColor: '#111111', display: 'flex', justifyContent: 'center' }}>
            <CustomForm>
                
            </CustomForm>
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
                <label>
                    Email:
          <input type="email" value={this.state.value} onChange={this.handleChange} />
                </label>
                <input type="submit" value="Submit" />
            </form>
        );
    }
}

const CustomForm = () => (
    <MailchimpSubscribe
        url={url}
        render={({ subscribe, status, message }) => (
            <div>
                <MyForm onSubmitted={formData => subscribe(formData)} />
                {status === "sending" && <div style={{ color: "blue" }}>sending...</div>}
                {status === "error" && <div style={{ color: "red" }} dangerouslySetInnerHTML={{ __html: message }} />}
                {status === "success" && <div style={{ color: "green" }}>Subscribed !</div>}
            </div>
        )}
    />
)