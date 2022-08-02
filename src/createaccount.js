import React from 'react';
import {useCtx, Card} from './context';

function CreateAccount() {

    const [show, setShow] = React.useState(true);
    const [status, setStatus] = React.useState('');
    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const ctx = useCtx();
    
    function validate(field, label) {
        if (!field) {
            setStatus('Error: ' + label);
            setTimeout(() => setStatus(''), 3000);
            return false;
        }
        return true;
    }

    function handleCreate(){
        console.log(name, email, password);
        if (!validate(name, 'name')) return;
        if (!validate(email, 'email')) return;
        if (!validate(password, 'password')) return;
        ctx.users.push({name, email, password, balance:100});
        console.log(ctx.users);
        setShow(false);
    }

    function clearForm() {
        setName('');
        setEmail('');
        setPassword('');
        setShow(true);
    }
    return (
        <Card 
            bgcolor="primary"
            txtcolor="white"
            header="CREATE ACCOUNT"
            status = {status}
            title="Welcome to Bad Bank"
            text="Create an account to start enjoying the benefits of Bad Bank"
            body={show ? (
                <form>
                    Name<br/>
                    <input type="input" autoComplete="username" className="form-control" id="name" placeholder="Enter name" value={name} onChange={e => setName(e.currentTarget.value)} /><br/>
                    Email address<br/>
                    <input type="input" className="form-control" id="email" placeholder="Enter email" value={email} onChange={e => setEmail(e.currentTarget.value)} /><br/>
                    Password<br/>
                    <input type="password" autoComplete="current-password" className="form-control" id="password" placeholder="Enter password" value={password} onChange={e => setPassword(e.currentTarget.value)} /><br/>
                    <button type="submit" className="btn btn-warning" onClick={handleCreate}> Create Account</button>
                </form>
            ):(
                <form>
                    <h5> Success </h5>
                    <button type="submit" className="btn btn-warning" onClick={clearForm}> Add another account</button>
                </form>
            )}

        />
    );
}

export default CreateAccount;