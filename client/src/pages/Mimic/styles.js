import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({ 
    mimicPageContainer_MimicPage: {
        marginTop: '120px',
        marginBottom: '50px'
    },
    logoContainer_MimicPage: {
        background: theme.palette.primary.main, 
        borderRadius: '4px'
    },
    backHomeBtn_MimicPage: {
        width: '300px'
    }
}));

export default useStyles;