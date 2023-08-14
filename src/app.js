import dotenv from 'dotenv';

dotenv.config();

// const a = require('./MY/a');
import { a } from './MY/a.js';

console.log(a);

console.log(require.resolve.paths('a'));

console.log(`${process.env.X}`);
