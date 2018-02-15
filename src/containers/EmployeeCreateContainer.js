import { connect } from 'react-redux';
import { employeeUpdate, employeeCreate } from '../actions';
import EmployeeCreate from '../components/EmployeeCreate';

const mapStateToProp = ({ employeeForm }) => {
	const { name, phone, shift } = employeeForm;
	return { name, phone, shift };
};

export default connect(mapStateToProp, { employeeUpdate, employeeCreate })(
	EmployeeCreate
);
