import { useContext } from "react";
import Commentary from "./components/Commentary";
import Rate from "./components/Rate";
import { ReducerContext } from "./reducer/context";
import Checkbox from "./components/Checkbox";

function App() {
  const  [state, dispatch] = useContext(ReducerContext);

  return (
    <main>
      {state.blocs.map((item, blocId) => (
        <section key={item.id}>
          <h2>Bloc {blocId+1} - {item.name}</h2>
          <article>
            {item.evaluations.map((evaluation, evaluationId) => (
              <>
              <div key={evaluation.id} style={{border: "1px solid blue"}}>
                <section style={{display:"grid", border:"none"}}>
                {evaluation.checkboxes.map((checkbox, checkboxId) => (
                  <Checkbox key={checkboxId} label={checkbox.name} value={checkbox.checked} blocId={blocId} evaluationId={evaluationId} checkboxId={checkboxId} />
                ))}
                </section>
                <textarea value={evaluation.comment} rows={10} cols={50} onChange={(e) => dispatch({type:"commentary", blocs:blocId, evaluation:evaluationId, value:e.target.value})} />
                <Rate value={evaluation.note} blocId={blocId} evaluationId={evaluationId} />
              </div>
              <hr />
              </>
            ))}
            <p>Total : {item.total}/20</p>
            <textarea value={item.comment} rows={10} cols={50} onChange={(e) => dispatch({type:"commentaryBloc", blocs:blocId, value:e.target.value})} />
          </article>
        </section>

      ))}
    </main>
  );
}

export default App;
