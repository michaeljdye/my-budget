import { FC } from 'react'
import {
  AppBar,
  Button,
  IconButton,
  Typography,
  Toolbar,
  makeStyles,
  createStyles,
  Theme,
} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  })
)

export const Header: FC = () => {
  const classes = useStyles()

  return (
    <AppBar position='static'>
      <Toolbar>
        <IconButton
          edge='start'
          className={classes.menuButton}
          color='inherit'
          aria-label='menu'
        >
          <MenuIcon />
        </IconButton>
        <Typography variant='h6' className={classes.title}>
          My Budget
        </Typography>
      </Toolbar>
    </AppBar>
  )
}
