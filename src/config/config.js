module.exports = {
    development:{
        database:{
            host:'10.10.2.57',
            name: 'flexBOT',
            dialect: 'mssql',
            user: 'dev_teste',
            password: 'Flex@123'
        }
    },
    production:{
        database:{
            host: process.env.DB_HOST,
            port: process.env.DB_PORT
        }
    }
};
