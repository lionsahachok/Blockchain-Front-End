import React from 'react'

const FormSignup = () => {
    return (
        <div className="form-content-right">
            <form className="form">
                <h1>Get start your account</h1>
                <div className="form-inputs">
                    <label htmlFor="username"
                    className='Form-label'>
                    Username  
                    </label>
                    <input
                        id='username'
                        type='text'
                        name='username'
                        className='form-input'
                        placeholder="Enter your username"
                        />
                </div>
                <div className="form-inputs">
                    <label htmlFor="email"
                    className='Form-label'>
                    Email 
                    </label>
                    <input
                        id='email'
                        type='email'
                        name='email'
                        className='form-input'
                        placeholder="Enter your email"
                        />
                </div>
            </form>
        </div>
    )
}

export default FormSignup
