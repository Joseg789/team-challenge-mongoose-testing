const dotenv = require("dotenv").config();
const app = require("./app");

const PORT = 3002;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
