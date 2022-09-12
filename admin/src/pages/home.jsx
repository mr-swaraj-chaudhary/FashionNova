// dependencies
import React from 'react'
import styled from 'styled-components'

// partials
import Chart from '../partials/chart'
import Featured from '../partials/featured'
import Transactions from '../partials/transactions'

// styled components
const Container = styled.div`
    flex: 7;
    width: 100%;
    height: calc(100vh - 50px);
`

const Wrapper = styled.div`
    margin-right: 20px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
`

// home driver code
const Home = () => {
    return (
        <Container>
            <Wrapper>
                <Featured />
                <Chart />
                <Transactions />
            </Wrapper>
        </Container>
    )
}

export default Home