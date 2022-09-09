// dependencies
import React from 'react'
import styled from 'styled-components'

// styled components
const Container = styled.div`
    flex: 2;
    padding: 0px 10px 10px 10px;
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

const ProfileImage = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    object-fit: cover;
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
                            <Th>Profile Image</Th>
                            <Th>Email</Th>
                            <Th>Amount</Th>
                            <Th>Date</Th>
                            <Th>Status</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        <Tr>
                            <Td>1.</Td>
                            <Td><ProfileImage src="https://images.unsplash.com/photo-1503443207922-dff7d543fd0e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=327&q=80" /></Td>
                            <Td>swaraj@gmail.com</Td>
                            <Td>$30</Td>
                            <Td>04-09-22</Td>
                            <Td><TransactionStatusComponent status={"approved"} /></Td>
                        </Tr>
                        <Tr>
                            <Td>2.</Td>
                            <Td><ProfileImage src="https://images.unsplash.com/photo-1503443207922-dff7d543fd0e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=327&q=80" /></Td>
                            <Td>swaraj@gmail.com</Td>
                            <Td>$20</Td>
                            <Td>01-09-22</Td>
                            <Td><TransactionStatusComponent status={"pending"} /></Td>
                        </Tr>
                        <Tr>
                            <Td>3.</Td>
                            <Td><ProfileImage src="https://images.unsplash.com/photo-1503443207922-dff7d543fd0e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=327&q=80" /></Td>
                            <Td>swaraj@gmail.com</Td>
                            <Td>$25</Td>
                            <Td>01-09-22</Td>
                            <Td><TransactionStatusComponent status={"declined"} /></Td>
                        </Tr>
                    </Tbody>
                </Table>
            </Wrapper>
        </Container>
    )
}

export default Transactions