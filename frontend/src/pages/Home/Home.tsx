// src/pages/Home/Home.tsx
import MainLayout from '../../components/layout/MainLayout';

const Home = () => {
  return (
    <MainLayout>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Welcome to MyApp</h1>
        <p className="text-lg text-gray-700 mb-4">
          This is a sample home page using the new component structure.
        </p>
        <div className="bg-blue-100 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-3">Getting Started</h2>
          <p className="mb-4">
            This application uses a modular component structure for better organization and reusability.
          </p>
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded transition-colors">
            Learn More
          </button>
        </div>
      </div>
    </MainLayout>
  );
};

export default Home;