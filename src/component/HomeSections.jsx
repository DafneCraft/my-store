import { Section } from "lucide-react";

export default function HomeSections() {
  return (
    <div>
      {/*Section 1 */}
      <div className="flex justify-center p-2">
        <Section1Element
          image="/Images0.jpg"
          title="Razon 1"
          content="This is the first section of the home page."
        />
        <Section1Element
          image="/Images0.jpg"
          title="Razon 2"
          content="This is the first section of the home page."
        />
        <Section1Element
          image="/Images0.jpg"
          title="Razon 3"
          content="This is the first section of the home page."
        />
        <Section1Element
          image="/Images0.jpg"
          title="Razon 4"
          content="This is the first section of the home page."
        />
      </div>
      {/*Section 2 */}
      <div className="flex flex-col items-center justify-center p-2 bg-gray-400">
        <h2>Categorias</h2>
        <div className="flex flex-wrap justify-center">
          <Section2Element image="/Images0.jpg" title="Categoria 1" />
          <Section2Element image="/Images0.jpg" title="Categoria 2" />
          <Section2Element image="/Images0.jpg" title="Categoria 3" />
          <Section2Element image="/Images0.jpg" title="Categoria 4" />
        </div>
      </div>
      {/*Section 3 */}
      <div className="flex flex-col items-center justify-center p-2">
        <h2>¿Por que elegirnos?</h2>
        <div>
          <Section3Element
            image="/Images0.jpg"
            title="Razon 1"
            content="This is the first section of the home page."
          />
          <Section3Element
            image="/Images0.jpg"
            title="Razon 2"
            content="This is the first section of the home page."
          />
          <Section3Element
            image="/Images0.jpg"
            title="Razon 3"
            content="This is the first section of the home page."
          />
        </div>
      </div>
      {/*Section 4 */}
      <div className="flex flex-col items-left justify-center p-2 bg-gray-400">
        <h2>Mejor Vendidos</h2>
        <p>Echa un vistazo a nuestro productos mas vendidos</p>
        <div>
          <p>Productos (slides)</p>
        </div>
      </div>
      {/*Section 5 */}
      <div className="flex flex-col items-center justify-center p-2">
        <h2>Testimonios</h2>
        <div>
          <p>Testimonios (slides)</p>
        </div>
      </div>
      {/*Section 6 */}
      <div className="flex flex-col items-center justify-center p-2 bg-gray-400">
        <h2>FQA</h2>
        <p>Todas las dudas y preguntas frecuentes.</p>
      </div>
    </div>
  );
}

function Section1Element({ image, title, content }) {
  return (
    <div className="flex flex-col items-center justify-center p-4">
      <img src={image} alt="" />
      <h2>{title}</h2>
      <p>{content}</p>
    </div>
  );
}

function Section2Element({ image, title }) {
  return (
    <div className="flex flex-col items-center justify-center p-4">
      <img src={image} alt="" />
      <h2>{title}</h2>
    </div>
  );
}

function Section3Element({ image, title, content }) {
  return (
    <div className="flex flex-col items-center justify-center p-4">
      <img src={image} alt="" />
      <h2>{title}</h2>
      <p>{content}</p>
    </div>
  );
}

function Section4Element({ image, title, price, starts }) {
  return (
    <div className="flex flex-col items-center justify-center p-4">
      <img src={image} alt="" />
      <h2>{title}</h2>
      <p>{price}</p>
      <p>{starts}</p>
    </div>
  );
}
