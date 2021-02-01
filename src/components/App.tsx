import * as React from "react";
import { AssetList } from './AssetList'
import { Dashboard } from './Dashboard'
import ErrorBoundary from './errorBoundary'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Asset, InitialStateType, AppContextInterface } from './constant';

const initialState: InitialStateType = {
  selectedList: []
};

// Create context object
export const AppContext = React.createContext<AppContextInterface | null>(null);

enum ActionType {
  ADD = "add",
  REMOVE = "remove"
}

type ACTIONTYPE =
  | { type: 'add', payload: Asset }
  | { type: 'remove', payload: Asset }

interface IReducer {
  type: ActionType;
  payload: Asset;
}


function reducer(state: typeof initialState, action: ACTIONTYPE): object {
  switch (action.type) {
    case 'add': {
      let newArray = state.selectedList;
      let foundCard = newArray.findIndex(item => item.athleteName === action.payload.athleteName);
      return {
        ...state,
        selectedList: [...state.selectedList, foundCard === -1 ? action.payload : null]
      };
    }
    case 'remove': {
      let newArray = state.selectedList;
      newArray.splice(newArray.findIndex(item => item.athleteName === action.payload.athleteName), 1);
      return {
        ...state,
        selectedList: newArray
      };
    }
    default:
      return state;
  }
}

function App() {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <AppContext.Provider value={{ state, dispatch }}>
            <AssetList />
          </AppContext.Provider>
        </Route>
        <Route path="/dashboard">
          <ErrorBoundary>
            <AppContext.Provider value={{ state, dispatch }}>
              <Dashboard />
            </AppContext.Provider>
          </ErrorBoundary>
        </Route>
      </Switch>
    </Router>
  );
}
export default App;