import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({ 
    accountPageContainer_Account: {
        marginTop: '120px',
        marginBotton: '150px'
    },
    flexBox_Account: {
        display: 'flex'
    },
    hiName_Account: {
        fontWeight: 'bold'
    },
    contentContainer_Account: {
        marginTop: '20px',
        '@media (max-width:700px)': {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
        },
    },
    personalInfoPaper_Account: {
        border: '1px solid black', 
        marginRight: '10px', 
        padding: '0 10px 10px 10px', 
        width: '300px',
        '@media (max-width:700px)': {
            margin: '0 0 10px 0'
        },
    },
    paperTitle_Account: {
        fontWeight: 'bold', 
        textDecoration: 'underline'
    },
    itemTitle_Account: {
        fontWeight: 'bold', 
        marginRight: '10px'
    },
    historyPaper_Account: {
        border: '1px solid black', 
        padding: '0 10px 10px 10px', 
        width: '300px'
    },
    viewHistoryBtn_Account: {
        marginTop: '15px' 
    },
    returnHomeBtnContainer_Account: {
        display: 'flex', 
        justifyContent: 'center', 
        marginTop: '10px'
    },
    returnHomeBtn_Account: {
        width: '300px'
    }
}));

export default useStyles;