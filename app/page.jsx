import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Card from '../components/Card';

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <main className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <Card title="Card 1" description="Description of card 1" />
        <Card title="Card 2" description="Description of card 2" />
        <Card title="Card 3" description="Description of card 3" />
      </main>
    </>
  );
}
