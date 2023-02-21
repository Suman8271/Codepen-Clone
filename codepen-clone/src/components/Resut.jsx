
import { useContext, useState, useEffect } from 'react';

import {Box, styled} from '@mui/material';

import {DataContext} from '../context/DataProvider';

const Container = styled(Box)`
    height : 36.99vh;
`;


const Result = () => {

    const [src, setSrc] = useState('');

    const {html, css, js} = useContext(DataContext);

    const srcCode = `
        <html>
            <body> ${html} </body>
            <style> ${css} </style>
            <script> ${js} </script>
        </html>
    
    `

    useEffect(() => {
        const timeout = setTimeout(() => {
            setSrc(srcCode);
        }, 1000)

        return () => clearTimeout(timeout);
    }, [html, css, js])

    return (

        <Container
            style={{backgroundColor: '#a9a9a9', position:'relative'}}
        >
            <iframe
                srcDoc={src}
                title = "output"
                sandbox = 'allow-scripts'
                frameBorder={0}
                width = "100%"
                height= "100%"
            />
        </Container>
    )
}

export default Result;