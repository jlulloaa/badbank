import {useCtx, Card} from './context';

function AllData() {
    const ctx = useCtx();
    return (
        <Card 
        bgcolor="primary"
        txtcolor="white"
        header="Listing all data:"
        title="A not very secure bank"
        text="This is the information of our customers:"
        body={JSON.stringify(ctx.users)}
        />
    );
}

export default AllData;