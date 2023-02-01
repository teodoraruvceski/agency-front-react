import { useState, useEffect } from 'react';
import { Flex, Button, Stack, Box } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

import { GiPresent } from 'react-icons/gi';
import { buyPremium, getUser } from '../services/service';

function BuyPremium() {
	const navigate = useNavigate();
	useEffect(() => {
		if (getUser().role === 'company' || getUser().premium) navigate('/home');
	}, []);
	const buy = async () => {
		const resp = await buyPremium();
		console.log('redirecting to: ' + resp.data);
		window.location.href = resp.data;
	};
	return (
		<Flex
			flexDirection='row'
			width='100wh'
			height='100vh'
			backgroundColor='white'
			justifyContent='center'
			alignItems='center'
			mt='100px'
			mb='100px'
		>
			<Stack
				flexDir='column'
				mb='2'
				justifyContent='center'
				alignItems='center'
				border='2px'
				borderRadius='10px'
				borderColor='gray'
				padding='10px'
				margin='20px'
				backgroundColor='gray.100'
			>
				<Box backgroundColor='gray.100'>
					<GiPresent color='gold' size={300} />
				</Box>
				<Box pl='50px' pr='50px' pb='30px' pt='30px' w='300px'>
					Premium paket usluga vam omogućava pogodnosti kao što su pomoć pri
					traženju zaposlenja koju će vam pružiti vama dodeljeni virtuelni
					asistenti.
				</Box>

				<Button
					onClick={buy}
					border='2px'
					backgroundColor='white'
					borderRadius='10px'
					borderColor='gray'
				>
					Kupi
				</Button>
			</Stack>
		</Flex>
	);
}
export default BuyPremium;
