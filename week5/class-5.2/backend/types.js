const zod = require("zod");

const createTodo = zod.object({
    title: zod.string(),
    description: zod.string()
})

const updateTodo = zod.object({
    id: zod.string()
})

//export in the form of object s
module.exports = {
    createTodo: createTodo,
    updateTodo: updateTodo

}