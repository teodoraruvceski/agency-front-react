import { useState, useEffect } from 'react';
import { Flex, Box, Button, Text } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
function ErrorPayment() {
	const nav = useNavigate();
	useEffect(() => {
		console.log('uspesno placanje');
		const search = window.location.search;
		const params = new URLSearchParams(search);
		const pid = params.get('paymentId');
		console.log(pid);
		const paymentType = pid?.split('_')[0];

		if (paymentType === 'reg') {
			window.location.href = 'http://localhost:3000/login';
		} else if (paymentType === 'purch') {
			window.location.href = 'http://localhost:3000/home';
		}
	}, []);
	const backToHome = async () => {
		nav('/home');
	};
	return (
		<Flex
			flexDirection='column'
			width='100wh'
			height='100vh'
			backgroundColor='white'
			justifyContent='center'
			alignItems='center'
			borderColor='#85AF58'
		>
			<Text fontSize='6xl'>Plaćanje nije uspešno izvršeno!</Text>

			<Box>
				<Button
					onClick={backToHome}
					width='500px'
					height='50px'
					bgColor='#85AF58'
				>
					<b>Vrati se</b>
				</Button>
			</Box>
		</Flex>
	);
}
export default ErrorPayment;
