import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginFormContainer from './containers/LoginFormContainer';
import EmployeeListContainer from './containers/EmployeeListContainer';
import EmployeeCreateContainer from './containers/EmployeeCreateContainer';
import EmployeeEditContainer from './containers/EmployeeEditContainer';

const RouterComponent = () => {
	return (
		<Router>
			<Scene key="root" hideNavBar>
				<Scene key="auth">
					<Scene
						key="login"
						component={LoginFormContainer}
						title="Please Login"
					/>
				</Scene>
				<Scene key="main">
					<Scene
						rightTitle="Add"
						onRight={() => Actions.employeeCreate()}
						key="employeeList"
						component={EmployeeListContainer}
						title="Employee"
						initial
					/>
					<Scene
						key="employeeCreate"
						component={EmployeeCreateContainer}
						title="Create Employee"
					/>
					<Scene
						key="employeeEdit"
						component={EmployeeEditContainer}
						title="Edit Employee"
					/>
				</Scene>
			</Scene>
		</Router>
	);
};

export default RouterComponent;
