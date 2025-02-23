import React from 'react';
import { useForm, Resolver, SubmitHandler, UnpackNestedValue, DeepPartial, FieldValues } from 'react-hook-form';

type VerticalFromProps<TFormValues extends FieldValues> = {
    defaultValues?: any;
    resolver?: Resolver<TFormValues>;
    children?: React.ReactNode;
    onSubmit: SubmitHandler<TFormValues>;
    formClass?: string;
};

const VerticalForm = <TFormValues extends FieldValues>({
    defaultValues,
    resolver,
    children,
    onSubmit,
    formClass,
}: VerticalFromProps<TFormValues>) => {
    /*
     * form methods
     */
    const methods = useForm<TFormValues>({ defaultValues, resolver });
    const {
        handleSubmit,
        register,
        control,
        formState: { errors },
    } = methods;

    return (
        <form onSubmit={handleSubmit(onSubmit)} className={formClass} noValidate>
            {Array.isArray(children)
                ? children.map((child) => {
                      return child.props && child.props.name
                          ? React.createElement(child.type, {
                                ...{
                                    ...child.props,
                                    register,
                                    key: child.props.name,
                                    errors,
                                    control,
                                },
                            })
                          : child;
                  })
                : children}
        </form>
    );
};

export default VerticalForm;
