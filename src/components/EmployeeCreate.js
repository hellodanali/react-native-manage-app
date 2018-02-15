import React, { Component } from 'react';
import { Card, CardSection, Button } from './common';
import EmployeeFormContainer from '../containers/EmployeeFormContainer';

class EmployeeCreate extends Component {
	onButtonPress = () => {
		const { name, phone, shift } = this.props;
		this.props.employeeCreate({ name, phone, shift: shift || 'Monday' });
	};

	render() {
		return (
			<Card>
				<EmployeeFormContainer {...this.props} />
				<CardSection>
					<Button onPress={this.onButtonPress}>Create</Button>
				</CardSection>
			</Card>
		);
	}
}

export default EmployeeCreate;
