import Box from '@mui/material/Box'
import Card from './Card/Card'

function ListCards() {
  return (
    <Box
      sx={{
        p: '0 5px',
        m: '0 5px',
        display: 'flex',
        flexDirection: 'column',
        gap: 1,
        overflowX: 'hidden',
        overflowY: 'auto',
        maxHeight: (theme) =>
          `calc(
            ${theme.trello.BoardContentHeight} - 
            ${theme.spacing(5)} - 
            ${theme.trello.ColumnHeaderHeight} -
            ${theme.trello.ColumnFooterHeight})`,
        '&::-webkit-scrollbar': {
          width: '3px',
          height: '3px'
        },
        '&::-webkit-scrollbar-thumb': {
          backgroundColor: '#ced0da'
        },
        '&::-webkit-scrollbar-thumb:hover': {
          backgroundColor: '#bfc2cf'
        }
      }}
    >
      {/* Card */}
      <Card />
      <Card temporaryHideMedia />
      <Card temporaryHideMedia />
      <Card temporaryHideMedia />
      <Card temporaryHideMedia />
    </Box>
  )
}

export default ListCards
