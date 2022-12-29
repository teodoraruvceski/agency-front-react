import { useState } from 'react';
import { Flex, Button, Stack, Box } from '@chakra-ui/react';
import { FiAlertTriangle } from 'react-icons/fi';
import { getPspFrontUrl, testPSP_Api } from '../services/service';

function PayRegistration() {
	const PayClick = () => {
		console.log(
			'Saljem request apiju za url do PSP frontenda. Cena registracije 10usd'
		);
		const search = window.location.search;
		const params = new URLSearchParams(search);
		const pid = params.get('paymentId');

		getPspFrontUrl().then((data) => {
			//window.location.replace(data.data.link);
			// testPSP_Api().then((data) => {
			// 	console.log(data);
			// });
			console.log(data.data);
			window.location.href = data.data + '?total=10&paymentId=reg_' + pid; //total amount for registration
		});
	};
	return (
		<Flex
			flexDirection='column'
			width='100wh'
			height='100vh'
			backgroundColor='gray.200'
			justifyContent='center'
			alignItems='center'
		>
			<Stack
				flexDir='column'
				mb='2'
				justifyContent='center'
				alignItems='center'
			>
				<Box minW={{ base: '90%', md: '468px' }}></Box>
			</Stack>
			<Stack
				flexDir='column'
				mb='2'
				justifyContent='center'
				alignItems='center'
				border='2px'
				borderRadius='10px'
				borderColor='gray'
				padding='10px'
			>
				<Box
					pl='30px'
					pr='30px'
					pt='30px'
					justifyContent='center'
					alignItems='center'
				>
					<FiAlertTriangle color='gray' size={100} />
				</Box>
				<Box pl='30px' pr='30px' pb='30px'>
					Za nastavak registracije potrebno je platiti troskove registracije 10$
				</Box>
			</Stack>

			<Box>
				<Button backgroundColor='green.300' onClick={PayClick}>
					Plati
				</Button>
			</Box>
		</Flex>
	);
}
export default PayRegistration;
