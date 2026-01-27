import { ThemeProvider, THEME_ID, createTheme } from "@mui/material/styles";

const materialTheme = createTheme(/* your theme */);

import { Palitra } from "./widgets/Palitra";

export const Main = () => {
  return (
    <ThemeProvider theme={{ [THEME_ID]: materialTheme }}>
      <Palitra />
    </ThemeProvider>
  );
};
