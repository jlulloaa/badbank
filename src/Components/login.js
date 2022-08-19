import React from 'react';
import Card from './card';
import { useCtx } from './context';
import { useFormik } from 'formik';
import { Navigate } from 'react-router';
import { ToolTips } from './utils';


function Login() {

    // const { users, setContext } = useCtx();
    const users = useCtx();
    const [userLogin, setUserLogin] = React.useState(null);
    const [btndisabled, setBtnDisabled] = React.useState(true);
    console.log(users);
    const formik = useFormik({
        initialValues: {
            email: users[0].email,
            password: users[0].password,
        },
        onSubmit: (values, {resetForm}) => {
            alert('Login successfully', null, 2);
            setUserLogin(true);
            console.log(userLogin);
            resetForm({values:''});
            setBtnDisabled(true);
            // how about updating users to contain only the user logged data?
            users.pop();
        },
        validate,
    });
    
    function validate (values) {
        let errors = {};
        let disableBtn = false;

        if (!values.email) {
            errors.email = 'Field required';
             disableBtn = true;
       } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
            errors.email = 'Email should be in the correct format';
            disableBtn = true;
            // Adding another branch, check whether email is in users
        } else if (values.email !== users[0].email) {
            errors.email = 'Email is not registered, please create an account first'
            disableBtn = true;
        }; 
      
        if (!values.password) {
          errors.password = 'Field required';
          disableBtn = true;
        } else if (values.password.length < 8) {
            errors.password = 'Password length must be 8 characters or longer';
            // Adding another branch, check whether password is in ctx
            disableBtn = true;
        };
        
        setBtnDisabled(disableBtn);
        return errors;
    };
    
    return (
        <Card 
            bgcolor="primary"
            txtcolor="white"
            header="BadBank"
            title="ACCESS YOUR ACCOUNT"
            text="Access your restricted area to manage your account"
            body={userLogin ? (
                <Navigate to="/deposit"></Navigate>
                ) : (
                <form onSubmit={formik.handleSubmit}>
                    Email address<br/>
                    <input type="input" className="form-control" id="email" placeholder="Enter email" value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur} autoComplete="off"/> {formik.touched.email && formik.errors.email ? (<div id="emailError" style={{color:'red'}}>{formik.errors.email}</div>) : null}<br/>
                    Password<br/>
                    <input type="password" autoComplete="current-password" className="form-control" id="password" placeholder="Enter password" value={formik.values.password} onChange={formik.handleChange} onBlur={formik.handleBlur}/>{formik.touched.password && formik.errors.password ? (<div id="pswError" style={{color: 'red'}}autoComplete="off">{formik.errors.password}</div>) : null}<br/>
                    <button data-tip data-for="existAccTip" type="submit" className="btn btn-warning" disabled={btndisabled}> Login</button>
                    <ToolTips></ToolTips>
                </form> )
            }
        />
    );
}


export default Login;