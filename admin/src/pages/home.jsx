// dependencies
import React from 'react'
import styled from 'styled-components'

// partials
import Chart from '../partials/chart'
import Featured from '../partials/featured'
import Transactions from '../partials/transactions'
import Users from '../partials/users'

// styled components
const Container = styled.div`
    flex: 4;
    height: calc(100vh - 50px);
`
const Wrapper = styled.div`
    padding-top: 20px;
`

const Widgets = styled.div`
    width: 100%;
    margin-right: 20px;
    display: flex;
    justify-content: space-between;
`

// home driver code
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