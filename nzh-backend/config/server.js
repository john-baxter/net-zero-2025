module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array('APP_KEYS', ["0lDSrYrDU1rpNPnycQ1h9A==", "IpKlaB439qiGNHfswa549g==", "/YkE3O5hpPjlvAg/DJS9ng==,raPtwGmme3QjC93Z2fEL6w=="]),
  },
  jwt_secret:"XPRccZcvGrAFosFzx7ZfJA=="
});
