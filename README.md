# Vue.js Notes

[**Udemy Course Link**](https://www.udemy.com/vuejs-2-the-complete-guide/learn/v4/overview)

## Table of Contents
Lesson Topic | Link
--- | ---
**SECTION 1** | [Section 1](#section-1)
Let's Create our First Vuejs Application | [Lesson 2](#section-1-lesson-2)
Extending the Vuejs Application | [Lesson 3](#section-1-lesson-3)
**SECTION 2** | [Section 2](#section-2-lesson-1)

## SECTION 1

### Section 1 Lesson 2
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

### Section 1 Lesson 3
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
## SECTION 2

### Section 2 Lesson 3