import {useRef, useState} from 'react';
import TextInputWithLabel from "../shared/TextInputWithLabel.jsx";
import { isValidTodoTitle } from '../utils/todoValidation';

function TodoForm({ onAddTodo }) {

    const inputRef = useRef(null);
    const [workingTodoTitle, setWorkingTodoTitle] = useState('');

    const handleAddTodo = (event) => {
        event.preventDefault();

        if (workingTodoTitle) {
            onAddTodo(workingTodoTitle);
            setWorkingTodoTitle('');
        }
    }

    return (
        <form onSubmit={handleAddTodo}>
            <TextInputWithLabel elementId="todoTitle"
                                labelText="Todo"
                                onChange={(event) => setWorkingTodoTitle(event.target.value)}
                                ref={inputRef}
                                value={workingTodoTitle}></TextInputWithLabel>

            <button disabled={!isValidTodoTitle(workingTodoTitle)}>Add Todo</button>
        </form>
    );
}

export default TodoForm;