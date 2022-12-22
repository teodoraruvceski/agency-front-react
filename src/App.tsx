import Login from './components/login';
import { Route, Routes } from 'react-router-dom';
import Registration from './components/registration';
import PayRegistration from './components/payRegistration';
import SuccessfullRegistration from './components/successfullRegistration';

function App() {
	return (
		<Routes>
			<Route path='/' element={<Login />} />
			<Route path='/login' element={<Login />} />
			<Route path='/registration' element={<Registration />} />
			<Route path='/payRegistration' element={<PayRegistration />} />
			<Route
				path='/successfullRegistration'
				element={<SuccessfullRegistration />}
			/>
		</Routes>
	);
}
export default App;
