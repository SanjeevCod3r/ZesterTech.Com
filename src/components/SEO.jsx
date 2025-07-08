import React from 'react';

const SEO = ({
  title = 'ZesterTech - Digital Solutions & Innovation',
  description = 'ZesterTech is a leading digital solutions company providing innovative technology services and products. Empowering businesses through cutting-edge solutions.',
  keywords = 'digital solutions, technology services, innovation, web development, software development',
  image = 'https://zestertech.com/og-image.jpg',
  type = 'website',
  robots = 'index, follow',
}) => {
  return (
    <>
      <title>{title}</title>
      
      {/* Meta Description */}
      <meta name="description" content={description} />
      
      {/* Meta Keywords */}
      <meta name="keywords" content={keywords} />
      
      {/* Robots */}
      <meta name="robots" content={robots} />
      
      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={window.location.href} />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "ZesterTech",
          "url": "https://zestertech.com",
          "logo": "https://zestertech.com/logo.png",
          "description": description,
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "123 Tech Street",
            "addressLocality": "Innovation City",
            "addressRegion": "Tech",
            "postalCode": "12345",
            "addressCountry": "IN"
          },
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+1 234 567 890",
            "contactType": "customer service",
            "email": "support@zestertech.com"
          }
        })}
      </script>
    </>
  );
};

export default SEO;
