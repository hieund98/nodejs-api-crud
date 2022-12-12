module.exports = {
    queueName: process.env.QUEUE_NAME || 'mailbot',
    concurrency: parseInt(process.env.QUEUE_CONCURRENCY, 10) || 1,
    connection: {
        host: process.env.REDIS_HOST || 'localhost',
        port: parseInt(process.env.REDIS_PORT, 10) || '6379',
    },
    smtp: {
        pool: true,
        host:  process.env.MAIL_SERVER || 'smtp.googlemail.com',
        port: process.env.MAIL_SERVER_PORT || 465,
        secure: true, // true for 465, false for other ports
        auth: {
            user: process.env.MAIL_USER,
            pass: process.env.MAIL_PASSWORD,
        },
    },
}
