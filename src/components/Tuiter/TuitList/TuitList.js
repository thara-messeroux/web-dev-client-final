import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {findAllTuits} from "../actions/tuits-actions";
import TuitListItem from "./TuitListItem";

const TuitList = () => {
  const tuits = useSelector(state => state.tuitsReducer);
  console.log("tuits are ", tuits)

  const dispatch = useDispatch();
  useEffect(() => findAllTuits(dispatch),[]);
  return (
      <ul className="ttr-tuits list-group">
        {
          tuits.map && tuits.map(tuit =>
              <TuitListItem key={tuit._id} tuit={tuit}/>
          )
        }
      </ul>
  );
};

export default TuitList;
