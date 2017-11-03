# Vue.js Notes

[**Udemy Course Link**](https://www.udemy.com/vuejs-2-the-complete-guide/learn/v4/overview) - https://www.udemy.com/vuejs-2-the-complete-guide/learn/v4/overview

[**Vue CDN Link**](https://unpkg.com/vue/dist/vue.js) - https://unpkg.com/vue/dist/vue.js

## Table of Contents
Lesson Topic | Link
--- | ---
**SECTION 1** | [**Section 1**](#section-1)
Let's Create our First Vuejs Application | [Lecture 2](#section-1-lecture-2)
Extending the Vuejs Application | [Lecture 3](#section-1-lecture-3)
**SECTION 2** | [**Section 2**](#section-2)
Understanding Vuejs Template Syntax and Instance Work Together | [Lecture 10](#section-2-lecture-10)
Accessing Data in the Vue Instance | [Lecture 11](#section-2-lecture-11)
Binding to Attributes | [Lecture 12](#section-2-lecture-12)
Disable Re-Rendering with v-once | [Lecture 14](#section-2-lecture-14)
How to Output Raw HTML | [Lecture 15](#section-2-lecture-15)
**ASSIGNMENTS** | [Assignment 1](https://github.com/Wyattb413/learning-vue-udemy/blob/master/assignments/1.html)

## SECTION 1

### Section 1 Lecture 2
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

### Section 1 Lecture 3
- Directives: `v-on` Doing something on a browser event
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

### Section 2 Lecture 10
- Using a `method` to render text
```html
<div id="app">
    <p>{{ sayHello() }}</p>
</div>
```

```javascript
new Vue({
    el: '#app',
    data: {},
    methods: {
        sayHello() {
            return 'Hello There!';
        }
    }
});
```

### Section 2 Lecture 11
- Using a `method` to return `data` properties
```html
<div id="app">
    <p>{{ sayHello() }}</p>
</div>
```

```javascript
new Vue({
    el: '#app',
    data: {
        title: 'Hello World',
    },
    methods: {
        sayHello() {
            return this.title;
        }
    }
});
```

### Section 2 Lecture 12
- Directive: `v-bind` Binding to a `data` attribute
```html
<div id="app">
    <a v-bind:href="link">Google</a>
</div>
```

```javascript
new Vue({
    el: '#app',
    data: {
        link: 'https://google.com',
    },
    methods: {}
});
```

### Section 2 Lecture 14
- Directive: `v-once` Rendering the template once
```html
<div id="app">
    <p v-once>{{ title }}</p>
    <p>{{ sayHello() }}</p>
</div>
```

```javascript
new Vue({
    el: '#app',
    data: {
        title: 'Hello World',
    },
    methods: {
        sayHello() {
            this.title= 'Hello!';
            return this.title;
        }
    }
});
```

### Section 2 Lecture 15
- Directive: `v-html` Outputting raw HTML
```html
<div id="app">
    <p v-html='finshedLink'></p>
</div>
```

```javascript
new Vue({
    el: '#app',
    data: {
        finshedLink: "<a href='https://google.com'>Google</a>"
    },
    methods: {}
});
```