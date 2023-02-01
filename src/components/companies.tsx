import { useState, useEffect } from 'react';
import { Flex, Button, Stack, Box } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { getToken, getUser, getCompanies } from '../services/service';
import { GiPresent } from 'react-icons/gi';
import { Company } from '../models/Company';

function Companies() {
	const navigate = useNavigate();
	const [companies, setCompanies] = useState([]);

	useEffect(() => {
		if (getToken() == null) {
			navigate('/login');
		} else {
			const user = getUser();
			console.log(user);
			if (user.role === 'company') {
				navigate('/home');
			} else {
				getCompanies().then((data) => {
					if (data.data.successful) setCompanies(data.data.data);
					else alert(data.data.message);
					console.log(companies);
				});
			}
		}
	}, []);

	return (
		<Flex
			flexDirection='column'
			width='100wh'
			height='100vh'
			backgroundColor='white'
			justifyContent='center'
			alignItems='center'
			w='90%'
			mt='100px'
		>
			{!getUser().premium && (
				<Box w='50%'>
					<Button
						onClick={() => (window.location.href = `/buyPremium`)}
						backgroundColor='gold'
					>
						<Box p='20px'>Kupi premium paket </Box>
						<GiPresent size={30} />
					</Button>
				</Box>
			)}

			{companies.map((c: Company) => {
				return (
					<Stack
						flexDir='row'
						mb='2'
						justifyContent='center'
						alignItems='center'
						border='2px'
						borderRadius='10px'
						borderColor='gray'
						padding='10px'
						key={c.id.toString()}
						id={c.id.toString()}
						margin='20px'
						w='90%'
					>
						<Box w='80%' id={c.id.toString()}>
							{c.name}
						</Box>
						<Box w='80%' id={c.id.toString()}>
							{c.email}
						</Box>
					</Stack>
				);
			})}
		</Flex>
	);
}
export default Companies;
