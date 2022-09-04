import React from 'react'
import styled from 'styled-components'
import Chart from '../partials/chart'
import Featured from '../partials/featured'
import Transactions from '../partials/transactions'
import Users from '../partials/users'

const Container = styled.div`
    flex: 4;
    height: calc(100vh - 50px);
`
const Wrapper = styled.div`
    padding-top: 20px;
`

const Widgets = styled.div`
    display: flex;
`

const Home = () => {
    return (
        <Container>
            <Wrapper>
                <Featured />
                <Chart />
                <Widgets>
                    <Users />
                    <Transactions />
                </Widgets>
            </Wrapper>
        </Container>
    )
}

export default Home