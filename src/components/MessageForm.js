import React, { } from 'react';
    
    
const MessageForm = (props) => {
    const {inputs, setInputs} = props;
    // const inputs = props.inputs;             //Alt way to to say the above line ^1
    // const setInputs = props.setInputs;       //Alt way to to say the above line ^2
    
    const onChange = e => {
        // e.preventDefault();
        setInputs({
            ...inputs,
            [e.target.name]: e.target.value
        });
    };

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     props.inputs( inputs );
    // };
    
    return (
        <form>
        {/* <form onSubmit={ handleSubmit }> */}
        <div className="form-group">   
            <label htmlFor="firstName">First Name</label>
            <input onChange={onChange} type="text" name="firstName"/>
        </div>
        <div className="form-group">  
            <label htmlFor="lastName">Last Name</label>
            <input onChange={onChange} type="text" name="lastName"/>
        </div>
        <div className="form-group">  
            <label htmlFor="email">Email</label>
            <input onChange={onChange} type="text" name="email"/>
        </div>
        <div className="form-group">  
            <label htmlFor="password">Password</label>
            <input onChange={onChange} type="text" name="password"/>
        </div>
        <div className="form-group">  
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input onChange={onChange} type="text" name="confirmPassword"/>
        </div>
{/*             <h1>Set Message</h1> */}
{/*             <textarea 
                rows="4"
                cols="50"
                placeholder="Enter your message here"
                onChange={ (e) => setMsg(e.target.value) }
                value={ msg }
            ></textarea> */}
{/*             <input type="submit" value="Send Message" /> */}
        </form>
    );
};
    
export default MessageForm;