import { Flex, Button, Stack, Box } from '@chakra-ui/react';
import { FiAlertTriangle } from 'react-icons/fi';
import { paidRegistration } from '../services/service';
import { useNavigate } from 'react-router-dom';

function SuccessfulRegistration() {
	const navigate = useNavigate();
	const Continue = async () => {
		console.log('uspesno registrovan');
		const search = window.location.search;
		const params = new URLSearchParams(search);
		const pid = params.get('paymentId');
		console.log(pid);
		const id = pid?.split('_')[1];
		console.log(id);
		const data = await paidRegistration(id ? id : '');
		console.log(data);
		navigate('/login');
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
					Uspešno ste se ulogovali!
				</Box>
			</Stack>

			<Box>
				<Button backgroundColor='green.300' onClick={Continue}>
					Nastavite
				</Button>
			</Box>
		</Flex>
	);
}
export default SuccessfulRegistration;
