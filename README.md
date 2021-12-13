# simple-todos-ts

---
This app is build using Nuxt 2.x, tailwind css, and Vue draggable. The component implement atomic design,
that seperates component into several folders based on its size and complexity.
|Atomic Name|Location|Description|
|---|---|---|
|atoms|components|Smallest and simplest component. Doesn't have states or connected to store|
|molecules|components|Consisted of one or multiple atoms. Doesn't have states or connected to store|
|organisms|components|Consisted of one or multiple atoms and/or atoms. Have states or connected to store|
|templates|components|Consisted of wrapper component for styling purpose. Doesn't have states or connected to store|
|pages|pages|UI that users see|

Atomic design is flexible and can be customed based on teams requirements. Idoesn't have to fully follow my implementation.

---
### To Input Todo, click on Add todo Button.
### To Edit Todo, click on Todo Item Title or Completed status.
### To Delete Todo, click on Todo Item X icon.
### To Rearrange Todo, just drag and drop Todo Item.
---

## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, check out the [documentation](https://nuxtjs.org).