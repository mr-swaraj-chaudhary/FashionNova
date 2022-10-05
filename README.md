# Fashion Nova
	Developing an admin panel that facilitates to manage an B2C Ecommerce website. 
	It also provides admin the facility to manage users and keep an eye on product stats like sales, investments and revenue.

# Terminologies
	Stripe : Payment Processing Platform
	Mongoose : Schema based solution for database
	APIs : Software intermediary that helps two programs to communicate
	AES : Symmetric block cipher which uses a key of size 256 to encrypt a message
	
	JWT : 
	An open standard which is used to pass critical information between client and server
	It uses sign and verify method to verify the identity of an user.
		- Client sends a request to the server with its username and password via POST method
		- Server verifies the identity of the user and generates a token which is then saved into browser storage for a limited duration

	Redux :
		- It is an open source app state management JS library
		- It provides central access to store in form of states
		- It helps in maintaining consistency of data
	Dispatch : Triggers an action with required payload
	Reducers : Functionality of an action within a state

# Packages Used
	react : react, useState(), useEffect()
	react-router-dom : BrowseRouter, Routes, Route, Link, useNavigate(), useLocation()
	react-redux : useSelector(), useDispatch()

	styled-components : Used to write css for components
	recharts : Used to create charts
	@mui/x-data-grid : material ui customized tables

	express : creates application and helps in routing
	dotenv : loads environment variables into current process
	cors : secures APIs by passing access origin headers to the request

	cryptojs : deals with algorithms involved in data encryption and decryption
	jsonwebtoken : creates an unique token for user's identification

	axios : helps in sending asynchronous HTTP requests to REST api endpoints to perform CRUD operations
	timeago.js : date formatter

	react-redux : provides central access to app states using useSelector() hook
	react-persist : stores app states in local storage by default
