import { useState, useEffect } from 'react';
import { Flex, Button, Stack, Box } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import {
	getPackages,
	getToken,
	buyPackage,
	getUser,
} from '../services/service';
import { FiAlertTriangle } from 'react-icons/fi';
import { Package } from '../models/Package';
import { FaSuitcase } from 'react-icons/fa';
import { User } from '../models/User';
import { TokenData } from '../models/TokenData';

function Home() {
	const navigate = useNavigate();
	const [packages, setPackages] = useState([]);
	useEffect(() => {
		if (getToken() == null) {
			navigate('/login');
		} else {
			getPackages().then((data) => {
				setPackages(data.data);
			});
		}
	}, []);
	const buy = async (event: any) => {
		console.log(event.currentTarget.id);
		console.log('->');
		const pack = packages.find(
			(p: Package) => p.id.toString() === event.currentTarget.id
		);
		const p: Package = new Package('', -1, '');
		const resp = await buyPackage(pack || p);
		console.log('redirecting to: ' + resp.data);
		const user: TokenData = getUser();
		console.log('->', user);
		window.location.href =
			resp.data +
			`?total=${(pack || p).price}&paymentId=purch_${(pack || p).id}_${
				user.id
			}`;
	};
	return (
		<Flex
			flexDirection='row'
			width='100wh'
			height='100vh'
			backgroundColor='gray.200'
			justifyContent='center'
			alignItems='center'
		>
			{packages.map((p: Package) => {
				return (
					<Stack
						flexDir='column'
						mb='2'
						justifyContent='center'
						alignItems='center'
						border='2px'
						borderRadius='10px'
						borderColor='gray'
						padding='10px'
						id={p.id.toString()}
						margin='20px'
					>
						<Box
							pl='30px'
							pr='30px'
							pt='30px'
							justifyContent='center'
							alignItems='center'
							id={p.id.toString()}
						>
							<FaSuitcase color='#FFB74D' size={100} />
						</Box>
						<Box pl='30px' pr='30px' pb='30px' id={p.id.toString()}>
							{p.name}
						</Box>
						<Box pl='30px' pr='30px' pb='30px' id={p.id.toString()}>
							<Button type='reset' id={p.id.toString()} onClick={buy}>
								Kupi
							</Button>
						</Box>
					</Stack>
				);
			})}
		</Flex>
	);
}
export default Home;
