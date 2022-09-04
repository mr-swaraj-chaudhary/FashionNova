# FashionNova
	A B2C ECommerce react application.

# TODO
	Develop Restful APIs needed for endpoints 
	Develop Admin Panel
	Develop Payment Gateway
	Develop Client Side

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