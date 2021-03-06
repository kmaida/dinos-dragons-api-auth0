# Dinos and Dragons API with Auth0

## Requirements

* [Node.js + npm](https://nodejs.org)
* [Free Auth0 account](https://auth0.com/signup)

## Install

Clone this repository, then run:

```
$ npm install
```

## Setup

* Sign up for a [free Auth0 account](https://auth0.com/signup)
* Add your [Auth0 API](https://manage.auth0.com/#/apis) credentials and remove `.example` extension from `config.js.example`

## Run API server

```
$ node server
```

Available on `http://localhost:3001/`.

## Endpoints

* GET `/api/dinosaurs` (public)
* GET `/api/dragons` (authentication needed)

## What is Auth0?

Auth0 helps you to:

* Add authentication with [multiple authentication sources](https://docs.auth0.com/identityproviders), either social like **Google, Facebook, Microsoft Account, LinkedIn, GitHub, Twitter, Box, Salesforce, amont others**, or enterprise identity systems like **Windows Azure AD, Google Apps, Active Directory, ADFS or any SAML Identity Provider**.
* Add authentication through more traditional **[username/password databases](https://docs.auth0.com/mysql-connection-tutorial)**.
* Add support for **[linking different user accounts](https://docs.auth0.com/link-accounts)** with the same user.
* Support for generating signed [Json Web Tokens](https://docs.auth0.com/jwt) to call your APIs and **flow the user identity** securely.
* Analytics of how, when and where users are logging in.
* Pull data from other sources and add it to the user profile, through [JavaScript rules](https://docs.auth0.com/rules).

## Create a Free Auth0 Account

1. Go to [Auth0](https://auth0.com) and click Sign Up.
2. Use Google, GitHub, or Microsoft Account to log in.

## Issue Reporting

If you have found a bug or if you have a feature request, please report them at this repository issues section. Please do not report security vulnerabilities on the public GitHub issue tracker. The [Responsible Disclosure Program](https://auth0.com/whitehat) details the procedure for disclosing security issues.

## License

This project is licensed under the MIT license. See the [LICENSE](LICENSE) file for more info.
