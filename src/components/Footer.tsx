const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4 text-center">
        <p className="mb-2">
          © {new Date().getFullYear()} Cindy Magalhães - Psicoterapeuta Clínica
        </p>
        <p className="text-gray-400 text-sm">
          São Gonçalo, RJ | CRP: 05/XXXXX
        </p>
        <div className="mt-4">
          <a
            href="https://wa.me/5521986908094"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-green-500 text-white px-6 py-2 rounded-full hover:bg-green-600 transition-colors mt-4"
          >
            Fale comigo no WhatsApp
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

