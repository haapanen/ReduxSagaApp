import * as React from 'react';
import {Container, Header, Form} from 'semantic-ui-react';
import {connect} from 'react-redux';
import {AppState} from './store';
import {RouteComponentProps} from 'react-router';
import {FormInput} from './FormRenderers';

export interface ProductDetailsOwnProps {
    id: string;
}
export interface ProductDetailsProps {
    id: string
}
export interface ProductDetailsState {}

export const ProductDetails = connect(mapStateToProps)(class extends React.Component<ProductDetailsProps & RouteComponentProps<{id: string}>, ProductDetailsState> {
    render(): JSX.Element {
        return (
            <Container>
                <Header as="h2">Product details for: {this.getProductName()}</Header>
                <Form>
                    <Form.Group widths={'equal'}>
                        <FormInput
                            label={"Name"}
                        />
                        <FormInput
                            label={"Price"}
                        />
                        <FormInput
                            label={"Count"}
                        />
                    </Form.Group>
                </Form>
            </Container>
        );
    }

    private getProductName = () => {
        return this.props.match.params.id;
    };
});

function mapStateToProps(state: AppState, ownProps: ProductDetailsOwnProps): Partial<ProductDetailsProps> {
    return {
        ...ownProps
    };
}