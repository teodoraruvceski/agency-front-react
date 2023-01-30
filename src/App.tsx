import Login from './components/login';
import { Route, Routes } from 'react-router-dom';
import Registration from './components/registration';
import PayRegistration from './components/payRegistration';
import SuccessfulRegistration from './components/successfulRegistration';
import Home from './components/home';
import SuccessfulPayment from './components/successfulPayment';
import Header from './components/header';
import { Flex } from '@chakra-ui/react';
import BuyPackage from './components/buyPackage';
import Companies from './components/companies';
import BuyPremium from './components/buyPremium';

function App() {
	return (
		<Flex direction='column'>
			<Header />
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
				<Route path='/buyPackage' element={<BuyPackage />} />
				<Route path='/successfulPayment' element={<SuccessfulPayment />} />
				<Route path='/companies' element={<Companies />} />
				<Route path='/buyPremium' element={<BuyPremium />} />
			</Routes>
		</Flex>
	);
}
export default App;
