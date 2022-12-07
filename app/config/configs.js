require('dotenv').config()

module.exports = {
    app: {
        server:  process.env.APP_SERVER || 'Unknown App',
        name: process.env.APP_NAME || 'App name',
        ruleCheckerMiddlewareDetection: 'ruleCheckerMiddlewareDFDSFDSFDSFSDFSDFDSFDSFDSFDSFDSFDSF'
    },
    notification: {
        enable: process.env.NOTIFICATION_ENABLE || false,
        chatId: process.env.NOTIFICATION_CHAT_ID || 'xxx',
        token: process.env.NOTIFICATION_TOKEN || 'xxx',
    },
    database: {
        use_env_variable: process.env.APP_ENV,
        local: {
            host: process.env.MYSQL_HOST || 'xxx',
            port: process.env.MYSQL_PORT || 'xxx',
            username: process.env.MYSQL_USER || 'xxx',
            password: process.env.MYSQL_PASSWORD || '',
            database: process.env.MYSQL_DATABASE || 'xxx',
            dialect: 'mysql',
            timezone: '+07:00',
            logging: console.log
        },
        development: {
            host: process.env.MYSQL_HOST || 'xxx',
            port: process.env.MYSQL_PORT || 'xxx',
            username: process.env.MYSQL_USER || 'xxx',
            password: process.env.MYSQL_PASSWORD || 'xxx',
            database: process.env.MYSQL_DATABASE || 'xxx',
            dialect: 'mysql',
            timezone: '+07:00',
            logging: console.log
        },
        test: {
            host: process.env.MYSQL_HOST || 'xxx',
            port: process.env.MYSQL_PORT || 'xxx',
            username: process.env.MYSQL_USER || 'xxx',
            password: process.env.MYSQL_PASSWORD || 'xxx',
            database: process.env.MYSQL_DATABASE || 'xxx',
            dialect: 'mysql',
            timezone: '+07:00',
            logging: console.log
        },
        production: {
            host: process.env.MYSQL_HOST || 'xxx',
            port: process.env.MYSQL_PORT || 'xxx',
            username: process.env.MYSQL_USER || 'xxx',
            password: process.env.MYSQL_PASSWORD || 'xxx',
            database: process.env.MYSQL_DATABASE || 'xxx',
            dialect: 'mysql',
            timezone: '+07:00',
            logging: false
        }
    },
    redis: {
        cache: {
            host: process.env.REDIS_CACHE_HOST || 'xxx',
            port: process.env.REDIS_CACHE_PORT || 'xxx',
            auth: process.env.REDIS_CACHE_AUTH || 'xxx',
            db: process.env.REDIS_CACHE_DB || 'xxx'
        }
    },
    crypto: {
        secret: process.env.CRYPTO_SECRET_KEY || 'xxx'
    },
    jwt: {
        secret: process.env.JWT_SECRET || 'xxx',
        algorithm: process.env.JWT_ALGORITHM || 'xxx',
        ttl: process.env.JWT_TTL || 30 * 24 * 60 * 60,
        secret_refresh: process.env.JWT_SECRET_REFRESH || 'xxx',
        algorithm_refresh: process.env.JWT_ALGORITHM_REFRESH || 'xxx',
        ttl_refresh: '90d'
    },
    auth: {
        loginBy: 'admarket',
        basic: {
            users: { 'admin': '123' },
            challenge: true,
            realm: 'foo'
        }
    },
    google: {
        api: {
            web: {
                client_id: process.env.GOOGLE_API_WEB_CLIENT_ID || 'xxx',
                project_id: process.env.GOOGLE_API_WEB_PROJECT_ID || 'xxx',
                auth_uri: process.env.GOOGLE_API_WEB_AUTH_URI || 'xxx',
                token_uri: process.env.GOOGLE_API_WEB_TOKEN_URI || 'xxx',
                auth_provider_x509_cert_url: process.env.GOOGLE_API_WEB_AUTH_CERT_URL || 'xxx',
                client_secret: process.env.GOOGLE_API_WEB_CLIENT_SECRET || 'xxx',
                redirect_uris: [
                    process.env.GOOGLE_API_WEB_REDIRECT_URI || 'xxx',
                ],
                javascript_origins: [
                    process.env.GOOGLE_API_WEB_JS_ORIGIN || 'xxx',
                ]
            },
            scopes: {
                sheet: [
                    'https://www.googleapis.com/auth/drive.metadata.readonly', // Google Sheets API
                    'https://www.googleapis.com/auth/spreadsheets.readonly', // Google Sheets API
                ],
                adwords: [
                    'https://www.googleapis.com/auth/adwords', // Google Adwords API
                ]
            }
        }
    },
    aes: {
        secretKey: process.env.AES_SECRET_KEY || '',
        iv: process.env.AES_IV || '',
        algorithm: process.env.AES_ALGORITHM || ''
    },
    admicro: {
        sso: {
            domain: process.env.ADMICRO_SSO_DOMAIN || 'xxx',
            key: process.env.ADMICRO_SSO_KEY || 'xxx',
            serviceUrl: process.env.SSO_SERVICE_URL || 'xxx',
            apis: {
                login: 'user/login',
                userInfo: 'user/info',
                userCreate: 'user/create',
                checkEmailExist: 'user/ckemail',
                checkUsernameExist: 'user/ckusername',
                checkPhoneExist: 'user/ckphone',
                passwordValidate: 'user/ckStrengthPassword',
                passwordReset: 'user/repass'
            }
        }
    },
    sentry: {
        enabled: process.env.SENTRY_ENABLED === 'true',
        dns: process.env.SENTRY_DNS || null,
        securityEndpoint: process.env.SENTRY_SECURITY_ENDPOINT || null
    }
}
