const { createApp } = Vue

const todoApp = createApp({
    data() {
        return {
            title: "To Do List",
            todo: [
                {
                    text: "",
                    done: false,
                },
                {
                    text: "",
                    done: false,
                },
                {
                    text: "",
                    done: false,
                }
            ],
            emptyTodo: {
                text: "",
                done: false
            }
        }
    }
}).mount()