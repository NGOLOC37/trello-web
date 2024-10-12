import Box from '@mui/material/Box'

function BoardBar() {
  return (
    <Box
      sx={{
        width: '100%',
        // height: (theme) => {
        //   theme.trelloCustom.boardHeight
        // },
        display: 'flex',
        alignItems: 'center',
        height: (theme) => `${theme.trelloCustom.boardHeight}`
      }}
    >
      Board bar
    </Box>
  )
}

export default BoardBar
