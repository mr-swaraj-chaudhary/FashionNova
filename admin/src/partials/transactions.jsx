// dependencies
import React from 'react'
import styled from 'styled-components'
import { format } from 'timeago.js'

// styled components
const Container = styled.div`
    padding: 2px 10px 20px 10px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
`

const Wrapper = styled.div``
const Title = styled.h3``

const Table = styled.table`
    width: 100%;
`
const Thead = styled.thead``
const Tbody = styled.tbody``

const Tr = styled.tr`
    text-align: left;
`
const Th = styled.th``
const Td = styled.td``

const Approved = styled.span`
    color: green;
`
const Declined = styled.span`
    color: red;
`
const Pending = styled.span`
    color: gray;
`

// transactions widget driver code
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
            <Wrapper>
                <Title>Recent Transactions</Title>
                <Table>
                    <Thead>
                        <Tr>
                            <Th>S.No.</Th>
                            <Th>Email</Th>
                            <Th>Amount (INR)</Th>
                            <Th>Date</Th>
                            <Th>Status</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        <Tr>
                            <Td>1.</Td>
                            <Td>swarajkumarchaudhary@gmail.com</Td>
                            <Td>300</Td>
                            <Td>{format('01-09-22')}</Td>
                            <Td><TransactionStatusComponent status={"approved"} /></Td>
                        </Tr>
                        <Tr>
                            <Td>2.</Td>
                            <Td>happychaudhary@gmail.com</Td>
                            <Td>4500</Td>
                            <Td>{format('06-05-22')}</Td>
                            <Td><TransactionStatusComponent status={"pending"} /></Td>
                        </Tr>
                        <Tr>
                            <Td>3.</Td>
                            <Td>b190040@nitsikkim.ac.in</Td>
                            <Td>120</Td>
                            <Td>{format('04-04-22')}</Td>
                            <Td><TransactionStatusComponent status={"declined"} /></Td>
                        </Tr>
                    </Tbody>
                </Table>
            </Wrapper>
        </Container>
    )
}

export default Transactions