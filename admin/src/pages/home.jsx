import React from 'react'
import styled from 'styled-components'
import Chart from '../partials/chart'
import Featured from '../partials/featured'

const Container = styled.div`
    flex: 4;
    height: calc(100vh - 50px);
`
const Wrapper = styled.div`
    padding-top: 20px;
`

const Home = () => {
    return (
        <Container>
            <Wrapper>
                <Featured />
                <Chart />
            </Wrapper>
        </Container>
    )
}

export default Home