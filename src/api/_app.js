import React, { useEffect } from 'react';

const _app = () => {
  useEffect(() => {
    fetch('/data.json')
      .then((response) => response.json())
      .then((data) => console.log(data));
  }, []);

  return <div></div>;
};

export default _app;
