// dependencies
import { React, useEffect } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { DataGrid } from '@mui/x-data-grid'
import { useSelector, useDispatch } from 'react-redux'
import { getProducts, deleteProduct } from '../redux/apiCalls'

// styled components
const Container = styled.div`
    flex: 7;
    margin: 20px;
`

const Product = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

const Image = styled.img`
    width: 35px;
    height: 35px;
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

const Products = () => {
    // check for current user
    const user = useSelector(state => state.user.currentUser)
    const admin = user ? user.isAdmin : false

    // API call to fetch products from database
    const dispatch = useDispatch()
    useEffect(() => {
        admin && getProducts(dispatch)
    }, [dispatch, admin])

    // API call to delete a product from database
    const handleDelete = (productID) => {
        admin && deleteProduct(dispatch, productID)
    }

    // select all fetched products from "product" state
    const products = useSelector(state => state.product.products)

    // columns for data grid
    const columns = [
        { field: '_id', headerName: 'ID', width: 300 },
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
            headerName: 'Price (INR)',
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
                        <Link style={{ color: "inherit", textDecoration: "none" }} to={"/edit-product/" + params.row._id}><Edit>EDIT</Edit></Link>
                        <Delete onClick={() => handleDelete(params.row._id)}>DELETE</Delete>
                    </Actions>
                )
            }
        },
    ];

    return (
        <Container>
            <DataGrid
                rows={products}
                disableSelectionOnClick
                columns={columns}
                getRowId={(row) => row._id}
                pageSize={10}
                rowsPerPageOptions={[10]}
                checkboxSelection
            />
        </Container>
    )
}

export default Products