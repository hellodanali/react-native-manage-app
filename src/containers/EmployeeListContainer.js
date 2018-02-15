import _ from 'lodash';
import { connect } from 'react-redux';
import { employeesFetch } from '../actions';
import EmployeeList from '../components/EmployeeList';

const mapStateToProp = state => {
	const employees = _.map(state.employees, (val, uid) => {
		return { ...val, uid };
	});
	return { employees };
};

export default connect(mapStateToProp, {
	employeesFetch
})(EmployeeList);
