import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import state, { StateType } from './redux/state';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { addPost } from './redux/state';

//addPost('Hi!!!! ');
export type AppPropsType = {
  state: StateType;
};

export let rerenderEntireTree = (props: StateType) => {
  ReactDOM.render(
    <BrowserRouter>
      <React.StrictMode>
        <App state={state} addPost={addPost} />
      </React.StrictMode>
    </BrowserRouter>,
    document.getElementById('root')
  );
};
