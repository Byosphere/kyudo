import { Link, Typography } from "@mui/material";
import Box from "@mui/material/Box";

export default function FooterNav() {
    return (
        <Box sx={{ height: '300px', display: 'flex', flexDirection: 'column', alignItems: 'left', justifyContent: 'center', padding: '0 64px' }}>
            <Typography variant="body1">
                <Link color="secondary" href="#" underline="hover">
                    Kyudo-Kyujutsu
                </Link> : Du Kyujutsu au Kyudo
            </Typography>
            <Typography variant="body1">
                <Link color="secondary" href="#" underline="hover">
                    APK
                </Link> : Association Parisienne de Kyudo
            </Typography>
            <Typography variant="body1">
                <Link color="secondary" href="#" underline="hover">
                    ACGK
                </Link> : Association Chateau Gontier Kyudo
            </Typography>
            <Typography variant="body1">
                <Link color="secondary" href="#" underline="hover">
                    YUMIYA
                </Link> : Blog Japon
            </Typography>
            <Typography variant="body1">
                <Link color="secondary" href="#" underline="hover">
                    ADK
                </Link> : Association Dauphinoise de Kyudo (38) GRENOBLE
            </Typography>
        </Box>
    );
}