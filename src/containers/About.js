import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import { Outlet } from 'react-router-dom';

const About = () => {
    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            margin: 5,
        }}>
            <Typography component="div" variant="h4" align="center" sx={{ margin: 5 }}>
                Tentang Kami?
            </Typography>
            <Typography component="div" variant="p" align="center" sx={{ margin: 5 }}>
                kami menawarkan berbagai macam makanan dari indonesia!
            </Typography>
            <Outlet/>
        </Box>
    )
}

export default About;