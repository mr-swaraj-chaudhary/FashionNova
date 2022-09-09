# FashionNova
	A B2C Ecommerce react application which will use AES for user authentication, JWT fo user authorization, STRIPE for payment gateway and redux for app state management.
	It provides admin the facility to manage products and keep an eye on product stats like sales and investments. 

# TODO
<strong><strike>Develop Admin Panel (UI Only)</strike></strong> <br>
<strong>Develop Payment Gateway (UI Only)</strong> <br>
<strong>Develop Client Side (UI Only)</strong> <br>
<strong>Develop Restful APIs needed by client and admin enpoints using postman</strong> <br>

# Terminologies that will be used widely within the project
	Stripe : Payment Processing Platform
	Mongoose : Schema based solution for database

	AES-256 is a symmetric block cipher which uses a key of size 256 to encrypt a message. 
	It encrypts in 4 steps -
		1. byte substitution
		2. shift rows
		3. mix columns
		4. add key

	JWT or JSON Web Token is an open standard which is used to pass critical information between client and server.
	It uses sign and verify method to verify the identity of an user.
	- Client sends a request to the server with its username and password via POST method
	- Server verifies the identity of the user and generates an accessToken which is then saved into caches for a limited duration
	This accessToken permits the user to access his own cart and orders page

	APIs are software intermediary that helps two programs to communicate.

	Redux :
		- It is an open source state management JS library. 
		- It provides central access to data via states.
		- It helps in maintaining consistency of data.
	Dispatch : It is used to send data for occurence of an event
	Reducers : Analogous to events, Ex: loginStart, loginFailure, loginSuccess

# Packages Used
	react-router-dom : Router, Routes, Route
	styled-components : Used to write css for components
	recharts : Used to create charts
	@mui/x-data-grid : material ui customized tables

	express : creates application and helps in routing
	dotenv : loads environment variables into current process
	cors : secures APIs by passing access origin headers to the request

	cryptojs : deals with algorithms involved in data encryption and decryption
	jsonwebtoken : creates an unique token using a key and user's details using sign method which can be verified using verify method