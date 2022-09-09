// dependencies
import React from 'react'
import styled from 'styled-components'

// partials
import Introduction from '../partials/introduction'
import Footer from '../partials/footer'
import Categories from '../partials/categories'

// styled components
const Container = styled.div`
    width: 100%;
    padding: 0px 20px;
`

// home driver code
const Home = () => {
    return (
        <Container>
            <Introduction />
            <Categories />
            <Footer />
        </Container>
    )
}

export default Home