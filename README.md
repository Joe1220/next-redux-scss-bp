# NEXT REDUX SCSS BOILERPLATE

next기반의 frontend boilerplate 입니다.

## Skill Stack

### **- Language**

[Typescript](https://www.typescriptlang.org/), [Javascript](https://www.javascript.com/),
[`React`](https://github.com/facebook/react)

### **- State Management**

[Redux](https://github.com/reduxjs/redux),
[Redux-Saga](https://github.com/redux-saga/redux-saga)

### **- API Library**

[Axios](https://github.com/axios/axios),
[SSE](https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events/Using_server-sent_events)

### **- CSS**

[Sass](https://github.com/sass/sass)

### **- Style Guid**

[Styleguidist](https://github.com/styleguidist/react-styleguidist)

### **- Testing**

setting both enzyme, react-testing-library. you should select one(or both)

[jest](https://jestjs.io/docs/en/getting-started.html), [react-testing-library](https://github.com/testing-library/react-testing-library), [enzyme](https://airbnb.io/enzyme/),
[axios-mock-adapter](https://www.npmjs.com/package/axios-mock-adapter)

---

## Structure

```
.
├── src
│   ├── setupTests.ts      # for react-testing-library
│   ├── @types             # d.ts file list
│   ├── components         # component list.
│   │     ├──  types.ts
│   │     ├──  sagas.ts
│   │     ├──  actions.ts
│   │     ├──  index.tsx
│   ├── interfaces         # 공유할 수 있는 type(todo move)
│   ├── store              # redux store
│   │     ├──  sagas.ts    # root reducer.
│   │     ├──  reducer.ts  # rootReducer
│   │     ├──  index.tsx   # create store root reducer and root saga
├─── pages                 # next의 page 목록
├──  next.config.js        # config next webpack
├──  tsconfig.json         # config typescript compiler
├──  tsconfig.paths.json   # config typescript import paths
├──  jest.config.js        # config jest options
├──  jest.config.js        # typescript compiler for jest.config.js file
├──  enzyme.js             # for enzyme library

```
