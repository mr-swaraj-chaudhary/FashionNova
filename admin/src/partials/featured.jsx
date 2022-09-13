// dependencies
import React from 'react'
import styled from 'styled-components'
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'

// styling components
const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`
const Card = styled.div`
    flex: 0.5;
    padding: 0px 10px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    
    // select all elements expect the last one
    &:not(:last-child) { 
        margin-right: 20px;
    }
`
const Info = styled.div`
    display: flex;
    justify-content: space-between;
`

const PostiveIcon = styled.span`
    color: green;
`
const NegativeIcon = styled.span`
    color: red;
`

// featured cards driver code
const Featured = () => {
    return (
        <Container>
            <Card>
                <h3>Revenue (Monthly)</h3>
                <Info>
                    <span>+ $3000</span>
                    <span> <PostiveIcon><ArrowDropUpIcon /></PostiveIcon></span>
                </Info>
                <p>Lorem ipsum dolor sit amet.</p>
            </Card>
            <Card>
                <h3>Sales (Monthly)</h3>
                <Info>
                    <span>- $3400</span>
                    <span> <NegativeIcon><ArrowDropDownIcon /></NegativeIcon></span>
                </Info>
                <p>Lorem ipsum dolor sit amet.</p>
            </Card>
            <Card>
                <h3>Investments (Monthly)</h3>
                <Info>
                    <span>+ $1100</span>
                    <span> <PostiveIcon><ArrowDropUpIcon /></PostiveIcon></span>
                </Info>
                <p>Lorem ipsum dolor sit amet.</p>
            </Card>
        </Container>
    )
}

export default Featured