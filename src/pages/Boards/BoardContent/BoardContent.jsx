import Box from '@mui/material/Box'
import ListColumn from './ListColumns/ListColumn'

function BoardContent() {
  return (
    <Box
      sx={{
        width: '100%',
        height: (theme) => `${theme.trello.BoardContentHeight}`,
        bgcolor: (theme) =>
          theme.palette.mode === 'dark' ? '#34495e' : '#1976d2',
        display: 'flex',
        overflowX: 'auto',
        overflowY: 'hidden'
      }}
    >
      <ListColumn />
    </Box>
  )
}

export default BoardContent
