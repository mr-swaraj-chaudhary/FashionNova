// dependencies
import { React, useState, useEffect } from 'react'
import styled from 'styled-components'
import { LineChart, Line, XAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import { userRequests } from '../requests'
import { months } from '../data'

// styled components
const Container = styled.div`
    padding: 0px 5px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
`

const Title = styled.h3``

// chart driver code
const Chart = () => {
    // fetch latest users stats of previous 1 year
    const [latest_users, setter] = useState([])
    useEffect(() => {
        const getter = async () => {
            const response = await userRequests.get("/users/stats")

            let monthly_stats = []
            response.data.map((item) => {
                monthly_stats.push({
                    "key": item._id - 1, // used for sorting using month id
                    "name": months[item._id - 1],
                    "total": item.total
                })
            })

            setter(monthly_stats.sort((a, b) => a.key - b.key))
        }

        getter()
    }, [])

    return (
        <Container>
            <Title>User Analytics (Month & New Users)</Title>
            <ResponsiveContainer width="100%" aspect={4 / 1}>
                <LineChart
                    data={latest_users}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="total" stroke="#8884d8" activeDot={{ r: 8 }} />
                    <Tooltip />
                </LineChart>
            </ResponsiveContainer>
        </Container>
    )
}

export default Chart