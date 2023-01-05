import { useState, useEffect } from 'react';
import { Flex, Box, Button, Text } from '@chakra-ui/react';
function SuccessfulPayment() {
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
			const packageId = pid?.split('_')[1];
			const userId = pid?.split('_')[2];
			console.log(`packageId:${packageId}\nuserId:${userId}`);
			console.log('purch');
		}
	}, []);
	const backToHome = async () => {};
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
