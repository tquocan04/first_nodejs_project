import express, { Express, Request, Response } from 'express'
import morgan from 'morgan'
import dotenv from 'dotenv'

dotenv.config();

const port = process.env.PORT || 3000;

const app: Express = express();

// http logger
app.use(morgan('combined'))

app.get('/', (req: Request, res: Response) => 
  res.send('Hello World!')
)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})