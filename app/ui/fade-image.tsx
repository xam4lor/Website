'use client'

import Image from 'next/image';
import { useState } from 'react';

type Props = React.ComponentProps<typeof Image>;

export function FadeImage({ style, onLoad, ...props }: Props) {
    const [loaded, setLoaded] = useState(false);

    return (
        <Image
            {...props}
            style={{
                ...style,
                opacity: loaded ? 1 : 0,
                transition: 'opacity 0.4s ease',
            }}
            onLoad={(e) => {
                setLoaded(true);
                (onLoad as React.ReactEventHandler<HTMLImageElement> | undefined)?.(e);
            }}
        />
    );
}
