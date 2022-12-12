const { Worker } = require('bullmq')
const { queueName, connection, concurrency } = require('../config/mailer.config')

const worker = new Worker(queueName, `${__dirname}/processor.js`, {
    connection,
    concurrency,
})

console.info('Worker mailer listening for jobs')

module.exports = {
    worker,
}
