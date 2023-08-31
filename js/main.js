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
            }
        }
    }
}).mount("#todoApp")