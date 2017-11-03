# Vue.js Notes

## Table of Contents
Lesson Topic | Link
--- | ---
Let's Create our First Vuejs Application | [1.2](#S1-L2)
Extending the Vuejs Application | [1.3](#S1-L3)

### S1 L2
- [Vue CDN Link](https://unpkg.com/vue/dist/vue.js)

- Create Vue instance
```javascript
new Vue({});
```

- Bind Vue instace to HTML element with `el`
```html
<div id="app">
</div>
```

```javascript
new Vue({
    el: '#app'
});
```

- Vue instance: `data`
```html
<div id="app">
    <p>{{ title }}</p>
</div>
```

```javascript
new Vue({
    el: '#app',
    data: {
        title: 'Hello World!',
    }
});
```



### S1 L3
- Directives: `v-on`
```html
<div id="app">
    <input type="text" v-on:input="changeTitle">
    <p>{{ title }}</p>
</div>
```

```javascript
new Vue({
    el: '#app',
    data: {
        title: 'Hello World!',
    }
});
```

- Vue instance: `methods`
```html
<div id="app">
    <input type="text" v-on:input="changeTitle">
    <p>{{ title }}</p>
</div>
```

```javascript
new Vue({
    el: '#app',
    data: {
        title: 'Hello World!',
    },
    methods: {
        changeTitle(event) {
            this.title = event.target.value;
        }
    }
});
```