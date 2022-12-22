import { ColorModeScript } from '@chakra-ui/react';
import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import { RecoilRoot } from 'recoil';

const container = document.getElementById('root');
if (!container) throw new Error('Failed to find the root element');
const root = ReactDOM.createRoot(container);

root.render(
	<React.StrictMode>
		<ColorModeScript />
		<BrowserRouter>
			<RecoilRoot>
				<ChakraProvider>
					<App />
				</ChakraProvider>
			</RecoilRoot>
		</BrowserRouter>
	</React.StrictMode>
);
