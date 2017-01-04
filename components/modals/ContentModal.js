import React from 'react';

const ContentModal = ({ body }) => (
  <section dangerouslySetInnerHTML={{ __html: body }} style={{ marginBottom: 0 }} />
);

export default ContentModal;
