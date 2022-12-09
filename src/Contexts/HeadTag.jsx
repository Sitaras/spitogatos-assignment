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
      <title>Meta Tags — Preview, Edit and Generate</title>
      <meta name="title" content="Meta Tags — Preview, Edit and Generate"/>
      <meta name="description" content="With Meta Tags you can edit and experiment with your content then preview how your webpage will look on Google, Facebook, Twitter and more!"/>

      <meta property="og:type" content="website"/>
      <meta property="og:url" content="https://metatags.io/"/>
      <meta property="og:title" content="Meta Tags — Preview, Edit and Generate"/>
      <meta property="og:description" content="With Meta Tags you can edit and experiment with your content then preview how your webpage will look on Google, Facebook, Twitter and more!"/>
      <meta property="og:image" content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png"/>


      <meta property="twitter:card" content="summary_large_image"/>
      <meta property="twitter:url" content="https://metatags.io/"/>
      <meta property="twitter:title" content="Meta Tags — Preview, Edit and Generate"/>
      <meta property="twitter:description" content="With Meta Tags you can edit and experiment with your content then preview how your webpage will look on Google, Facebook, Twitter and more!"/>
      <meta property="twitter:image" content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png"/>

    </Helmet>
  );
};

export default HeadTag;