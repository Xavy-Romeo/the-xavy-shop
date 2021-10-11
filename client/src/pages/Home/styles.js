import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({ 
    homeBox_Home: {
        position: 'relative'
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
        '@media (max-width:600px)': {
            right: '10%',
            top: '10%',
        },
        '@media (max-width:365px)': {
            transform: 'scale(.65)',
            width: '100%'
        },
    },
    shopHeroBtn_Home: {
        width: '50%', 
        borderRadius: '30px', 
        marginTop: '20px', 
        background: 'black', 
        '&:hover': {
            background: 'rgba(20,20,20,.5)'
        }
    },
    downloadAppBox_Home: {
        background: 'rgba(140,210,255)', 
        height: '80px', 
        margin: '20px 0 25px 0', 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        color: 'rgba(255,255,255,.87)' 
    },
    downloadAppBtn_Home: {
        borderRadius: '30px', 
        width: '150px', 
        marginLeft: '20px', 
        background: 'rgb(5,44,133)',
        color: 'rbga(255,255,255,.87)'    
    }
});

export default useStyles;