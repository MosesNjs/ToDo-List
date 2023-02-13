// Create Empty array
const list = []

// Add First item to array
const newTask = task1 => {
    task1 = prompt(`Welcome to the Do-it App! Let's get you started. 
Reply with your first task or with 'exit' to close the app: `)
    if(task1 && task1 !== 'exit'){
        list.push(task1)
        console.log('Your Do-it list has been created!');
    } else if (task1 === 'exit' ){
        return
    } else {
        console.log('Invalid Reply, lets try this again.');
    }
    return task1
}

let runCode = newTask()

// shows todolist
const showList = () => {
    console.log(`Your Todo List!: `);
    list.forEach((todo, index) => console.log(`
> task ${index + 1}: ${todo}`))
}

// Add task to todo list
const newTodo = newInput => {
    console.log(`
- Input a task 
- Input 'show' to see todolist
- Input 'exit' to close app`);
    newInput = prompt('what task would you like to add? ')
    if (newInput && newInput !== 'exit' && newInput !== 'show' ){
        list.push(newInput)
        console.log(`${newInput} has been added to your todolist! 
        Reply with show to see your todolist`);
    } else if (newInput === 'show'){
        showList()
        newTodo()
    } else if (newInput === 'exit'){
        runCode = false;
    } else {
        console.log(`Please input a task or reply with exit to close app`);
        newTodo()
    }
}

// to replace a task on the todolist
const updateList = (switchInput, ind, replaceTodo) => {
    showList()
    console.log(`
- Input task to replace?
- Reply 'exit' to close app`);
    switchInput = prompt('what task do you want to replace? ')
    ind = list.indexOf(switchInput)
    if (switchInput && switchInput !== 'exit' && switchInput !== 'show' && ind >= 0){
        replaceTodo = prompt(`what would you like to replace ${switchInput} with? `)
        list.splice(ind, 1, replaceTodo)
        console.log(`${switchInput} has been replaced with ${replaceTodo}! Reply with show to see your todolist or with 'exit' to close the app`);
    } else if (switchInput === 'show'){
        showList()
        updateList()
    } else if (switchInput ===  'exit'){
        runCode = false;
    } else {
        console.log(`Please input a task to replace, replyt with 'show' to see todo list or with 'exit' to close the app`);
        updateList()
    }
}

// To remove a task
const removeTask = (deleteInput, ind) => {
    showList()
    console.log(`
- Input a task to remove from your todolist
- Reply exit to close app`);
    deleteInput = prompt('what task do you want to remove?')
    ind = list.indexOf(deleteInput)
    if (deleteInput && deleteInput !== 'exit' && deleteInput !== 'show' && ind >= 0){
        list.splice(ind, 1)
        console.log(`${deleteInput} has been removed from your todolist! Reply with show to see your todolist or with 'exit' to close the app`);
    } else if (deleteInput === 'show'){
        showList()
        removeTask()
    } else if (deleteInput ===  'exit'){
        runCode = false;
    } else {
        console.log(`Please input a task to remove from your todolist or reply with 'exit' to close. `);
        removeTask()
    }
}

const refresh = (start) => {
    while(runCode && runCode !== 'exit'){
        console.log(`
- Reply with 'add' to add a task to your todolist
- Reply with 'show' to see your todolist
- Reply with 'edit' to replace a task on your todolist
- Reply with 'remove' to remove a task from your todolist
- Reply with 'exit' to close app`)
        start = prompt('what would you like to do? ')
        if(start === 'add'){
            newTodo()
        } else if (start === 'edit'){
            updateList()
        } else if (start === 'remove'){
            removeTask()
        } else if (start === 'show'){
            showList()
        } else if (start === 'exit'){
            runCode = false;
        } else {
            console.log(`Invalid Input. Enter a valid Input`);
        }
    } 
}
refresh()