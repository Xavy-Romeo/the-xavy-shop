import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({ 
    policyPageContainer_Policy: {
        marginTop: '120px', 
        marginBottom: '50px'
    },
    sectionContainer_Policy: {
        marginBottom: '10px'
    },
    sectionTitles_Policy: {
        fontFamily: 'serif', 
        fontWeight: 'bold'
    },
    btnLinkContainer_Policy: {
        borderTop: '1px solid rgba(0,0,0,.05)',
        paddingTop: '30px',
        marginTop: '20px'
    },
    btn_Policy: {
        width: '300px'
    }
}));

export default useStyles;