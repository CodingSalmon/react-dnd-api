import React from 'react';
import { Route } from 'react-router-dom';

import NavBar from '../../components/NavBar/NavBar';
import ClassList from '../ClassList/ClassList';
import ClassDetails from '../ClassDetails/ClassDetails';
import MonsterList from '../MonsterList/MonsterList';
import MonsterDetails from '../MonsterDetails/MonsterDetails';
import SpellSearch from '../SpellSearch/SpellSearch';
import SpellDetails from '../SpellDetails/SpellDetails';

import './App.css';

const App = () => {
  const navItems = [
    {url: "/class-list", name: "Class List"}, 
    {url: "/monster-list", name: "Scary Monsters"}, 
    {url: "/spell-search", name: "Search for Spells"}
  ];

  return (
    <>
      <NavBar navItems={navItems}/>

      <Route exact path='/class-list' render={() =>
        <ClassList />
	    }/>

      <Route exact path='/class' render={() => 
        <ClassDetails />
      }/>

      <Route exact path='/monster-list' render={() =>
        <MonsterList />
      }/>

      <Route exact path='/monster' render={() => 
        <MonsterDetails />
      }/>

      <Route exact path='/spell-search' render={() => 
        <SpellSearch />	
      }/>

      <Route exact path='/spell/:name' render={() =>  
        <SpellDetails />
      }/>
    </>
  );
};

export default App;