import { AppBar, IconButton, Toolbar, Typography } from '@material-ui/core'
import { Menu as MenuIcon } from '@material-ui/icons'

export const Header = () => (
  <AppBar position='static'>
    <Toolbar>
      <IconButton edge='start' color='inherit' aria-label='menu'>
        <MenuIcon />
      </IconButton>
      <Typography variant='h6'>My Budget</Typography>
    </Toolbar>
  </AppBar>
)
