import './app.scss';

import PrizeWinners from "./components/prizewinners/PrizeWinners";

const App = () => {
  return (
    <div>
      <section className="Homepage">
        <PrizeWinners/>
      </section>

      <section className="Banana">
        Banana
      </section>
      </div>
  )
}

export default App
