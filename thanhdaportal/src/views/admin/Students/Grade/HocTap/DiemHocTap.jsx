import React from 'react';
import Grid from '@mui/material/Unstable_Grid2';
import { ThemeProvider, createTheme } from '@mui/material/styles';

function DiemHocTap() {
    return (
        <div>
            <ThemeProvider
                theme={createTheme({
                    breakpoints: {
                        values: {
                            laptop: 1024,
                            tablet: 640,
                            mobile: 0,
                            desktop: 1280,
                        },
                    },
                })}
            >
                <Grid container spacing={{ mobile: 1, tablet: 2, laptop: 3 }}>
                    {Array.from(Array(4)).map((_, index) => (
                        <Grid mobile={6} tablet={4} laptop={3} key={index}>
                            <div>{index + 1}</div>
                        </Grid>
                    ))}
                </Grid>
            </ThemeProvider>
        </div>
    )
}

export default DiemHocTap
