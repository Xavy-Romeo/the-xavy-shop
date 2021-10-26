import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({ 
    mimicPageContainer_MimicPage: {
        margin: '120px 0 50px 0'
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