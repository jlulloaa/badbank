import React from 'react';
import { useCtx, Card } from './context';
import { useFormik } from 'formik';
import { Link } from 'react-router-dom';


function CreateAccount() {

    const [show, setShow] = React.useState(true);
    const ctx = useCtx();

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            name: '',
        },
        onSubmit: (values, {resetForm}) => {
            alert('Account created successfully', null, 2);
            values.balance=0;
            ctx.users.push(values);
            setShow(false);
            resetForm({values:''});
            console.log(ctx.users);
        },
        validate,
    });
    
    function validate (values) {
        let errors = {};

        if (!values.email) {
            errors.email = 'Field required';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
            errors.email = 'Email should be in the correct format';
        };
      
        if (!values.name) {
            errors.name = 'Field required';
        };

        if (!values.password) {
          errors.password = 'Field required';
        } else if (values.password.length < 8) {
            errors.password = 'Password length must be 8 characters or longer';
        };
        
        return errors;
    };
    
    return (
        <Card 
            bgcolor="primary"
            txtcolor="white"
            header="CREATE ACCOUNT"
            title="Welcome to Bad Bank"
            text="Create an account to start enjoying the benefits of Bad Bank"
            body={
                <form onSubmit={formik.handleSubmit}>
                    Name<br/>
                    <input type="input" autoComplete="username" className="form-control" id="name" placeholder="Enter name" value={formik.values.name} onChange={formik.handleChange} onBlur={formik.handleBlur}/> {formik.touched.name && formik.errors.name ? (<div id="nameError" style={{color:'red'}}>{formik.errors.name}</div>) : null}<br/>
                    Email address<br/>
                    <input type="input" className="form-control" id="email" placeholder="Enter email" value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur}/> {formik.touched.email && formik.errors.email ? (<div id="emailError" style={{color:'red'}}>{formik.errors.email}</div>) : null}<br/>
                    Password<br/>
                    <input type="password" autoComplete="current-password" className="form-control" id="password" placeholder="Enter password" value={formik.values.password} onChange={formik.handleChange} onBlur={formik.handleBlur}/>{formik.touched.password && formik.errors.password ? (<div id="pswError" style={{color: 'red'}}>{formik.errors.password}</div>) : null}<br/>
                    <button type="submit" className="btn btn-warning"> {show ? "Create Account":"Add another account"}</button>
                    {show ? null:<Link data-tip data-for="loginTip" to="/login" className="btn btn-success">Login</Link>}
                </form>
            }

        />
    );
}

export default CreateAccount;