import Footer from "@/components/ui/footer";
import { Mail, Code, Users, Heart, Github } from "lucide-react";

const AboutPage = () => {
  return (
    <div className="max-w-100vw overflow-x-hidden">
      <div className="overflow-x-hidden bg-muted/30 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              About <span className="text-purple-600">Snipit</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A passion project built by two developers who believe in making
              code sharing simple and beautiful.
            </p>
          </div>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            {/* Left Side - Image */}
            <div className="order-2 lg:order-1">
              <div className="relative  overflow-hidden">
                <div className="bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl p-8 shadow-2xl">
                  <div className="bg-white rounded-xl p-6 mb-6">
                    <Code className="w-12 h-12 text-purple-600 mb-4" />
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      Code Sharing Made Easy
                    </h3>
                    <p className="text-gray-600">
                      Share your code snippets with beautiful syntax
                      highlighting and easy collaboration.
                    </p>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 text-white">
                      <Users className="w-8 h-8 mb-2" />
                      <p className="font-semibold">Collaborative</p>
                    </div>
                    <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 text-white">
                      <Heart className="w-8 h-8 mb-2" />
                      <p className="font-semibold">Open Source</p>
                    </div>
                  </div>
                </div>
                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-purple-200 rounded-full opacity-50"></div>
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-pink-200 rounded-full opacity-50"></div>
              </div>
            </div>

            {/* Right Side - About Content */}
            <div className="order-1 lg:order-2">
              <div className="prose prose-lg max-w-none">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Our Story
                </h2>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Snippit was born from a simple idea: code sharing should be
                  beautiful, fast, and effortless. As developers, we found
                  ourselves constantly sharing code snippets with colleagues,
                  friends, and the community, but existing solutions felt clunky
                  and outdated.
                </p>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  So we decided to build something better. Snippit combines
                  elegant design with powerful functionality, making it the
                  perfect tool for developers who care about both form and
                  function.
                </p>
                <p className="text-gray-700 mb-8 leading-relaxed">
                  Built with modern web technologies and a focus on user
                  experience, Snippit aims to be the go-to platform for code
                  sharing in the developer community.
                </p>

                <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                    <Users className="w-6 h-6 text-purple-600 mr-2" />
                    Meet the Team
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div>
                        <h4 className="font-semibold text-gray-900">
                          Durgesh Kapade
                        </h4>
                        <p className="text-gray-600 text-sm">
                          Co-Founder & Developer
                        </p>
                      </div>
                      <div className="flex items-center space-x-3">
                        <a
                          href="mailto:durgeshkapade26@gmail.com"
                          className="text-gray-500 hover:text-purple-600 transition-colors"
                        >
                          <Mail className="w-5 h-5" />
                        </a>
                        <a
                          href="https://github.com/durgeshkapade"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-500 hover:text-purple-600 transition-colors"
                        >
                          <Github className="w-5 h-5" />
                        </a>
                      </div>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div>
                        <h4 className="font-semibold text-gray-900">
                          Tejas Chaudhari
                        </h4>
                        <p className="text-gray-600 text-sm">
                          Co-Founder & Developer
                        </p>
                      </div>
                      <div className="flex items-center space-x-3">
                        <a
                          href="mailto:jaybalaji192@gmail.com"
                          className="text-gray-500 hover:text-purple-600 transition-colors"
                        >
                          <Mail className="w-5 h-5" />
                        </a>
                        <a
                          href="https://github.com/tejaschaudhari131"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-500 hover:text-purple-600 transition-colors"
                        >
                          <Github className="w-5 h-5" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Want to Contribute?</h3>
              <p className="text-purple-100 mb-6 max-w-2xl mx-auto">
                Snippit is open source and we welcome contributions from the
                community. Whether it's bug fixes, new features, or
                documentation improvements, every contribution matters.
              </p>
              <div className="flex justify-center space-x-4">
                <a
                  href="https://github.com/durgeshkapade/snipit"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                    View on GitHub
                  </button>
                </a>
                <a href="mailto:durgeshkapade26@gmail.com">
                  <button className="bg-purple-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-400 transition-colors">
                    Get in Touch
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default AboutPage;
