import TodoService from './services/TodoService';


function main(){

    //create TodoService Object and invoke findall method
    let todoService = new TodoService();
    let todos = todoService.findAllTodos();
    console.log(todos);

}
main();