import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({ 
    orderHistoryPageContainer_OrderHistory:{
        marginTop: '120px',
        marginBottom: '50px'
    },
    flexBox_OrderHistory: {
        display: 'flex'
    },
    fontStyles_OrderHistory: {
        fontFamily: 'serif', 
        display: 'flex', 
        alignItems: 'end', 
        marginLeft: '10px'
    },
    bold_OrderHistory: {
        fontWeight: 'bold'
    },
    name_OrderHistory: {
        marginLeft: '10px'
    },
    ordersContainer_OrderHistory: {
        marginTop: '10px'
    },
    orderContainer_OrderHistory: {
        paddingBottom: '10px', 
        borderBottom: '1px solid rgba(0,0,0,.05)',
    },
    orderNumberContainer: {
        '@media (max-width:599px)': {
            flexDirection: 'column'
        }
    },
    itemMainContainer_OrderHistory: {
        display: 'flex', 
        marginTop: '10px'
    },
    itemContainer_OrderHistory: {
        marginRight: '10px', 
        display: 'flex',
    },
    imageContainer_OrderHistory: {
        marginRight: '10px'
    },
    noHistoryContainer_OrderHistory: {
        margin: '30px 0 150px 0'
    },
    shopNowBtn_OrderHistory: {
        width: '300px', 
        marginTop: '10px'
    },
    shopNowBtnLink_OrderHistory: {
        color: theme.palette.primary.contrastText
    }
}));

export default useStyles;