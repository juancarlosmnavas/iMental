import Image from 'next/image';

const styles = {
  text: {
    fontSize: '25px',
  },
}

export default function Slogan() {
  return (
    <div className="bg-gray-100 py-3" style={{ backgroundColor: '#fff'}}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <h1 className="text-5xl font-bold text-pink-400 text-center" style={{color: 'BLACK', fontWeight: 'bold' }}>Piensa en tí.</h1>
      </div>
    </div>
  );
}
