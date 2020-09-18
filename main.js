Vue.component('single-todo', {
    props: {
        todo: {
            type: String,
            required: true
        }
    },
    template: `
        <div class="mb-2">
            <p> {{ todo }} </p>
            <button>X</button>
        </div>
    `
})


var app = new Vue({
    el: '#app',
    data: {
        todo: '',
        todos: [],
        todo_count: 0,
        error: null
    },
    methods: {
        submitTodo(){
            if (this.todo) {
                let new_todo = this.todo;
                this.todos.push(new_todo);
                this.todo = null;
                if (this.error) {
                    this.error = null;
                }
                this.todo_count += 1;
            } else {
                this.error = 'You must insert text for todo';
            }
        }
    }
})