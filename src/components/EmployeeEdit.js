import _ from 'lodash';
import React, { Component } from 'react';
import Communications from 'react-native-communications';
import { Card, CardSection, Button, Confirm } from './common';
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

	onDecline = () => {
		this.setState({ showModal: !this.state.showModal });
	};

	onAccept = () => {
		const { uid } = this.props.employee;
		console.log(uid);
		this.props.employeeDelete({ uid });
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

				<Confirm
					visible={this.state.showModal}
					onAccept={this.onAccept}
					onDecline={this.onDecline}
				>
					Are you sure you want to delete this?
				</Confirm>
			</Card>
		);
	}
}

export default EmployeeEdit;
