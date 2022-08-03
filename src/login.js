import React from 'react';
import {useCtx, Card} from './context';
import { useFormik } from 'formik';
import { Navigate } from 'react-router';


function Login() {

    const ctx = useCtx();
    const [userLogin, setUserLogin] = React.useState(null);
 
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        onSubmit: (values, {resetForm}) => {
            alert('Login successfully', null, 2);
            setUserLogin(true);
            console.log(userLogin);
            resetForm({values:''});
            // how about updating ctx to contain only the user logged data?
        },
        validate,
    });
    
    function validate (values) {
        let errors = {};

        if (!values.email) {
            errors.email = 'Field required';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
            errors.email = 'Email should be in the correct format';
            // Adding another branch, check whether email is in ctx
        };
      
        if (!values.password) {
          errors.password = 'Field required';
        } else if (values.password.length < 8) {
            errors.password = 'Password length must be 8 characters or longer';
            // Adding another branch, check whether password is in ctx
        };
        
        return errors;
    };
    
    return (
        <Card 
            bgcolor="primary"
            txtcolor="white"
            header="ACCESS YOUR ACCOUNT"
            title="Welcome to Bad Bank"
            text="Access your restricted area to manage your account"
            body={userLogin ? (
                <Navigate to="/deposit"></Navigate>
                ) : (
                <form onSubmit={formik.handleSubmit}>
                    Email address<br/>
                    <input type="input" className="form-control" id="email" placeholder="Enter email" value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur}/> {formik.touched.email && formik.errors.email ? (<div id="emailError" style={{color:'red'}}>{formik.errors.email}</div>) : null}<br/>
                    Password<br/>
                    <input type="password" autoComplete="current-password" className="form-control" id="password" placeholder="Enter password" value={formik.values.password} onChange={formik.handleChange} onBlur={formik.handleBlur}/>{formik.touched.password && formik.errors.password ? (<div id="pswError" style={{color: 'red'}}>{formik.errors.password}</div>) : null}<br/>
                    <button type="submit" className="btn btn-warning"> Login</button>
                </form> )
            }
        />
    );
}


export default Login;