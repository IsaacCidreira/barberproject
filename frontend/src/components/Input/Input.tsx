import { ChangeEventHandler, FocusEventHandler } from "react";
import { Container } from "./style";

interface Forms {
  label?: string;
  type: string;
  name?: string;
  value: string;
  placeholder?: string;
  maxLength?: number;
  autocomplete?: string;
  checked?: boolean;
  dataId?: string;
  ref?: any
  onChange: ChangeEventHandler;
  onBlur?: FocusEventHandler;
}
const Input = ({
  label,
  type,
  name,
  value,
  placeholder,
  maxLength,
  checked,
  dataId,
  ref,
  onChange,
  onBlur,
}: Forms) => {
  return (
    <Container>
      <input checked={checked}
        autoComplete="off"
        id={name}
        name={name}
        type={type}
        value={value}
        placeholder={placeholder}
        maxLength={maxLength}
        data-id={dataId}
        onChange={onChange}
        onBlur={onBlur} />
    </Container>

  )
}

export default Input