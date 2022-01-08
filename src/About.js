import React, {Component} from 'react'
import "./About.css"

class About extends Component {

  render() {

    return (
        <div className="container">
        <p>
            ToDo App omogucava dodavanje novog ToDo.-a, klikom <br></br>
            na dugme ADD TODO. Moguce je obrisati i editovati svaki zadatak <br></br>
            koji postoji u listi. Klikom na bilo koji zadatak, pokrece se toggle <br></br>
            opcija, koja nakon prvog klika precrta ceo zadatak, sto stvara  <br></br>
            efekat da je zadatak obavljen. Klikom na precrtani zadatak, on ponovo postaje neprecrtan.
        </p>
        </div>

    )
  }
}


export default About;