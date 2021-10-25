import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({ 
    pageContainer_SuccessOrder: {
        margin: '200px 0 100px 0', 
        display: 'flex', 
        justifyContent: 'center'
    },
    contentBox_SuccessOrder: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        border: `4px solid ${theme.palette.secondary.main}`,
        borderRadius: '4px',
        background: 'black',
        color: theme.palette.primary.contrastText,
        padding: '30px 50px'
    },
    successText_SuccessOrder: {
        margin: '20px 0 10px 0'
    },
    thankYou_SuccessOrder: {
        marginBottom: '10px'
    },
    countDownContainer_SuccessOrder: {
        marginTop: '15px', 
        border: '1px solid white',
        borderRadius: '50%',
        width: '40px',
        height: '40px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    countDown_SuccessOrder: {
        fontFamily: 'serif', 
        fontWeight: 'bold'
    }
}));

export default useStyles;