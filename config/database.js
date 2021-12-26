module.exports = ({env}) => {
  return {
    connection: {
      client: "postgres",
      connection: {
        connectionString: env("DATABASE_URL"),
        "ssl": {"rejectUnauthorized": false},
      },
    },
  }
};
