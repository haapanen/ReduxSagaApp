import * as React from "react";
import {Form, Input} from "semantic-ui-react";

export interface FormInputProps {
    label: string;
}

export class FormInput extends React.Component<FormInputProps> {
    render(): JSX.Element {
        return (
            <Form.Field>
                <label>{this.props.label}</label>
                <Input></Input>
            </Form.Field>
        );
    }
}