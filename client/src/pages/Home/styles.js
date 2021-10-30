import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({ 
    homeBox_Home: {
        position: 'relative',
        marginBottom: '15px'
    },
    heroImg_Home: {
        height: '100vh',
        width: '100vw',
        objectFit: 'cover',
        '@media (max-width:1280px)': {
            objectPosition: '15% 100%'
        },
        '@media (max-width:800px)': {
            objectPosition: '25% 100%'
        } 
    },
    heroTextBox_Home: {
        position: 'absolute',
        right: '10%',
        top: '30%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        '@media (max-width:599px)': {
            right: '10%',
            top: '11%',
        },
        '@media (max-width:400px)': {
            transform: 'scale(.65)',
            top: '10%',
            right: '-30px'
        },
    },
    shopNowLink_Home: {
        width: '100%', 
        height: '100%', 
        color: theme.palette.primary.contrastText
    },
    shopHeroBtn_Home: {
        width: '50%', 
        marginTop: '20px', 
        background: 'black', 
        '&:hover': {
            background: 'rgba(20,20,20,.5)'
        }
    },

}));

export default useStyles;