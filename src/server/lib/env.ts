import { config } from 'dotenv';

config();

// Default NODE_ENV to development if none was specified.
process.env.NODE_ENV = process.env.NODE_ENV ? process.env.NODE_ENV : 'development';
