# React-Front-Microservice

This repository creates a front microservice project with React

## Introduction

In the public/index.html file of the main proyect, we add this code 

```html
  <script src="https://cdnjs.cloudflare.com/ajax/libs/zone.js/0.9.1/zone.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/webcomponentsjs/2.2.10/custom-elements-es5-adapter.js"></script>
  <script src="http://YOURIP:PORT/page1/main.js"></script>
  <script src="http://YOURIP:PORT/page2/main.js"></script>
  <script src="http://YOURIP:PORT/page3/main.js"></script>
```

In this code "<script src="http://YOURIP:PORT/page1/main.js"></script>", we make a reference with the microservice proyect.

In the microservice proyect we make a customElements about our code.

## Installation

```git
git clone https://github.com/juanbjs/react-front-microservice.git

cd react-front-microservice

npm run start

docker-compose up --bluid -d
```

## Obs

You need a docker, docker-compose and npm installation

## References

https://micro-frontends-es.org/

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[MIT](https://choosealicense.com/licenses/mit/)
