// dependencies
import React, { useState } from 'react'
import styled from 'styled-components'
// import { updateProduct } from '../redux/apiCalls'
import { useLocation } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

// temporary data
import { categories, colors, sizes } from '../data'

// styled components
const Container = styled.div`
    flex: 7;
    margin-right: 20px;
`

const Title = styled.h3``

const Form = styled.form`
    display: flex;
    flex-direction: column;
`

const Attribute = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
`

const Label = styled.label`
    margin-bottom: 5px;
`

const Input = styled.input`
    height: 30px;
    color: black;
`

const TextArea = styled.textarea`
    width: 100%;
    color: black;
`

const Select = styled.select`
    height: 30px;
    color: black;
`

const Option = styled.option``

const CheckboxContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: start;
`

const CheckboxContainerItem = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 20px;
`

const ButtonGroup = styled.div`
    width: 50%;
    display: flex;
    justify-content: space-between;
`

const Reset = styled.button`
    color: white;
    background-color: black;
    padding: 10px;
    cursor: pointer;
`

const Submit = styled.button`
    color: white;
    background-color: green;
    padding: 10px;
    cursor: pointer;
    border: 0;
`

// edit product driver code
const EditProduct = () => {
    // get product id from url
    const location = useLocation()
    const productID = location.pathname.split("/")[2]

    // check for current user
    const user = useSelector(state => state.user.currentUser)
    const admin = user ? user.isAdmin : false

    // fetch product
    const productPreviousDetails = useSelector(state => state.product.products.find(item => item._id === productID))

    const [product, setProductDetails] = useState({})
    const handleChange = (e) => {
        setProductDetails(prev => {
            return {
                ...prev, [e.target.name]: e.target.value
            }
        })
    }

    const [selectedColors, setColors] = useState([])
    const handleColors = (e) => {
        if (e.target.checked) {
            setColors([...selectedColors, e.target.value])
        } else {
            setColors(selectedColors.filter(item => item !== e.target.value))
        }
    }

    const [selectedSizes, setSizes] = useState([])
    const handleSizes = (e) => {
        if (e.target.checked) {
            setSizes([...selectedSizes, e.target.value])
        } else {
            setSizes(selectedSizes.filter(item => item !== e.target.value))
        }
    }

    const [selectedCategories, setCategories] = useState([])
    const handleCategories = (e) => {
        if (e.target.checked) {
            setCategories([...selectedCategories, e.target.value])
        } else {
            setCategories(selectedCategories.filter(item => item !== e.target.value))
        }
    }

    return (
        <Container>
            <Title>Edit Product</Title>
            <Form>
                <Attribute>
                    <Label>Title</Label>
                    <Input type='text' defaultValue={productPreviousDetails.title} name="title" onChange={handleChange} />
                </Attribute>
                <Attribute>
                    <Label>Description</Label>
                    <TextArea rows='5' defaultValue={productPreviousDetails.description} name="description" onChange={handleChange}></TextArea>
                </Attribute>
                <Attribute>
                    <Label>Price (INR)</Label>
                    <Input type='number' defaultValue={productPreviousDetails.price} name="price" onChange={handleChange} />
                </Attribute>
                <Attribute>
                    <Label>Stock</Label>
                    <Select defaultValue={productPreviousDetails.inStock ? "In Stock" : "Out of Stock"} name="inStock" onChange={handleChange}>
                        <Option value={true}>In Stock</Option>
                        <Option value={false}>Out of Stock</Option>
                    </Select>
                </Attribute>
                <Attribute>
                    <Label>Colors</Label>
                    <CheckboxContainer>
                        {
                            colors.map(curr_color => {
                                return (
                                    <CheckboxContainerItem key={colors.findIndex(item => item === curr_color)}>
                                        <Label>{curr_color}</Label>
                                        <Input type='checkbox' name="color" value={curr_color} onChange={handleColors} />
                                    </CheckboxContainerItem>
                                )
                            })
                        }
                    </CheckboxContainer>
                </Attribute>
                <Attribute>
                    <Label>Sizes</Label>
                    <CheckboxContainer>
                        {
                            sizes.map(curr_size => {
                                return (
                                    <CheckboxContainerItem key={sizes.findIndex(item => item === curr_size)}>
                                        <Label>{curr_size}</Label>
                                        <Input type='checkbox' value={curr_size} onChange={handleSizes} />
                                    </CheckboxContainerItem>
                                )
                            })
                        }
                    </CheckboxContainer>
                </Attribute>
                <Attribute>
                    <Label>Categories</Label>
                    <CheckboxContainer>
                        {
                            categories.map(curr_category => {
                                return (
                                    <CheckboxContainerItem key={categories.findIndex(item => item === curr_category)}>
                                        <Label>{curr_category}</Label>
                                        <Input type='checkbox' value={curr_category} onChange={handleCategories} />
                                    </CheckboxContainerItem>
                                )
                            })
                        }
                    </CheckboxContainer>
                </Attribute>
                <Attribute>
                    <Label>Image</Label>
                    <Input type='file' />
                </Attribute>
                <ButtonGroup>
                    <Reset onClick={() => { window.location.reload(true) }}>RESET</Reset>
                    <Submit>UPDATE</Submit>
                </ButtonGroup>
            </Form>
        </Container>
    )
}

export default EditProduct