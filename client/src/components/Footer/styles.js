import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({ 
    toolbar_Footer: {
        background: 'black',
        color: 'rgba(255,255,255,.87)',
        display: 'flex',
        flexDirection: 'column'
    },
    toTop_Footer: {
        marginTop: '-20px',
        background: 'rgb(255,20,20)',
        borderRadius: '50%',
        height: '50px',
        width: '100px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        '&:hover': {
            background: 'rgb(255,70,70)',
            color: 'black',
            cursor: 'pointer'
        }
    },
    toTopSpan_Footer: {
        fontSize: '40px',
        margin: '-25px 0'
    },
    toolbarMain_Footer: {
        height: '100%'
    },
    upperFooter_Footer: {
        margin: '20px 20px 70px 20px',
        width: '80%',

    },
    iconDiv_Footer: {
        display: 'flex',
        justifyContent: 'center'
    },
    textMargin_Footer: {
        marginBottom: '15px'
    },
    button_Footer: {
        width: '300px',
        // background: 'rgb(48,71,94)',
        // background: 'rgb(0,146,255)',
        background: 'rgb(5,44,133)',
        // background: 'rgb(130, 180, 255)',
        color: 'rgba(255,255,255,.87)',
        // color: 'black',
        borderRadius: '30px',
        '&:hover': {
            // background: 'rgb(255,70,70)',
            background: 'rgb(47,96,162)',
            // color: 'black'
        }
    },
    xrLogo_Footer: {
        height: '60px',
        width: '60px'
    },
    socialIconDiv_Footer: { 
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '0 5px',
        // padding: '3px 3px 0 3px',
        // background: 'rgba(5,44,133)',
        // background: 'rgb(47,96,162)',
        // background: 'rgb(130,180,255)',
        borderRadius: '5px',
        cursor: 'pointer',
        transition: '.1s ease-in',
        '&:hover': {
            // border: '1px solid white',
            borderRadius: '4px',
            background: 'rgb(47,96,162)',
        }
    }
});

export default useStyles;