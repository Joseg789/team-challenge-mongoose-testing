const app = require("./app");
const dotenv = require("dotenv").config();

const PORT = 3002;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
