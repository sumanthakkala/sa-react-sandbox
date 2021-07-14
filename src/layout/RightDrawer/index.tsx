import React, { useState, useEffect } from 'react'
import Drawer from '@material-ui/core/Drawer'
import Divider from '@material-ui/core/Divider'
import Switch from '@material-ui/core/Switch'
import Typography from '@material-ui/core/Typography'
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormControl from '@material-ui/core/FormControl'
import FormLabel from '@material-ui/core/FormLabel'

import './styles.scss'

export default function RightDrawer({
  isOpen = false,
  onClose = (): void => {
    return
  },
  ...props
}) {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  const [selectedPlatform, setSelectedPlatform] = useState('netflix')
  const [isCachingEnabled, setIsCachingEnabled] = useState(false)

  useEffect(() => {
    setIsDrawerOpen(isOpen)
  }, [isOpen])

  const toggleDrawer = (event: React.KeyboardEvent | React.MouseEvent) => {
    if (
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' ||
        (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return
    }

    setIsDrawerOpen(false)
    onClose()
  }

  return (
    <Drawer anchor="right" open={isDrawerOpen} onClose={toggleDrawer}>
      <div className="drawer_container">
        <FormControl component="fieldset">
          <FormLabel component="legend">Platform</FormLabel>
          <RadioGroup
            aria-label="gender"
            name="gender1"
            value={selectedPlatform}
            onChange={(e) => setSelectedPlatform(e.target.value)}
          >
            <FormControlLabel
              value="netflix"
              control={<Radio />}
              label="Netflix"
            />
            <FormControlLabel value="prime" control={<Radio />} label="Prime" />
          </RadioGroup>
        </FormControl>

        <Divider />

        <FormControlLabel
          control={
            <Switch
              checked={isCachingEnabled}
              onChange={(e) => setIsCachingEnabled(e.target.checked)}
              name="checkedB"
              color="primary"
            />
          }
          label="Caching"
        />

        <Divider />

        {/* <Typography variant="body1" style={{ flexGrow: 1 }}>
          Localization
        </Typography> */}
      </div>
    </Drawer>
  )
}
