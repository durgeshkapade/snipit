import dotenv from "dotenv";

dotenv.config();
const configurations = {
  port: process.env.PORT,
  domain: process.env.DOMAIN,
  frontend_url: process.env.FRONTEND_URL,
  database: {
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    name: process.env.DB_NAME,
  },
};

export default configurations;
