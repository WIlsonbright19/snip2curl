import React from 'react';

interface NotFoundPageProps {
  onNavigate: (path: string) => void;
}

export const NotFoundPage: React.FC<NotFoundPageProps> = ({ onNavigate }) => {
  return (
    <div className="utility-page_component min-h-screen flex items-center justify-center py-20 px-4 bg-[#efe5d7]">
      <div className="utility-page_wrapper max-w-md w-full bg-[#e8ddcc]/70 p-8 md:p-12 rounded-2xl border border-[#171411]/10 shadow-lg text-center flex flex-col items-center">
        <img
          src="/images/page-not-found.svg"
          alt="Page not found"
          className="utility-page_image w-32 h-32 mx-auto mb-6 opacity-85"
        />
        <h3 className="heading-style-h2 font-zodiak text-3xl md:text-4xl mb-3 text-[#171411]">
          Page Not Found
        </h3>
        <div className="text-sm text-[#171411]/80 mb-8 leading-relaxed">
          The page you are looking for doesn&#x27;t exist or has been moved.
        </div>
        <a
          href="/"
          onClick={(e) => {
            e.preventDefault();
            onNavigate('/');
          }}
          className="button is-404 w-inline-block justify-center px-8"
        >
          <div className="button-text">
            <div className="button_text">Go Home</div>
            <div className="button-text-animation">
              <div className="button_text">Go Home</div>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};
