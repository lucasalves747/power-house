import React, { useEffect } from 'react';

export const RegistrationForm: React.FC = () => {
  useEffect(() => {
    // Load the external script for the form widget
    const script = document.createElement('script');
    script.src = "https://link.salee.ai/js/form_embed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup script if component unmounts
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <div id="registration-form" className="relative w-full">
      {/* Glow effect background */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-purple-600/20 blur-3xl rounded-full -mr-16 -mt-16 pointer-events-none z-0"></div>

      {/* Iframe Container - Maintains the card aesthetic */}
      <div className=" ">
        <iframe
            src="https://link.salee.ai/widget/form/JU05huAqXFi7ZQLpCtsF"
            style={{ width: '100%', height: '100%', border: 'none', borderRadius: '20px', minHeight: '500px' }}
            id="inline-JU05huAqXFi7ZQLpCtsF" 
            data-layout="{'id':'INLINE'}"
            data-trigger-type="alwaysShow"
            data-trigger-value=""
            data-activation-type="alwaysActivated"
            data-activation-value=""
            data-deactivation-type="neverDeactivate"
            data-deactivation-value=""
            data-form-name="power house contact - sem cabeçalho"
            data-height="492"
            data-layout-iframe-id="inline-JU05huAqXFi7ZQLpCtsF"
            data-form-id="JU05huAqXFi7ZQLpCtsF"
            title="power house contact - sem cabeçalho"
        >
        </iframe>
      </div>
    </div>
  );
};