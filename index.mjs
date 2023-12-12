import 'dotenv'
import { faker } from '@faker-js/faker';
import autocannon from 'autocannon';
console.log('started')
console.log(process.env.HOST_TEST)
autocannon({
    url: process.env.HOST_TEST,
    connections: 100, //default
    pipelining: 5, // default
    duration: 2000, // default,
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
console.log('finished')