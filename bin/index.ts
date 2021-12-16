import express from 'express';
import morgan from 'morgan'

const app = express()

app.use(morgan('common'))

app.listen(process.env.PORT || 3000, () => {
    console.log(`Application listening on ${process.env.PORT || 3000}`)
})