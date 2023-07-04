import React from 'react';
import SearchLoupeICon from '@/app/icons/SearchLoupeIcon';
import { InputHTMLAttributes } from 'react';
import styled from 'styled-components';
import CartControl from './CartControl';

export const TagInput = styled.input`
  display: inline-flex;
  padding: 9px 16px;
  justify-content: center;
  align-items: flex-start;
  width: 352px;
  height: 42px;
  color: var(--input-text-color-cyan);
  border-radius: 1rem;
  border: none;
  background: var(--input-background-color);

  text-align: center;
  font-size: 14px;
  font-family: inherit;
  font-weight: 400;
  line-height: 22px;
`;

const InputContainer = styled.div`
  position: relative;
  width: 352px;
  
  svg {
    height: 24px;
    width: 24px;
    position: absolute;
    right: 16px;
    top: 50%;
    transform: translateY(-50%);
  }
`;

export function InputContainerDiv() {
  return <div>
    <InputContainer>
      <TagInput placeholder='Procurando por algo especifico?'/>
      <SearchLoupeICon />
      <CartControl />
    </InputContainer>
  </div>;
}
