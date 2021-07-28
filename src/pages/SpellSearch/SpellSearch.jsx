import React, { useState } from "react";
import SearchForm from '../../components/SearchForm/SearchForm';
import SpellCard from '../../components/SpellCard/SpellCard'
import { spellSearch } from "../../services/api-calls";

const SpellSearch = () => {
  const [spells, setSpells] = useState([]);

  const handleSpellSearch = async (formData) => {
    const spellData = await spellSearch(formData);
    setSpells(spellData.results);
  };

  return (
    <>
      <h3>Such Spellz</h3>
      <SearchForm handleSpellSearch={handleSpellSearch}/>
      {spells.length ? 
      <>
        {spells.map(spell => 
          <SpellCard 
            spell={spell}
            key={spell.index}
          />
        )}
      </>
      :
      <h3>Please search for a spell!</h3>
      }
    </>
  );
};

export default SpellSearch;