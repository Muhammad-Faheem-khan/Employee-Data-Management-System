
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
    
    mainComponents:{
        display: 'flex',
        flexDirection: 'row',
},


    sidebar:{
        
        position: 'absolute',
        width: '150px',
        height: '150%',
        top: '0',
        backgroundColor: '#526722',
        // media queries
        '@media (max-width: 912px)': {
          width: '0',
        }
    },
    header:{
        paddingLeft:'150px',
        width: '100%',
        // media queries
        '@media (max-width: 912px)': {
          paddingLeft: '0',
          minWidth: '700px'
        }
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
},

})
export default useStyles