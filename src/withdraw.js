import ReactTooltip from "react-tooltip";
import {Card} from './context';

function Withdraw() {
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
            header="WITHDRAW"
            title="Withdraw funds from your account"
            text=""
            body = {(
                <div>
                    <label className="form-label mt-4">CURRENT BALANCE</label>
                    <div className="input-group mb-3" >
                        <span className="form-control badge bg-light" disabled>{fmtBalance}</span>
                    </div>
                    <label className="form-label mt-4">WITHDRAW AMOUNT</label>
                    <div className="input-group mb-3">
                        <span className="input-group-text">$</span>
                        <input data-tip data-for="withdrawAmountTip" type="text" className="form-control" aria-label="Amount (to the nearest dollar)"/>
                        <span className="input-group-text">.00</span>
                        <button data-tip data-for="withdrawClickTip" className="btn btn-warning" type="button" id="button-addon2" disabled={false}>WITHDRAW</button>
                    </div>
                <ReactTooltip id="withdrawClickTip" place={tooltipFormat.place} type={tooltipFormat.type} effect={tooltipFormat.effect} offset={tooltipFormat.offset} border={tooltipFormat.border} backgroundColor={tooltipFormat.bkgrndColor} textColor={tooltipFormat.txtColor}>
                Click to withdraw
                </ReactTooltip>
                <ReactTooltip id="withdrawAmountTip" place={tooltipFormat.place} type={tooltipFormat.type} effect={tooltipFormat.effect} offset={tooltipFormat.offset} border={tooltipFormat.border} backgroundColor={tooltipFormat.bkgrndColor} textColor={tooltipFormat.txtColor}>
                    Amount (to the nearest dollar)
                </ReactTooltip>
            </div>
            )}
         />
    );
}

export default Withdraw;