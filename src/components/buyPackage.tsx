import { useState, useEffect } from 'react';
import { Flex, Button, Stack, Box } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import {
	getPackages,
	getToken,
	buyPackage,
	getUser,
	getPackage,
} from '../services/service';
import { FiAlertTriangle } from 'react-icons/fi';
import { Package } from '../models/Package';
import { FaSuitcase } from 'react-icons/fa';
import { User } from '../models/User';
import { TokenData } from '../models/TokenData';

function BuyPackage() {
	const navigate = useNavigate();
	const [packagee, setPackage] = useState(new Package('', 0, ''));
	useEffect(() => {
		if (getToken() == null) {
			navigate('/login');
		} else {
			const search = window.location.search;
			const params = new URLSearchParams(search);
			const pid = params.get('id');
			console.log(pid);
			getPackage(Number(pid)).then((data) => {
				setPackage(data.data);
			});
		}
	}, []);
	const buy = async () => {
		const p: Package = new Package('', -1, '');
		const resp = await buyPackage(packagee.id);
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
				key={packagee.id.toString()}
				id={packagee.id.toString()}
				margin='20px'
			>
				<Box
					pl='30px'
					pr='30px'
					pt='30px'
					justifyContent='center'
					alignItems='center'
					id={packagee.id.toString()}
				>
					<FaSuitcase color='#FFB74D' size={100} />
				</Box>
				<Box pl='30px' pr='30px' pb='30px' id={packagee.id.toString()}>
					{packagee.name}
				</Box>
				<Box pl='30px' pr='30px' pb='30px' id={packagee.id.toString()}>
					{packagee.description}
				</Box>
				<Box pl='30px' pr='30px' pb='30px' id={packagee.id.toString()}>
					{packagee.price} $
				</Box>
				<Box pl='30px' pr='30px' pb='30px' id={packagee.id.toString()}>
					<Button
						backgroundColor='teal.400'
						type='reset'
						id={packagee.id.toString()}
						onClick={buy}
					>
						Nastavi na placanje
					</Button>
				</Box>
				<Box
					pl='30px'
					pr='30px'
					mt='100px'
					pb='30px'
					id={packagee.id.toString()}
				>
					<Button
						type='reset'
						id={packagee.id.toString()}
						onClick={() => {
							window.location.href = '/home';
						}}
					>
						Odustani
					</Button>
				</Box>
			</Stack>
		</Flex>
	);
}
export default BuyPackage;
