// import logo from './logo.svg';
import fotoHV from "./images/foto-perfil.jpg";
import PresentationCard from "./components/PresentationCard";
import TextCard from "./components/TextCard";
import "./styles/styles.css";

function App() {
  return (
    <div className="bg-white rounded-lg py-4 px-5 h-full overflow-auto">
      <div className="grid m-3 justify-items-center md:grid-cols-2 bg-gray-200">
        <PresentationCard
          profImg={fotoHV}
          profName="Juan Felipe Zora Zuluaga"
          profRole="Backend Developer"
        />
      </div>
      <div className="grid m-3 justify-items-center md:grid-cols-2">
        <TextCard
          title="Perfil"
          text="Soy una persona responsable, honesta, eficiente, dinámica, creativa, analítica, sociable y con sentido de liderazgo. Poseo una gran capacidad lógica, comunicativa y de trabajo en equipo; puedo aprender rápido y adaptarme a mi entorno."
        />
        <TextCard
          title="Vida Académica"
          text="Estudiante del séptimo semestre (créditos acumulados: 119) del pregrado de Ingeniería de Sistemas de la Universidad de Antioquia."
        />
        <TextCard
          title="Habilidades"
          text="Principios y calidad de programación enfocada al paradigma POO. Modelación de bases de datos relacionales. Programación en lenguajes: Java, Javascript, C#, PL/SQL. Manejo de frameworks: JavaFX, Angular."
        />
        <TextCard
          title="Experiencia Laboral"
          text="Actualmente soy empleado para la empresa Talent.com y desde hace tres meses desempeño el rol de Desarrollador Junior con la función principal de hacer Web Scrapping usando el lenguaje de programación JavaScript."
        />
        <TextCard
          title="Cursos realizados"
          text="CCNA Routing and Switching: Introducción a redes (Cisco Networking Academy). Taller de Escritores de La Escuelita Viajera, Versión 12-2017. Concurso de Debate Crítico organizado por la Universidad EAFIT (año 2017)."
        />
        <TextCard
          title="Iidiomas"
          text="Manejo buenas habilidades comunicativas con el lenguaje de Inglés, con un dominio del 60% en lectura, escritura y escucha."
        />
        <TextCard
          title="Hobbies"
          text="Me gusta mucho ver películas de ciencia ficción, drama, acción. También me gusta ver series y transmisiones de esports. Mis deportes favoritos para practicar son el voleibol y el tenis de mesa. Me gusta salir pasar tiempo con mis amigos y familia."
        />
        <TextCard
          title="Información de contacto"
          text="Dirección: Calle 105A #64D 22 - Celular: +57 3147987352 - Correo electrónico: juanfzz2001@gmail.com - Edad: 20 años - C.C: 1000416417 - Linkedin: linkedin.com/in/juan-felipe-zora - Github: https://github.com/felipezora"
        />
      </div>
    </div>
  );
}

export default App;
