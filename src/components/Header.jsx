import React, {useEffect, useState} from 'react';
import styled from 'styled-components'
import {IoMoon, IoMoonOutline} from 'react-icons/io5'

import {Container} from "./Container";

const HeaderEl = styled.header`
  box-shadow: var(--shadow);
  background-color: var(--colors-ui-base);
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 0;
`;
const Title = styled.a.attrs({
    href: '/'
})`
  color: var(--colors-text);
  font-size: var(--fs-ms);
  text-decoration: none;
  font-weight: var(--fw-bold);
`;
const ModeSwitcher = styled.div`
  color: var(--colors-text);
  font-size: var(--fs-ms);
  cursor: pointer;
  text-transform: capitalize;
`;
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
                        {theme === 'light' ? (
                            <IoMoon size='14px'/>
                        ) : (
                            <IoMoonOutline size='14px'/>
                        )}
                        <span style={{marginLeft: '0.75rem'}}>{theme} Theme</span>
                    </ModeSwitcher>
                </Wrapper>
            </Container>
        </HeaderEl>
    );
};

export default Header;