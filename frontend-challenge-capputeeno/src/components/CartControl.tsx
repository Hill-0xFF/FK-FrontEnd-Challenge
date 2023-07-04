import ShoppingBagIcon from '../app/icons/ShoppingBagIcon';
import { useLocalStorage } from '@/hooks/useLocalStorage';
import styled from 'styled-components';

const CartCount = styled.span`
position: absolute;
  width: 17px;
  height: 17px;
  flex-shrink: 0;
  top: 43px;
  // left: 1263px;
  right: 160px;
  border-radius: 17px;
  background: var(--delete-color);
  color: white;
`;

const CartControlDiv = styled.div`
  position: relative;
  border-radius: 1rem;
  top: 43px;
`

export default function CartControl() {
  const { item } = useLocalStorage('shoppingCartItems');

  return (
    <div>
      <ShoppingBagIcon />
      {item.length && <CartCount>{item.length}</CartCount>}
    </div>
  );
}
