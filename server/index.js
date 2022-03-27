const express = require("express");
const app = express();
const router = express.Router();
const { graphqlHTTP } = require("express-graphql");
const schema = require("./schemas/index");
const cors = require("cors");
const config = require('./config.js');
const authMiddleware = require("./middleware/auth-middleware");


app.use(cors());
app.use(express.json());
app.use('/', require('./controller/user.js')(router));
//app.use(authMiddleware);  TODO : 
app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

app.listen(config.PORT, () => {
  console.log("Server running");
});