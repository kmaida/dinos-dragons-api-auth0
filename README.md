# Dinos and Dragons API with Auth0

## Requirements

* Node + npm

## Install

Clone this repository, then run:

```
$ npm install
```

## Setup

* Sign up for a [free Auth0 account](https://auth0.com/signup)
* Add your Auth0 credentials and remove `.SAMPLE`: `server/config.js.SAMPLE`

## Run API server

```
$ node server
```

Available on `http://localhost:3001/`.

## Endpoints

* GET `/api/dinosaurs` (public)
* GET `/api/dragons` (authentication needed)

## License

This project is licensed under the MIT license. See the [LICENSE](LICENSE) file for more info.