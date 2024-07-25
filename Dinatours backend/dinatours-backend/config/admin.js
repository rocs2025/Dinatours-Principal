module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'AORI2VzgRF70o3mu0VF1uw=='),
  },
  apiToken: {
    salt: env('API_TOKEN_SALT', 'QfZ6/OGyRyLLDfnzWx2a6A=='),
  },
  transfer: {
    token: {
      salt: env('TRANSFER_TOKEN_SALT'),
    },
  },
  flags: {
    nps: env.bool('FLAG_NPS', true),
    promoteEE: env.bool('FLAG_PROMOTE_EE', true),
  },
  
});
