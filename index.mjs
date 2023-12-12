import 'dotenv'
import { faker } from '@faker-js/faker';
import autocannon from 'autocannon';
autocannon({
    url: process.env.HOST_TEST,
    connections: 1000, //default
    pipelining: 20, // default
    duration: 50, // default,
    headers: {
        origin: 'marciodias.dashboard.you2sales.com'
    },
    setupRequest: (req, context) => ({
        ...req,
        headers: {
            origin: 'marciodias.dashboard.you2sales.com'
        },
        url: process.env.HOST_TEST,
        body: JSON.stringify({
            username: faker.internet.userName(),
            password: faker.internet.password(),
            country: faker.address.country()
        })
    }),
    body: JSON.stringify({
        username: faker.internet.userName(),
        password: faker.internet.password(),
        country: faker.address.country()
    })
}, console.log)

// // async/await
// async function foo () {
//   const result = await autocannon({
//     url: 'https://api.you2sales.com/auth/token',
//     connections: 10, //default
//     pipelining: 1, // default
//     duration: 10 // default
//   })
//   console.log(result)
// }