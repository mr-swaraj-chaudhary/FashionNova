// dependencies
import React from 'react'
import styled from 'styled-components'
import { format } from 'timeago.js'

// styling components
const Container = styled.div`
    padding: 2px 10px 20px 10px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
`

const Approved = styled.span`
    color: green;
`
const Declined = styled.span`
    color: red;
`
const Pending = styled.span`
    color: gray;
`

const Transactions = () => {
    const TransactionStatusComponent = ({ status }) => {
        switch (status) {
            case "approved":
                return <Approved>{status}</Approved>
            case "declined":
                return <Declined>{status}</Declined>
            default:
                return <Pending>{status}</Pending>
        }
    }

    return (
        <Container>
            <div>
                <h3>Recent Transactions</h3>
                <table style={{ width: "100%" }}>
                    <thead>
                        <tr style={{ textAlign: "left" }}>
                            <th>S.No.</th>
                            <th>Email</th>
                            <th>Amount (INR)</th>
                            <th>Date</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1.</td>
                            <td>swarajkumarchaudhary@gmail.com</td>
                            <td>300</td>
                            <td>{format('01-09-22')}</td>
                            <td><TransactionStatusComponent status={"approved"} /></td>
                        </tr>
                        <tr>
                            <td>2.</td>
                            <td>happychaudhary@gmail.com</td>
                            <td>4500</td>
                            <td>{format('06-05-22')}</td>
                            <td><TransactionStatusComponent status={"pending"} /></td>
                        </tr>
                        <tr>
                            <td>3.</td>
                            <td>b190040@nitsikkim.ac.in</td>
                            <td>120</td>
                            <td>{format('04-04-22')}</td>
                            <td><TransactionStatusComponent status={"declined"} /></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </Container>
    )
}

export default Transactions