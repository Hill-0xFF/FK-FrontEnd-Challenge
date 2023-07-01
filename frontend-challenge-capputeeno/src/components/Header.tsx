'use client';

import React from 'react';
import styled from 'styled-components';
import { Saira_Stencil_One } from 'next/font/google';
import { TagInput } from './HeaderInput';

const saira_stencil = Saira_Stencil_One({
  weight: ['400'],
  subsets: ['latin'],
});

const TagHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 80px;
  flex-shrink: 0;
  padding: 29px 160px;
  border: solid 3px cyan;
`;

const LogoText = styled.a`
  color: var(--logo-text-color);
  font-size: 40px;
  font-style: normal;
  line-height: 150%;
  cursor: pointer;
`;

export default function Header() {
  return (
    <TagHeader>
      <LogoText className={saira_stencil.className}>Capputeeno</LogoText>
      <div>
        <TagInput placeholder="Procurando por algo especifico?" />
      </div>
    </TagHeader>
  );
}
