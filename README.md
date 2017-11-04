# Vue.js Notes

[**Udemy Course Link**](https://www.udemy.com/vuejs-2-the-complete-guide/learn/v4/overview) - https://www.udemy.com/vuejs-2-the-complete-guide/learn/v4/overview

[**Vue CDN Link**](https://unpkg.com/vue/dist/vue.js) - https://unpkg.com/vue/dist/vue.js

## Table of Contents

Lecture Topic | Link
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
Listening to Events | [Lecture 16](#section-2-lecture-16)
Getting Event Data from the Event Object | [Lecture 17](#section-2-lecture-17)
Passing your own Arguments with Events | [Lecture 18](#section-2-lecture-18)
Modifying an Event - with Event Modifers | [Lecture 19](#section-2-lecture-19)
Listening to Keyboard Events | [Lecture 20](#section-2-lecture-20)
Writing Javascript Code in the Templates | [Lecture 21](#section-2-lecture-21)
Using Two-Way-Binding | [Lecture 22](#section-2-lecture-22)
Reacting to Changes with Computed Properties | [Lecture 23](#section-2-lecture-23)
**ASSIGNMENTS** | 
Topics Covered from Section 1-2.15 | [Assignment 1](https://github.com/Wyattb413/learning-vue-udemy/blob/master/assignments/1.html)
Topics Covered from Section 2.16-2.20 | [Assignment 2](https://github.com/Wyattb413/learning-vue-udemy/blob/master/assignments/2.html)

<!-- ################################################################################################################ -->
<!--                                                     SECTION 1                                                    -->
<!-- ################################################################################################################ -->

## SECTION 1

### Section 1 Lecture 2

- Create Vue instance

```javascript

new Vue({});
```

- Vue instance: `el` Bind Vue instace to HTML element

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

- *Directive*: `v-on` Doing something on a browser event

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

<!-- ################################################################################################################ -->
<!--                                                     SECTION 2                                                    -->
<!-- ################################################################################################################ -->

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

- *Directive*: `v-bind` Binding to a `data` attribute

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

- *Directive*: `v-once` Rendering the template once

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

- *Directive*: `v-html` Outputting raw HTML

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

### Section 2 Lecture 16

- *Directive*: `v-on` Respond to HTML element event

```html
<div id="app">
    <button v-on:click='increaseCounter'></button>
</div>
```

```javascript
new Vue({
    el: '#app',
    data: {
        counter: 0,
    },
    methods: {
        increaseCounter() {
            this.counter++;
        }
    }
});
```

### Section 2 Lecture 17

- Utilizing HTML event data with `v-bind`

```html
<div id="app">
    <p v-bind:mouseover='updateCoordinates'>Coordinates: {{ x }} , {{ y }}</p>
</div>
```

```javascript
new Vue({
    el: '#app',
    data: {
        x: 0,
        y: 0,
    },
    methods: {
        updateCoordinates(event) {
            this.x = event.clientX;
            this.y = event.clientY;
        }
    }
});
```

### Section 2 Lecture 18

- Passing arguments to `mmethods` (`$event` protected variable set by Vue - is HTML event)

```html
<div id="app">
    <button v-on:click='increaseCounter(2, $event)'></button>
    {{ counter }}
</div>
```

```javascript
new Vue({
    el: '#app',
    data: {
        counter: 0,
    },
    methods: {
        increaseCounter(step, event) {
            this.counter += step;
        }
    }
});
```

### Section 2 Lecture 19

- Utilizing event modifiers

```html
<div id="app">
    <p v-bind:mouseover='updateCoordinates'>
        Coordinates: {{ x }} , {{ y }}
        <span v-bind:mousemove.stop=''>DEAD SPOT</span>
    </p>
</div>
```

```javascript
new Vue({
    el: '#app',
    data: {
        x: 0,
        y: 0,
    },
    methods: {
        updateCoordinates(event) {
            this.x = event.clientX;
            this.y = event.clientY;
        }
    }
});
```

### Section 2 Lecture 20

- Keyboard event modifiers

```html
<div id="app">
    <input v-on:keyup.enter.space='alertMe' type='text'>
</div>
```

```javascript
new Vue({
    el: '#app',
    data: {},
    methods: {
        alertMe(event) {
            alert(event.target.value);
        }
    }
});
```

### Section 2 Lecture 21

- Javascript in the HTML templating

```html
<div id="app">
    <button v-on:click='counter++'></button>
    {{ counter > 10 ? 'Counter is greater than 10' : 'Counter is less than 10' }}
</div>
```

```javascript
new Vue({
    el: '#app',
    data: {
        counter: 0,
    },
    methods: {}
});
```

### Section 2 Lecture 22

- *Directive*: `v-model` Two way data binding

```html
<div id="app">
    <input v-model='name' type='text'>
    {{ name }}
</div>
```

```javascript
new Vue({
    el: '#app',
    data: {
        name: 'Kylo Ren',
    },
    methods: {}
});
```

### Section 2 Lecture 23

- Vue instance: `computed` Using computed properties to compute values

```html
<div id="app">
    <button v-on:click='counter++'></button>
    {{ result }}
</div>
```

```javascript
new Vue({
    el: '#app',
    data: {
        counter: 0,
    },
    computed: {
        result() {
            return this.counter > 10 ? 'Counter is greater than 10' : 'Counter is less than 10'
        }
    }
});
```

<!-- ################################################################################################################ -->
<!--                                                     SECTION 3                                                    -->
<!-- ################################################################################################################ -->