import React, {useRef} from 'react';
import { Accordion, Container } from 'react-bootstrap';
import Card from './card';
import { useCtx } from './context';
import { formatBalance, ToolTips } from './utils';
import { DownloadTableExcel } from 'react-export-table-to-excel';


function AllData() {

    const users = useCtx();
    const tableRef = useRef(null);
    const now = new Date();
    const download = (users[0].name === '');
    
     return (
            <Container>
            <Accordion defaultActiveKey="0">
            <Accordion.Item>
            <Accordion.Header>
            Hello, {users[0].name}! &nbsp; <div type ="button" className="btn btn-outline-primary">Click here to see your transactions history </div> 
            </Accordion.Header>
            <Accordion.Body>
            <div className="table-responsive table-wrapper-scroll-y my-custom-scrollbar">
            <table ref={tableRef} className="table table-hover table-bordered">
                <thead className="table-info align-middle" data-bs-toggle="tooltip" data-bs-placement="left" title="Scroll left to see more information">
                    <tr>
                        <th> Date <br/><span style={{fontSize: '0.75em'}}>(DD/MM/YY)</span></th>
                        <th> Paid In </th>
                        <th> Paid Out </th>
                        <th> Balance </th>
                        <th> Time </th>
                        <th> email </th>
                    </tr>
                </thead>
                <tbody className="table-light" data-bs-toggle="tooltip" data-bs-placement="left" title="Scroll down to see more data">
                    {users.map((customer, i) => (
                        <tr key={i}>
                            <td>{customer.date}</td>
                            <td>{formatBalance(customer.deposit)}</td>
                            <td>{formatBalance(customer.withdraw)}</td>
                            <td>{formatBalance(customer.balance)}</td>
                            <td>{customer.time}</td>
                            <td>{customer.email}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            </div>
            <div data-tip data-for={download ? "exportDisabledTip" : "exportEnabledTip"} >
            <DownloadTableExcel 
                currentTableRef={tableRef.current}
                filename={users[0].name + '_' + now.toLocaleDateString('en-GB')}
                sheet={users[0].name}
                >
                <button type="button" className="btn btn-primary" disabled={ download ? true:false}> Export to  excel </button>
            </DownloadTableExcel>
            </div>
            </Accordion.Body>
            </Accordion.Item>
            </Accordion>
            <ToolTips></ToolTips>
            </Container>
        );
    // }

    // return (
    //     <Card 
    //     bgcolor="primary"
    //     txtcolor="white"
    //     header="ALL DATA"
    //     title="These are our customers"
    //     text=""
    //     body={ formatCustomer(users) }
    //     />
    // );
    // return (
    //     <>{formatCustomer(users)}</>
    // )
}

export default AllData;