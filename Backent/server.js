import { app } from "./app.js";
import { DataServer } from "./data/dataserver.js";


app.listen(process.env.PORT, () => {
    console.log('server is running on port: 5000')
}) 




// database 
DataServer()