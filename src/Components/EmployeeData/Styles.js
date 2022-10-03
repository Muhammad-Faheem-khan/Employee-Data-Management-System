import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme=>({
    inputdata:{
        width: '80%',
        marginBottom: '10px'
    },
    formpage: {
        padding: '1rem',
        margin: '2rem'
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
            backgroundColor: '#D3D3D3',
        },
    
    '& tbody tr:hover': {
            backgroundColor: '#CCE7E7',
        }
    },
  searchToolbar: {
    margin: '10px'},
    
    employeeSearch: {
        width: '70%'
    },

    addButton: {
        position: "absolute",
        right: '10px'
    },

    dialogWrapper: {
        '& .MuiPaper-root':{
            position: 'absolute',
            top: '10px',
            padding: '1rem'
    }},

    actionBtndelete: {
       minWidth: '0',
       margin: '4px',
       padding: '2px',
       backgroundColor: '#FFCCCB',
       color: 'red',
    },
    actionBtnedit: {
        minWidth: '0',
        margin: '4px',
        padding: '2px',
        backgroundColor: '#ADD8E6',
        color: 'blue',
     },

     

}))

export default useStyles