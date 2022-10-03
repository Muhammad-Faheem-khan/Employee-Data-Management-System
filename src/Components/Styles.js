
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles(theme=>({
    
    sidebar:{
        display: 'flex',
        flexDirection: 'row',
        position: 'absolute',
        left: '0',
        width: '20%',
        height:'100%',
        backgroundColor: '#526722'
    },
    header:{
        paddingLeft:'20%',
        width: '100%'
    },
    appbar: {
        backgroundColor : '#fff',
        transform: 'translateZ(0)',
        padding: '5px 5px',
        '& .MuiSvgIcon-root': {
                marginRight: '8px'
        }
    },
    searchbar: {
        padding: '0px 8px',
        opacity: '0.6',
        fontSize: '0.8rem',
        border: '1px solid #000',
        borderRadius: '5px',
        '&:hover': {
        backgroundColor: '#f2f2f2'
        }

    },
    pageheader: {
        backgroundColor: '#f1f1f1',
    },
    pagehead: {
        display: 'flex',
        padding: '1.5rem',
        color: '#3c44b1'
    },
    pageicon: {
        display: 'inline-block',
        padding: '1rem',
        borderRadius: '10px'
    },
   
    pagetitle: {
        padding: '1rem'
    },

    

    confirmdialog: {
    '& .MuiDialog-paper': {
        padding: '5px',
        position: 'absolute',
        top: '60px',
}
    }

}))

export default useStyles