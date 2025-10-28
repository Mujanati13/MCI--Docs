import { useState, useEffect } from 'react';
import MarkdownContent from '../components/MarkdownContent';

const GuideTechnique = () => {
  const [content, setContent] = useState('');

  useEffect(() => {
    fetch('/guid-technique.md')
      .then(response => response.text())
      .then(text => setContent(text))
      .catch(error => console.error('Error loading markdown:', error));
  }, []);

  return <MarkdownContent content={content} title="Guide Technique" />;
};

export default GuideTechnique;
