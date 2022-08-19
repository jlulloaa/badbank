import ReactTooltip from "react-tooltip";

const formatBalance = (value) => {
    if (value >0) {
        return Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(value);
    } else {
        return "--";
    }
}

const ToolTips = () => {

    const tooltipFormat = {
        place: "bottom",
        type: "dark",
        effect: "float",
        multiline: true,
        offset: {'top': 1, 'left': 1},
        border: false,
        bkgrndColor: "gray",
        txtColor: "white",
        delayHide: 10
    };

    return (
        <>
        <ReactTooltip id="homeTip" place={tooltipFormat.place} type={tooltipFormat.type} effect={tooltipFormat.effect} offset={tooltipFormat.offset} border={tooltipFormat.border} backgroundColor={tooltipFormat.bkgrndColor} textColor={tooltipFormat.txtColor}>
        Reset values
        </ReactTooltip>
        <ReactTooltip id="createAccTip" place={tooltipFormat.place} type={tooltipFormat.type} effect={tooltipFormat.effect} offset={tooltipFormat.offset} border={tooltipFormat.border} backgroundColor={tooltipFormat.bkgrndColor} textColor={tooltipFormat.txtColor}>
        Add a new Account
        </ReactTooltip>
        <ReactTooltip id="startTip" place={tooltipFormat.place} type={tooltipFormat.type} effect={tooltipFormat.effect} offset={tooltipFormat.offset} border={tooltipFormat.border} backgroundColor={tooltipFormat.bkgrndColor} textColor={tooltipFormat.txtColor}>
        Get started
        </ReactTooltip>
        <ReactTooltip id="existAccTip" place={tooltipFormat.place} type={tooltipFormat.type} effect={tooltipFormat.effect} offset={tooltipFormat.offset} border={tooltipFormat.border} backgroundColor={tooltipFormat.bkgrndColor} textColor={tooltipFormat.txtColor}>
        Access your <br/> account
        </ReactTooltip>
        <ReactTooltip id="newAccTip" place={tooltipFormat.place} type={tooltipFormat.type} effect={tooltipFormat.effect} offset={tooltipFormat.offset} border={tooltipFormat.border} backgroundColor={tooltipFormat.bkgrndColor} textColor={tooltipFormat.txtColor}>
        Click to add account
        </ReactTooltip>
        <ReactTooltip id="depositTip" place={tooltipFormat.place} type={tooltipFormat.type} effect={tooltipFormat.effect} offset={tooltipFormat.offset} border={tooltipFormat.border} backgroundColor={tooltipFormat.bkgrndColor} textColor={tooltipFormat.txtColor}>
        Add funds <br/> to your account
        </ReactTooltip>
        <ReactTooltip id="depositClickTip" place={tooltipFormat.place} type={tooltipFormat.type} effect={tooltipFormat.effect} offset={tooltipFormat.offset} border={tooltipFormat.border} backgroundColor={tooltipFormat.bkgrndColor} textColor={tooltipFormat.txtColor}>
        Click to deposit
        </ReactTooltip>
        <ReactTooltip id="depositAmountTip" place={tooltipFormat.place} type={tooltipFormat.type} effect={tooltipFormat.effect} offset={tooltipFormat.offset} border={tooltipFormat.border} backgroundColor={tooltipFormat.bkgrndColor} textColor={tooltipFormat.txtColor}>
        Enter amount
        {/* {btndisabled ? "Input a number" : <>Amount<br/>(to the nearest dollar)</>} */}
        </ReactTooltip>
        <ReactTooltip id="withdrawTip" place={tooltipFormat.place} type={tooltipFormat.type} effect={tooltipFormat.effect} offset={tooltipFormat.offset} border={tooltipFormat.border} backgroundColor={tooltipFormat.bkgrndColor} textColor={tooltipFormat.txtColor}>
        Draw funds out <br/> from your account
        </ReactTooltip>
        <ReactTooltip id="withdrawClickTip" place={tooltipFormat.place} type={tooltipFormat.type} effect={tooltipFormat.effect} offset={tooltipFormat.offset} border={tooltipFormat.border} backgroundColor={tooltipFormat.bkgrndColor} textColor={tooltipFormat.txtColor}>
        Click to withdraw
        </ReactTooltip>
        <ReactTooltip id="withdrawAmountTip" place={tooltipFormat.place} type={tooltipFormat.type} effect={tooltipFormat.effect} offset={tooltipFormat.offset} border={tooltipFormat.border} backgroundColor={tooltipFormat.bkgrndColor} textColor={tooltipFormat.txtColor}>
        Enter amount
        {/* {btndisabled ? "Input a number" : <>Amount<br/>(to the nearest dollar)</>} */}
        </ReactTooltip>
        <ReactTooltip id="aboutTip" place={tooltipFormat.place} type={tooltipFormat.type} effect={tooltipFormat.effect} offset={tooltipFormat.offset} border={tooltipFormat.border} backgroundColor={tooltipFormat.bkgrndColor} textColor={tooltipFormat.txtColor} delayHide={tooltipFormat.delayHide}>
        The small print
        </ReactTooltip>
        <ReactTooltip id="allDataTip" place={tooltipFormat.place} type={tooltipFormat.type} effect={tooltipFormat.effect} offset={tooltipFormat.offset} border={tooltipFormat.border} backgroundColor={tooltipFormat.bkgrndColor} textColor={tooltipFormat.txtColor}>
        Historic <br/> transactions
        </ReactTooltip>
        <ReactTooltip id="exportDisabledTip" place={tooltipFormat.place} type={tooltipFormat.type} effect={tooltipFormat.effect} offset={tooltipFormat.offset} border={tooltipFormat.border} backgroundColor={tooltipFormat.bkgrndColor} textColor={tooltipFormat.txtColor}>
        Must have an account to enable this option 
        </ReactTooltip>
        <ReactTooltip id="exportEnabledTip" place={tooltipFormat.place} type={tooltipFormat.type} effect={tooltipFormat.effect} offset={tooltipFormat.offset} border={tooltipFormat.border} backgroundColor={tooltipFormat.bkgrndColor} textColor={tooltipFormat.txtColor}>
        Click to download 
        </ReactTooltip>
        <ReactTooltip id="balanceTip" place={tooltipFormat.place} type={tooltipFormat.type} effect={tooltipFormat.effect} offset={tooltipFormat.offset} border={tooltipFormat.border} backgroundColor={tooltipFormat.bkgrndColor} textColor={tooltipFormat.txtColor}>
        Check your <br/> current balance
        </ReactTooltip>
        <ReactTooltip id="productsTip" place={tooltipFormat.place} type={tooltipFormat.type} effect={tooltipFormat.effect} offset={tooltipFormat.offset} border={tooltipFormat.border} backgroundColor={tooltipFormat.bkgrndColor} textColor={tooltipFormat.txtColor}>
        Check our products
        </ReactTooltip>
        </>
    )
};

export {formatBalance, ToolTips};