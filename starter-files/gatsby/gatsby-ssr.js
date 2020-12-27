import React from 'react';
import Layout from './src/components/Layout';

// everytime Gatsby renders a page it will wrap it in something
export function wrapPageElement({ element, props }) {
  return <Layout {...props}>{element}</Layout>;
}
