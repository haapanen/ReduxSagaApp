import * as React from 'react';
import './App.css';
import {Dashboard} from './Dashboard';
import {Route} from 'react-router';
import {asyncComponent} from 'react-async-component';
import {Menu, Container} from "semantic-ui-react";
import {NavLink} from 'react-router-dom';

class App extends React.Component<{}, { activeItem: string }> {

    constructor(props?: {}, context?: any) {
        super(props, context);
    }

    render() {

        const ProductList = asyncComponent({
            resolve: () => import("./ProductList").then(x => x.ProductList),
            LoadingComponent: props => <div>Loading product list...</div>,
            ErrorComponent: props => <div>Error loading product list...</div>
        });

        return (
            <Container>
                <h1>Redux saga app</h1>
                <Menu>
                    <NavLink to="/dashboard" className="item" activeClassName="active">Dashboard</NavLink>
                    <NavLink to="/product_list" className="item" activeClassName="active">Product list</NavLink>
                </Menu>
                <div>
                    <div>
                        <Route path="/dashboard" component={Dashboard}/>
                        <Route path="/product_list" component={ProductList}/>
                    </div>
                </div>
            </Container>
        );
    }
}

export default App;