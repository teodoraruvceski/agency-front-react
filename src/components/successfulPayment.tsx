import { useState, useEffect } from 'react';
import { Flex, Box, Button, Text } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { addPackageToCompany, updatePremium } from '../services/service';
function SuccessfulPayment() {
	const nav = useNavigate();
	useEffect(() => {
		console.log('uspesno placanje');
		const search = window.location.search;
		const params = new URLSearchParams(search);
		const pid = params.get('paymentId');
		console.log(pid);
		const paymentType = pid?.split('_')[0];

		if (paymentType === 'reg') {
			window.location.href =
				'http://localhost:3000/successfulRegistration?paymentId=' + pid;
		} else if (paymentType === 'purch') {
			if (pid?.includes('premium')) {
				const update = async () => {
					const response = await updatePremium(pid?.split('_')[2]);
					if (response.data.successful) {
						localStorage.setItem('token', response.data.token);
						window.location.href = 'http://localhost:3000/home';
					}
				};
				update();
			} else {
				const packageId = pid?.split('_')[1];
				const userId = pid?.split('_')[2];
				console.log(`packageId:${packageId}\nuserId:${userId}`);
				console.log('purch');
				const add = async () => {
					const data = await addPackageToCompany(pid || '');
					//window.location.href = 'http://localhost:3000/home';
				};
				add();
			}
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
			<Text fontSize='6xl'>Plaćanje uspešno izvršeno!</Text>

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
export default SuccessfulPayment;
