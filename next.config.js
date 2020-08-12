module.exports = {
  target: "serverless",

  env: {
    DATABASE_URL: process.env.DATABASE_URL,
  },
};
