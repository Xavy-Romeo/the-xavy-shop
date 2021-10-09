import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({ 
    categories_CatBar: {
        position: 'relative',
        margin: '15px 10px', 
        width: '100%', 
        borderRadius: '10px',
        cursor: 'pointer',
        '&:hover': {
            transform: 'scale(1.03)',
        },
        '&::before': {
            content: "",
            paddingTop: '100%', //initial ratio of 1:1  
        }
    },
    categoryImg_CatBar: {
        height: '100%',
        width: '100%',
        borderRadius: '10px'
    },
    categoryContent_CatBar: {
        position: 'absolute',  
        top: '0%', 
        width: '100%', 
        height: '100%'
    },
    categoryTitle_CatBar: { 
        color: 'rgba(255,255,255,.87)',
    },
    // categoryExploreBtn_CatBar: {
    //     width: '50%', 
    //     margin: '10px', 
    //     borderRadius: '30px',
    //     background: 'rgba(255,255,255,.05)',
    //     border: '2px solid rgba(255,255,255,.87)',
    //     color: 'rgba(255,255,255,.87)',
    //     '&:hover': {
    //         background: 'rgba(255,255,255,.8)',
    //         color: 'rgba(0,0,0,.87)',
    //     }
    // },
    arrowButton_CatBar: {  
        position: 'absolute', 
        top: '38%',
        background: 'rgb(230,230,230)', 
        zIndex: '9999',
        borderRadius: '50%',
        width: '60px',
        height: '60px',
        transition: '.3s ease',
        '&:hover': {
            background: 'rgb(150,150,150)',
            color: 'white'
        }
    },
    leftArrow_CatBar: {
        left: '23%',
    },
    rightArrow_CatBar: {
        right: '23%',
    },
});

export default useStyles;