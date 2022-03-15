module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'dcf1286ebdd9b08416046115e5f777d2'),
  },
});
