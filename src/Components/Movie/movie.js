import React from "react";

import "./movie.css";
import "../../global.css";

function Movie() {
  return (
    <section class="row">
      <div class="card">
        <div class="card__image">
          <img
            src="https://image.tmdb.org/t/p/w600_and_h900_bestv2/bLpIFiuWF1bKnBqi7LqnJcLHtN.jpg"
            alt="Thor Ragnarok"
          />
        </div>
        <div class="card__content">
          <div class="card__header">
            <h2>Thor: Ragnarok</h2>
          </div>
          <div class="card__body">
            <div class="card__meta">
              <div class="card__percentage">
                <span>75%</span>
              </div>
            </div>
            <div class="card__date">
              <p>03/11/2020</p>
            </div>
            <div class="card__desc">
              <p>
                Imprisoned on the planet Sakaar, Thor must race against time to
                return to Asgard and stop Ragnarok, the destruction of his
                world, at the hands of the powerful and ruthless villain Hela.
                Imprisoned on the planet Sakaar, Thor must race against time to
                return to Asgard and stop Ragnarok, the destruction of his
                world, at the hands of the powerful and ruthless villain Hela.
              </p>
            </div>
            <div class="card__footer">
              <ul class="card__genres">
                <li class="genre">Ação</li>
                <li class="genre">Aventura</li>
                <li class="genre">Fantasia</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Movie;
