# Koa + React + SSR + ATOMIC DESIGN + STORYBOARD + MODULE CSS + RxJs + Custom hooks

[![Build status][travis-image]][travis-url]
[![CircleCI] [!https://circleci.com/gh/circleci/circleci-docs.svg?style=svg ][!https://app.circleci.com/pipelines/github/vijaykumarreddy26/hacker-news-dummy]


This Project is setup for modern web application

Here’s what we will build in this tutorial:

## Development

- Clone the repo:

```bash
$ git clone https://github.com/vijaykumarreddy26/hacker-news-dummy.git
```

- Go to the project directory and install dependencies:

```bash
 npm install
 cd client && npm install
```

Launch the server:

```bash
$ npm run dev
```

Now, the application is running at [http://localhost:9000](http://localhost:9000)


- For independent component development  (ATOMIC DEVELOPMENT)
```bash
$ cd client && npm run storybook
```
open [http://localhost:9009](http://localhost:9009)

- Server Rendering bundle generation
```bash
$ npm run build:server_renders
```

Very first render is from server side then service workers will be registered.Next refresh or open will be served from serivce workers.


Server compile code at /server/base.template -- renderServerHtml function

- Running test casees 
```bash
$ cd client && npm run test
```

- Running Coverage 
```bash
$ cd client && npm run coverage
```

Check All the independent  atoms, molecules, organisms and templates


Custom Hook :- 
    client/src/hooks/use-store.js

Active Component (which are subscribed to store) :- 
    client/src/App.js

Context Provider to upvote and count clicks :- 
   client/src/context_providers/news_context

Layout :-
    client/src/components/templates/index.module.css

Chart :- 
    client/src/components/organisms/chart/index.js

Store :- 
    client/src/libs/store.js

Test Cases :- \
    - client/src/App.test.js \
    - client/src/utils/index.test.js \
    - Ajax Call mock : client/src/stores/liststore.test.js


### Note
More Enhancements needed to abstract create react app setup and css theming

## License

[MIT](/LICENSE)


[travis-image]: https://img.shields.io/travis/koajs/send.svg?style=flat-square
[travis-url]: https://travis-ci.org/github/vijaykumarreddy26/hacker-news-dummy




