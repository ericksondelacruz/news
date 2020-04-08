import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({

  root: {
    backgroundColor : '#EFF1F6',

    '& > .MuiCardContent-root': {
      maxHeight: 250,
      height: 250,
      minHeight: 250,

      '& > div:nth-child(3)': {
        marginTop: theme.spacing(1)
      },

      '& > div:nth-child(4)': {
        marginBottom: theme.spacing(3)
      },
    },

    '& > .MuiCardActions-root': {
      '& > .MuiBox-root': {
        backgroundColor : '#E0E0E0',
        borderRadius: theme.spacing(1),
        padding: theme.spacing(2),
        width: 82,
      }
    },
  },

  image: {
    backgroundColor : '#E0E0E0',
    height: 200,
  },

  text20: {
    backgroundColor : '#E0E0E0',
    borderRadius: theme.spacing(0.5),
    height: 22,
    marginBottom: theme.spacing(0.5),
  },

  text15: {
    backgroundColor : '#E0E0E0',
    borderRadius: theme.spacing(0.5),
    height: 15,
    marginBottom: theme.spacing(0.5),
    width: 70,
  },

}));

export default useStyles;