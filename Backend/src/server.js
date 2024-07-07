require("dotenv").config() ;
const express = require("express") ;
const mongoose = require("mongoose") ;
const cors = require("cors") ;
const app = express() ;
app.use(cors()) ;
app.use(express.json()) ;
const PORT = process.env.PORT || 3000 ;
const userRoutes = require("./routes/userRoutes") ;

// Connect to the Database
mongoose.connect(process.env.DATABASE_URL, { dbName: "Healthcare-App" }) ;

// Route Handlers
app.use('/user', userRoutes) ;

// Start the server and listen on the specified PORT
app.listen(PORT, () => {
    console.log(`Server running on PORT: ${PORT}`);
});