# symforch-web
The website for Studentersamfundets Symfoniorkester, available at [symforch.no](https://www.symforch.no).

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Prerequisites
* Git
* Node.js

## How to
1. Clone the repo:
`git clone git@github.com:laafte/symforch-web.git`

2. Install Node-packages: 
`npm install`

3. Start development server:
`npm start`
Edit the source code and see the changes apply live on `http://localhost:3000`

4. Make production build:
`npm run build`

5. Deploy build:
`./deploy.sh <samfundet-username>`

## About redirects
Redirects are defined in `public/.htaccess` and will only work on an Apache-hosted page, not on the local development server.
