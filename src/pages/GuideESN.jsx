import { useState, useEffect } from 'react';
import MarkdownContent from '../components/MarkdownContent';

const GuideESN = () => {
  const [content, setContent] = useState('');

  useEffect(() => {
    fetch('/quid-esn.md')
      .then(response => response.text())
      .then(text => setContent(text))
      .catch(error => console.error('Error loading markdown:', error));
  }, []);

  return <MarkdownContent content={content} title="Guide ESN" />;
};

export default GuideESN;
