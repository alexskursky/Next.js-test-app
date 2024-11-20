import Slider from '@/components/Slider';

export default function Home() {
  return (
    <div className="container mx-auto p-4 mt-20">
      <main className="text-center">
        <h1 className="text-4xl font-bold mb-6">Welcome to Our Application!</h1>
        <p className="text-lg mb-8 leading-relaxed">
          This is the main page of your application, showcasing the best features, interactive components, and a sleek design. 
          Scroll down to explore our dynamic slider and enjoy the seamless experience we’ve built for you.
        </p>
        <Slider />
      </main>
    </div>
  );
}
