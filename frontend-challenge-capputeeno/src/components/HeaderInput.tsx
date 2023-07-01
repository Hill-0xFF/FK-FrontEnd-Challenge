import styled from 'styled-components';

interface HeaderInputProps {
  placeholder: string,
}

const TagInput = styled.input`
  display: inline-flex;
  padding: 9px 16px;
  justify-content: center;
  align-items: flex-start;
  width: 352px;
  height: 42px;
  color: var(--input-text-color-black);
  border-radius: 1rem;
  border: none;
  background: var(--input-background-color);

  text-align: center;
  font-size: 14px;
  font-family: inherit;
  font-weight: 400;
  line-height: 22px;
`;

export default function HeaderInput({placeholder}: HeaderInputProps) {
  return (
    <TagInput placeholder={placeholder}/>
  );
}
