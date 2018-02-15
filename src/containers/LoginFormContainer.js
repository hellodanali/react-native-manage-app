import { connect } from 'react-redux';
import { emailChanged, passwordChanged, loginUser } from '../actions';
import LoginForm from '../components/LoginForm';

const mapStateToProp = ({ auth }) => {
	return {
		email: auth.email,
		password: auth.password,
		error: auth.error,
		loading: auth.loading
	};
};

export default connect(mapStateToProp, {
	emailChanged,
	passwordChanged,
	loginUser
})(LoginForm);
