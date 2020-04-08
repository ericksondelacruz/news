import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({

  root: {
    '& > .MuiCardContent-root': {
      maxHeight: 250,
      height: 250,
      minHeight: 250,

      '& > .MuiTypography-root:first-of-type': {
        fontWeight: 'bold',
        lineHeight: 1.25,
      },

      '& > .MuiTypography-body2': {
        
      }
    },
  },

  media: {
    height: 200,
  },
  
}));

export default useStyles;