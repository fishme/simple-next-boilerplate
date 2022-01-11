import { createTheme } from '@mui/material/styles';

import customSettings from './custom-settings';

import type { Theme } from '@mui/material';
// Create a theme instance.
const theme: Theme = createTheme(customSettings);

export default theme;
