import * as React from 'react';
import './App.css';
import {Link} from 'react-router-dom';
import {Dashboard} from './Dashboard';
import {Route} from 'react-router';
import {asyncComponent} from 'react-async-component';
import {Menu, Container} from "semantic-ui-react";

enum MenuItems {
    Dashboard,
    ProductList
}

class App extends React.Component<{}, { activeItem: string }> {

    constructor(props?: {}, context?: any) {
        super(props, context);

        this.state = {
            activeItem: MenuItems.Dashboard.toString()
        };
    }

    render() {

        const ProductList = asyncComponent({
            resolve: () => import("./ProductList").then(x => x.ProductList),
            LoadingComponent: props => <div>Loading product list...</div>,
            ErrorComponent: props => <div>Error loading product list...</div>
        });

        return (
            <Container>
                <Menu vertical>
                    <Menu.Item
                        name={MenuItems.Dashboard.toString()}
                        active={this.state.activeItem === MenuItems.Dashboard.toString()}
                        onClick={this.handleItemClick}
                    >Dashboard</Menu.Item>
                    <Menu.Item
                        name={MenuItems.ProductList.toString()}
                        active={this.state.activeItem === MenuItems.ProductList.toString()}
                        onClick={this.handleItemClick}
                    >Product list</Menu.Item>
                </Menu>
                <div>
                    <nav>
                        <Link to="/#/dashboard">Dashboard</Link>
                        <Link to="/#/product_list">Product list</Link>
                    </nav>
                    <div>
                        <Route path="/dashboard" component={Dashboard}/>
                        <Route path="/product_list" component={ProductList}/>
                    </div>
                </div>
            </Container>
        );
    }

    private handleItemClick = (e: object, { name }: {name: any}) => {
        this.setState((s, p) => {
            return {
                activeItem: name
            };
        });
        window.location.href = menuItemToUrl(name);
    }
}

function menuItemToUrl(menuItem: string): string {
    switch (menuItem) {
        case MenuItems.Dashboard.toString():
            return "/#/dashboard";
        case MenuItems.ProductList.toString():
            return "/#/product_list";
        default:
            return "";
    }
}

export default App;