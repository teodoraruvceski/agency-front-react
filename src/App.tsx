import Login from './components/login';
import { Route, Routes } from 'react-router-dom';
import Registration from './components/registration';
import PayRegistration from './components/payRegistration';
import SuccessfulRegistration from './components/successfulRegistration';
import Home from './components/home';
import SuccessfulPayment from './components/successfulPayment';

function App() {
	return (
		<Routes>
			<Route path='/' element={<Login />} />
			<Route path='/login' element={<Login />} />
			<Route path='/registration' element={<Registration />} />
			<Route path='/payRegistration' element={<PayRegistration />} />
			<Route path='/home' element={<Home />} />
			<Route
				path='/successfulRegistration'
				element={<SuccessfulRegistration />}
			/>
			<Route path='/successfulPayment' element={<SuccessfulPayment />} />
		</Routes>
	);
}
export default App;
