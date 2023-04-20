import Checkbox from "./components/Checkbox";
import Commentary from "./components/Commentary";
import Rate from "./components/Rate";

function App() {
  return (
    <div className="main">
      {/* <Rate /> */}

      <section>
        <h2>Bloc 1: HTML</h2>
        <article>
          <div>
            <Checkbox label="Maquette" />
            <Rate />
          </div>
          <hr />
          <div>
            <Checkbox label="Navigation" />
            <Rate />
          </div>
          <hr />
          <div>
            <Checkbox label="Structure HTML" />
            <Rate />
          </div>
          <hr />
          <Commentary />
        </article>
      </section>

      <section>
        <h2>Bloc 2: CSS</h2>
        <article>
          <Checkbox label="Font importer" />
          <Rate />
          <hr />
          <Checkbox label="Texte aéré" />
          <Rate />
          <hr />
          <Checkbox label="Animation" />
          <Rate />
          <Commentary />
        </article>
      </section>

      <section>
        <h2>
          Bloc 3: Accessibilité & <br />
          Référencement
        </h2>
        <article>
          <Checkbox label="W3C Validator" />
          <Rate />
          <hr />
          <Checkbox label="Balise sementique" />
          <Checkbox label="Balise meta" />
          <Rate />
          <hr />
          <h3>Compatibilité Navigateur</h3>
          <Checkbox label="Chrome" />
          <Checkbox label="Firefox" />
          <Checkbox label="Safari" />
          <Rate />
          <hr />
          <Checkbox label="Responsive" />
          <Checkbox label="Media Query" />
          <Rate />
          <Commentary />
        </article>
      </section>

      <section>
        <h2>Bloc 4: JS Front</h2>
        <article>
          <Checkbox label="API" />
          <Checkbox label="Sessions" />
          <Rate />
          <hr />
          <Checkbox label="Class" />
          <Checkbox label="Module" />
          <Rate />
          <hr />
          <Checkbox label="DOM" />
          <Rate />
          <Commentary />
        </article>
      </section>

      <section>
        <h2>Bloc 5: Back BDD</h2>
        <article>
          <Checkbox label="UML" />
          <Rate />
          <hr />
          <Checkbox label="Structure Coherrante" />
          <Rate />
          <hr />
          <Checkbox label="exportation / importation" />
          <Rate />
          <hr />
          <Checkbox label="filtre tri" />
          <Rate />
          <Commentary />
        </article>
      </section>
    </div>
  );
}

export default App;
