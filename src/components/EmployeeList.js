import _ from 'lodash';
import React, { Component } from 'react';
import { ListView } from 'react-native';
import ListItem from './ListItem';

class EmployeeList extends Component {
	componentWillMount() {
		this.props.employeesFetch();

		this.createDataSource(this.props);
	}

	componentWillReceiveProps(nextProps) {
		//nextProps is new props
		this.createDataSource(nextProps);
	}

	createDataSource = ({ employees }) => {
		const ds = new ListView.DataSource({
			rowHasChanged: (r1, r2) => r1 !== r2
		});

		this.dataSource = ds.cloneWithRows(employees);
	};

	renderRow = employee => {
		return <ListItem employee={employee} />;
	};

	render() {
		return (
			<ListView
				style={{ marginTop: 70 }}
				enableEmptySections
				dataSource={this.dataSource}
				renderRow={this.renderRow}
			/>
		);
	}
}

export default EmployeeList;
