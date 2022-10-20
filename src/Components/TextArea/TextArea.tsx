import React, {LegacyRef} from 'react';


export type TextAreaType = {
    columns?: number
    rows?: number
    placeHolder?: string
    id?: string
    className?: string
    ref?: LegacyRef<HTMLTextAreaElement>
}

export const TextArea: React.FC<TextAreaType> = ({
                                                     columns,
                                                     rows,
                                                     placeHolder,
                                                     id,
                                                     className,
                                                     ref
                                                 }) => {





    return (
        <textarea placeholder={placeHolder} className={className} ref={ref}></textarea>
    );
};

