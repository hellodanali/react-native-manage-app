import { connect } from 'react-redux';
import { employeeUpdate, employeeSave, employeeDelete } from '../actions';
import EmployeeEdit from '../components/EmployeeEdit';

const mapStateToProp = state => {
	const { name, phone, shift } = state.employeeForm;
	return { name, phone, shift };
};

export default connect(mapStateToProp, {
	employeeUpdate,
	employeeSave,
	employeeDelete
})(EmployeeEdit);
