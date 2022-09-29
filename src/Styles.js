
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
    sidebar:{
        display: 'flex',
        flexDirection: 'row',
        position: 'absolute',
        left: '0',
        width: '25%',
        height:'100%',
        backgroundColor: '#526722'
    },
    header:{
        paddingLeft:'25%',
        width: '100%'
    },
    appbar: {
        backgroundColor : '#fff',
        transform: 'translateZ(0)',
        padding: '5px 15px',
        '& .MuiSvgIcon-root': {
                marginRight: '8px'
        }
    },
    searchbar: {
        padding: '0px 8px',
        opacity: '0.6',
        fontSize: '0.8rem',
        '&:hover': {
        backgroundColor: '#f2f2f2'
        }

    },
    pageheader: {
        backgroundColor: '#fdfdff',
    },
    pageicon: {
        display: 'inline-block',
        padding: '1.5rem',
        borderRadius: '12px'
    },
    pagehead: {
        display: 'flex',
        padding: '3rem',
        marginBottom: '1.5rem',
        color: '#3c44b1'
    },
    pagetitle: {
        padding: '1.5rem'
    }

})

export default useStyles