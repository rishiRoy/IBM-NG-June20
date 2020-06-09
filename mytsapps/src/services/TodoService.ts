import TODOS from '../mockdata/TODOS';
import { Todo } from '../types/todotype';

class TodoService{
    constructor(){

    }
    // findAllTodos():Todo[]{
    //     return TODOS;
    // }
    findAllTodos():Array<Todo>{
        return TODOS;
    }

}
export default TodoService;