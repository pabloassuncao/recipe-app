import React from 'react';
import { useSelector } from 'react-redux';
import shareIcon from '../../images/shareIcon.svg';
import whiteHeartIcon from '../../images/whiteHeartIcon.svg';
import blackHeartIcon from '../../images/blackHeartIcon.svg';

export default function HeaderDetails() {
  const [favorite, setFavorite] = React.useState(false);
  const { detail } = useSelector((state) => state);
  const key = Object.keys(detail)[0];
  const recipe = detail[key][0];
  const path = window.location.pathname.split('/')[1];
  let ref = null;

  if (path === 'comidas') {
    ref = { strTitle: 'strMeal', strThumb: 'strMealThumb', strCategory: 'strCategory' };
  }
  if (path === 'bebidas') {
    ref = { strTitle: 'strDrink', strThumb: 'strDrinkThumb', strCategory: 'strCategory' };
  }
  return (
    <section>
      <div>
        <img
          src={ recipe[ref.strThumb] }
          alt="test"
          data-testid="recipe-photo"
          className="w-50"
        />
      </div>
      <div className="d-flex">
        <div>
          <h2 data-testid="recipe-title">{ recipe[ref.strTitle] }</h2>
          <h3 data-testid="recipe-category">{ recipe[ref.strCategory] }</h3>
        </div>
        <div>
          <button
            type="button"
            className="bg-transparent border-0"
          >
            <img
              src={ shareIcon }
              data-testid="share-btn"
              alt="share icon"
            />
          </button>
          <button
            type="button"
            className="bg-transparent border-0"
            data-testid="favorite-btn"
            onClick={ () => setFavorite(!favorite) }
            src={ favorite ? 'blackHeartIcon' : 'whiteHeartIcon' }

          >
            <img
              src={ favorite ? blackHeartIcon : whiteHeartIcon }
              alt="favorite icon"
            />
          </button>
        </div>
      </div>
    </section>
  );
}
