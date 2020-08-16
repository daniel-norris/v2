import Highlight, { defaultProps } from 'prism-react-renderer'
import theme from 'prism-react-renderer/themes/nightOwl'
import React from 'react'
import { copyToClipboard } from '../utils/copyClipboard';

const lineNo = (i) => {
    return (
        <span style={{
            fontFamily: 'Courier New, Courier, monospace',
            width: '2rem',
            userSelect: 'none',
            opacity: '0.3',
            marginRight: '1rem',
        }}>{i + 1}</span>
    );
};

const copyCode = (handleClick) => {
    return (
        <button
            className="opacity-25 hover:opacity-100"
            onClick={handleClick}
            style={{
                position: 'absolute',
                right: '0.25rem',
                border: 0,
                borderRadius: '3px',
                marginRight: '1rem',
            }}>
            Copy
        </button>
    );
};

const Code = ({ codeString, language }) => {

    const handleClick = () => {
        copyToClipboard(codeString);
    };

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
                    <pre className={`${className} p-4 rounded mb-4 relative`} style={style}>
                        {copyCode(handleClick)}
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