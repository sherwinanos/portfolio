"use client"

import { useEffect } from 'react';
import Script from 'next/script';

const CalendlyWidget: React.FC = () => {
  useEffect(() => {
    // Calendly widget should be initialized after the script is loaded
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup the script when the component is unmounted
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div>
      {/* Calendly inline widget */}
      <div
        className="calendly-inline-widget min-w-[320px] h-[500px] lg:h-[550px] 2xl:h-[700px]"
        data-url="https://calendly.com/sherwin-anos/30min?hide_event_type_details=1&hide_gdpr_banner=1&background_color=201d4d&text_color=f6f7f8&primary_color=a0f4d5"
        // style={{ minWidth: '320px', height: '700px' }}
      />
    </div>
  );
};

export default CalendlyWidget;