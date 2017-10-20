import * as React from 'react';
import './App.css';
import {Dashboard} from './Dashboard';
import {Route} from 'react-router';
import {Menu, Container} from "semantic-ui-react";
import {NavLink} from 'react-router-dom';
import {ProductListAsync} from './ProductListAsync';
import {connect, DispatchProp} from 'react-redux';
import {AppState} from './store';
import {Product} from './product';
import {RequestStatus} from './productReducer';

export interface AppProps {
    products: Product[];
    status: RequestStatus;
}

function mapStateToProps(state: AppState, ownProps: any): Partial<AppProps> {
    return {
        products: state.productReducer.result.map(x => (state.productReducer.entities.products as Map<string, Product>)[x]),
        status: state.productReducer.status
    };
}

const App = connect(mapStateToProps)(class extends React.Component<DispatchProp<any> & AppProps, { activeItem: string }> {

    constructor(props?: DispatchProp<any> & AppProps, context?: any) {
        super(props, context);
    }

    render() {

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
                        <Route
                            path="/product_list"
                            component={() => <ProductListAsync
                                loadProducts={this.loadProducts}
                                products={this.props.products}
                                status={this.props.status}
                            />}
                        />
                    </div>
                </div>
            </Container>
        );
    }

    private loadProducts = () => {
        if (!this.props.dispatch) {
            return;
        }

        this.props.dispatch({
            type: "PRODUCTS_LOAD_STARTED"
        });
    }
});

export default App;