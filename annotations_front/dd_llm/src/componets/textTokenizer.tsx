import React, { useEffect, useState } from 'react';

interface TextTokenizerProps {
    text: string;
    tokens: string[];
    onSelectChange: (selectedWords: string) => void;
  }

const TextTokenizer: React.FC<TextTokenizerProps> = ({ text, tokens, onSelectChange } ) => {
  // const [selectedWords, setSelectedWords] = useState([] as string[]);

  const tokenizeText = (text: string) => {
    return text?.split(/\s+/) ?? [];
  };

  // const handleWordClick = (word: string) => {
  //   console.log(tokens)
  //   setSelectedWords((prevSelectedWords: any) =>
  //     prevSelectedWords.includes(word)
  //       ? prevSelectedWords.filter((w: string) => w !== word)
  //       : [...prevSelectedWords, word]
  //   );
  // };
  

  // useEffect(() => {
  //   onSelectChange(selectedWords);
  // }, [selectedWords]);

  // useEffect(() => {
  //   onSelectChange(tokens);
  // }, [tokens]);

  // Tokenized words
  const words = tokenizeText(text);

  return (
    <div style={{ 
      overflow: 'auto',
      minHeight: '400px',
      wordWrap: 'break-word',
      whiteSpace: 'normal' }}>
      {words.map((word: string, index: number) => (
        <span
          key={index}
          onClick={() => onSelectChange(word)}
          style={{
            display: 'inline-block',
            cursor: 'pointer',
            border: tokens.includes(word) ? '2px solid #c1d9b3' : '0px solid #c1d9b3',
            borderRadius: '3px',
            backgroundColor: tokens.includes(word) ? '#c1d9b3' : '#FBFBFB',
            boxShadow: tokens.includes(word) ? '0 4px 8px rgba(0, 0, 0, 0.1)' : '0px 0px',
            margin: '5px',
            padding: '2px',
            transition: 'background-color 0.1s, border 0.1s'
          }}
        >
          {word}
        </span>
      ))}
    </div>
  );
};

export default TextTokenizer;
