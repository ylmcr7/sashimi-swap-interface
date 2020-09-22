import React from 'react'
import styled from 'styled-components'
import {
  ExternalLink
} from '../../theme'

const StyledFooter = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  text-align: center;
  width: 100%;
  height: 120px;
  padding: 24px 50px;
  color: #ffffff;
  font-size: 14px;
  background: ${props => props.theme.bg6};
  @media (min-width: 576px) {
    min-width: 80%;
  }
  @media (max-width: 576px) {
    flex-flow: row wrap;
  }
`

const StyledFooterItem = styled.div`
  width: 16.66%;
  @media (max-width: 576px) {
    width: 33.33%
  }
`

const StyledLink = styled(ExternalLink)`
  color: #ffffff;
`

const Footer = () => {
  return (
    <StyledFooter>
      <StyledFooterItem>
        <StyledLink
          target="_blank"
          href={`https://etherscan.io/address/0x89d5F2E52D36b85e72e25e8fE46d709D445c03Fc#code`}
        >
          Sashimi Contract
        </StyledLink>
      </StyledFooterItem>
      <StyledFooterItem>
        <StyledLink
          target="_blank"
          href={`https://etherscan.io/address/0x042036D6F0b5C246aA07Dd9688b46cf86Bd179C3#code`}
        >
          MasterChef Contract
        </StyledLink>
      </StyledFooterItem>
      <StyledFooterItem>
        <StyledLink target="_blank" href="https://discord.gg/zTdmUkb">
          Discord
        </StyledLink>
      </StyledFooterItem>
      <StyledFooterItem>
        <StyledLink target="_blank" href="https://t.me/joinchat/KABj-Bz6CVzyi23HK2rjzA">
          Telegram
        </StyledLink>
      </StyledFooterItem>
      <StyledFooterItem>
        <StyledLink target="_blank" href="https://twitter.com/SASHIMISASHIMI5">
          Twitter
        </StyledLink>
      </StyledFooterItem>
      <StyledFooterItem>
        <StyledLink target="_blank" href="https://github.com/SashimiProject/sashimiswap">
          Github
        </StyledLink>
      </StyledFooterItem>
    </StyledFooter>
  )
}

export default Footer;
