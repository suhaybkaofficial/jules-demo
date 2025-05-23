import Image from "next/image";

export default function Home() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
      {/* Hero Section */}
      <section className="bg-background py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-foreground">
            Revolutionize Your Workflow
          </h1>
          <p className="text-xl text-muted-foreground mt-4">
            Our SaaS solution helps you work smarter, not harder.
          </p>
          <button className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-4 rounded-lg mt-8 text-lg">
            Get Started Free
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-8">Key Features</h2>
          <ul className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
            <li className="bg-card p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-card-foreground">
                Automated Task Management
              </h3>
              <p className="text-muted-foreground mt-2">
                Streamline your processes with intelligent automation.
              </p>
            </li>
            <li className="bg-card p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-card-foreground">
                Seamless Collaboration
              </h3>
              <p className="text-muted-foreground mt-2">
                Work together effortlessly with integrated communication tools.
              </p>
            </li>
            <li className="bg-card p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-card-foreground">
                Powerful Analytics
              </h3>
              <p className="text-muted-foreground mt-2">
                Gain valuable insights to drive informed decisions.
              </p>
            </li>
          </ul>
        </div>
      </section>

      {/* Contact Us Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-foreground text-center mb-8">
            Get in Touch
          </h2>
          <form className="max-w-lg mx-auto p-8 bg-card rounded-lg shadow-md">
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full p-3 border border-border rounded-md focus:ring-primary focus:border-primary"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full p-3 border border-border rounded-md focus:ring-primary focus:border-primary"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="w-full p-3 border border-border rounded-md focus:ring-primary focus:border-primary"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-primary text-primary-foreground hover:bg-primary/90 py-3 px-4 rounded-md mt-6"
            >
              Submit
            </button>
          </form>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-muted py-8 text-center">
        <div className="container mx-auto px-4">
          <p className="text-sm text-gray-500">
            © 2023 Your Company Name. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
