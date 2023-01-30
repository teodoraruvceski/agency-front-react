import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
	Flex,
	Heading,
	Input,
	Button,
	InputGroup,
	Stack,
	InputLeftElement,
	chakra,
	Box,
	Avatar,
	FormControl,
	FormHelperText,
	InputRightElement,
} from '@chakra-ui/react';
import { FaUserAlt, FaLock } from 'react-icons/fa';
import { login, getToken } from '../services/service';

const CFaUserAlt = chakra(FaUserAlt);
const CFaLock = chakra(FaLock);
function Login() {
	const navigate = useNavigate();
	const [showPassword, setShowPassword] = useState(false);
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	useEffect(() => {
		if (getToken() !== null) {
			navigate('/home');
		}
	}, []);

	const handleShowClick = () => setShowPassword(!showPassword);
	const loginClick = async () => {
		const data = await login(email, password);
		if (data.data.successful) {
			console.log('User->', data.data);
			localStorage.setItem('token', data.data.token);
			navigate('/home');
		} else if (data.data.message === 'NOT-PAID') {
			const id = data.data.id;
			console.log(data);
			window.location.href = '/payRegistration?paymentId=' + id;
		} else {
			alert(data.data.message);
		}
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
				<Avatar bg='teal.500' />
				<Heading color='teal.400'>Dobrodošli!</Heading>
				<Box minW={{ base: '90%', md: '468px' }}>
					<form>
						<Stack
							spacing={4}
							p='1rem'
							backgroundColor='whiteAlpha.900'
							boxShadow='md'
						>
							<FormControl>
								<InputGroup>
									<InputLeftElement
										pointerEvents='none'
										children={<CFaUserAlt color='gray.300' />}
									/>
									<Input
										onChange={(event) => setEmail(event.target.value)}
										type='email'
										placeholder='Email adresa'
									/>
								</InputGroup>
							</FormControl>
							<FormControl>
								<InputGroup>
									<InputLeftElement
										pointerEvents='none'
										color='gray.300'
										children={<CFaLock color='gray.300' />}
									/>
									<Input
										type={showPassword ? 'text' : 'password'}
										placeholder='Lozinka'
										onChange={(event) => setPassword(event.target.value)}
									/>
									<InputRightElement width='4.5rem'>
										<Button h='1.75rem' size='sm' onClick={handleShowClick}>
											{showPassword ? 'Sakrij' : 'Prikaži'}
										</Button>
									</InputRightElement>
								</InputGroup>
								<FormHelperText textAlign='right'></FormHelperText>
							</FormControl>
							<Button
								borderRadius={0}
								type='reset'
								variant='solid'
								colorScheme='teal'
								width='full'
								onClick={loginClick}
							>
								Prijavi se
							</Button>
						</Stack>
					</form>
				</Box>
			</Stack>
			<Box>
				<Button
					backgroundColor='transparent'
					onClick={() => navigate('/registration')}
				>
					Nemate nalog?
				</Button>
			</Box>
		</Flex>
	);
}
export default Login;
