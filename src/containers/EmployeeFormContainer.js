import { connect } from 'react-redux';
import { employeeUpdate } from '../actions';
import EmployeeForm from '../components/EmployeeForm';

const mapStateToProp = ({ employeeForm }) => {
	const { name, phone, shift } = employeeForm;
	return { name, phone, shift };
};

export default connect(mapStateToProp, {
	employeeUpdate
})(EmployeeForm);
