import './App.css'
import { AppBar, Toolbar, Typography, IconButton, Button } from '@mui/material'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { orange } from '@mui/material/colors'
import { Box } from '@mui/system'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import '@fontsource/roboto'

const theme = createTheme({
    palette: {
        primary: {
            main: '#ffffff',
        },
        secondary: {
            main: orange[500],
        },
    },
})

function App() {
    const handleBackButtonClick = () => {
        window.open('https://svc.mensa.it/goback')
    }

    const handleButtonClick = () => {
        window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', '_blank')
    }

    return (
        <ThemeProvider theme={theme}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        edge="start"
                        color="inherit"
                        aria-label="back"
                        onClick={handleBackButtonClick}
                    >
                        <ArrowBackIcon />
                    </IconButton>
                    <Typography variant="h6" component="div">
                        Hello World!
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box sx={{ p: 2 }}>
                <Typography variant="h6" component="div">
                    This is a sample application using Material-UI.
                    <br/>
                    Click the button below to see the magic happen!
                </Typography>
                <Button
                    variant="contained"
                    color="secondary"
                    onClick={handleButtonClick}
                    sx={{ mt: 2 }}
                >
                    Click me!
                </Button>
            </Box>
        </ThemeProvider>
    )
}

export default App