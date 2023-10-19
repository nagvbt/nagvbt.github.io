import React, { useState } from 'react';
import styles from './styles.module.css';
import clsx from 'clsx';

export default function CaseConvert(): JSX.Element {
  const [defaultText, setDefaultText] = useState('type text here');
  const [state, setState] = useState({
    wordCount: 3,
    charCount: 14,
    paraCount: 1
  });

  const handleKeyPress = (event) => {
    setDefaultText(event.target.value);
    const count = event.target.value;
    let paraCount = event.target.value;
    paraCount = paraCount.replace(/\n$/gm, '').split(/\n/).length;

    const countWords = (count) => {
      if (count.length === 0) {
        return 0;
      } else {
        count = count.replace(/(^\s*)|(\s*$)/gi, '');
        count = count.replace(/[ ]{2,}/gi, ' ');
        count = count.replace(/\n /, '\n');
        return count.split(' ').length;
      }
    };

    setState({
      wordCount: countWords(count),
      charCount: count.length,
      paraCount: paraCount
    });
  };

  const upperCase = () => {
    // To convert Upper Case
    const upperCaseText = defaultText.toUpperCase();
    setDefaultText(upperCaseText);
  };

  const lowerCase = () => {
    // To convert Lower Case
    const lowerCaseText = defaultText.toLowerCase();
    setDefaultText(lowerCaseText);
  };

  const titleCase = () => {
    const titleCaseText = defaultText
      .split(' ')
      .map(function (word, index) {
        // First character upper case else lower case
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
      })
      .join(' ');
    setDefaultText(titleCaseText);
  };

  const headerCase = () => {
    const headerCaseText = defaultText
      .split(' ')
      .map(function (word, index) {
        // First character upper case else lower case
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
      })
      .join('-');
    setDefaultText(headerCaseText);
  };

  const camelCase = () => {
    let camelCaseText = defaultText
      .split(' ')
      .map(function (word, index) {
        // First character upper case else lower case
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
      })
      .join('');

    camelCaseText = camelCaseText.replace(camelCaseText[0], camelCaseText[0].toLowerCase());
    setDefaultText(camelCaseText);
  };

  const hyphenCase = () => {
    const splitString = defaultText.toLowerCase().split(' ');
    const hyphenString = splitString.join('-');
    setDefaultText(hyphenString);
  };

  const removeHyphen = () => {
    const splitString = defaultText.split('-');
    const normalString = splitString.join(' ');
    setDefaultText(normalString);
  };

  const dotCase = () => {
    const splitString = defaultText.toLowerCase().split(' ');
    const normalString = splitString.join('.');
    setDefaultText(normalString);
  };

  /**
   * Snake case refers to the style of writing in which each space is replaced by an underscore character,
   *  and the first letter of each word written in lowercase.
   *
   */
  const snakeCase = () => {
    const splitString = defaultText.toLowerCase().split(' ');
    const normalString = splitString.join('_');
    setDefaultText(normalString);
  };

  const constantCase = () => {
    const splitString = defaultText.toUpperCase().split(' ');
    const normalString = splitString.join('_');
    setDefaultText(normalString);
  };

  const pascalCase = () => {
    const pascalCaseText = defaultText
      .toLowerCase()
      .split(' ')
      .map(function (word, index) {
        // First character upper case else lower case
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
      })
      .join('');
    setDefaultText(pascalCaseText);
  };

  const pathCase = () => {
    const pathCaseText = defaultText.split(' ').join('/');
    setDefaultText(pathCaseText);
  };

  const sentenceCase = () => {
    const sentenceCase = defaultText.toLowerCase().split(' ');

    let firstWord = sentenceCase[0];

    // replace first word's first char to uppercase
    firstWord = firstWord.replace(firstWord[0], firstWord[0].toUpperCase());
    sentenceCase[0] = firstWord;

    const formatedSentence = sentenceCase.join(' ');

    setDefaultText(formatedSentence);
  };

  /**
   * Convert your text to the opposite of the current case i.e. uppercase becomes lowercase and lowercase becomes uppercase.
   */
  const inVerseCase = () => {
    let inVerseCase = '';
    for (const char of defaultText) {
      const upper = char.toUpperCase();

      if (char === upper) {
        inVerseCase += char.toLowerCase();
      } else {
        inVerseCase += upper;
      }
    }

    setDefaultText(inVerseCase);
  };

  const alternateCase = () => {
    const chars = defaultText.toLowerCase().split('');
    for (let i = 0; i < chars.length; i += 2) {
      chars[i] = chars[i].toUpperCase();
    }
    setDefaultText(chars.join(''));
  };

  /**
   * Ada Case is same as Pascal case the capitalized first letter also is separated by an underscore
   */
  const adaCase = () => {
    const pascalCaseText = defaultText
      .toLowerCase()
      .split(' ')
      .map(function (word, index) {
        // First character upper case else lower case
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
      })
      .join('_');
    setDefaultText(pascalCaseText);
  };

  /**
   *  In Cobol case all letters are capitalized and the words are separated by an hypen
   */
  const cobolCase = () => {
    const splitString = defaultText.toUpperCase().split(' ');
    const cobalString = splitString.join('-');
    setDefaultText(cobalString);
  };

  /**
   *  In macro case all letters are capitalized and the words are separated by an underscore.
   */
  const macroCase = () => {
    const splitString = defaultText.toUpperCase().split(' ');
    const macroString = splitString.join('_');
    setDefaultText(macroString);
  };

  /**
   * In train case all first letters of the words are capitalized and the words are separated by an hypen.
   */
  const trainCase = () => {
    const trainString = defaultText
      .toLowerCase()
      .split(' ')
      .map(function (word, index) {
        // First character upper case else lower case
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
      })
      .join('-');

    setDefaultText(trainString);
  };

  return (
    <div className={styles.margin}>
      <div className="container">
        <div className="row">
          <h4 className="col col--4">
            WORDS <div className={styles.num}> {state.wordCount}</div>
          </h4>
          <h4 className="col col--4">
            CHARACTERS <div className={styles.num}> {state.charCount}</div>
          </h4>
          <h4 className="col col--4">
            PARAGRAPHS <div className={styles.num}> {state.paraCount}</div>
          </h4>
        </div>
        <div className={styles.text}>
          <textarea
            className={styles.text}
            rows={4}
            cols={40}
            name="contentText"
            onChange={handleKeyPress}
            value={defaultText}
            placeholder="Type here"
          ></textarea>
        </div>
        <br />
        <br />
        <div className={styles.buttons}>
          <button
            onClick={upperCase}
            className={clsx('button button--primary button--md', styles.btn)}
          >
            UPPER
          </button>
          <button
            onClick={lowerCase}
            className={clsx('button button--primary button--md', styles.btn)}
          >
            lower
          </button>
          <button
            onClick={titleCase}
            className={clsx('button button--primary button--md', styles.btn)}
          >
            Title Case
          </button>
          <button
            onClick={hyphenCase}
            className={clsx('button button--primary button--md', styles.btn)}
          >
            hyphen-case
          </button>
          <button
            onClick={removeHyphen}
            className={clsx('button button--primary button--md', styles.btn)}
          >
            Remove Hyphen
          </button>
          <button
            onClick={sentenceCase}
            className={clsx('button button--primary button--md', styles.btn)}
          >
            Sentence Case
          </button>
          <button
            onClick={dotCase}
            className={clsx('button button--primary button--md', styles.btn)}
          >
            dot.case
          </button>

          <button
            onClick={snakeCase}
            className={clsx('button button--primary button--md', styles.btn)}
          >
            snake_case
          </button>
        </div>
        <br />
        <div className={styles.buttons}>
          <button
            onClick={pascalCase}
            className={clsx('button button--primary button--md', styles.btn)}
          >
            PascalCase
          </button>
          <button
            onClick={camelCase}
            className={clsx('button button--primary button--md', styles.btn)}
          >
            camelCase
          </button>

          <button
            onClick={pathCase}
            className={clsx('button button--primary button--md', styles.btn)}
          >
            path/case
          </button>
          <button
            onClick={constantCase}
            className={clsx('button button--primary button--md', styles.btn)}
          >
            CONSTANT_CASE
          </button>
          <button
            onClick={headerCase}
            className={clsx('button button--primary button--md', styles.btn)}
          >
            Header-Case
          </button>
          <button
            onClick={inVerseCase}
            className={clsx('button button--primary button--md', styles.btn)}
          >
            InVeRsE CaSe
          </button>
          <button
            onClick={alternateCase}
            className={clsx('button button--primary button--md', styles.btn)}
          >
            aLtErNaTiNg cAsE
          </button>
        </div>
        <br />
        <div className={styles.buttons}>
          <button
            onClick={adaCase}
            className={clsx('button button--primary button--md', styles.btn)}
          >
            Ada_Case
          </button>
          <button
            onClick={cobolCase}
            className={clsx('button button--primary button--md', styles.btn)}
          >
            COBOL-CASE
          </button>
          <button
            onClick={macroCase}
            className={clsx('button button--primary button--md', styles.btn)}
          >
            MACRO_CASE
          </button>
          <button
            onClick={trainCase}
            className={clsx('button button--primary button--md', styles.btn)}
          >
            Train-Case
          </button>
        </div>
      </div>
    </div>
  );
}
