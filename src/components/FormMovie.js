import React from "react";
import axios from "axios";

class FormMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      poster: "",
      comment: "",
    };
    this.onChange = this.onChange.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }
  //permet de changer les champs controlés du formulaires
  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }
  //empêcher le navigateur d’envoyer les données et de recharger la page lors du clic sur le bouton “envoyer”.
  // On va donc créer la méthode submitForm qui sera appelée lors de la soumission de notre formulaire.
  submitForm(e) {
    e.preventDefault();
    const url = "https://post-a-form.herokuapp.com/api/movies/";
    axios
      .post(url, this.state)
      .then((res) => res.data)
      .then((res) => {
        alert(`Film ajouté avec l'ID ${res.id} !`);
      })
      .catch((e) => {
        console.error(e);
        alert(`Erreur lors de l'ajout d'un film : ${e.message}`);
      });
  }

  render() {
    return (
      <div className="FormMovies">
        <h1>MON FILM PREFERE</h1>

        <form onSubmit={this.submitForm}>
          <fieldset>
            <legend>Informations</legend>
            <div className="form-data">
              <label htmlFor="title">Nom du film</label>
              <input
                type="text"
                id="title"
                name="title"
                onChange={this.onChange}
                value={this.state.lastname}
              />
            </div>

            <div className="form-data">
              <label htmlFor="poster">Poster</label>
              <input
                type="url"
                id="poster"
                name="poster"
                onChange={this.onChange}
                value={this.state.firstname}
              />
            </div>

            <div className="form-data">
              <label htmlFor="comment">comment</label>
              <input
                type="text"
                id="comment"
                name="comment"
                onChange={this.onChange}
                value={this.state.email}
              />
            </div>
            <hr />
            <div className="form-data">
              <input type="submit" value="Envoyer" />
            </div>
          </fieldset>
        </form>
      </div>
    );
  }
}

export default FormMovie;
