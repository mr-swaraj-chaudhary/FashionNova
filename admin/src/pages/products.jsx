// dependencies
import React from 'react'
import styled from 'styled-components'
import { DataGrid } from '@mui/x-data-grid';

// temporary data
import { products } from '../data';

// styled components
const Container = styled.div`
    flex: 4;
`

const Product = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
`

const Image = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 50%;
`

const Name = styled.p``

const Actions = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;
`

const Edit = styled.button`
    background-color: gray;
    color: white;
    border: none;
    padding: 5px 20px;
    cursor: pointer;
`

const Delete = styled.button`
    background-color: red;
    color: white;
    border: none;
    padding: 5px 20px;
    cursor: pointer;
`

// columns for data grid
const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
        field: 'title',
        headerName: 'Product',
        width: 300,
        renderCell: (params) => {
            return (
                <Product>
                    <Image src={params.row.image} />
                    <Name>{params.row.title}</Name>
                </Product>
            )
        }
    },
    {
        field: 'price',
        headerName: 'Price',
        width: 150,
    },
    {
        field: 'inStock',
        headerName: 'Stock',
        type: 'boolean',
        width: 100,
    },
    {
        field: 'action',
        headerName: 'Action',
        description: 'This column has a value getter and is not sortable.',
        width: 300,
        renderCell: (params) => {
            return (
                <Actions>
                    <Edit>EDIT</Edit>
                    <Delete>DELETE</Delete>
                </Actions>
            )
        }
    },
];

// products driver code
const Products = () => {
    return (
        <Container>
            <DataGrid
                rows={products}
                disableSelectionOnClick
                columns={columns}
                getRowId={(row) => row.id}
                pageSize={10}
                rowsPerPageOptions={[5]}
                checkboxSelection
            />
        </Container>
    )
}

export default Products