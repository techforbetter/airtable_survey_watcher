const token = process.env.GITHUB_TOKEN ? process.env.GITHUB_TOKEN : false;
if (token == false) {
  console.error('Github token must be set in environment variables');
  throw new Error('Github token must be set in environment variables');
}

const org = 'foundersandcoders';
const repo = 'tech-for-better-leads';

module.exports = { token, org, repo };
