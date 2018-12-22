import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import { createStore} from "redux";

import "./assets/css/index.css";
import App from './App';
import Reducers from "./states/reducers";


// Buat store dari reducer
const store = createStore(Reducers);

ReactDOM.render(
<Provider store={store}>
<App />
</Provider>,
 document.getElementById('root'));



