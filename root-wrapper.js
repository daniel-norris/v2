import { MDXProvider } from '@mdx-js/react';
import React from 'react';
import Code from './src/components/code';

const components = {
    pre: ({ children: { props } }) => {
        if (props.mdxType === 'code') {
            return (
                <Code
                    codeString={props.children.trim()}
                    language={props.className && props.className.replace('language-', '')}
                    {...props}
                />
            )
        }
    }
}

export const wrapRootElement = ({ element }) => (
    <MDXProvider components={components}>{element}</MDXProvider>
)