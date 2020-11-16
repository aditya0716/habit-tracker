# habitTracker Express.js project
Directory Structure-->
  assets=  contains static files like css,JS and images
  -->config=  contains the mongoose initilaztion and database connection file
  -->models=  contains the two database schema name habit and week
  -->views=   contains the ejs pages that is used by our view engine  
Dependency required and commands to install-->
  'ejs' 'npm install ejs'
  -->'express' 'npm install express'
  -->'moment' 'npm install moment'
  -->'mongoose' 'npm install mongoose'

Steps to execute in your system-->
  install nodejs
  -->install mongodb
  -->run all the above mentioned dependencies
  -->if mongodb is not running in the default port make required changes in config directory mongoose.js file line 2
  -->run node index.js "index.js is our entry point of the node"
  --> command will set up the server at port 8080 
  -->check localhost:8080 for the tracker

