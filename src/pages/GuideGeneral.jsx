import { useState, useEffect } from 'react';
import MarkdownContent from '../components/MarkdownContent';

const GuideGeneral = () => {
  const [content, setContent] = useState('');

  useEffect(() => {
    fetch('/guide-general.md')
      .then(response => response.text())
      .then(text => setContent(text))
      .catch(error => console.error('Error loading markdown:', error));
  }, []);

  return <MarkdownContent content={content} title="Guide Général" />;
};

export default GuideGeneral;
