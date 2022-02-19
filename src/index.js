const { graphqlHTTP } = require('express-graphql')
const express = require('express')
const app = express()
const port = 8001

const ean = require('./routes/ean')
const schema = require('./routes/graphql')

app.use('/api', ean);
app.use('/graphql', graphqlHTTP({
    schema,
}));

app.listen(port, () => {
    console.log(`API Scrapper listening on port ${port}`)
})