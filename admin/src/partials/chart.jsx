import React from 'react'
import styled from 'styled-components'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

const Container = styled.div`
    margin: 20px 20px 20px 0px;
    padding: 10px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
`
const Title = styled.h3``

const data = [
    {
        name: 'Page A',
        uv: 4000,
        pv: 2400,
        amt: 2400,
    },
    {
        name: 'Page B',
        uv: 3000,
        pv: 1398,
        amt: 2210,
    },
    {
        name: 'Page C',
        uv: 2000,
        pv: 9800,
        amt: 2290,
    },
    {
        name: 'Page D',
        uv: 2780,
        pv: 3908,
        amt: 2000,
    },
    {
        name: 'Page E',
        uv: 1890,
        pv: 4800,
        amt: 2181,
    },
    {
        name: 'Page F',
        uv: 2390,
        pv: 3800,
        amt: 2500,
    },
    {
        name: 'Page G',
        uv: 3490,
        pv: 4300,
        amt: 2100,
    },
]

const Chart = () => {
    return (
        <Container>
            <Title>Active Users</Title>
            <ResponsiveContainer width="100%" aspect={4 / 1}>
                <LineChart
                    data={data}
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