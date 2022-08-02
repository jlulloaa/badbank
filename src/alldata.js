import {useCtx, Card} from './context';


function AllData() {

    const ctx = useCtx();
    console.log(ctx.users);

    function formatCustomer(customerList) {
        return (
            <div className="table-responsive">
            <table className="table table-hover table-bordered">
                <thead className="table-dark" data-bs-toggle="tooltip" data-bs-placement="left" title="Scroll left to see more information">
                    <tr>
                        <th> Email </th>
                        <th> Name </th>
                        <th> Password </th>
                    </tr>
                </thead>
                <tbody className="table-primary" data-bs-toggle="tooltip" data-bs-placement="left" title="Scroll down to see more data">
                    {customerList.map((customer, i) => (
                        <tr key={i}>
                            <td>{customer.email}</td>
                            <td>{customer.name}</td>
                            <td>{customer.password}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            </div>
        );
    }

    return (
        <Card 
        bgcolor="primary"
        txtcolor="white"
        header="ALL DATA"
        title="These are our customers"
        text=""
        body={ formatCustomer(ctx.users) }
        />
    );
}

export default AllData;