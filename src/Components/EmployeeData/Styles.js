import { makeStyles } from "@material-ui/core";
import { hover } from "@testing-library/user-event/dist/hover";

const useStyles = makeStyles({
    inputdata:{
        width: '80%',
        marginBottom: '10px'
    },
    formpage: {
        padding: '1rem',
        margin: '2.5rem'
    },
    dateContainer: {
        margin: '20px 0',
        width: '80%'
    },
   
    formButton: {
        marginRight: '1rem',
        marginTop: '2rem',
        textTransform: 'none'
    },

    table: {
        '& th':{
            fontWeight: '700',
            backgroundColor: '#D3D3D3'
        },
    
    '& tbody tr:hover': {
            backgroundColor: '#CCE7E7',
        }
    },
  
})

export default useStyles