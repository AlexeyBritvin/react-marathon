import React from 'react';
import cn from 'classnames';
import { Pokemon } from '../../pages/Pokedex/models/pokemon.model';
import Heading from '../Heading/Heading';

import s from './PokemonCard.module.scss';

interface PokemonCardProps {
  pokemon: Pokemon;
}

const PokemonCard: React.FC<PokemonCardProps> = ({ pokemon: { name, stats, types, img } }) => {
  return (
    <div className={s.root}>
      <div className={s.infoWrap}>
        <Heading type="xs" className={s.titleName}>
          {name}
        </Heading>
        <div className={s.statWrap}>
          <div className={s.statItem}>
            <div className={s.statValue}>{stats.attack}</div>
            Attack
          </div>
          <div className={s.statItem}>
            <div className={s.statValue}>{stats.defense}</div>
            Defense
          </div>
        </div>

        <div className={s.labelWrap}>
          {types.map((type) => (
            <span className={cn(s.label, s[type])} key={type}>
              {type}
            </span>
          ))}
        </div>
      </div>
      <div className={s.pictureWrap}>
        <img src={img} alt={name} />
      </div>
    </div>
  );
};

export default PokemonCard;
