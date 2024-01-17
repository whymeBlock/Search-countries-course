import React, {useEffect, useState} from 'react';
import styled from 'styled-components'
import {IoMoon, IoMoonOutline} from 'react-icons/io5'

import { Container } from "./Container";

const HeaderEl = styled.header`
    box-shadow: var(--shadow);
    background-color: var(--colors-ui-base);
`
const Wrapper = styled.div`
`
const Title = styled.a.attrs({
    href: '/'
})`
`
const ModeSwitcher = styled.div`
`
const Header = () => {
    const [theme, setTheme] = useState('light')

    const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light')

    useEffect(() => {
        document.body.setAttribute('data-theme', theme)
    }, [theme]);
    return (
        <HeaderEl>
            <Container>
                <Wrapper>
                    <Title>Novotelecom</Title>
                    <ModeSwitcher onClick={toggleTheme}>
                        <IoMoon/> Light Theme
                    </ModeSwitcher>
                </Wrapper>
            </Container>
        </HeaderEl>
    );
};

export default Header;