import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({ 
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
        '@media (max-width:600px)': {
            right: '10%',
            top: '10%',
        },
        '@media (max-width:365px)': {
            transform: 'scale(.65)',
            width: '100%'
        },
    }
});

export default useStyles;