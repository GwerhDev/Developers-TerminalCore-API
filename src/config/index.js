require('dotenv').config();

module.exports = {
  PORT: process.env.PORT,
  SESSION_SECRET: process.env.SESSION_SECRET,
  JWT_SECRET: process.env.JWT_SECRET,
  GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
  GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET,
  API_URL: process.env.API_URL,
  CLIENT_URL: process.env.CLIENT_URL,
  CLIENT_URL_GWERH: process.env.CLIENT_URL_GWERH,
  NODEMAILER_NAME: process.env.NODEMAILER_NAME,
  EMAIL_USER: process.env.EMAIL_USER,
  OAUTH_CLIENT_ID: process.env.OAUTH_CLIENT_ID,
  OAUTH_CLIENT_SECRET: process.env.OAUTH_CLIENT_SECRET,
  OAUTH_REFRESH_TOKEN: process.env.OAUTH_REFRESH_TOKEN,
  OAUTH_ACCESS_TOKEN: process.env.OAUTH_ACCESS_TOKEN,
  POSTGRES_STRING: process.env.POSTGRES_STRING,
  MONGODB_STRING: process.env.MONGODB_STRING,
  NPM_ACCESS_TOKEN: process.env.NPM_ACCESS_TOKEN,
  GITHUB_ACCESS_TOKEN_GWERH: process.env.GITHUB_ACCESS_TOKEN_GWERH,
  EMAIL_GWERH: process.env.EMAIL_GWERH,
}