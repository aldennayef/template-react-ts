import React from 'react';
import { useForm, type UseFormReturn, type SubmitHandler, type FieldValues, type UseFormProps } from 'react-hook-form';

interface FormProps<TFormValues extends FieldValues> {
  onSubmit: SubmitHandler<TFormValues>;
  children: (methods: UseFormReturn<TFormValues>) => React.ReactNode;
  options?: UseFormProps<TFormValues>;
  className?: string;
}

export const Form = <TFormValues extends FieldValues>({
  onSubmit,
  children,
  options,
  className,
}: FormProps<TFormValues>) => {
  const methods = useForm<TFormValues>(options);

  return (
    <form 
      onSubmit={methods.handleSubmit(onSubmit)} 
      className={className}
    >
      {children(methods)}
    </form>
  );
};