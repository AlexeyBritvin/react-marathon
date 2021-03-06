import React from 'react';
import cn from 'classnames';
import { PokemonRequest } from '../../pages/Pokedex/models/pokemon.model';
import Heading from '../Heading/Heading';

import s from './PokemonCard.module.scss';

interface PokemonCardProps {
  pokemon: PokemonRequest;
}

const PokemonCard: React.FC<PokemonCardProps> = ({ pokemon: { name, stats, types, img } }) => {
  const mainType = types[0];
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
            <span className={cn(s.label, s[`label-${type}` as keyof typeof s])} key={type}>
              {type}
            </span>
          ))}
        </div>
      </div>
      <div className={cn(s.pictureWrap, s[`pictureWrap-${mainType}` as keyof typeof s])}>
        <img src={img} alt={name} />
      </div>
    </div>
  );
};

export default PokemonCard;
