import React from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom";

import Language from "./views/language";
import CreateLanguage from "./views/create-language";
import Categories from "./views/categories";

import LanguageWCategory from "./views/categories-w-languages";

import './css/vendor/bootstrap/css/bootstrap.min.css';
import './css/main.css';

const App: React.FC = () => (
  <BrowserRouter>
      <Switch>
          <Route path="/languages" exact component={Language}/>
          <Route path="/languages/new" exact component={CreateLanguage}/>
          <Route path="/languages/:id/edit" exact component={CreateLanguage}/>
          <Route path="/categories" exact component={Categories} />
          <Route path="/category/:id" exact component={LanguageWCategory}/>
      </Switch>
  </BrowserRouter>
  
);

export default App;
