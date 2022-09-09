// dependencies
import React from 'react'
import { active_users } from '../data'
import styled from 'styled-components'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

// styled components
const Container = styled.div`
    margin: 20px 20px 20px 0px;
    padding: 10px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
`
const Title = styled.h3``

// chart driver code
const Chart = () => {
    return (
        <Container>
            <Title>Active Users</Title>
            <ResponsiveContainer width="100%" aspect={4 / 1}>
                <LineChart
                    data={active_users}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
                    <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                    <Tooltip />
                </LineChart>
            </ResponsiveContainer>
        </Container>
    )
}

export default Chart