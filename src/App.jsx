import { useContext } from "react";
import Commentary from "./components/Commentary";
import Rate from "./components/Rate";
import { ReducerContext } from "./reducer/context";
import Checkbox from "./components/Checkbox";

function App() {
  const [state] = useContext(ReducerContext);

  return (
    <main>
      {state.blocs?.map((item, blocId) => (
        <section key={item.id}>
          <h2>
            Bloc {blocId + 1} - {item.name}
          </h2>
          <article>
            {item.evaluations.map((evaluation, evaluationId) => (
              <div key={evaluationId}>
                <div style={{ display: "grid" }}>
                  {evaluation.checkboxes.map((checkbox, checkboxId) => (
                    <Checkbox
                      key={checkboxId}
                      label={checkbox.name}
                      value={checkbox.checked}
                      blocId={blocId}
                      evaluationId={evaluationId}
                      checkboxId={checkboxId}
                    />
                  ))}
                </div>
                {/* <Commentary value={evaluation.comment} blocId={blocId} evaluationId={evaluationId} /> */}
                <Rate value={evaluation.note} blocId={blocId} evaluationId={evaluationId} />
              </div>
            ))}
            <Commentary value={item.comment} blocId={blocId} evaluationId={undefined} />
            <p>Total : {item.total}/20</p>
          </article>
        </section>
      ))}
    </main>
  );
}

export default App;
