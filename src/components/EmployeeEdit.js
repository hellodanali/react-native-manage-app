import _ from 'lodash';
import React, { Component } from 'react';
import Communications from 'react-native-communications';
import { connect } from 'react-redux';
import { Card, CardSection, Button, Confirm } from './common';
import { employeeUpdate, employeeSave } from '../actions';
import EmployeeForm from './EmployeeForm';

class EmployeeEdit extends Component {
	componentWillMount() {
		_.each(this.props.employee, (value, prop) => {
			this.props.employeeUpdate({ prop, value });
		});
	}

	state = { showModal: false };

	onButtonPress = () => {
		const { name, phone, shift } = this.props;

		this.props.employeeSave({
			name,
			phone,
			shift,
			uid: this.props.employee.uid
		});
	};

	onTextPress = () => {
		const { phone, shift } = this.props;

		Communications.text(phone, `Your upcoming shift is on ${shift}`);
	};

	render() {
		return (
			<Card>
				<EmployeeForm />
				<CardSection>
					<Button onPress={this.onButtonPress}>Save Changes</Button>
				</CardSection>
				<CardSection>
					<Button onPress={this.onTextPress}>Text Schedule</Button>
				</CardSection>
				<CardSection>
					<Button
						onPress={() => this.setState({ showModal: !this.state.showModal })}
					>
						Fire Employee
					</Button>
				</CardSection>

				<Confirm visible={this.state.showModal}>
					Are you sure you want to delete this?
				</Confirm>
			</Card>
		);
	}
}

const mapStateToProp = state => {
	const { name, phone, shift } = state.employeeForm;
	return { name, phone, shift };
};

export default connect(mapStateToProp, { employeeUpdate, employeeSave })(
	EmployeeEdit
);