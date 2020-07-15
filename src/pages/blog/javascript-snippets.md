---
title: 'Useful Javascript snippets'
date: '2019-01-23'
tags: ['javascript', 'snippets']
path: '/blog/javascript-snippets'
---

### Async Loop

```javascript
for (let item of items) {
  await doSomethingWith(item)
}
```

### For of with index

```javascript
for (const [i, v] of ['a', 'b', 'c'].entries()) {
  console.log(i, v)
}
```
