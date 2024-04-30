const REGEX = require('./constants');
const { convertParagraphs, checkMarkdownForErrors } = require('./utils');

const convertMarkdownToHTML = (markdown) => {
  checkMarkdownForErrors(markdown);
  const resWithoutParagraphs = markdown
    .replace(REGEX.preformatted, '<pre>$1</pre>')
    .replace(REGEX.bold, '<b>$1</b>')
    .replace(REGEX.italic, '<i>$1</i>')
    .replace(REGEX.monospaced, '<tt>$1</tt>');
  return convertParagraphs(resWithoutParagraphs);
};

module.exports = convertMarkdownToHTML;
