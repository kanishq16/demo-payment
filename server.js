require("dotenv").config()
const app = require("./src/app")
const connectToDB = require("./src/config/db")

connectToDB().catch((error) => {
    console.error("Database connection failed:", error.message)
    process.exit(1)
})

app.listen(3000, () => {
    console.log("Server is running on port 3000")
})