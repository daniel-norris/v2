import Highlight, { defaultProps } from 'prism-react-renderer'
import theme from 'prism-react-renderer/themes/nightOwl'
import React from 'react'

const lineNo = (i) => {
    return (
        <span style={{
            fontFamily: 'Courier New, Courier, monospace',
            width: '2rem',
            userSelect: 'none',
            opacity: '0.3',
            marginRight: '1rem',
        }}>{i + 1}</span>
    )
};

const Code = ({ codeString, language }) => {

    return (

        <Highlight
            {...defaultProps}
            code={codeString}
            language={language}
            theme={theme}
        >
            {({
                className,
                style,
                tokens,
                getLineProps,
                getTokenProps,
            }) => (
                    <pre className={`${className} p-4 rounded mb-4`} style={style}>
                        {tokens.map((line, i) => (
                            <div {...getLineProps({ line, key: i })}>
                                {lineNo(i)}
                                {line.map((token, key) => (
                                    <span {...getTokenProps({ token, key })} />
                                ))}
                            </div>
                        ))}
                    </pre>
                )}
        </Highlight>
    )
}

export default Code