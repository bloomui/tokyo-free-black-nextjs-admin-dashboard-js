import { NebulaFighterTheme } from './schemes/NebulaFighterTheme';
import { DarkSpacesTheme } from './schemes/DarkSpacesTheme';
import { GreenFieldsTheme } from './schemes/GreenFieldsTheme';

const themeMap = {
  NebulaFighterTheme,
  DarkSpacesTheme,
  GreenFieldsTheme
};

export function themeCreator(theme) {
  return themeMap[theme];
}
