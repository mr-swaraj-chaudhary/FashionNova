import React from 'react'
import styled from 'styled-components'
import { DataGrid } from '@mui/x-data-grid';

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

const products = [
    {
        id: 1,
        image: "https://images.unsplash.com/photo-1503443207922-dff7d543fd0e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=327&q=80",
        title: "MEN PRODUCTS",
        category: "men", 
        price: 30,
        inStock: true
    },
    {
        id: 2,
        image: "https://images.unsplash.com/photo-1603570388466-eb4fe5617f0d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
        title: "WOMEN PRODUCTS",
        category: "women",
        price: 60,
        inStock: true
    },
    {
        id: 3,
        image: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
        title: "DESIGNER SHOES",
        category: "shoes",
        price: 90,
        inStock: false
    },
    {
        id: 4,
        image: "https://images.unsplash.com/photo-1503443207922-dff7d543fd0e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=327&q=80",
        title: "MEN PRODUCTS",
        category: "men", 
        price: 30,
        inStock: true
    },
    {
        id: 5,
        image: "https://images.unsplash.com/photo-1603570388466-eb4fe5617f0d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
        title: "WOMEN PRODUCTS",
        category: "women",
        price: 60,
        inStock: true
    },
    {
        id: 6,
        image: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
        title: "DESIGNER SHOES",
        category: "shoes",
        price: 90,
        inStock: false
    },
];

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