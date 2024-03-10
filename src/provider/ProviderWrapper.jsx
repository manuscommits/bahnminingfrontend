import { ThemeProvider, createTheme } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { Provider } from "react-redux";
import store from "../redux/store";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

const ProviderWrapper = ({ children }) => {
    const theme = createTheme({
        palette: {
            db: {
                main: '#EC0016',
                light: '#F75056',
                dark: '#C50014 ',
                contrastText: 'white',
            },
        },
    })

    return (
        <Provider store={store}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <ThemeProvider theme={theme}>
                    {children}
                </ThemeProvider>
            </LocalizationProvider>
        </Provider>
    );
}

export default ProviderWrapper