## Welcome to the Rise Developer Challenge!

### The coding challenge

Your goal is to implement one of Rise's interactive blocks (see [this Rise course](https://rise.articulate.com/share/IUB9zxbEaKjSQ89lw74eevjW1qC7d-54) for more details).

At a minimum, your implementation should:
1. populate your interactive block's configuration from the provided REST API (see [`/server`](/server))
1. use `react` for your UI components
1. persist your interactive block's UI state by extending the provided REST API

What you choose to implement from there is up to you. :)

### Implementation notes:

- your interactive block implementation should live in the [`/client`](/client) directory and have its own `package.json`, `node_modules`, etc.
- feel free to bootstrap your solution with [create-react-app](https://github.com/facebookincubator/create-react-app) (or whatever tools you prefer)
- the beginnings of a REST API lives in [`/server`](/server) and is reachable at http://localhost:5000
  - the REST API currently uses variables as a makeshift in-memory database

### Getting started

To get the REST API up and running on your dev machine:

1. `cd server`
1. `yarn install` (or `npm install`)
1. `yarn start` (or `npm start`)

### Running the entire application
Both applications (client and server) must be running on different ports

Running the server
1. git clone https://github.com/vicjuma/tech-challenge-master.git
2. cd tech-challenge-master/server
3. npm install
4. nodemon (install globally npm install -g nodemon)

Running the server
1. cd tech-challenge-master/client
2. yarn
3. yarn start