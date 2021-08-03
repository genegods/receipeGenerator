import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import tryImage from "../../asserts/images/food.jpg";
import { loadData } from "../../redux/receipeRedux/receipe.actions";
import { RECEIPE_KEY } from "../../redux/receipeRedux/receipe.reducers";
import SpinnerApp from "../spinner/SpinnerApp";

const ReceipeApp = () => {
  // initialize useDispatch
  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadData());
  }, []);

  // view store
  let viewReceipe = useSelector((state) => {
    return state[RECEIPE_KEY];
  });

  // handle generate button
  let handleBtn = () =>{
    dispatch(loadData());

  }

  return (
    <React.Fragment>
      {/* <pre>{JSON.stringify(viewReceipe)}</pre> */}

     {
       (viewReceipe.loading === true)? <SpinnerApp/>:
       <React.Fragment>
          <div className="card">
        <div className="card-header centered">
          <h5>RANDOM FOOD RECEIPE GENERATOR</h5>
        </div>

        <div className="card-body">
          {viewReceipe.data.length === 0 ? null : (
            <React.Fragment>
              {viewReceipe.data.meals.map((item) => {
                return (
                  <div key={item.idMeal}>
                    <div className="receipeContainer">
                      <div className="topContainer">
                        <div className="leftContainer">
                          <h6>INGREDIENTS</h6>
                          <ul>
                            <li>{ item.strMeasure1 } { item.strIngredient1 }</li>
                            <li>{ item.strMeasure2 } { item.strIngredient2 }</li>
                            <li>{ item.strMeasure3 } { item.strIngredient3 }</li>
                            <li>{ item.strMeasure4 } { item.strIngredient4 }</li>
                            <li>{ item.strMeasure5 } { item.strIngredient5 }</li>
                            <li>{ item.strMeasure6 } { item.strIngredient6 }</li>
                            <li>{ item.strMeasure7 } { item.strIngredient7 }</li>
                            <li>{ item.strMeasure8 } { item.strIngredient8 }</li>
                            <li>{ item.strMeasure9 } { item.strIngredient9 }</li>
                            <li>{ item.strMeasure10 } { item.strIngredient10 }</li>
                            <li>{ item.strMeasure11 } { item.strIngredient11 }</li>
                            <li>{ item.strMeasure12 } { item.strIngredient12 }</li>
                            <li>{ item.strMeasure13 } { item.strIngredient13 }</li>
                            <li>{ item.strMeasure14 } { item.strIngredient14 }</li>
                            <li>{ item.strMeasure15 } { item.strIngredient15 }</li>
                            <li>{ item.strMeasure16 } { item.strIngredient16 }</li>
                            <li>{ item.strMeasure17 } { item.strIngredient17 }</li>
                            <li>{ item.strMeasure18 } { item.strIngredient18 }</li>
                            <li>{ item.strMeasure19 } { item.strIngredient19 }</li>
                            <li>{ item.strMeasure20 } { item.strIngredient20 }</li>
                         
                           
                          </ul>
                        </div>

                        <div className="rightContainer">
                          <div className="btnContainer">
                            <button className="btns" onClick={handleBtn}>GENERATE</button>
                          </div>

                          <div className="imgContainer centered">
                            <img src={item.strMealThumb} alt="" />
                          </div>

                          <h6>{item.strMeal}</h6>
                        </div>
                      </div>
                      <div className="bottomContainer">
                        <div className="methodContainer">
                          <h6>METHOD</h6>
                          <article>
                            <p>{item.strInstructions}</p>
                          </article>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </React.Fragment>
          )}
        </div>
      </div>
       </React.Fragment>
     }
    </React.Fragment>
  );
};

export default ReceipeApp;
