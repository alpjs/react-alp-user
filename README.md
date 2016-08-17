# react-alp-user [![NPM version][npm-image]][npm-url] [![Dependency Status][daviddm-image]][daviddm-url]

react user in context

 [![Dependency Status][daviddm-image]][daviddm-url]


## Install

```sh
npm install --save react-alp-user
```

## Usage

```js
import User from 'react-alp-user';

export function UserFirstname() {
    return <span><User>{user => user.firstname}</User></span>;
}
```

[npm-image]: https://img.shields.io/npm/v/react-alp-user.svg?style=flat-square
[npm-url]: https://npmjs.org/package/react-alp-user
[daviddm-image]: https://david-dm.org/alpjs/react-alp-user.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/alpjs/react-alp-user
