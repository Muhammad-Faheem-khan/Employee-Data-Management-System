
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
        paddingLeft: '30%',
        width: '100%'
    }
})

export default useStyles