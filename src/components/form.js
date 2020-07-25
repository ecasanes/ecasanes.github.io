import React, { useState } from "react"
import axios from "axios";
import { Link } from "gatsby"
import Layout from "../components/layout"


const MyForm = () => {

    const [serverState, setServerState] = useState({
        submitting: false,
        status: null
    });
    const handleServerResponse = (ok, msg, form) => {
        setServerState({
            submitting: false,
            status: { ok, msg }
        });
        if (ok) {
            form.reset();
        }
    };
    const handleOnSubmit = e => {

        e.preventDefault();
        const form = e.target;

        setServerState({ submitting: true });

        axios({
            method: "post",
            url: "https://getform.io/f/270e5ed5-5472-493f-83ab-a881ac481514",
            data: new FormData(form)
        })
            .then(r => {
                handleServerResponse(true, "Thanks!", form);
            })
            .catch(r => {
                handleServerResponse(false, r.response.data.error, form);
            });
    };
    return (
        <>
            <div className="container">
                <div className="col-xs-12">
                    <h2 style={{ textAlign: 'center', marginBottom: '50px' }}>Contact Me</h2>
                </div>
                <div className="col-xs-12 col-sm-offset-4 col-sm-4">
                    <form onSubmit={handleOnSubmit}>
                        <div className="form-group">
                            <label for="name-input" required="required">Name</label>
                            <input type="text" name="name" className="form-control" id="name-input" placeholder="Name" />
                        </div>
                        <div className="form-group">
                            <label for="email-input" required="required">Email address</label>
                            <input type="email" name="email" className="form-control" id="email-input" aria-describedby="emailHelp" placeholder="Enter email" />
                        </div>
                        <div className="form-group">
                            <label for="message-input" required="required">Message</label>
                            <textarea name="message" className="form-control" id="message-input" placeholder="Your Message"></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary" disabled={serverState.submitting}>
                            { serverState.submitting ? 'Sending' : 'Send'}
                        </button>

                        {/* <span style={{fontStyle:'italic', marginLeft:'10px'}}>Sending...</span> */}

                        {serverState.status && (
                            <span style={{marginLeft:'10px'}} className={!serverState.status.ok ? "errorMsg" : ""}>
                                {serverState.status.msg}
                            </span>
                        )}
                    </form>
                </div>
            </div>
        </>
    );
};

export default MyForm;