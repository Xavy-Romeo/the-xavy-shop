import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({ 
    pageContainer_Page404: {
        minHeight: '800px',
        '@media (max-width:400px)': {
            minHeight: '700px',
        },
    },
    error_Page404: {
        marginBottom: '20px'
    },
    logo_Page404: {
        height:'300px',
        width: '300px',
        '@media (max-width:325px)': {
            height:'250px',
            width: '250px',
        },
    },
    uhOh_Page404: {
        marginTop: '20px'
    },
    pageNotFound_Page404: {
        margin: '20px 0'
    },
    btnHome_Page404: {
        background: 'black', 
        color: 'white', 
        borderRadius: '30px', 
        width: '300px',
        '@media (max-width:325px)': {
            width: '260px',
        },
    }

}));

export default useStyles;