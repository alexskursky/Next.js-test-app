
export default function About() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <main className="text-center p-4">
        <h1 className="text-3xl font-bold mb-6">About Us</h1>
        <p className="mb-4 text-lg leading-relaxed">
          Welcome to our application! This project is built using Next.js and Tailwind CSS, 
          offering a modern and responsive design. The application demonstrates dynamic routing, 
          reusable components, and state management for efficient development workflows.
        </p>
        <p className="mb-4 text-lg leading-relaxed">
          It includes a dynamic list of items loaded from a JSON file, interactive components such as a 
          slider, and multiple pages with a clear navigation system. The purpose of this app is to showcase 
          how to combine simplicity and functionality in a web application.
        </p>
        <p className="mb-4 text-lg leading-relaxed">
          We strive to deliver high-quality, user-friendly interfaces, and this project is a step towards that vision. 
          Feel free to explore the app and see how it works. If you have any questions, please don’t hesitate to contact us.
        </p>
      </main>
    </div>
  );
}
