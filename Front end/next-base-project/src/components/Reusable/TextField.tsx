import React, { ChangeEvent, ChangeEventHandler, ReactNode } from "react";

export interface TextFieldT {
  className: string;
  type: string;
  placeholder: string;
  svgChildren?: ReactNode;
  labelClassName: string;
  value: string | number;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const TextField = (props: TextFieldT) => {
  const {
    svgChildren,
    type,
    className,
    labelClassName,
    placeholder,
    value,
    onChange,
  } = props;
  return (
    <div>
      <label className={labelClassName}>
        {svgChildren ? svgChildren : null}
        <input
          className={className}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
      </label>
    </div>
  );
};

export default TextField;
