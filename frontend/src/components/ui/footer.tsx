const Footer = () => {
  return (
    <div className=" bottom-0 w-full fixed">
      <footer className="bg-background border-2 border-border py-6 px-6 mx-4 rounded-lg shadow-sm">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div className="flex flex-col sm:flex-row sm:items-center space-y-3 sm:space-y-0 sm:space-x-8">
              <p className="text-muted-foreground text-sm font-medium">
                © 2025 YourBrand. All rights reserved.
              </p>
              <div className="flex space-x-8">
                <a
                  href="#"
                  className="text-muted-foreground hover:text-foreground text-sm transition-colors duration-300 hover:underline"
                >
                  Privacy Policy
                </a>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-foreground text-sm transition-colors duration-300 hover:underline"
                >
                  Terms of Service
                </a>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-foreground text-sm transition-colors duration-300 hover:underline"
                >
                  Contact
                </a>
              </div>
            </div>
            <div className="mt-4 md:mt-0">
              <p className="text-muted-foreground text-sm">
                Made with ❤️ by Durgesh & Tejas
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
