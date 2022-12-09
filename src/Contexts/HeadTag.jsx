import Helmet from "react-helmet";
import React from 'react'



function HeadTag (props) {
  const {
    title = "Portfolio - your name",
    metaDescription = "defaul tdescription",
  } = props;
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="description" content={metaDescription} />
      <meta name="title" content={title} />
      <meta property="og:title" content={title} />
      <meta property="og:locale" content="en_US" />
      <meta charSet="utf-8" />
      <meta property="og:type" content="website" />
      <meta property="og:description" content={metaDescription} />
      <meta
        property="og:image:secure"
        content="http://static01.nyt.com/images/2015/02/19/arts/international/19iht-btnumbers19A/19iht-btnumbers19A-facebookJumbo-v2.jpg"
      />
    </Helmet>
  );
};

export default HeadTag;