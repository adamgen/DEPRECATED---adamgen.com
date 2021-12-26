module.exports = ({ env }) => ({
  email: {
    config: {
      provider: 'sendgrid',
      providerOptions: {
        apiKey: env('SENDGRID_API_KEY'),
      },
      settings: {
        defaultFrom: 'me@adamgen.com',
        defaultReplyTo: 'me@adamgen.com',
        testAddress: 'me@adamgen.com',
      },
    },
  },
});
