## Synopsis

AppDirect Node.js Seed is an template demonstrating the use of the AppDirect-Express module. It can be used to quickly bootstrap the integration of SaaS applications and services wiht the AppDirect marketplace platform.

See https://github.com/olivercox/appdirect-express for details of the express module used in this template.

For more information on AppDirect see their website http://www.appdirect.com/.

## Installation

Just clone the repo or download the source zip, once you have the source follow the steps below:-

1. Create an AppDirect application and get the OAuth credentials
2. Create a file in the root folder named app-direct.config
3. Add the Oauth credentials to app-direct.config (see ./sample-app-direct.config for format)
3. Install dependancies

    <pre>npm install</pre>

4. Run the app

    <pre>DEBUG=appdirect-seed* npm start</pre>

By default the api will listen on port 3000. You can use the ping tests within the AppDirect project dashboard to test out the api or hit the api with your own requests (See examples folder).

## Reference

The template is barebones so as to allow you to go in whatever direction you wish:-

    root/
      app.js - The main express application file
      app-direct.config - Config file OAuth credentials
      package.json
      bin/
        www - Application start subscription

## Contributors

Feel free to fork the repository and submit pull requests, all contributions are very welcome.

## License

This sample code is licensed under Apache 2.0. Full license text is available in [LICENSE](LICENSE).
