// dependencies
import { React, useState } from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage"    // firebase storage functions
import app from "../firebase-config"    // firebase app dependency
import { Start, Failure, createProductSuccess } from '../redux/productRedux' // product reducers
import { userRequests } from '../requests' // request methods

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

const CreateProduct = () => {
    const user = useSelector(state => state.user.currentUser)
    const admin = user ? user.isAdmin : false

    // handle product details
    const [productDetails, setProductDetails] = useState({})
    const handleChange = (e) => {
        setProductDetails(prev => {
            return {
                ...prev, [e.target.name]: e.target.value
            }
        })
    }

    // handle selection of colors
    const [selectedColors, setColors] = useState([])
    const handleColors = (e) => {
        if (e.target.checked) {
            setColors([...selectedColors, e.target.value])
        } else {
            setColors(selectedColors.filter(item => item !== e.target.value))
        }
    }

    // handle selection of sizes
    const [selectedSizes, setSizes] = useState([])
    const handleSizes = (e) => {
        if (e.target.checked) {
            setSizes([...selectedSizes, e.target.value])
        } else {
            setSizes(selectedSizes.filter(item => item !== e.target.value))
        }
    }

    // handle selection of categories
    const [selectedCategories, setCategories] = useState([])
    const handleCategories = (e) => {
        if (e.target.checked) {
            setCategories([...selectedCategories, e.target.value])
        } else {
            setCategories(selectedCategories.filter(item => item !== e.target.value))
        }
    }

    // handle product images
    const [file, setFile] = useState({})

    // handle product
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault()

        const fileName = new Date().getTime() + file.name
        const storage = getStorage(app)
        const storageRef = ref(storage, fileName)
        const uploadTask = uploadBytesResumable(storageRef, file)

        uploadTask.on('state_changed',
            (snapshot) => {
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                console.log('Upload is ' + progress + '% done')
            },
            (error) => { },
            () => {
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    const uploadProduct = async (dispatch) => {
                        dispatch(Start())
                        try {
                            const product = {
                                ...productDetails,
                                "colors": selectedColors,
                                "sizes": selectedSizes,
                                "categories": selectedCategories,
                                "image": downloadURL
                            }
                            const response = await userRequests.post("/products/create", product)
                            if (response.status == 200) {
                                dispatch(createProductSuccess(response.data))
                                navigate("/products")
                            }else{
                                dispatch(Failure())
                            }
                        } catch (error) {
                            dispatch(Failure())
                        }
                    }

                    admin && uploadProduct(dispatch)
                })
            }
        );
    }

    return (
        <Container>
            <Title>Create a New Product</Title>
            <Form>
                <Attribute>
                    <Label>Title</Label>
                    <Input type='text' name="title" onChange={handleChange} />
                </Attribute>
                <Attribute>
                    <Label>Description</Label>
                    <TextArea rows='5' name="description" onChange={handleChange} ></TextArea>
                </Attribute>
                <Attribute>
                    <Label>Price (INR)</Label>
                    <Input type='number' name="price" onChange={handleChange} />
                </Attribute>
                <Attribute>
                    <Label>Stock</Label>
                    <Select name="inStock" onChange={handleChange} >
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
                    <Input type='file' name='image' onChange={(e) => setFile(e.target.files[0])} />
                </Attribute>
                <ButtonGroup>
                    <Reset onClick={() => { window.location.reload(true) }}>RESET</Reset>
                    <Submit type='submit' onClick={handleSubmit}>CREATE</Submit>
                </ButtonGroup>
            </Form>
        </Container>
    )
}

export default CreateProduct