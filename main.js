Vue.component('todos', {
    props: {
        todos: {
            type: Array,
            required: true
        },
        remaining: {
            type: Number,
            required: true
        }
    },
    data() {
        return {
            new_todo: null,
            error: null
        }
    },
    methods: {
        submitTodo() {
            if (this.new_todo) {
                this.$emit("add-todo", this.new_todo);
                this.new_todo = null;
                if (this.error) {
                    this.error = null;
                }
            } else {
                this.error = "The input field cannot be blank";
            }
        },
        removeTodo(todo) {
            this.$emit("remove-todo", todo);
        }
    },
    template: `
        <div class="container mt-2">
            <p><strong>Remaining Tasks: {{ remaining }} </strong></p>

            <input type="text" class="form-control" placeholder="What do you need to do?"
                v-model="new_todo"
                @keyup.enter="submitTodo">
            
            <br v-if="error">

            <p v-if="error"> {{ error }} </p>

            <br>

            <div class="single-todo"
                v-for="(todo, index) in todos"
                :todo="todo"
                :key="index">
                <div class="alert alert-success">

                    {{ todo }}
                    <button type="button" class="close"
                        @click="removeTodo(todo)">
                        <span>&times;</span>
                    </button>
                </div>
            </div>
        </div>
    `
})


var app = new Vue({
    el: '#app',
    data: {
        todo: '',
        todos: [],
    },
    computed: {
        todoCount() {
            return this.todos.length;
        }
    },
    methods: {

        addTodo(new_todo){
            this.todos.push(new_todo);
        },

        removeTodo(a_todo) {
            this.todos.splice(this.todos.indexOf(a_todo), 1);
        }
    }
})