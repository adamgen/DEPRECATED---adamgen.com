module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '2dc85be77b7b9f6dbb3dfa5c49ffa80d'),
  },
});
