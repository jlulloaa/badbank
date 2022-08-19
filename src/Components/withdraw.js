import React from 'react';
import { formatBalance, ToolTips } from './utils';
import Card from './card';
import { useCtx } from './context';

function Withdraw() {

    const [withdrawValue, setWithdrawValue] = React.useState("");
    // const { users, setContext } = useCtx();
    const users = useCtx();
    const [balance, setBalance] = React.useState(users.at(-1).balance);
    const [btndisabled, setBtnDisabled] = React.useState(true);
    const [withdrawal, setWithdrawal] = React.useState(null);
    console.log(users);
 
    const onChangeHandler = (e)=>{
        e.preventDefault();
        setWithdrawValue(e.target.value);
        if (parseInt(e.target.value) > 0) {
            // Is a valid numeric format, let see if the withdrawal can be covered with the balance:
            let rem = balance - parseInt(e.target.value);
            if (rem >= 0 ) {
                // Yes, there are enough funds to complete the operation
                setBtnDisabled(false);
                setWithdrawal(parseInt(e.target.value));    
            } else {
                // Not enough money to withdraw.
                alert('Not enough money to withdraw', null, 2);
                setBtnDisabled(true);
            }
            console.log(e.target.value);
        } else {
            setBtnDisabled(true);
        }
      }

    const onClickHandler = () => {
         // replicate the last element to populate it with the new transaction:
         users.push({...users.at(-1)});
        // This new functionality allows to get the last element (ES2022):
        users.at(-1).withdraw = withdrawal;
        users.at(-1).deposit = '';
        users.at(-1).balance -= withdrawal;
        // setContext(users);
        setBalance(users.at(-1).balance);
        // Just after updating the balance, we timestamp the transaction
        let now = new Date();
        users.at(-1).date = now.toLocaleDateString('en-GB');
        users.at(-1).time = now.toTimeString();
        setWithdrawal(null);
        setWithdrawValue("");
        setBtnDisabled(true);
    }

      return (
        <Card 
            bgcolor="primary"
            txtcolor="white"
            header="BadBank"
            title="WITHDRAWAL"
            text={<>Hello, {users[0].name}! Here you can Withdraw funds from your account</>}
            body = {(
                <div>
                    <label className="form-label mt-4">CURRENT BALANCE</label>
                    <div className="input-group mb-3" >
                        <span className="form-control badge bg-light" disabled>{formatBalance(balance)}</span>
                    </div>
                    <label className="form-label mt-4">WITHDRAW AMOUNT</label>
                    <div className="input-group mb-3">
                        <span className="input-group-text">$</span>
                        <input data-tip data-for="withdrawAmountTip" type="number" className="form-control" id="withdrawField" aria-label="Amount (to the nearest dollar)" value={withdrawValue} onChange={onChangeHandler}/>
                        <span className="input-group-text">.00</span>
                        <button data-tip data-for="withdrawClickTip" type="button" className="btn btn-warning" id="withdrawClick" disabled={btndisabled}
                        onClick={onClickHandler}>WITHDRAW</button>
                    </div>
                    <ToolTips></ToolTips>
                </div>
            )}
         />
    );
}

export default Withdraw;