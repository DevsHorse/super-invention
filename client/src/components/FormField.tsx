import React from 'react';

interface IFormFieldProps  {
  label: string;
  type?: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const FormField = ({label, type = 'text', ...props}: IFormFieldProps) => {
  return (
    <div className="flex flex-col gap-2 mb-6">
      <div className="font-medium">{label}</div>
      <input className="border border-gray-300 rounded p-1" type={type} {...props} />
    </div>
  );
};

export default FormField;
