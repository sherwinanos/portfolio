"use client"

export default function NotFoundRoot() {
  const handleScroll = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, 
    href: string
  ) => {
    // Prevent default anchor behavior
    e.preventDefault();
  
    // Check if it's a section scroll (starts with #)
    if (href.startsWith("#")) {
      const targetId = href.slice(1); // Remove the `#`
      const targetElement = document.getElementById(targetId);
      
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // For normal route navigation, use next/router or just allow default navigation
      window.location.href = href;
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-secondary">
      <div className="container mx-auto space-y-4">
        <BugIcon className="h-24 w-24 text-primary" />
        <h1 className="text-4xl font-bold text-tertiary">
          Oops! Something went wrong.
        </h1>
        <p className="text-tertiary">
          Sorry, we can't find the page you're looking for.
        </p>
        <div className="flex gap-4 mt-8">
          <a
            href="/"
            className="btn btn-primary">
            Go back home
          </a>
          <a href="#contact" className="btn btn-primary" onClick={(e) => handleScroll(e, '#contact')} aria-label="Book an appointment">Book an appointment</a>
        </div>
      </div>
    </div>
  );
}

function BugIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="m8 2 1.88 1.88" />
      <path d="M14.12 3.88 16 2" />
      <path d="M9 7.13v-1a3.003 3.003 0 1 1 6 0v1" />
      <path d="M12 20c-3.3 0-6-2.7-6-6v-3a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v3c0 3.3-2.7 6-6 6" />
      <path d="M12 20v-9" />
      <path d="M6.53 9C4.6 8.8 3 7.1 3 5" />
      <path d="M6 13H2" />
      <path d="M3 21c0-2.1 1.7-3.9 3.8-4" />
      <path d="M20.97 5c0 2.1-1.6 3.8-3.5 4" />
      <path d="M22 13h-4" />
      <path d="M17.2 17c2.1.1 3.8 1.9 3.8 4" />
    </svg>
  );
}