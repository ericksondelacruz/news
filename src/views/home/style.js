import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({

  formControl: {
    [theme.breakpoints.down('sm')]: {
      marginTop: theme.spacing(2),
      width: '100%'
    },

    [theme.breakpoints.up('md')]: {
      minWidth: 170,
      margin: theme.spacing(2),
      marginRight: 0,
    },
  },

  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  
}));

export default useStyles;