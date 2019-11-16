const env = process.env

module.exports = {
    type: 'mysql',
    host: '0.0.0.0',
    port: 3306,
    username: env.ACCOUNT,
    password: env.PASSWORD,
    database: env.DBNAME,
    synchronize: true,
    logging: false,
    entities: ['src/entity/*{.ts,.js}'],
    timezone: 'Z'
}
