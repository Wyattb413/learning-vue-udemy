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
An Alternative to Computed properties: Watching for Changes | [Lecture 24](#section-2-lecture-24)
Saving Time with Shorthands | [Lecture 25](#section-2-lecture-25)
Dynamic Styling with CSS Classes - Basics | [Lecture 26](#section-2-lecture-26)
Dynamic Styling with CSS Classes - Using Objects | [Lecture 27](#section-2-lecture-27)
Dynamic Styling with CSS Classes - Using Names | [Lecture 28](#section-2-lecture-28)
Setting Styles Dynamically (without CSS Classes) | [Lecture 29](#section-2-lecture-29)
**ASSIGNMENTS** | 
Topics Covered from Section 1 - Section 2 Lecture 15 | [Assignment 1](https://github.com/Wyattb413/learning-vue-udemy/blob/master/assignments/1.html)
Topics Covered from Section 2 Lecture 16 - Section 2 Lecture 20 | [Assignment 2](https://github.com/Wyattb413/learning-vue-udemy/blob/master/assignments/2.html)
Topics Covered from Section 2 Lecture 21 - Section 2 Lecture 25 | [Assignment 3](https://github.com/Wyattb413/learning-vue-udemy/blob/master/assignments/3.html)

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

### Section 2 Lecture 24

- Vue instance: `watch` Watching for changes to `data` properties

```html
<div id="app">
    <button v-on:click='counter++'></button>
    {{ counter }} {{ result }}
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
            return this.counter > 10 ? 'is greater than 10' : 'is less than 10'
        }
    },
    watch: {
        counter(value) {
            var vm = this;
            setTimeout(function() {
                vm.counter = 0;
            }, 2000);
        }
    },
});
```

### Section 2 Lecture 25

- Vue shorthand syntax

```html
<div id="app">
    <button @click='changeLink'>Click to Change the Link</button>

    <a :href='finsihedLink'>Link</a>
</div>
```

```javascript
new Vue({
    el: '#app',
    data: {
        link: 'https://google.com',
    },
    methods: {
        changeLInk() {
            this.link = 'https://youtube.com';
        },
    },
});
```

### Section 2 Lecture 26

- Dynamic CSS: `:class`

```html
<style>
    .square250 {
        height: 250px;
        width: 250px;
        background-color: seashell;
        display: inline-block;
        margin: 10px;
    }

    .applyDarkRed {
        background-color: darkred;
    }

    .applyDarkOliveGreen {
        background-color: darkolivegreen;
    }

    .applyTan {
        background-color: tan;
    }

    .applyTeal {
        background-color: teal;
    }
</style>

<div id="app">
    <div 
        @click='applyDarkRed = !applyDarkRed'
        class='square250'
        :class='{ applyDarkRed: applyDarkRed }'>
    </div>

    <div 
        @click='applyDarkOliveGreen = !applyDarkOliveGreen'
        class='square250'
        :class='{ applyDarkOliveGreen: applyDarkOliveGreen }'>
    </div>

    <div 
        @click='applyTan = !applyTan'
        class='square250'
        :class='{ applyTan: applyTan }'>
    </div>

    <div 
        @click='applyTeal = !applyTeal'
        class='square250'
        :class='{ applyTeal: applyTeal }'>
    </div>
</div>
```

```javascript
new Vue({
        el: '#app',
        data: {
            applyDarkRed: false,
            applyDarkOliveGreen: false,
            applyTan: false,
            applyTeal: false,
        },
    });
```

### Section 2 Lecture 27

- Dynamic CSS using `computed` properties

```html
<style>
    .square250 {
        height: 250px;
        width: 250px;
        background-color: seashell;
        display: inline-block;
        margin: 10px;
    }

    .applyDarkRed {
        background-color: darkred;
    }

    .applyDarkOliveGreen {
        background-color: darkolivegreen;
    }

    .applyTan {
        background-color: tan;
    }

    .applyTeal {
        background-color: teal;
    }
</style>

<div id="app">
    <div 
        @click='applyDarkRed = !applyDarkRed'
        class='square250'
        :class='applyComputedClass'>
    </div>

    <div 
        @click='applyDarkOliveGreen = !applyDarkOliveGreen'
        class='square250'
        :class='{ applyDarkOliveGreen: applyDarkOliveGreen }'>
    </div>

    <div 
        @click='applyTan = !applyTan'
        class='square250'
        :class='{ applyTan: applyTan }'>
    </div>

    <div 
        @click='applyTeal = !applyTeal'
        class='square250'
        :class='{ applyTeal: applyTeal }'>
    </div>
</div>
```

```javascript
new Vue({
        el: '#app',
        data: {
            applyDarkRed: false,
            applyDarkOliveGreen: false,
            applyTan: false,
            applyTeal: false,
        },
        computed: {
            applyComputedClass() {
                return {
                    applyDarkRed: this.applyDarkRed;
                }
            }
        },
    });
```

### Section 2 Lecture 28

- Dynamic CSS using `computed` properties and `v-model`

```html
<style>
    .square250 {
        height: 250px;
        width: 250px;
        background-color: seashell;
        display: inline-block;
        margin: 10px;
    }

    .applyDarkRed {
        background-color: darkred;
    }

    .applyDarkOliveGreen {
        background-color: darkolivegreen;
    }

    .applyTan {
        background-color: tan;
    }

    .applyTeal {
        background-color: teal;
    }
</style>

<div id="app">
    <div 
        @click='applyDarkRed = !applyDarkRed'
        class='square250'
        :class='applyComputedClass'>
    </div>

    <div 
        @click='applyDarkOliveGreen = !applyDarkOliveGreen'
        class='square250'
        :class='{ applyDarkOliveGreen: applyDarkOliveGreen }'>
    </div>

    <div 
        @click='applyTan = !applyTan'
        class='square250'
        :class='{ applyTan: applyTan }'>
    </div>

    <div 
        @click='applyTeal = !applyTeal'
        class='square250'
        :class='[color, { applyTeal: applyTeal }]'>
    </div>

    <input v-model='color' type='text'/>
</div>
```

```javascript
new Vue({
        el: '#app',
        data: {
            applyDarkRed: false,
            applyDarkOliveGreen: false,
            applyTan: false,
            applyTeal: false,
            color: '',
        },
        computed: {
            applyComputedClass() {
                return {
                    applyDarkRed: this.applyDarkRed,
                }
            }
        },
    });
```

### Section 2 Lecture 29

- Dynamic CSS using `computed` properties and `v-model`

```html
<style>
    .square250 {
        height: 250px;
        width: 250px;
        display: inline-block;
        margin: 10px;
    }
</style>

<div id="app">
    <div 
        class='square250'
        :style='computedStyle'>
    </div>

    <hr>

    <input v-model='color' type='text'/>
    <input v-model='width' type='text'/>
</div>
```

```javascript
new Vue({
    el: '#app',
    data: {
        width: 250,
        color: 'darkred',
    },
    computed: {
        computedStyle() {
            return {
                backgroundColor: this.color,
                width: this.width + 'px',
            }
        }
    },
});
```

<!-- ################################################################################################################ -->
<!--                                                     SECTION 3                                                    -->
<!-- ################################################################################################################ -->