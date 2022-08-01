import ReactTooltip from "react-tooltip";
import {Card} from './context';

function Deposit() {
    const tooltipFormat = {
        place: "top",
        type: "dark",
        effect: "float",
        offset: {'top': 10, 'left': 10},
        border: true,
        bkgrndColor: "green",
        txtColor: "white"
    }

    const balance = 100;
    const fmtBalance = Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(balance);

    return (
        <Card 
            bgcolor="primary"
            txtcolor="white"
            header="DEPOSIT"
            title="Add funds to your account"
            text=""
            body = {(
                <div>
                    <label className="form-label mt-4">CURRENT BALANCE</label>
                    <div className="input-group mb-3" >
                        <span className="form-control badge bg-light" disabled>{fmtBalance}</span>
                    </div>
                    <label className="form-label mt-4">DEPOSIT AMOUNT</label>
                    <div className="input-group mb-3">
                        <span className="input-group-text">$</span>
                        <input data-tip data-for="depositAmountTip" type="text" className="form-control" aria-label="Amount (to the nearest dollar)"/>
                        <span className="input-group-text">.00</span>
                        <button data-tip data-for="depositClickTip" className="btn btn-warning" type="button" id="button-addon2" disabled={false}>DEPOSIT</button>
                    </div>
                <ReactTooltip id="depositClickTip" place={tooltipFormat.place} type={tooltipFormat.type} effect={tooltipFormat.effect} offset={tooltipFormat.offset} border={tooltipFormat.border} backgroundColor={tooltipFormat.bkgrndColor} textColor={tooltipFormat.txtColor}>
                Click to deposit
                </ReactTooltip>
                <ReactTooltip id="depositAmountTip" place={tooltipFormat.place} type={tooltipFormat.type} effect={tooltipFormat.effect} offset={tooltipFormat.offset} border={tooltipFormat.border} backgroundColor={tooltipFormat.bkgrndColor} textColor={tooltipFormat.txtColor}>
                    Amount (to the nearest dollar)
                </ReactTooltip>
            </div>
            )}
         />
    );
}

export default Deposit;