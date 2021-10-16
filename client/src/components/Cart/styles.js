import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({ 
    cartContainer_Cart: {
        position: 'fixed',
        top: 101,
        right: '0',
        width: '340px',
        minHeight: '200px', 
        background: 'rgb(218,218,218)',
        overflow: 'auto',
        padding: '.5rem',
        boxShadow: '0 0 1rem rgba(0, 0, 0, .5)',
        borderBottomLeftRadius: '.5rem',
    },
}));

export default useStyles;