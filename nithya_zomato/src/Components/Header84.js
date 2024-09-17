import React from "react";
import Modal from 'react-modal';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";

// Custom styles for the modal
const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        border: '1px solid brown',
        backgroundColor: "gray",
    }
};

class Header84 extends React.Component {
    constructor() {
        super();
        this.state = {
            LoginModalIsOpen: false,
            isLoggedIn: false,
            loggedInUser: undefined,
        };
    }
    handleLogin = () => {
        this.setState({ LoginModalIsOpen: true });
    }

    handleCancel = () => {
        this.setState({ LoginModalIsOpen: false });
    }

handleLogout = () => {
    this.setState({ isLoggedIn: false, loggedInUser: undefined });
}

    responseGoogle = (credentialResponse) => {
        // Decode the credential response to extract user info if needed
        if (credentialResponse.credential) {
            const User = jwtDecode(credentialResponse?.credential);
            console.log("user",User.name)
            this.setState({ isLoggedIn: true, loggedInUser: User.name ,LoginModalIsOpen: false});
        } else {
            console.error("Google login response does not contain credentials.");
        }
    }

    render() {
        const { LoginModalIsOpen, isLoggedIn, loggedInUser } = this.state;
        return (
            <>
                <div>
                    <nav className="navbar navbar-light bg-danger">
                        <a className="navbar-brand text-white" href="#">e!</a>
                        
                        {! loggedInUser ?
                            <div>
                                <button className="btn btn-outline-light" type="button" onClick={this.handleLogin}>Login</button>
                                <button className="btn btn-outline-light" type="button">Create an account</button>
                            </div>
                            :
                            <div>
                                <button className="btn btn-outline-light" type="button">{ loggedInUser}</button>
                                <button className="btn btn-outline-light" type="button" onClick={this.handleLogout}>Logout</button>
                            </div>
                        }
                    </nav>
                </div>

                <Modal
                    isOpen={LoginModalIsOpen}
                    style={customStyles}
                    contentLabel="Login Modal"
                >

                    <div>
                        <h2 style={{ textAlign: 'center' }}>Login</h2>
                        <div>
                            {/* <FontAwesomeIcon icon={faEnvelope} /> */}
                            <input type="text" placeholder="Email" />
                        </div>
                        <br />
                        <div>
                            {/* <FontAwesomeIcon icon={faLock} /> */}
                            <input type="text" placeholder="Password" />
                        </div>
                    </div>
                    <br />
                    <button style={{ marginLeft: '20px' }}>login</button>
                    <button style={{ marginLeft: '35px' }} onClick={this.handleCancel}>Cancel</button>
                    <br />
                    <br />
                    <div>
                        

                        <GoogleLogin
                            
                            onSuccess={this.responseGoogle}
                            onError={() => {
                                console.log('Login Failed');
                            }}
                        />;
                    </div>

                </Modal>
            </>
        );
    }
}
export default Header84;





