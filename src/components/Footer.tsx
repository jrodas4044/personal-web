import Items from "@/components/menu/Items.json";
import styles from "@/styles/Footer.module.css"; // Importa el archivo CSS

export default function Footer() {
  return (
    <>
      <footer className="relative z-50 bg-gradient-to-r from-gray-950 to-sky-950 py-6 w-screen">
        <div className="flex flex-col justify-between items-center mx-auto px-6 container">
          <div className="relative mb-2">
            <h2 className="inline-block relative mb-2 px-8 font-bold text-center text-lg">
              Jonhathan Rolando Rodas Lopez
            </h2>
            <span className="block mb-2 font-normal text-center text-sm">
              Software Developer
            </span>
            <span className={`${styles.mask}`}></span>
          </div>

          <div>
            <nav>
              <ul className="flex space-x-6 mt-4">
                {Items.map(({ href, label }, index) => (
                  <li key={index} className="px-2 rounded">
                    <a
                      href={href}
                      className="text-gray-300 text-sm hover:text-white hover:underline transition duration-300 ease-in-out"
                      title={label}
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </footer>
    </>
  );
}
