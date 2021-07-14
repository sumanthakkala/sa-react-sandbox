import React, {useState} from "react";
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import useScrollTrigger from '@material-ui/core/useScrollTrigger'
import Slide from '@material-ui/core/Slide'
import SettingsIcon from '@material-ui/icons/Settings'
import IconButton from '@material-ui/core/IconButton'
import RightDrawer from '../RightDrawer'
import './styles.scss'
interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window
  children: React.ReactElement
}

function HideOnScroll(props: Props) {
  const { children } = props
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window,
  })

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  )
}


const Header = () => {

    const [isSettingsOpen, setIsSettingsOpen] = useState(false);

    const onDrawerClose = () => {
      setIsSettingsOpen(false);
    }

    return (
      <>
      <HideOnScroll>
        <AppBar className='app_bar'>
          <Toolbar>
            <Typography variant="h6" style={{flexGrow: 1}}>SA-React-Sandbox</Typography>
            <IconButton
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={() => setIsSettingsOpen(!isSettingsOpen)}
              color="inherit"
            >
              <SettingsIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <RightDrawer isOpen = {isSettingsOpen} onClose = {onDrawerClose}/>
      </>
    )
}

export default Header;