import { Box, Divider, Fab, Grid, Typography } from "@mui/material";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

export default function PageRouter() {

    return (
        <Box
            sx={{
                width: '100%',
                height: '100%',
                overflowY: 'auto',
                top:0,
                bottom: 0,
                paddingBottom: '300px'
            }} 
        >
            <Box 
                sx={{
                    position: 'relative',
                    width: 'calc(100% - 64px)',
                    marginTop: '196px',
                    backgroundColor: '#F5F5F6',
                    paddingTop: '80px',
                    height: 2000,
                    zIndex: 2
                }}
            >
                <Fab color="primary" aria-label="add" size="medium" sx={{
                    position: 'absolute',
                    top: '-20px',
                    left: '114px'
                }}>
                    <KeyboardArrowDownIcon /> 
                </Fab>
                <Typography component="div" gutterBottom sx={{margin: {xs: '', lg:'50px 134px 80px 134px'}, fontSize: '22px', maxWidth: '900px'}}>
                    La pratique du Kyudo existe en Bretagne depuis 1984, soutenue et développée par <Box component="span" sx={{color: 'primary.main'}}>Loïc De Penhouët</Box>, 
                    élève de <Box component="span" sx={{color: 'primary.main'}}>Jacques Normand Senseï</Box>, garant de l'enseignement traditionnel japonais du Kyudo.
                </Typography>

                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <Typography variant="h4" sx={{marginLeft: '60px', color: 'primary.main'}}>
                            Actualités
                        </Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography variant="h4" sx={{marginLeft: '60px', color: 'primary.main'}}>
                            Tradition
                        </Typography>
                    </Grid>
                </Grid>
                {/* {[1,2,3,4,5,6].map(() => (<>
                    <Typography variant="h5">Upcycling and Timber Structure</Typography>
                    <Typography variant="h6">Rogether with our collaborators we’re proud to share our proposal for the international design competition for a new Philharmonic Hall in the historic capital of the Czech Republic.</Typography>
                    <Typography variant="h6">Rogether with our collaborators we’re proud to share our proposal for the international design competition for a new Philharmonic Hall in the historic capital of the Czech Republic.</Typography>
                </>))} */}
            </Box>
        </Box>
    );
}