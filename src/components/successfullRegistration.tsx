import { Flex, Button, Stack, Box } from '@chakra-ui/react';
import { FiAlertTriangle } from 'react-icons/fi';

import { register } from '../services/service';
import { useRecoilState } from 'recoil';
import newCompany from '../recoil/atom/newCompany';

function SuccessfullRegistration() {
	const [newCompanyState, setNewCompany] = useRecoilState(newCompany);
	const Continue = () => {
		console.log('uspesno registrovan');
		register(newCompanyState).then((data) => {
			console.log('reg: ', data);
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
export default SuccessfullRegistration;
