import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/common/Header';
import './index.css';
import BigList from './components/biglist/BigList';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NotFound from './components/notfound/NotFound';
import DetailCurrency from './components/detailcurrency/DetailCurrency';


const App = () => {
    //const maintitle = 'React App in CNIT 133A';

    //JSX 
    return (
        <BrowserRouter>
            <div>
                <Header />
                <Switch>
                    <Route path="/" component={BigList} exact />
                    <Route path="/currency/:id" component={DetailCurrency} exact />
                    <Route component={NotFound} />
                </Switch>
            </div>
        </BrowserRouter>
    );
        
}

//or USE

/*
function App() {
    return <h1>React App in CNIT 133A</h1>;
}
*/

//functional component
ReactDOM.render (
    <App />,
    document.getElementById('root')
);

//or 

/*
class App extends Reacht.Component {
    render() {
        return <h1>React Appt in CNIT 133A</h1>
    }
}
*/