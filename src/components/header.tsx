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

function Header() {
	const navigate = useNavigate();
	const logout = () => {
		localStorage.clear();
		navigate('/login');
	};

	return (
		<Flex bgColor='gray.200'>
			<Box mt='5px' ml='85%' h='50px' w='100%'>
				{localStorage.getItem('token') && (
					<Button bgColor='white' border='2px solid gray' onClick={logout}>
						Odjavi se
					</Button>
				)}
			</Box>
		</Flex>
	);
}
export default Header;
