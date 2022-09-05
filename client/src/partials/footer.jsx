import React from 'react'
import styled from 'styled-components'
import FacebookIcon from '@mui/icons-material/Facebook'
import InstagramIcon from '@mui/icons-material/Instagram'
import TwitterIcon from '@mui/icons-material/Twitter'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import EmailIcon from '@mui/icons-material/Email'
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid'

const Container = styled.div`
	width: 100%;
	padding: 20px;
	display: flex;
	justify-content: space-between;
	background-color: lightgray;
`

const Left = styled.div`
	flex: 1;
`
const Logo = styled.h2``
const Description = styled.p``
const SocialMediaContainer = styled.div`
	display: flex;
`
const SocialLink = styled.div`
	margin-right: 10px;
`

const Center = styled.div`
	flex: 1;
`
const Title = styled.h2``
const List = styled.ul`
	list-style: none;
`
const ListItem = styled.li`
	cursor: pointer;
`

const Right = styled.div`
	flex: 1;
`
const Contact = styled.div`
	margin-bottom: 10px;
`
const ContactItem = styled.div`
	display: flex;
	flex-direction: row;
	margin-bottom: 5px;
`
const Payment = styled.img``

const Footer = () => {
	return (
		<Container>
			<Left>
				<Logo>Fashion Nova</Logo>
				<Description>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti dolore suscipit voluptas numquam natus quos totam beatae itaque nesciunt sunt!</Description>
				<SocialMediaContainer>
					<SocialLink><FacebookIcon /></SocialLink>
					<SocialLink><InstagramIcon /></SocialLink>
					<SocialLink><TwitterIcon /></SocialLink>
				</SocialMediaContainer>
			</Left>
			<Center>
				<Title>Useful Links</Title>
				<List>
					<ListItem>Home</ListItem>
					<ListItem>Cart</ListItem>
					<ListItem>Man Fashion</ListItem>
					<ListItem>Woman Fashion</ListItem>
					<ListItem>Accessories</ListItem>
					<ListItem>Terms</ListItem>
				</List>
			</Center>
			<Right>
				<Title>Contact Details</Title>
				<Contact>
					<ContactItem><LocationOnIcon />Street No. 32 Boring Road, Patna, Bihar, India</ContactItem>
					<ContactItem><PhoneAndroidIcon />swarajkumarchaudhary1729@gmail.com</ContactItem>
					<ContactItem><EmailIcon />+91-8002046457</ContactItem>
				</Contact>
				<Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
			</Right>
		</Container>
	)
}

export default Footer