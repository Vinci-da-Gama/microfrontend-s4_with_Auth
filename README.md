# MicroFrontend React 18, React-Router-Dom v6, VueJS and AWS

- ✨MicroFrontend practice ✨

### Installation

Requires [Node.js](https://nodejs.org/), webpack, npm or yarn.

### Run

- Container port 8080
```sh
cd container && yarn start
```

- Marketing port 8081
```sh
cd marketing && yarn start
```

- Auth port 8082
```sh
cd auth && yarn start
```
for auth, it is just local auth method, not real auth process.
It is in container/src/App.js --> const [isSignedIn, setIsSignedIn] = useState(false); --> then keep pass it down...

- Dashboard(VueJS) port 8083
```sh
cd dashboard && yarn start
```

local development issue:
Route need refresh, webpack has overlay issue, createRoot update issue
when has time, try solve these 3 issues.


In production has errror --> React.js uncaught error minified react error #299

del secrets when finished.
