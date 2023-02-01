import { useEffect, useState } from 'react';
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
import { useNavigate } from 'react-router-dom';
import { FaUserAlt, FaLock } from 'react-icons/fa';
import { useRecoilState } from 'recoil';
import newCompany from '../recoil/atom/newCompany';
import { register } from '../services/service';

const CFaUserAlt = chakra(FaUserAlt);
const CFaLock = chakra(FaLock);

function Registration() {
	const navigate = useNavigate();
	const [showPassword, setShowPassword] = useState(false);
	const [newCompanyState, setNewCompany] = useRecoilState(newCompany);
	const [companyMode, setCompanyMode] = useState(false);
	const handleShowClick = () => setShowPassword(!showPassword);
	useEffect(() => {
		if (companyMode)
			setNewCompany((prevState) => ({
				...prevState,
				role: 'company',
			}));
		else
			setNewCompany((prevState) => ({
				...prevState,
				role: 'user',
			}));
	}, [companyMode]);
	const registrationClick = async () => {
		if (
			newCompanyState.name !== '' &&
			newCompanyState.pib !== '' &&
			newCompanyState.email !== '' &&
			newCompanyState.email.includes('@') &&
			newCompanyState.password !== '' &&
			newCompanyState.password.length >= 3
		) {
			let check = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/;
			if (!newCompanyState.password.match(check)) {
				alert(
					'Password too weak. Minimum 8 characters. You have to include at least one number and minimum one upper letter.'
				);
			} else {
				if (companyMode) {
					setNewCompany((prev) => ({
						...prev,
						role: 'company',
					}));
					console.log(newCompanyState);
					const data = await register(newCompanyState);
					console.log(data);
					if (data.data.successful)
						window.location.href = '/payRegistration?paymentId=' + data.data.id;
					else alert(data.data.message);
				} else {
					setNewCompany((prev) => ({
						...prev,
						role: 'user',
					}));
					console.log(newCompanyState);
					const data = await register(newCompanyState);
					if (data.data.successful) {
						console.log(data);
						window.location.href = '/login';
					} else {
						alert(data.data.message);
					}
				}
			}
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
				{companyMode ? (
					<Heading p='20px' color='teal.400'>
						Registracija kompanije
					</Heading>
				) : (
					<Heading p='20px' color='teal.400'>
						Registracija korisnika
					</Heading>
				)}

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
										color='gray.300'
										children={<CFaUserAlt color='gray.300' />}
									/>
									<Input
										placeholder='Ime'
										onChange={(event) =>
											setNewCompany((prevState) => ({
												...prevState,
												name: event.target.value,
											}))
										}
									/>
								</InputGroup>
								<FormHelperText textAlign='right'></FormHelperText>
							</FormControl>
							<FormControl>
								<InputGroup>
									<InputLeftElement
										pointerEvents='none'
										color='gray.300'
										children={<CFaUserAlt color='gray.300' />}
									/>
									{companyMode ? (
										<Input
											placeholder='PIB'
											onChange={(event) =>
												setNewCompany((prevState) => ({
													...prevState,
													pib: event.target.value,
												}))
											}
										/>
									) : (
										<Input
											placeholder='jmbg'
											onChange={(event) =>
												setNewCompany((prevState) => ({
													...prevState,
													pib: event.target.value,
												}))
											}
										/>
									)}
								</InputGroup>
								<FormHelperText textAlign='right'></FormHelperText>
							</FormControl>
							<FormControl>
								<InputGroup>
									<InputLeftElement
										pointerEvents='none'
										children={<CFaUserAlt color='gray.300' />}
									/>
									<Input
										onChange={(event) =>
											setNewCompany((prevState) => ({
												...prevState,
												email: event.target.value,
											}))
										}
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
										onChange={(event) =>
											setNewCompany((prevState) => ({
												...prevState,
												password: event.target.value,
											}))
										}
									/>

									<InputRightElement width='4.5rem'>
										<Button h='1.75rem' size='sm' onClick={handleShowClick}>
											{showPassword ? 'Sakrij' : 'Prikaži'}
										</Button>
									</InputRightElement>
								</InputGroup>
								<FormHelperText />
								<FormHelperText textAlign='right'>
									Minimum 8 characters. You have to include at least one number
									and minimum one upper letter.
								</FormHelperText>
							</FormControl>

							<Button
								borderRadius={0}
								type='reset'
								variant='solid'
								colorScheme='teal'
								width='full'
								onClick={registrationClick}
							>
								Registruj se
							</Button>
						</Stack>
					</form>
				</Box>
			</Stack>
			<Box>
				{companyMode ? (
					<Button
						backgroundColor='transparent'
						onClick={() => setCompanyMode(false)}
					>
						<u>Registruj se kao korisnik?</u>
					</Button>
				) : (
					<Button
						backgroundColor='transparent'
						onClick={() => setCompanyMode(true)}
					>
						<u>Registruj se kao kompanija ?</u>
					</Button>
				)}
				<Button
					backgroundColor='transparent'
					onClick={() => navigate('/login')}
				>
					<p>
						Već imate nalog?&nbsp; &nbsp;
						<u>Prijavite se!</u>
					</p>
				</Button>
			</Box>
		</Flex>
	);
}
export default Registration;
