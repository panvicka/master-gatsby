import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import Logo from './Logo';

const NavStyle = styled.nav`
  .logo {
    // we can do this because logo has <LogoStyles className="logo">
    transform: translateY(-25%);
  }

  margin-bottom: 3rem;
  ul {
    margin: 0;
    padding: 0;
    display: grid;
    grid-template-columns: 1fr 1fr auto 1fr 1fr; // two links on the left, then logo takes whatever it needs and two links on the right
    grid-gap: 2rem;
    text-align: center;
    list-style: none;
    align-items: center;
    margin-top: -6rem;
  }

  li {
    --rotate: -2deg;
    transform: rotate(var(--rotate));
    order: 1;
    &::nth-child(1) {
      --rotate: 1deg;
    }
    &::nth-child(2) {
      --rotate: -2.5deg;
    }
    &::nth-child(4) {
      --rotate: 2.5deg;
    }
    &:hover {
      --rotate: 3deg;
    }
  }

  a {
    font-size: 3rem;
    text-decoration: none;
    &:hover {
      color: var(--red);
    }
    &[aria-current='page'] {
      color: var(--red);
    }
  }
`;

export default function Nav() {
  return (
    <NavStyle>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/pizza/">Pizza</Link>
        </li>
        <li>
          <Link to="/">
            <Logo />
          </Link>
        </li>
        <li>
          <Link to="/slicemasters">Slicemasters</Link>
        </li>
        <li>
          <Link to="/order">Order</Link>
        </li>
      </ul>
    </NavStyle>
  );
}
