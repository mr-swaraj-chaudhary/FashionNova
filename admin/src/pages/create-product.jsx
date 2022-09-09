import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    flex: 4;
`

const Title = styled.h1``
const Form = styled.form`
    display: flex;
    flex-direction: column;
    margin: 0px 20px 20px 0px;
`
const Attribute = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0px 20px 20px 0px;
`
const Label = styled.label`
    font-size: large;
    margin-bottom: 5px;
`
const Input = styled.input`
    height: 40px;
    font-size: 15px;
    color: black;
`
const TextArea = styled.textarea`
    width: 100%;
    font-size: 15px;
    color: black;
`
const Select = styled.select`
    height: 40px;
    font-size: 15px;
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
    return (
        <Container>
            <Title>Create a New Product</Title>
            <Form>
                <Attribute>
                    <Label>Title</Label>
                    <Input type='text' />
                </Attribute>
                <Attribute>
                    <Label>Description</Label>
                    <TextArea rows='5'></TextArea>
                </Attribute>
                <Attribute>
                    <Label>Price (INR)</Label>
                    <Input type='number' />
                </Attribute>
                <Attribute>
                    <Label>Stock</Label>
                    <Select>
                        <Option>In Stock</Option>
                        <Option>Out of Stock</Option>
                    </Select>
                </Attribute>
                <Attribute>
                    <Label>Colors</Label>
                    <CheckboxContainer>
                        <CheckboxContainerItem>
                            <Label>Red</Label>
                            <Input type='checkbox' />
                        </CheckboxContainerItem>
                        <CheckboxContainerItem>
                            <Label>Blue</Label>
                            <Input type='checkbox' />
                        </CheckboxContainerItem>
                    </CheckboxContainer>
                </Attribute>
                <Attribute>
                    <Label>Sizes</Label>
                    <CheckboxContainer>
                        <CheckboxContainerItem>
                            <Label>M</Label>
                            <Input type='checkbox' />
                        </CheckboxContainerItem>
                        <CheckboxContainerItem>
                            <Label>S</Label>
                            <Input type='checkbox' />
                        </CheckboxContainerItem>
                    </CheckboxContainer>
                </Attribute>
                <Attribute>
                    <Label>Categories</Label>
                    <CheckboxContainer>
                        <CheckboxContainerItem>
                            <Label>Men</Label>
                            <Input type='checkbox' />
                        </CheckboxContainerItem>
                        <CheckboxContainerItem>
                            <Label>Women</Label>
                            <Input type='checkbox' />
                        </CheckboxContainerItem>
                    </CheckboxContainer>
                </Attribute>
                <Attribute>
                    <Label>Image</Label>
                    <Input type='file' />
                </Attribute>
                <ButtonGroup>
                    <Reset>RESET</Reset>
                    <Submit>CREATE</Submit>
                </ButtonGroup>
            </Form>
        </Container>
    )
}

export default CreateProduct