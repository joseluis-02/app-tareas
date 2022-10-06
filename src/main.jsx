import React from 'react';
import ReactDOM from 'react-dom/client';
import { TodoApp } from './08-useReducer/TodoApp';
//import { CallbackHook } from './07-memos/CallbackHook';
//import { MemoHook } from './07-memos/MemoHook';
//import { Memorize } from './07-memos/Memorize';
//import { FormWithCustomHook } from './02-useEffect/FormWithCustomHook';
//import { FocusScreen } from './05-useRef/FocusScreen';
//import { CounterApp } from './01-useState/CounterApp';
//import { CounterWithCustomHook } from './01-useState/CounterWithCustomHook';
//import { SimpleForm } from './02-useEffect/SimpleForm';
//import { MultipleCustomHooks } from './03-examples/MultipleCustomHooks';
//import { HooksApp } from './HooksApp';
//import { Layout } from './06-useLayoutEffect/Layout'
//import { Padre } from './07-tarea-memo/Padre';
//import './08-useReducer/intro-reducer';

import './index.css';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/*<Padre />*/}
    <TodoApp />
  </React.StrictMode>
)
