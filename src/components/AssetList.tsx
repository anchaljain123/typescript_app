import React, { useContext, useEffect, useState } from "react";
import { AppContext } from './App'
import { SEED_ASSETS } from './constant';
import Card from './card';
import { useHistory } from "react-router-dom";
import { listWrapperStyles } from './constant/style';

export const AssetList = () => {
  let history = useHistory();
  const [ctr, setCtr] = useState(0);
  const { dispatch } = useContext(AppContext);

  useEffect(() => {
    if (ctr === SEED_ASSETS.length) {
      history.push('/dashboard')
    }
  }, [ctr])

  const handleList = (action: string, data: object) => {
    setCtr(ctr + 1)
    dispatch({ type: action, payload: data })
  }

  return (<div className="card-stacks" style={listWrapperStyles}>
    {
      SEED_ASSETS.reverse().map((item, index) => <Card key={index} itemNo={index} detail={item} handleList={handleList} />)
    }
  </div>)
}