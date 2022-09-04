import React from 'react'
import styled from 'styled-components'
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'

const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`

const Card = styled.div`
    flex: 1;
    margin-left: 20px;
    padding: 0px 20px 20px 20px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
`
const Title = styled.h2``
const Info = styled.div`
    display: flex;
    justify-content: space-between;
`
const Income = styled.div``
const Stat = styled.div``
const SubTitle = styled.div``
const PostiveIcon = styled.span`
    color: green;
`
const NegativeIcon = styled.span`
    color: red;
`

const Featured = () => {
    return (
        <Container>
            <Card>
                <Title>Revenue (Monthly)</Title>
                <Info>
                    <Income>+ $3000</Income>
                    <Stat> <PostiveIcon><ArrowDropUpIcon /></PostiveIcon></Stat>
                </Info>
                <SubTitle>Lorem ipsum dolor sit amet.</SubTitle>
            </Card>
            <Card>
                <Title>Sales (Monthly)</Title>
                <Info>
                    <Income>- $3400</Income>
                    <Stat> <NegativeIcon><ArrowDropDownIcon /></NegativeIcon></Stat>
                </Info>
                <SubTitle>Lorem ipsum dolor sit amet.</SubTitle>
            </Card>
            <Card>
                <Title>Investments (Monthly)</Title>
                <Info>
                    <Income>+ $1100</Income>
                    <Stat> <PostiveIcon><ArrowDropUpIcon /></PostiveIcon></Stat>
                </Info>
                <SubTitle>Lorem ipsum dolor sit amet.</SubTitle>
            </Card>
        </Container>
    )
}

export default Featured