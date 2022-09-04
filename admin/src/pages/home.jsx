import React from 'react'
import styled from 'styled-components'
import Featured from '../partials/featured'

const Container = styled.div`
    flex: 4;
`
const Wrapper = styled.div`
    padding: 20px;
`

const Home = () => {
    return (
        <Container>
            <Wrapper>
                <Featured />
            </Wrapper>
        </Container>
    )
}

export default Home