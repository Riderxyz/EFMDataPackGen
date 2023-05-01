import { WeaponType } from './weaponType.enum';

export interface weaponProperties {
  weapon_id: string;
  type: WeaponType;
  attributes: Attributes;
}

export interface Attributes {
  common?: AttributeValues;
  one_hand?: AttributeValues;
  two_hand?: AttributeValues;
}

export interface AttributeValues {
  armor_negation: number;
  impact: number;
  max_strikes: number;
  damage_bonus: number;
  speed_bonus:number;
}

export const newWeaponProperties = (): weaponProperties => {
  return {
    weapon_id: '',
    type: WeaponType.AXE,
    attributes: {},
  };
};
