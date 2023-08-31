const { createApp } = Vue

const todoApp = createApp({
    data() {
        return {
            title: "To Do List",
            todo: [
                {
                    text: "Fai i piatti",
                    done: false,
                },
                {
                    text: "Accarezza il gatto",
                    done: true,
                },
                {
                    text: "Porta dentro la spazzatura",
                    done: false,
                }
            ],
            emptyTodo: {
                text: "",
                done: false
            },
        }
    },

    methods: {
        removeTask(index) {
             this.todo.splice(index, 1)
        },

        newTask() {

            if (!this.emptyTodo.text == '') {
                const newTodo = {...this.emptyTodo}
                this.todo.push(newTodo)
                this.emptyTodo.text = ''
            } else {
                console.log("Non puoi aggiungere una task vuota.")
            }
           
        }
    }
}).mount("#todoApp")