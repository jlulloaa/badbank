import {useCtx, Card} from './context';

function Home() {
    const ctx = useCtx();

    return (
        <Card 
            bgcolor="primary"
            txtcolor="white"
            header="Bad Bank Landing Page"
            title="Welcome to Bad Bank"
            text="You can use this bank"
            body={(<img src="./bank 2.png" className="img-fluid" alt="Responsive Site"/>)}
         />
        // <div>
        //     <h3> Hello, {JSON.stringify(ctx.users[0].name)}
        //     <br/>
        //     Home Component </h3>

        // </div>
    );
}

export default Home;