import './App.css'
import { AppBar, Toolbar, Typography, IconButton, Button } from '@mui/material'
import { useSearchParams } from "react-router-dom";
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { orange } from '@mui/material/colors'
import { Box } from '@mui/system'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import '@fontsource/roboto'
import {useState} from "react";


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

    const [searchParams] = useSearchParams();

    const [user, setUser] = useState(null)

    // This is a potential implementation of the signature verification, you must adapt it to your needs and languages.
    // Use a cache, sessions or whatever you like to store the information about the user during his experience.
    const checkUser = () => {
        const payload = searchParams.get('payload') //urlsafe base64 encoded json payload
        const signature = searchParams.get('signature') //urlsafe base64 encoded signature
        const formData = new FormData()
        formData.append('payload', payload)
        formData.append('signature', signature)

        // This api is a way to check the signature, it's the fastest howver could slow down in performance due to intense usage by other users
        // It's recommended to implement your own signature verification algorithm and get the public key from the API once and store it in your server or app
        fetch("https://svc.mensa.it/api/cs/verify-signature/oakk7cnnzpi5wlo", {
            method: 'POST',
            body: formData
        })
        .then(response => response.text())
        .then(data => {
            if (data === 'OK') {
                setUser(JSON.parse(atob(payload)))
            }
        })

        // You can implement your own algorithm to verify the signature, you can get the public key for your addon from the API
        // GET https://svc.mensa.it/api/cs/keys/:addons_id
        // Example: https://svc.mensa.it/api/cs/keys/oakk7cnnzpi5wlo
    }

    const handleBackButtonClick = () => {
        // This is mandatory, the first page of every addon must have a back button that redirects to this safe URL.
        // The app will handle this url and will close the addon preserving the smooth user experience.
        window.open('https://svc.mensa.it/goback')
    }

    const handleButtonClick = () => {
        //  Sorry for this, I had to do it
        window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', '_blank')
    }

    useState(() => {
        checkUser()
    }, [])

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
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <Typography variant="h6" component="div">
                    {user && `Hello ${user.name}!`}
                </Typography>
            </Box>
        </ThemeProvider>
    )
}

export default App