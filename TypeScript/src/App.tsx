import React, {useEffect, useState} from 'react';
import Card, { CardVariant } from './components/Card';
import EventsExample from './components/EventsExample';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import UsersPage from './components/UsersPage';
import TodosPage from './components/TodosPage';
import UserItemPage from './components/UserItemPage';

const App = () => {

  

  return (
    <Router>
      <div>
        <Link to={'/users'}>Пользоветели</Link>
        <Link to={'/todos'}>Список дел</Link>
        {/* <Link to={''}>Назад</Link> */}
      </div>

      <div>
        <Routes>
          <Route path={'/users'} element={<UsersPage/>} />
          <Route path={'/users/:id'} element={<UserItemPage/>} />
          <Route path={'/todos'} element={<TodosPage/>} />
          <Route path={'/todos/:id'} element={<TodosPage/>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;