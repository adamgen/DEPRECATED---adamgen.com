module.exports = ({ env }) => {
    return {
        connection: {
            client: 'postgres',
            connection: {
                connectionString: env('PG_URL'),
                ssl: { rejectUnauthorized: false },
            },
        },
    };
};
