import React, {FC, useEffect, useState} from 'react';
import { ITodo } from '../types/type';
import axios from 'axios';
import List from './List';
import TodoItem from './TodoItem';

const TodosPage: FC = () => {

    const [todod, setTodos] = useState<ITodo[]>([])

    useEffect(() => {
        FetchTodos()
    }, [])

    async function FetchTodos() {
        try {
        const res = await axios.get<ITodo[]>('https://jsonplaceholder.typicode.com/todos?_limit=10')
        setTodos(res.data)
        } catch(e) {
        alert(e)
        }
    }
    return (
        <List 
            items={todod} 
            renderItem={(todo: ITodo) => <TodoItem todo={todo} key={todo.id} /> } 
        />
    );
};

export default TodosPage;