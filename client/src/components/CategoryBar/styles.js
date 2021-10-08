import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({ 
    categories_CatBar: {
        margin: '5px', 
        width: '250px', 
        height: '250px', 
        position: 'relative', 
        borderRadius: '10px',
        '&:hover': {
            transform: 'scale(1.03)'
        }
    },
    categoryImg_CatBar: {
        height: '250px',
        width: '250px',
        borderRadius: '10px'
    },
    categoryContent_CatBar: {
        position: 'absolute', 
        left: '5%', 
        top: '0%', 
        width: '100%', 
        height: '100%'
    },
    categoryTitle_CatBar: {
        margin: '35% 10px 0 10px', 
        color: 'rgba(255,255,255,.87)',
    },
    categoryExploreBtn_CatBar: {
        width: '50%', 
        margin: '10px', 
        borderRadius: '30px',
        background: 'rgba(255,255,255,.05)',
        border: '2px solid rgba(255,255,255,.87)',
        color: 'rgba(255,255,255,.87)',
        '&:hover': {
            background: 'rgba(255,255,255,.8)',
            color: 'rgba(0,0,0,.87)'
        }
    },
});

export default useStyles;