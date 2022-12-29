import { useState } from 'react';
import { Flex, Box, Button, Text } from '@chakra-ui/react';
import '../../App.css';
function SuccessfullRegistration() {
	const backToAgency = async () => {};
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
					onClick={backToAgency}
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
export default SuccessfullRegistration;
