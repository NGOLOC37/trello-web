import Box from '@mui/material/Box'
import Chip from '@mui/material/Chip'
import Button from '@mui/material/Button'
import DashboardIcon from '@mui/icons-material/Dashboard'
import VpnLockIcon from '@mui/icons-material/VpnLock'
import AddToDriveIcon from '@mui/icons-material/AddToDrive'
import BoltIcon from '@mui/icons-material/Bolt'
import FilterListIcon from '@mui/icons-material/FilterList'
import Avatar from '@mui/material/Avatar'
import AvatarGroup from '@mui/material/AvatarGroup'

const MENU_STYLE = {
  color: 'white',
  backgroundColor: 'transparent',
  border: 'none',
  px: '5px',
  borderRadius: '4px',
  '.MuiSvgIcon-root': {
    color: 'white'
  },
  '&:hover': {
    bgcolor: 'primary.50'
  }
}

function BoardBar() {
  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: (theme) => `${theme.trelloCustom.boardHeight}`,
        gap: 2,
        overflowX: 'auto',
        bgcolor: (theme) =>
          theme.palette.mode === 'dark' ? '#34495e' : '#1976d2'
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: 2
        }}
      >
        <Chip
          icon={<DashboardIcon />}
          label="Ngo Loc 37"
          clickable
          sx={MENU_STYLE}
        />
        <Chip
          icon={<VpnLockIcon />}
          label="Public/Private Workspace"
          clickable
          sx={MENU_STYLE}
        />
        <Chip
          icon={<AddToDriveIcon />}
          label="Add to Google Drive"
          clickable
          sx={MENU_STYLE}
        />
        <Chip
          icon={<BoltIcon />}
          label="Automation"
          clickable
          sx={MENU_STYLE}
        />
        <Chip
          icon={<FilterListIcon />}
          label="Filters"
          clickable
          sx={MENU_STYLE}
        />
      </Box>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: 2,
          paddingRight: '8px'
        }}
      >
        <Button
          variant="outlined"
          sx={{
            color: 'white',
            borderColor: 'white',
            '&:hover': { borderColor: 'white' }
          }}
        >
          Invite
        </Button>
        <AvatarGroup
          max={4}
          sx={{
            gap: '10px',
            border: 'none',
            '& .MuiAvatar-root': {
              width: 32,
              height: 32
            }
          }}
        >
          <Avatar
            sx={{
              width: 32,
              height: 32
            }}
            alt="Remy Sharp"
            src="/static/images/avatar/1.jpg"
          />
          <Avatar
            sx={{
              width: 32,
              height: 32
            }}
            alt="Travis Howard"
            src="/static/images/avatar/2.jpg"
          />
          <Avatar
            sx={{
              width: 32,
              height: 32
            }}
            alt="Cindy Baker"
            src="/static/images/avatar/3.jpg"
          />
          <Avatar
            sx={{
              width: 32,
              height: 32
            }}
            alt="Agnes Walker"
            src="/static/images/avatar/4.jpg"
          />
          <Avatar
            sx={{
              width: 32,
              height: 32
            }}
            alt="Trevor Henderson"
            src="/static/images/avatar/5.jpg"
          />
        </AvatarGroup>
      </Box>
    </Box>
  )
}

export default BoardBar
