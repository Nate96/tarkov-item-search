import { GraphQLResolveInfo } from 'graphql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export class Achievement {
  __typename?: 'Achievement';
  description?: Maybe<Scalars['String']['output']>;
  hidden: Scalars['Boolean']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  playersCompletedPercent: Scalars['Float']['output'];
};

export class Ammo {
  __typename?: 'Ammo';

  accuracyModifier?: Maybe<Scalars['Float']['output']>;
  ammoType: Scalars['String']['output'];
  armorDamage: Scalars['Int']['output'];
  caliber?: Maybe<Scalars['String']['output']>;
  damage: Scalars['Int']['output'];
  fragmentationChance: Scalars['Float']['output'];
  heavyBleedModifier: Scalars['Float']['output'];
  initialSpeed?: Maybe<Scalars['Float']['output']>;
  item: Item;
  lightBleedModifier: Scalars['Float']['output'];
  penetrationChance: Scalars['Float']['output'];
  penetrationPower: Scalars['Int']['output'];
  penetrationPowerDeviation?: Maybe<Scalars['Float']['output']>;
  projectileCount?: Maybe<Scalars['Int']['output']>;

  recoilModifier?: Maybe<Scalars['Float']['output']>;
  ricochetChance: Scalars['Float']['output'];
  stackMaxSize: Scalars['Int']['output'];
  staminaBurnPerDamage?: Maybe<Scalars['Float']['output']>;
  tracer: Scalars['Boolean']['output'];
  tracerColor?: Maybe<Scalars['String']['output']>;
  weight: Scalars['Float']['output'];
};

export class ArmorMaterial {
  __typename?: 'ArmorMaterial';
  destructibility?: Maybe<Scalars['Float']['output']>;
  explosionDestructibility?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  maxRepairDegradation?: Maybe<Scalars['Float']['output']>;
  maxRepairKitDegradation?: Maybe<Scalars['Float']['output']>;
  minRepairDegradation?: Maybe<Scalars['Float']['output']>;
  minRepairKitDegradation?: Maybe<Scalars['Float']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export class AttributeThreshold {
  __typename?: 'AttributeThreshold';
  name: Scalars['String']['output'];
  requirement: NumberCompare;
};

export class Barter {
  __typename?: 'Barter';
  id: Scalars['ID']['output'];
  level: Scalars['Int']['output'];
  requiredItems: Array<Maybe<ContainedItem>>;

  rewardItems: Array<Maybe<ContainedItem>>;


  taskUnlock?: Maybe<Task>;
  trader: Trader;
};

export class BossEscort {
  __typename?: 'BossEscort';
  amount?: Maybe<Array<Maybe<BossEscortAmount>>>;
  boss: MobInfo;


};

export class BossEscortAmount {
  __typename?: 'BossEscortAmount';
  chance: Scalars['Float']['output'];
  count: Scalars['Int']['output'];
};

export class BossSpawn {
  __typename?: 'BossSpawn';
  boss: MobInfo;
  escorts: Array<Maybe<BossEscort>>;


  spawnChance: Scalars['Float']['output'];
  spawnLocations: Array<Maybe<BossSpawnLocation>>;
  spawnTime?: Maybe<Scalars['Int']['output']>;
  spawnTimeRandom?: Maybe<Scalars['Boolean']['output']>;
  spawnTrigger?: Maybe<Scalars['String']['output']>;
  switch?: Maybe<MapSwitch>;
};

/**
 * The chances of spawning in a given location are
 * very rough estimates and may be incaccurate
 */
export class BossSpawnLocation {
  __typename?: 'BossSpawnLocation';
  chance: Scalars['Float']['output'];
  name: Scalars['String']['output'];
  spawnKey: Scalars['String']['output'];
};

export class ContainedItem {
  __typename?: 'ContainedItem';
  attributes?: Maybe<Array<Maybe<ItemAttribute>>>;
  count: Scalars['Float']['output'];
  item: Item;
  quantity: Scalars['Float']['output'];
};

export class Craft {
  __typename?: 'Craft';
  duration: Scalars['Int']['output'];
  id: Scalars['ID']['output'];
  level: Scalars['Int']['output'];
  requiredItems: Array<Maybe<ContainedItem>>;
  requiredQuestItems: Array<Maybe<QuestItem>>;

  rewardItems: Array<Maybe<ContainedItem>>;


  station: HideoutStation;
  taskUnlock?: Maybe<Task>;
};

export class FleaMarket implements Vendor {
  __typename?: 'FleaMarket';
  enabled: Scalars['Boolean']['output'];
  minPlayerLevel: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  normalizedName: Scalars['String']['output'];
  reputationLevels: Array<Maybe<FleaMarketReputationLevel>>;
  sellOfferFeeRate: Scalars['Float']['output'];
  sellRequirementFeeRate: Scalars['Float']['output'];
};

export class FleaMarketReputationLevel {
  __typename?: 'FleaMarketReputationLevel';
  maxRep: Scalars['Float']['output'];
  minRep: Scalars['Float']['output'];
  offers: Scalars['Int']['output'];
};

export class GameProperty {
  __typename?: 'GameProperty';
  arrayValue?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  key: Scalars['String']['output'];
  numericValue?: Maybe<Scalars['Float']['output']>;
  objectValue?: Maybe<Scalars['String']['output']>;
  stringValue?: Maybe<Scalars['String']['output']>;
};

export enum HandbookCategoryName {
  Ammo = 'Ammo',
  AmmoPacks = 'AmmoPacks',
  AssaultCarbines = 'AssaultCarbines',
  AssaultRifles = 'AssaultRifles',
  AssaultScopes = 'AssaultScopes',
  AuxiliaryParts = 'AuxiliaryParts',
  Backpacks = 'Backpacks',
  Barrels = 'Barrels',
  BarterItems = 'BarterItems',
  Bipods = 'Bipods',
  BodyArmor = 'BodyArmor',
  BoltActionRifles = 'BoltActionRifles',
  BuildingMaterials = 'BuildingMaterials',
  ChargingHandles = 'ChargingHandles',
  Collimators = 'Collimators',
  CompactCollimators = 'CompactCollimators',
  Drinks = 'Drinks',
  ElectronicKeys = 'ElectronicKeys',
  Electronics = 'Electronics',
  EnergyElements = 'EnergyElements',
  Eyewear = 'Eyewear',
  Facecovers = 'Facecovers',
  FlammableMaterials = 'FlammableMaterials',
  FlashhidersBrakes = 'FlashhidersBrakes',
  Flashlights = 'Flashlights',
  Food = 'Food',
  Foregrips = 'Foregrips',
  FunctionalMods = 'FunctionalMods',
  GasBlocks = 'GasBlocks',
  Gear = 'Gear',
  GearComponents = 'GearComponents',
  GearMods = 'GearMods',
  GrenadeLaunchers = 'GrenadeLaunchers',
  Handguards = 'Handguards',
  Headgear = 'Headgear',
  Headsets = 'Headsets',
  HouseholdMaterials = 'HouseholdMaterials',
  InfoItems = 'InfoItems',
  Injectors = 'Injectors',
  InjuryTreatment = 'InjuryTreatment',
  IronSights = 'IronSights',
  Keys = 'Keys',
  LaserTargetPointers = 'LaserTargetPointers',
  Launchers = 'Launchers',
  LightLaserDevices = 'LightLaserDevices',
  MachineGuns = 'MachineGuns',
  Magazines = 'Magazines',
  Maps = 'Maps',
  MarksmanRifles = 'MarksmanRifles',
  MechanicalKeys = 'MechanicalKeys',
  MedicalSupplies = 'MedicalSupplies',
  Medication = 'Medication',
  Medkits = 'Medkits',
  MeleeWeapons = 'MeleeWeapons',
  Money = 'Money',
  Mounts = 'Mounts',
  MuzzleAdapters = 'MuzzleAdapters',
  MuzzleDevices = 'MuzzleDevices',
  Optics = 'Optics',
  Others = 'Others',
  Pills = 'Pills',
  PistolGrips = 'PistolGrips',
  Pistols = 'Pistols',
  Provisions = 'Provisions',
  QuestItems = 'QuestItems',
  ReceiversSlides = 'ReceiversSlides',
  Rounds = 'Rounds',
  SmGs = 'SMGs',
  SecureContainers = 'SecureContainers',
  Shotguns = 'Shotguns',
  Sights = 'Sights',
  SpecialEquipment = 'SpecialEquipment',
  SpecialPurposeSights = 'SpecialPurposeSights',
  SpecialWeapons = 'SpecialWeapons',
  StocksChassis = 'StocksChassis',
  StorageContainers = 'StorageContainers',
  Suppressors = 'Suppressors',
  TacticalComboDevices = 'TacticalComboDevices',
  TacticalRigs = 'TacticalRigs',
  Throwables = 'Throwables',
  Tools = 'Tools',
  Valuables = 'Valuables',
  VitalParts = 'VitalParts',
  WeaponPartsMods = 'WeaponPartsMods',
  Weapons = 'Weapons'
}

export class HealthEffect {
  __typename?: 'HealthEffect';
  bodyParts: Array<Maybe<Scalars['String']['output']>>;
  effects: Array<Maybe<Scalars['String']['output']>>;
  time?: Maybe<NumberCompare>;
};

export class HealthPart {
  __typename?: 'HealthPart';
  bodyPart: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  max: Scalars['Int']['output'];
};

/** HideoutModule has been replaced with HideoutStation. */
export class HideoutModule {
  __typename?: 'HideoutModule';

  itemRequirements: Array<Maybe<ContainedItem>>;
  level?: Maybe<Scalars['Int']['output']>;
  moduleRequirements: Array<Maybe<HideoutModule>>;

};

export class HideoutStation {
  __typename?: 'HideoutStation';
  /** crafts is only available via the hideoutStations query. */
  crafts: Array<Maybe<Craft>>;
  id: Scalars['ID']['output'];
  imageLink?: Maybe<Scalars['String']['output']>;
  levels: Array<Maybe<HideoutStationLevel>>;
  name: Scalars['String']['output'];
  normalizedName: Scalars['String']['output'];
  tarkovDataId?: Maybe<Scalars['Int']['output']>;
};

export class HideoutStationBonus {
  __typename?: 'HideoutStationBonus';
  name: Scalars['String']['output'];
  passive?: Maybe<Scalars['Boolean']['output']>;
  production?: Maybe<Scalars['Boolean']['output']>;
  skillName?: Maybe<Scalars['String']['output']>;
  slotItems?: Maybe<Array<Maybe<Item>>>;
  type: Scalars['String']['output'];
  value?: Maybe<Scalars['Float']['output']>;
};

export class HideoutStationLevel {
  __typename?: 'HideoutStationLevel';
  bonuses?: Maybe<Array<Maybe<HideoutStationBonus>>>;
  constructionTime: Scalars['Int']['output'];
  /** crafts is only available via the hideoutStations query. */
  crafts: Array<Maybe<Craft>>;
  description: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  itemRequirements: Array<Maybe<RequirementItem>>;
  level: Scalars['Int']['output'];
  skillRequirements: Array<Maybe<RequirementSkill>>;
  stationLevelRequirements: Array<Maybe<RequirementHideoutStationLevel>>;
  tarkovDataId?: Maybe<Scalars['Int']['output']>;
  traderRequirements: Array<Maybe<RequirementTrader>>;
};

export class Item {
  __typename?: 'Item';
  accuracyModifier?: Maybe<Scalars['Float']['output']>;
  avg24hPrice?: Maybe<Scalars['Int']['output']>;
  backgroundColor: Scalars['String']['output'];
  bartersFor: Array<Maybe<Barter>>;
  bartersUsing: Array<Maybe<Barter>>;
  baseImageLink?: Maybe<Scalars['String']['output']>;
  basePrice: Scalars['Int']['output'];
  blocksHeadphones?: Maybe<Scalars['Boolean']['output']>;

  bsgCategoryId?: Maybe<Scalars['String']['output']>;
  buyFor?: Maybe<Array<ItemPrice>>;
  categories: Array<Maybe<ItemCategory>>;
  category?: Maybe<ItemCategory>;

  changeLast48h?: Maybe<Scalars['Float']['output']>;
  changeLast48hPercent?: Maybe<Scalars['Float']['output']>;
  conflictingItems?: Maybe<Array<Maybe<Item>>>;
  conflictingSlotIds?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  containsItems?: Maybe<Array<Maybe<ContainedItem>>>;
  craftsFor: Array<Maybe<Craft>>;
  craftsUsing: Array<Maybe<Craft>>;
  description?: Maybe<Scalars['String']['output']>;
  ergonomicsModifier?: Maybe<Scalars['Float']['output']>;
  fleaMarketFee?: Maybe<Scalars['Int']['output']>;
  gridImageLink?: Maybe<Scalars['String']['output']>;

  handbookCategories: Array<Maybe<ItemCategory>>;
  hasGrid?: Maybe<Scalars['Boolean']['output']>;
  height: Scalars['Int']['output'];
  high24hPrice?: Maybe<Scalars['Int']['output']>;
  /** historicalPrices is only available via the item and items queries. */
  historicalPrices?: Maybe<Array<Maybe<HistoricalPricePoint>>>;
  iconLink?: Maybe<Scalars['String']['output']>;

  id: Scalars['ID']['output'];
  image8xLink?: Maybe<Scalars['String']['output']>;
  image512pxLink?: Maybe<Scalars['String']['output']>;


  inspectImageLink?: Maybe<Scalars['String']['output']>;
  lastLowPrice?: Maybe<Scalars['Int']['output']>;
  lastOfferCount?: Maybe<Scalars['Int']['output']>;
  link?: Maybe<Scalars['String']['output']>;
  loudness?: Maybe<Scalars['Int']['output']>;
  low24hPrice?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  normalizedName?: Maybe<Scalars['String']['output']>;
  properties?: Maybe<ItemProperties>;
  receivedFromTasks: Array<Maybe<Task>>;
  recoilModifier?: Maybe<Scalars['Float']['output']>;
  sellFor?: Maybe<Array<ItemPrice>>;
  shortName?: Maybe<Scalars['String']['output']>;


  types: Array<Maybe<ItemType>>;
  updated?: Maybe<Scalars['String']['output']>;
  usedInTasks: Array<Maybe<Task>>;
  velocity?: Maybe<Scalars['Float']['output']>;
  weight?: Maybe<Scalars['Float']['output']>;
  width: Scalars['Int']['output'];
  wikiLink?: Maybe<Scalars['String']['output']>;
};


export type ItemFleaMarketFeeArgs = {
  count?: InputMaybe<Scalars['Int']['input']>;
  hideoutManagementLevel?: InputMaybe<Scalars['Int']['input']>;
  intelCenterLevel?: InputMaybe<Scalars['Int']['input']>;
  price?: InputMaybe<Scalars['Int']['input']>;
  requireAll?: InputMaybe<Scalars['Boolean']['input']>;
};


export type ItemTranslationArgs = {
  languageCode?: InputMaybe<LanguageCode>;
};

export interface ItemArmorSlot {
  nameId?: Maybe<Scalars['String']['output']>;
  zones?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
}

export class ItemArmorSlotLocked implements ItemArmorSlot {
  __typename?: 'ItemArmorSlotLocked';
  armorType?: Maybe<Scalars['String']['output']>;
  baseValue?: Maybe<Scalars['Int']['output']>;
  bluntThroughput?: Maybe<Scalars['Float']['output']>;
  class?: Maybe<Scalars['Int']['output']>;
  durability?: Maybe<Scalars['Int']['output']>;
  ergoPenalty?: Maybe<Scalars['Float']['output']>;
  material?: Maybe<ArmorMaterial>;
  name?: Maybe<Scalars['String']['output']>;
  nameId?: Maybe<Scalars['String']['output']>;
  repairCost?: Maybe<Scalars['Int']['output']>;
  speedPenalty?: Maybe<Scalars['Float']['output']>;
  turnPenalty?: Maybe<Scalars['Float']['output']>;
  zones?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

export class ItemArmorSlotOpen implements ItemArmorSlot {
  __typename?: 'ItemArmorSlotOpen';
  allowedPlates?: Maybe<Array<Maybe<Item>>>;
  name?: Maybe<Scalars['String']['output']>;
  nameId?: Maybe<Scalars['String']['output']>;
  zones?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

export class ItemAttribute {
  __typename?: 'ItemAttribute';
  name: Scalars['String']['output'];
  type: Scalars['String']['output'];
  value?: Maybe<Scalars['String']['output']>;
};

export class ItemCategory {
  __typename?: 'ItemCategory';
  children?: Maybe<Array<Maybe<ItemCategory>>>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  normalizedName: Scalars['String']['output'];
  parent?: Maybe<ItemCategory>;
};

export enum ItemCategoryName {
  Ammo = 'Ammo',
  AmmoContainer = 'AmmoContainer',
  ArmBand = 'ArmBand',
  Armor = 'Armor',
  ArmorPlate = 'ArmorPlate',
  ArmoredEquipment = 'ArmoredEquipment',
  AssaultCarbine = 'AssaultCarbine',
  AssaultRifle = 'AssaultRifle',
  AssaultScope = 'AssaultScope',
  AuxiliaryMod = 'AuxiliaryMod',
  Backpack = 'Backpack',
  Barrel = 'Barrel',
  BarterItem = 'BarterItem',
  Battery = 'Battery',
  Bipod = 'Bipod',
  BuildingMaterial = 'BuildingMaterial',
  ChargingHandle = 'ChargingHandle',
  ChestRig = 'ChestRig',
  CombMuzzleDevice = 'CombMuzzleDevice',
  CombTactDevice = 'CombTactDevice',
  CommonContainer = 'CommonContainer',
  CompactReflexSight = 'CompactReflexSight',
  Compass = 'Compass',
  CompoundItem = 'CompoundItem',
  CultistAmulet = 'CultistAmulet',
  CylinderMagazine = 'CylinderMagazine',
  Drink = 'Drink',
  Drug = 'Drug',
  Electronics = 'Electronics',
  Equipment = 'Equipment',
  EssentialMod = 'EssentialMod',
  FaceCover = 'FaceCover',
  Flashhider = 'Flashhider',
  Flashlight = 'Flashlight',
  Food = 'Food',
  FoodAndDrink = 'FoodAndDrink',
  Foregrip = 'Foregrip',
  Fuel = 'Fuel',
  FunctionalMod = 'FunctionalMod',
  GasBlock = 'GasBlock',
  GearMod = 'GearMod',
  GrenadeLauncher = 'GrenadeLauncher',
  Handguard = 'Handguard',
  Handgun = 'Handgun',
  Headphones = 'Headphones',
  Headwear = 'Headwear',
  HouseholdGoods = 'HouseholdGoods',
  Info = 'Info',
  Ironsight = 'Ironsight',
  Item = 'Item',
  Jewelry = 'Jewelry',
  Key = 'Key',
  Keycard = 'Keycard',
  Knife = 'Knife',
  LockingContainer = 'LockingContainer',
  Lubricant = 'Lubricant',
  Machinegun = 'Machinegun',
  Magazine = 'Magazine',
  Map = 'Map',
  MarksmanRifle = 'MarksmanRifle',
  MechanicalKey = 'MechanicalKey',
  MedicalItem = 'MedicalItem',
  MedicalSupplies = 'MedicalSupplies',
  Medikit = 'Medikit',
  Meds = 'Meds',
  Money = 'Money',
  Mount = 'Mount',
  MuzzleDevice = 'MuzzleDevice',
  NightVision = 'NightVision',
  Other = 'Other',
  PistolGrip = 'PistolGrip',
  PortContainer = 'PortContainer',
  PortableRangeFinder = 'PortableRangeFinder',
  RadioTransmitter = 'RadioTransmitter',
  RandomLootContainer = 'RandomLootContainer',
  Receiver = 'Receiver',
  ReflexSight = 'ReflexSight',
  RepairKits = 'RepairKits',
  Revolver = 'Revolver',
  Smg = 'SMG',
  Scope = 'Scope',
  SearchableItem = 'SearchableItem',
  Shotgun = 'Shotgun',
  Sights = 'Sights',
  Silencer = 'Silencer',
  SniperRifle = 'SniperRifle',
  SpecialItem = 'SpecialItem',
  SpecialScope = 'SpecialScope',
  SpringDrivenCylinder = 'SpringDrivenCylinder',
  StackableItem = 'StackableItem',
  Stimulant = 'Stimulant',
  Stock = 'Stock',
  ThermalVision = 'ThermalVision',
  ThrowableWeapon = 'ThrowableWeapon',
  Tool = 'Tool',
  Ubgl = 'UBGL',
  VisObservDevice = 'VisObservDevice',
  Weapon = 'Weapon',
  WeaponMod = 'WeaponMod'
}

export class ItemFilters {
  __typename?: 'ItemFilters';
  allowedCategories: Array<Maybe<ItemCategory>>;
  allowedItems: Array<Maybe<Item>>;
  excludedCategories: Array<Maybe<ItemCategory>>;
  excludedItems: Array<Maybe<Item>>;
};

export class ItemPrice {
  __typename?: 'ItemPrice';
  currency?: Maybe<Scalars['String']['output']>;
  currencyItem?: Maybe<Item>;
  price?: Maybe<Scalars['Int']['output']>;
  priceRUB?: Maybe<Scalars['Int']['output']>;


  vendor: Vendor;
};

export type ItemProperties = ItemPropertiesAmmo | ItemPropertiesArmor | ItemPropertiesArmorAttachment | ItemPropertiesBackpack | ItemPropertiesBarrel | ItemPropertiesChestRig | ItemPropertiesContainer | ItemPropertiesFoodDrink | ItemPropertiesGlasses | ItemPropertiesGrenade | ItemPropertiesHeadphone | ItemPropertiesHeadwear | ItemPropertiesHelmet | ItemPropertiesKey | ItemPropertiesMagazine | ItemPropertiesMedKit | ItemPropertiesMedicalItem | ItemPropertiesMelee | ItemPropertiesNightVision | ItemPropertiesPainkiller | ItemPropertiesPreset | ItemPropertiesResource | ItemPropertiesScope | ItemPropertiesStim | ItemPropertiesSurgicalKit | ItemPropertiesWeapon | ItemPropertiesWeaponMod;

export class ItemPropertiesAmmo {
  __typename?: 'ItemPropertiesAmmo';

  accuracyModifier?: Maybe<Scalars['Float']['output']>;
  ammoType?: Maybe<Scalars['String']['output']>;
  armorDamage?: Maybe<Scalars['Int']['output']>;
  ballisticCoeficient?: Maybe<Scalars['Float']['output']>;
  bulletDiameterMilimeters?: Maybe<Scalars['Float']['output']>;
  bulletMassGrams?: Maybe<Scalars['Float']['output']>;
  caliber?: Maybe<Scalars['String']['output']>;
  damage?: Maybe<Scalars['Int']['output']>;
  durabilityBurnFactor?: Maybe<Scalars['Float']['output']>;
  fragmentationChance?: Maybe<Scalars['Float']['output']>;
  heatFactor?: Maybe<Scalars['Float']['output']>;
  heavyBleedModifier?: Maybe<Scalars['Float']['output']>;
  initialSpeed?: Maybe<Scalars['Float']['output']>;
  lightBleedModifier?: Maybe<Scalars['Float']['output']>;
  penetrationChance?: Maybe<Scalars['Float']['output']>;
  penetrationPower?: Maybe<Scalars['Int']['output']>;
  penetrationPowerDeviation?: Maybe<Scalars['Float']['output']>;
  projectileCount?: Maybe<Scalars['Int']['output']>;

  recoilModifier?: Maybe<Scalars['Float']['output']>;
  ricochetChance?: Maybe<Scalars['Float']['output']>;
  stackMaxSize?: Maybe<Scalars['Int']['output']>;
  staminaBurnPerDamage?: Maybe<Scalars['Float']['output']>;
  tracer?: Maybe<Scalars['Boolean']['output']>;
  tracerColor?: Maybe<Scalars['String']['output']>;
};

export class ItemPropertiesArmor {
  __typename?: 'ItemPropertiesArmor';
  armorSlots?: Maybe<Array<Maybe<ItemArmorSlot>>>;
  armorType?: Maybe<Scalars['String']['output']>;
  bluntThroughput?: Maybe<Scalars['Float']['output']>;
  class?: Maybe<Scalars['Int']['output']>;
  durability?: Maybe<Scalars['Int']['output']>;
  ergoPenalty?: Maybe<Scalars['Float']['output']>;
  material?: Maybe<ArmorMaterial>;
  repairCost?: Maybe<Scalars['Int']['output']>;
  speedPenalty?: Maybe<Scalars['Float']['output']>;
  turnPenalty?: Maybe<Scalars['Float']['output']>;
  zones?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

export class ItemPropertiesArmorAttachment {
  __typename?: 'ItemPropertiesArmorAttachment';
  armorType?: Maybe<Scalars['String']['output']>;
  blindnessProtection?: Maybe<Scalars['Float']['output']>;
  bluntThroughput?: Maybe<Scalars['Float']['output']>;
  class?: Maybe<Scalars['Int']['output']>;
  durability?: Maybe<Scalars['Int']['output']>;
  ergoPenalty?: Maybe<Scalars['Float']['output']>;
  headZones?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  material?: Maybe<ArmorMaterial>;
  repairCost?: Maybe<Scalars['Int']['output']>;
  slots?: Maybe<Array<Maybe<ItemSlot>>>;
  speedPenalty?: Maybe<Scalars['Float']['output']>;
  turnPenalty?: Maybe<Scalars['Float']['output']>;
};

export class ItemPropertiesBackpack {
  __typename?: 'ItemPropertiesBackpack';
  capacity?: Maybe<Scalars['Int']['output']>;
  ergoPenalty?: Maybe<Scalars['Float']['output']>;
  grids?: Maybe<Array<Maybe<ItemStorageGrid>>>;

  speedPenalty?: Maybe<Scalars['Float']['output']>;
  turnPenalty?: Maybe<Scalars['Float']['output']>;
};

export class ItemPropertiesBarrel {
  __typename?: 'ItemPropertiesBarrel';

  centerOfImpact?: Maybe<Scalars['Float']['output']>;
  deviationCurve?: Maybe<Scalars['Float']['output']>;
  deviationMax?: Maybe<Scalars['Float']['output']>;
  ergonomics?: Maybe<Scalars['Float']['output']>;

  recoilModifier?: Maybe<Scalars['Float']['output']>;
  slots?: Maybe<Array<Maybe<ItemSlot>>>;
};

export class ItemPropertiesChestRig {
  __typename?: 'ItemPropertiesChestRig';
  armorSlots?: Maybe<Array<Maybe<ItemArmorSlot>>>;
  armorType?: Maybe<Scalars['String']['output']>;
  bluntThroughput?: Maybe<Scalars['Float']['output']>;
  capacity?: Maybe<Scalars['Int']['output']>;
  class?: Maybe<Scalars['Int']['output']>;
  durability?: Maybe<Scalars['Int']['output']>;
  ergoPenalty?: Maybe<Scalars['Float']['output']>;
  grids?: Maybe<Array<Maybe<ItemStorageGrid>>>;
  material?: Maybe<ArmorMaterial>;

  repairCost?: Maybe<Scalars['Int']['output']>;
  speedPenalty?: Maybe<Scalars['Float']['output']>;
  turnPenalty?: Maybe<Scalars['Float']['output']>;
  zones?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

export class ItemPropertiesContainer {
  __typename?: 'ItemPropertiesContainer';
  capacity?: Maybe<Scalars['Int']['output']>;
  grids?: Maybe<Array<Maybe<ItemStorageGrid>>>;
};

export class ItemPropertiesFoodDrink {
  __typename?: 'ItemPropertiesFoodDrink';
  energy?: Maybe<Scalars['Int']['output']>;
  hydration?: Maybe<Scalars['Int']['output']>;
  stimEffects: Array<Maybe<StimEffect>>;
  units?: Maybe<Scalars['Int']['output']>;
};

export class ItemPropertiesGlasses {
  __typename?: 'ItemPropertiesGlasses';
  blindnessProtection?: Maybe<Scalars['Float']['output']>;
  bluntThroughput?: Maybe<Scalars['Float']['output']>;
  class?: Maybe<Scalars['Int']['output']>;
  durability?: Maybe<Scalars['Int']['output']>;
  material?: Maybe<ArmorMaterial>;
  repairCost?: Maybe<Scalars['Int']['output']>;
};

export class ItemPropertiesGrenade {
  __typename?: 'ItemPropertiesGrenade';
  contusionRadius?: Maybe<Scalars['Int']['output']>;
  fragments?: Maybe<Scalars['Int']['output']>;
  fuse?: Maybe<Scalars['Float']['output']>;
  maxExplosionDistance?: Maybe<Scalars['Int']['output']>;
  minExplosionDistance?: Maybe<Scalars['Int']['output']>;
  type?: Maybe<Scalars['String']['output']>;
};

export class ItemPropertiesHeadphone {
  __typename?: 'ItemPropertiesHeadphone';
  ambientVolume?: Maybe<Scalars['Int']['output']>;
  compressorAttack?: Maybe<Scalars['Int']['output']>;
  compressorGain?: Maybe<Scalars['Int']['output']>;
  compressorRelease?: Maybe<Scalars['Int']['output']>;
  compressorThreshold?: Maybe<Scalars['Int']['output']>;
  compressorVolume?: Maybe<Scalars['Int']['output']>;
  cutoffFrequency?: Maybe<Scalars['Int']['output']>;
  distanceModifier?: Maybe<Scalars['Float']['output']>;
  distortion?: Maybe<Scalars['Float']['output']>;
  dryVolume?: Maybe<Scalars['Int']['output']>;
  highFrequencyGain?: Maybe<Scalars['Float']['output']>;
  resonance?: Maybe<Scalars['Float']['output']>;
};

export class ItemPropertiesHeadwear {
  __typename?: 'ItemPropertiesHeadwear';
  slots?: Maybe<Array<Maybe<ItemSlot>>>;
};

export class ItemPropertiesHelmet {
  __typename?: 'ItemPropertiesHelmet';
  armorSlots?: Maybe<Array<Maybe<ItemArmorSlot>>>;
  armorType?: Maybe<Scalars['String']['output']>;
  blindnessProtection?: Maybe<Scalars['Float']['output']>;
  blocksHeadset?: Maybe<Scalars['Boolean']['output']>;
  bluntThroughput?: Maybe<Scalars['Float']['output']>;
  class?: Maybe<Scalars['Int']['output']>;
  deafening?: Maybe<Scalars['String']['output']>;
  durability?: Maybe<Scalars['Int']['output']>;
  ergoPenalty?: Maybe<Scalars['Float']['output']>;
  headZones?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  material?: Maybe<ArmorMaterial>;
  repairCost?: Maybe<Scalars['Int']['output']>;
  ricochetX?: Maybe<Scalars['Float']['output']>;
  ricochetY?: Maybe<Scalars['Float']['output']>;
  ricochetZ?: Maybe<Scalars['Float']['output']>;
  slots?: Maybe<Array<Maybe<ItemSlot>>>;
  speedPenalty?: Maybe<Scalars['Float']['output']>;
  turnPenalty?: Maybe<Scalars['Float']['output']>;
};

export class ItemPropertiesKey {
  __typename?: 'ItemPropertiesKey';
  uses?: Maybe<Scalars['Int']['output']>;
};

export class ItemPropertiesMagazine {
  __typename?: 'ItemPropertiesMagazine';
  allowedAmmo?: Maybe<Array<Maybe<Item>>>;
  ammoCheckModifier?: Maybe<Scalars['Float']['output']>;
  capacity?: Maybe<Scalars['Int']['output']>;
  ergonomics?: Maybe<Scalars['Float']['output']>;
  loadModifier?: Maybe<Scalars['Float']['output']>;
  malfunctionChance?: Maybe<Scalars['Float']['output']>;

  recoilModifier?: Maybe<Scalars['Float']['output']>;
  slots?: Maybe<Array<Maybe<ItemSlot>>>;
};

export class ItemPropertiesMedKit {
  __typename?: 'ItemPropertiesMedKit';
  cures?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  hitpoints?: Maybe<Scalars['Int']['output']>;
  hpCostHeavyBleeding?: Maybe<Scalars['Int']['output']>;
  hpCostLightBleeding?: Maybe<Scalars['Int']['output']>;
  maxHealPerUse?: Maybe<Scalars['Int']['output']>;
  useTime?: Maybe<Scalars['Int']['output']>;
};

export class ItemPropertiesMedicalItem {
  __typename?: 'ItemPropertiesMedicalItem';
  cures?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  useTime?: Maybe<Scalars['Int']['output']>;
  uses?: Maybe<Scalars['Int']['output']>;
};

export class ItemPropertiesMelee {
  __typename?: 'ItemPropertiesMelee';
  hitRadius?: Maybe<Scalars['Float']['output']>;
  slashDamage?: Maybe<Scalars['Int']['output']>;
  stabDamage?: Maybe<Scalars['Int']['output']>;
};

export class ItemPropertiesNightVision {
  __typename?: 'ItemPropertiesNightVision';
  diffuseIntensity?: Maybe<Scalars['Float']['output']>;
  intensity?: Maybe<Scalars['Float']['output']>;
  noiseIntensity?: Maybe<Scalars['Float']['output']>;
  noiseScale?: Maybe<Scalars['Float']['output']>;
};

export class ItemPropertiesPainkiller {
  __typename?: 'ItemPropertiesPainkiller';
  cures?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  energyImpact?: Maybe<Scalars['Int']['output']>;
  hydrationImpact?: Maybe<Scalars['Int']['output']>;
  painkillerDuration?: Maybe<Scalars['Int']['output']>;
  useTime?: Maybe<Scalars['Int']['output']>;
  uses?: Maybe<Scalars['Int']['output']>;
};

export class ItemPropertiesPreset {
  __typename?: 'ItemPropertiesPreset';
  baseItem: Item;
  default?: Maybe<Scalars['Boolean']['output']>;
  ergonomics?: Maybe<Scalars['Float']['output']>;
  moa?: Maybe<Scalars['Float']['output']>;
  recoilHorizontal?: Maybe<Scalars['Int']['output']>;
  recoilVertical?: Maybe<Scalars['Int']['output']>;
};

export class ItemPropertiesResource {
  __typename?: 'ItemPropertiesResource';
  units?: Maybe<Scalars['Int']['output']>;
};

export class ItemPropertiesScope {
  __typename?: 'ItemPropertiesScope';
  ergonomics?: Maybe<Scalars['Float']['output']>;

  recoilModifier?: Maybe<Scalars['Float']['output']>;
  sightModes?: Maybe<Array<Maybe<Scalars['Int']['output']>>>;
  sightingRange?: Maybe<Scalars['Int']['output']>;
  slots?: Maybe<Array<Maybe<ItemSlot>>>;
  zoomLevels?: Maybe<Array<Maybe<Array<Maybe<Scalars['Float']['output']>>>>>;
};

export class ItemPropertiesStim {
  __typename?: 'ItemPropertiesStim';
  cures?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  stimEffects: Array<Maybe<StimEffect>>;
  useTime?: Maybe<Scalars['Int']['output']>;
};

export class ItemPropertiesSurgicalKit {
  __typename?: 'ItemPropertiesSurgicalKit';
  cures?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  maxLimbHealth?: Maybe<Scalars['Float']['output']>;
  minLimbHealth?: Maybe<Scalars['Float']['output']>;
  useTime?: Maybe<Scalars['Int']['output']>;
  uses?: Maybe<Scalars['Int']['output']>;
};

export class ItemPropertiesWeapon {
  __typename?: 'ItemPropertiesWeapon';
  allowedAmmo?: Maybe<Array<Maybe<Item>>>;
  caliber?: Maybe<Scalars['String']['output']>;
  cameraRecoil?: Maybe<Scalars['Float']['output']>;
  cameraSnap?: Maybe<Scalars['Float']['output']>;
  centerOfImpact?: Maybe<Scalars['Float']['output']>;
  convergence?: Maybe<Scalars['Float']['output']>;
  defaultAmmo?: Maybe<Item>;
  defaultErgonomics?: Maybe<Scalars['Float']['output']>;
  defaultHeight?: Maybe<Scalars['Int']['output']>;
  defaultPreset?: Maybe<Item>;
  defaultRecoilHorizontal?: Maybe<Scalars['Int']['output']>;
  defaultRecoilVertical?: Maybe<Scalars['Int']['output']>;
  defaultWeight?: Maybe<Scalars['Float']['output']>;
  defaultWidth?: Maybe<Scalars['Int']['output']>;
  deviationCurve?: Maybe<Scalars['Float']['output']>;
  deviationMax?: Maybe<Scalars['Float']['output']>;
  effectiveDistance?: Maybe<Scalars['Int']['output']>;
  ergonomics?: Maybe<Scalars['Float']['output']>;
  fireModes?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  fireRate?: Maybe<Scalars['Int']['output']>;
  maxDurability?: Maybe<Scalars['Int']['output']>;
  presets?: Maybe<Array<Maybe<Item>>>;
  recoilAngle?: Maybe<Scalars['Int']['output']>;
  recoilDispersion?: Maybe<Scalars['Int']['output']>;
  recoilHorizontal?: Maybe<Scalars['Int']['output']>;
  recoilVertical?: Maybe<Scalars['Int']['output']>;
  repairCost?: Maybe<Scalars['Int']['output']>;
  sightingRange?: Maybe<Scalars['Int']['output']>;
  slots?: Maybe<Array<Maybe<ItemSlot>>>;
};

export class ItemPropertiesWeaponMod {
  __typename?: 'ItemPropertiesWeaponMod';
  accuracyModifier?: Maybe<Scalars['Float']['output']>;
  ergonomics?: Maybe<Scalars['Float']['output']>;

  recoilModifier?: Maybe<Scalars['Float']['output']>;
  slots?: Maybe<Array<Maybe<ItemSlot>>>;
};

export class ItemSlot {
  __typename?: 'ItemSlot';
  filters?: Maybe<ItemFilters>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  nameId: Scalars['String']['output'];
  required?: Maybe<Scalars['Boolean']['output']>;
};

export enum ItemSourceName {
  Fence = 'fence',
  FleaMarket = 'fleaMarket',
  Jaeger = 'jaeger',
  Mechanic = 'mechanic',
  Peacekeeper = 'peacekeeper',
  Prapor = 'prapor',
  Ragman = 'ragman',
  Skier = 'skier',
  Therapist = 'therapist'
}

export class ItemStorageGrid {
  __typename?: 'ItemStorageGrid';
  filters: ItemFilters;
  height: Scalars['Int']['output'];
  width: Scalars['Int']['output'];
};

/**
 * The below types are all deprecated and may not return current data.
 * ItemTranslation has been replaced with the lang argument on all queries
 */
export class ItemTranslation {
  __typename?: 'ItemTranslation';



};

export enum ItemType {
  Ammo = 'ammo',
  AmmoBox = 'ammoBox',
  Any = 'any',
  Armor = 'armor',
  ArmorPlate = 'armorPlate',
  Backpack = 'backpack',
  Barter = 'barter',
  Container = 'container',
  Glasses = 'glasses',
  Grenade = 'grenade',
  Gun = 'gun',
  Headphones = 'headphones',
  Helmet = 'helmet',
  Injectors = 'injectors',
  Keys = 'keys',
  MarkedOnly = 'markedOnly',
  Meds = 'meds',
  Mods = 'mods',
  NoFlea = 'noFlea',
  PistolGrip = 'pistolGrip',
  Preset = 'preset',
  Provisions = 'provisions',
  Rig = 'rig',
  Suppressor = 'suppressor',
  Wearable = 'wearable'
}

export enum LanguageCode {
  Cs = 'cs',
  De = 'de',
  En = 'en',
  Es = 'es',
  Fr = 'fr',
  Hu = 'hu',
  It = 'it',
  Ja = 'ja',
  Ko = 'ko',
  Pl = 'pl',
  Pt = 'pt',
  Ru = 'ru',
  Sk = 'sk',
  Tr = 'tr',
  Zh = 'zh'
}

export class Lock {
  __typename?: 'Lock';
  bottom?: Maybe<Scalars['Float']['output']>;
  key?: Maybe<Item>;
  lockType?: Maybe<Scalars['String']['output']>;
  needsPower?: Maybe<Scalars['Boolean']['output']>;
  outline?: Maybe<Array<Maybe<MapPosition>>>;
  position?: Maybe<MapPosition>;
  top?: Maybe<Scalars['Float']['output']>;
};

export class LootContainer {
  __typename?: 'LootContainer';
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  normalizedName: Scalars['String']['output'];
};

export class LootContainerPosition {
  __typename?: 'LootContainerPosition';
  lootContainer?: Maybe<LootContainer>;
  position?: Maybe<MapPosition>;
};

export class Map {
  __typename?: 'Map';
  accessKeys: Array<Maybe<Item>>;
  accessKeysMinPlayerLevel?: Maybe<Scalars['Int']['output']>;
  bosses: Array<Maybe<BossSpawn>>;
  description?: Maybe<Scalars['String']['output']>;
  enemies?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  extracts?: Maybe<Array<Maybe<MapExtract>>>;
  hazards?: Maybe<Array<Maybe<MapHazard>>>;
  id: Scalars['ID']['output'];
  locks?: Maybe<Array<Maybe<Lock>>>;
  lootContainers?: Maybe<Array<Maybe<LootContainerPosition>>>;
  name: Scalars['String']['output'];
  nameId?: Maybe<Scalars['String']['output']>;
  normalizedName: Scalars['String']['output'];
  players?: Maybe<Scalars['String']['output']>;
  raidDuration?: Maybe<Scalars['Int']['output']>;
  spawns?: Maybe<Array<Maybe<MapSpawn>>>;
  stationaryWeapons?: Maybe<Array<Maybe<StationaryWeaponPosition>>>;
  switches?: Maybe<Array<Maybe<MapSwitch>>>;
  tarkovDataId?: Maybe<Scalars['ID']['output']>;
  wiki?: Maybe<Scalars['String']['output']>;
};

export class MapExtract {
  __typename?: 'MapExtract';
  bottom?: Maybe<Scalars['Float']['output']>;
  faction?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name?: Maybe<Scalars['String']['output']>;
  outline?: Maybe<Array<Maybe<MapPosition>>>;
  position?: Maybe<MapPosition>;
  switches?: Maybe<Array<Maybe<MapSwitch>>>;
  top?: Maybe<Scalars['Float']['output']>;
};

export class MapHazard {
  __typename?: 'MapHazard';
  bottom?: Maybe<Scalars['Float']['output']>;
  hazardType?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  outline?: Maybe<Array<Maybe<MapPosition>>>;
  position?: Maybe<MapPosition>;
  top?: Maybe<Scalars['Float']['output']>;
};

export class MapPosition {
  __typename?: 'MapPosition';
  x: Scalars['Float']['output'];
  y: Scalars['Float']['output'];
  z: Scalars['Float']['output'];
};

export class MapSpawn {
  __typename?: 'MapSpawn';
  categories?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  position: MapPosition;
  sides?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  zoneName?: Maybe<Scalars['String']['output']>;
};

export class MapSwitch {
  __typename?: 'MapSwitch';
  activatedBy?: Maybe<MapSwitch>;
  activates?: Maybe<Array<Maybe<MapSwitchOperation>>>;
  id: Scalars['ID']['output'];
  name?: Maybe<Scalars['String']['output']>;
  position?: Maybe<MapPosition>;
  switchType?: Maybe<Scalars['String']['output']>;
};

export class MapSwitchOperation {
  __typename?: 'MapSwitchOperation';
  operation?: Maybe<Scalars['String']['output']>;
  target?: Maybe<MapSwitchTarget>;
};

export type MapSwitchTarget = MapExtract | MapSwitch;

export class MapWithPosition {
  __typename?: 'MapWithPosition';
  map?: Maybe<Map>;
  positions?: Maybe<Array<Maybe<MapPosition>>>;
};

export class MobInfo {
  __typename?: 'MobInfo';
  /** equipment and items are estimates and may be inaccurate. */
  equipment: Array<Maybe<ContainedItem>>;
  health?: Maybe<Array<Maybe<HealthPart>>>;
  id: Scalars['ID']['output'];
  imagePortraitLink?: Maybe<Scalars['String']['output']>;
  imagePosterLink?: Maybe<Scalars['String']['output']>;
  items: Array<Maybe<Item>>;
  name: Scalars['String']['output'];
  normalizedName: Scalars['String']['output'];
};

export class NumberCompare {
  __typename?: 'NumberCompare';
  compareMethod: Scalars['String']['output'];
  value: Scalars['Float']['output'];
};

export class OfferUnlock {
  __typename?: 'OfferUnlock';
  id: Scalars['ID']['output'];
  item: Item;
  level: Scalars['Int']['output'];
  trader: Trader;
};

export class PlayerLevel {
  __typename?: 'PlayerLevel';
  exp: Scalars['Int']['output'];
  level: Scalars['Int']['output'];
};

export class PriceRequirement {
  __typename?: 'PriceRequirement';
  stringValue?: Maybe<Scalars['String']['output']>;
  type: RequirementType;
  value?: Maybe<Scalars['Int']['output']>;
};

export class Query {
  __typename?: 'Query';
  achievements: Array<Maybe<Achievement>>;
  ammo?: Maybe<Array<Maybe<Ammo>>>;
  armorMaterials: Array<Maybe<ArmorMaterial>>;
  barters?: Maybe<Array<Maybe<Barter>>>;
  bosses?: Maybe<Array<Maybe<MobInfo>>>;
  crafts?: Maybe<Array<Maybe<Craft>>>;
  fleaMarket: FleaMarket;
  handbookCategories: Array<Maybe<ItemCategory>>;

  hideoutStations: Array<Maybe<HideoutStation>>;
  historicalItemPrices: Array<Maybe<HistoricalPricePoint>>;
  item?: Maybe<Item>;

  itemCategories: Array<Maybe<ItemCategory>>;
  items: Array<Maybe<Item>>;




  lootContainers?: Maybe<Array<Maybe<LootContainer>>>;
  maps: Array<Maybe<Map>>;
  playerLevels: Array<Maybe<PlayerLevel>>;
  questItems?: Maybe<Array<Maybe<QuestItem>>>;

  stationaryWeapons?: Maybe<Array<Maybe<StationaryWeapon>>>;
  status: ServerStatus;
  task?: Maybe<Task>;
  tasks: Array<Maybe<Task>>;

  traders: Array<Maybe<Trader>>;
};


export type QueryAchievementsArgs = {
  lang?: InputMaybe<LanguageCode>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryAmmoArgs = {
  lang?: InputMaybe<LanguageCode>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryArmorMaterialsArgs = {
  lang?: InputMaybe<LanguageCode>;
};


export type QueryBartersArgs = {
  lang?: InputMaybe<LanguageCode>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryBossesArgs = {
  lang?: InputMaybe<LanguageCode>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Array<Scalars['String']['input']>>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryCraftsArgs = {
  lang?: InputMaybe<LanguageCode>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryFleaMarketArgs = {
  lang?: InputMaybe<LanguageCode>;
};


export type QueryHandbookCategoriesArgs = {
  lang?: InputMaybe<LanguageCode>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryHideoutStationsArgs = {
  lang?: InputMaybe<LanguageCode>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryHistoricalItemPricesArgs = {
  days?: InputMaybe<Scalars['Int']['input']>;
  id: Scalars['ID']['input'];
  lang?: InputMaybe<LanguageCode>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryItemArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  lang?: InputMaybe<LanguageCode>;
  normalizedName?: InputMaybe<Scalars['String']['input']>;
};


export type QueryItemByNormalizedNameArgs = {
  normalizedName: Scalars['String']['input'];
};


export type QueryItemCategoriesArgs = {
  lang?: InputMaybe<LanguageCode>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryItemsArgs = {
  bsgCategory?: InputMaybe<Scalars['String']['input']>;
  bsgCategoryId?: InputMaybe<Scalars['String']['input']>;
  bsgCategoryIds?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  categoryNames?: InputMaybe<Array<InputMaybe<ItemCategoryName>>>;
  handbookCategoryNames?: InputMaybe<Array<InputMaybe<HandbookCategoryName>>>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  lang?: InputMaybe<LanguageCode>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  names?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  type?: InputMaybe<ItemType>;
  types?: InputMaybe<Array<InputMaybe<ItemType>>>;
};


export type QueryItemsByBsgCategoryIdArgs = {
  bsgCategoryId: Scalars['String']['input'];
};


export type QueryItemsByIDsArgs = {
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
};


export type QueryItemsByNameArgs = {
  name: Scalars['String']['input'];
};


export type QueryItemsByTypeArgs = {
  type: ItemType;
};


export type QueryLootContainersArgs = {
  lang?: InputMaybe<LanguageCode>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryMapsArgs = {
  enemies?: InputMaybe<Array<Scalars['String']['input']>>;
  lang?: InputMaybe<LanguageCode>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Array<Scalars['String']['input']>>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryQuestItemsArgs = {
  lang?: InputMaybe<LanguageCode>;
};


export type QueryStationaryWeaponsArgs = {
  lang?: InputMaybe<LanguageCode>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryTaskArgs = {
  id: Scalars['ID']['input'];
  lang?: InputMaybe<LanguageCode>;
};


export type QueryTasksArgs = {
  faction?: InputMaybe<Scalars['String']['input']>;
  lang?: InputMaybe<LanguageCode>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryTradersArgs = {
  lang?: InputMaybe<LanguageCode>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};

/** Quest has been replaced with Task. */
export class Quest {
  __typename?: 'Quest';










};

export class QuestItem {
  __typename?: 'QuestItem';
  baseImageLink?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  gridImageLink?: Maybe<Scalars['String']['output']>;
  height?: Maybe<Scalars['Int']['output']>;
  iconLink?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  image8xLink?: Maybe<Scalars['String']['output']>;
  image512pxLink?: Maybe<Scalars['String']['output']>;
  inspectImageLink?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  normalizedName?: Maybe<Scalars['String']['output']>;
  shortName?: Maybe<Scalars['String']['output']>;
  width?: Maybe<Scalars['Int']['output']>;
};

/** QuestObjective has been replaced with TaskObjective. */
export class QuestObjective {
  __typename?: 'QuestObjective';






};

/** QuestRequirement has been replaced with TaskRequirement. */
export class QuestRequirement {
  __typename?: 'QuestRequirement';



};

export class QuestRewardReputation {
  __typename?: 'QuestRewardReputation';


};

export class RequirementHideoutStationLevel {
  __typename?: 'RequirementHideoutStationLevel';
  id?: Maybe<Scalars['ID']['output']>;
  level: Scalars['Int']['output'];
  station: HideoutStation;
};

export class RequirementItem {
  __typename?: 'RequirementItem';
  attributes?: Maybe<Array<Maybe<ItemAttribute>>>;
  count: Scalars['Int']['output'];
  id?: Maybe<Scalars['ID']['output']>;
  item: Item;
  quantity: Scalars['Int']['output'];
};

export class RequirementSkill {
  __typename?: 'RequirementSkill';
  id?: Maybe<Scalars['ID']['output']>;
  level: Scalars['Int']['output'];
  name: Scalars['String']['output'];
};

export class RequirementTask {
  __typename?: 'RequirementTask';
  id?: Maybe<Scalars['ID']['output']>;
  task: Task;
};

export class RequirementTrader {
  __typename?: 'RequirementTrader';
  compareMethod?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;

  requirementType?: Maybe<Scalars['String']['output']>;
  trader: Trader;
  value?: Maybe<Scalars['Int']['output']>;
};

export enum RequirementType {
  LoyaltyLevel = 'loyaltyLevel',
  PlayerLevel = 'playerLevel',
  QuestCompleted = 'questCompleted',
  StationLevel = 'stationLevel'
}

export class ServerStatus {
  __typename?: 'ServerStatus';
  currentStatuses?: Maybe<Array<Maybe<Status>>>;
  generalStatus?: Maybe<Status>;
  messages?: Maybe<Array<Maybe<StatusMessage>>>;
};

export class SkillLevel {
  __typename?: 'SkillLevel';
  level: Scalars['Float']['output'];
  name: Scalars['String']['output'];
};

export class StationaryWeapon {
  __typename?: 'StationaryWeapon';
  id?: Maybe<Scalars['ID']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  shortName?: Maybe<Scalars['String']['output']>;
};

export class StationaryWeaponPosition {
  __typename?: 'StationaryWeaponPosition';
  position?: Maybe<MapPosition>;
  stationaryWeapon?: Maybe<StationaryWeapon>;
};

export class Status {
  __typename?: 'Status';
  message?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  status: Scalars['Int']['output'];
  statusCode: Scalars['String']['output'];
};

export enum StatusCode {
  Down = 'Down',
  Ok = 'OK',
  Unstable = 'Unstable',
  Updating = 'Updating'
}

export class StatusMessage {
  __typename?: 'StatusMessage';
  content: Scalars['String']['output'];
  solveTime?: Maybe<Scalars['String']['output']>;
  statusCode: Scalars['String']['output'];
  time: Scalars['String']['output'];
  type: Scalars['Int']['output'];
};

export class StimEffect {
  __typename?: 'StimEffect';
  chance: Scalars['Float']['output'];
  delay: Scalars['Int']['output'];
  duration: Scalars['Int']['output'];
  percent: Scalars['Boolean']['output'];
  skillName?: Maybe<Scalars['String']['output']>;
  type: Scalars['String']['output'];
  value: Scalars['Float']['output'];
};

export class Task {
  __typename?: 'Task';
  descriptionMessageId?: Maybe<Scalars['String']['output']>;
  experience: Scalars['Int']['output'];
  factionName?: Maybe<Scalars['String']['output']>;
  failConditions: Array<Maybe<TaskObjective>>;
  failMessageId?: Maybe<Scalars['String']['output']>;
  failureOutcome?: Maybe<TaskRewards>;
  finishRewards?: Maybe<TaskRewards>;
  id?: Maybe<Scalars['ID']['output']>;
  kappaRequired?: Maybe<Scalars['Boolean']['output']>;
  lightkeeperRequired?: Maybe<Scalars['Boolean']['output']>;
  map?: Maybe<Map>;
  minPlayerLevel?: Maybe<Scalars['Int']['output']>;
  name: Scalars['String']['output'];

  normalizedName: Scalars['String']['output'];
  objectives: Array<Maybe<TaskObjective>>;
  restartable?: Maybe<Scalars['Boolean']['output']>;
  startMessageId?: Maybe<Scalars['String']['output']>;
  startRewards?: Maybe<TaskRewards>;
  successMessageId?: Maybe<Scalars['String']['output']>;
  tarkovDataId?: Maybe<Scalars['Int']['output']>;
  taskImageLink?: Maybe<Scalars['String']['output']>;
  taskRequirements: Array<Maybe<TaskStatusRequirement>>;
  trader: Trader;

  traderRequirements: Array<Maybe<RequirementTrader>>;
  wikiLink?: Maybe<Scalars['String']['output']>;
};

export class TaskKey {
  __typename?: 'TaskKey';
  keys: Array<Maybe<Item>>;
  map?: Maybe<Map>;
};

export interface TaskObjective {
  description: Scalars['String']['output'];
  id?: Maybe<Scalars['ID']['output']>;
  maps: Array<Maybe<Map>>;
  optional: Scalars['Boolean']['output'];
  type: Scalars['String']['output'];
}

export class TaskObjectiveBasic implements TaskObjective {
  __typename?: 'TaskObjectiveBasic';
  description: Scalars['String']['output'];
  id?: Maybe<Scalars['ID']['output']>;
  maps: Array<Maybe<Map>>;
  optional: Scalars['Boolean']['output'];
  requiredKeys?: Maybe<Array<Maybe<Array<Maybe<Item>>>>>;
  type: Scalars['String']['output'];
  zones?: Maybe<Array<Maybe<TaskZone>>>;
};

export class TaskObjectiveBuildItem implements TaskObjective {
  __typename?: 'TaskObjectiveBuildItem';
  attributes: Array<Maybe<AttributeThreshold>>;
  containsAll: Array<Maybe<Item>>;
  containsCategory: Array<Maybe<ItemCategory>>;

  description: Scalars['String']['output'];
  id?: Maybe<Scalars['ID']['output']>;
  item: Item;
  maps: Array<Maybe<Map>>;
  optional: Scalars['Boolean']['output'];
  type: Scalars['String']['output'];
};

export class TaskObjectiveExperience implements TaskObjective {
  __typename?: 'TaskObjectiveExperience';
  count: Scalars['Int']['output'];
  description: Scalars['String']['output'];
  healthEffect: HealthEffect;
  id?: Maybe<Scalars['ID']['output']>;
  maps: Array<Maybe<Map>>;
  optional: Scalars['Boolean']['output'];
  type: Scalars['String']['output'];
};

export class TaskObjectiveExtract implements TaskObjective {
  __typename?: 'TaskObjectiveExtract';
  count: Scalars['Int']['output'];
  description: Scalars['String']['output'];
  exitName?: Maybe<Scalars['String']['output']>;
  exitStatus: Array<Maybe<Scalars['String']['output']>>;
  id?: Maybe<Scalars['ID']['output']>;
  maps: Array<Maybe<Map>>;
  optional: Scalars['Boolean']['output'];
  requiredKeys?: Maybe<Array<Maybe<Array<Maybe<Item>>>>>;
  type: Scalars['String']['output'];
  zoneNames: Array<Maybe<Scalars['String']['output']>>;
};

export class TaskObjectiveItem implements TaskObjective {
  __typename?: 'TaskObjectiveItem';
  count: Scalars['Int']['output'];
  description: Scalars['String']['output'];
  dogTagLevel?: Maybe<Scalars['Int']['output']>;
  foundInRaid: Scalars['Boolean']['output'];
  id?: Maybe<Scalars['ID']['output']>;
  item: Item;
  items: Array<Maybe<Item>>;
  maps: Array<Maybe<Map>>;
  maxDurability?: Maybe<Scalars['Int']['output']>;
  minDurability?: Maybe<Scalars['Int']['output']>;
  optional: Scalars['Boolean']['output'];
  requiredKeys?: Maybe<Array<Maybe<Array<Maybe<Item>>>>>;
  type: Scalars['String']['output'];
  zones?: Maybe<Array<Maybe<TaskZone>>>;
};

export class TaskObjectiveMark implements TaskObjective {
  __typename?: 'TaskObjectiveMark';
  description: Scalars['String']['output'];
  id?: Maybe<Scalars['ID']['output']>;
  maps: Array<Maybe<Map>>;
  markerItem: Item;
  optional: Scalars['Boolean']['output'];
  requiredKeys?: Maybe<Array<Maybe<Array<Maybe<Item>>>>>;
  type: Scalars['String']['output'];
  zones?: Maybe<Array<Maybe<TaskZone>>>;
};

export class TaskObjectivePlayerLevel implements TaskObjective {
  __typename?: 'TaskObjectivePlayerLevel';
  description: Scalars['String']['output'];
  id?: Maybe<Scalars['ID']['output']>;
  maps: Array<Maybe<Map>>;
  optional: Scalars['Boolean']['output'];
  playerLevel: Scalars['Int']['output'];
  type: Scalars['String']['output'];
};

export class TaskObjectiveQuestItem implements TaskObjective {
  __typename?: 'TaskObjectiveQuestItem';
  count: Scalars['Int']['output'];
  description: Scalars['String']['output'];
  id?: Maybe<Scalars['ID']['output']>;
  maps: Array<Maybe<Map>>;
  optional: Scalars['Boolean']['output'];
  possibleLocations?: Maybe<Array<Maybe<MapWithPosition>>>;
  questItem: QuestItem;
  requiredKeys?: Maybe<Array<Maybe<Array<Maybe<Item>>>>>;
  type: Scalars['String']['output'];
  zones?: Maybe<Array<Maybe<TaskZone>>>;
};

export class TaskObjectiveShoot implements TaskObjective {
  __typename?: 'TaskObjectiveShoot';
  bodyParts: Array<Maybe<Scalars['String']['output']>>;
  count: Scalars['Int']['output'];
  description: Scalars['String']['output'];
  distance?: Maybe<NumberCompare>;
  enemyHealthEffect?: Maybe<HealthEffect>;
  id?: Maybe<Scalars['ID']['output']>;
  maps: Array<Maybe<Map>>;
  notWearing?: Maybe<Array<Maybe<Item>>>;
  optional: Scalars['Boolean']['output'];
  playerHealthEffect?: Maybe<HealthEffect>;
  requiredKeys?: Maybe<Array<Maybe<Array<Maybe<Item>>>>>;
  shotType: Scalars['String']['output'];

  targetNames: Array<Maybe<Scalars['String']['output']>>;
  timeFromHour?: Maybe<Scalars['Int']['output']>;
  timeUntilHour?: Maybe<Scalars['Int']['output']>;
  type: Scalars['String']['output'];
  usingWeapon?: Maybe<Array<Maybe<Item>>>;
  usingWeaponMods?: Maybe<Array<Maybe<Array<Maybe<Item>>>>>;
  wearing?: Maybe<Array<Maybe<Array<Maybe<Item>>>>>;
  zoneNames: Array<Maybe<Scalars['String']['output']>>;
  zones?: Maybe<Array<Maybe<TaskZone>>>;
};

export class TaskObjectiveSkill implements TaskObjective {
  __typename?: 'TaskObjectiveSkill';
  description: Scalars['String']['output'];
  id?: Maybe<Scalars['ID']['output']>;
  maps: Array<Maybe<Map>>;
  optional: Scalars['Boolean']['output'];
  skillLevel: SkillLevel;
  type: Scalars['String']['output'];
};

export class TaskObjectiveTaskStatus implements TaskObjective {
  __typename?: 'TaskObjectiveTaskStatus';
  description: Scalars['String']['output'];
  id?: Maybe<Scalars['ID']['output']>;
  maps: Array<Maybe<Map>>;
  optional: Scalars['Boolean']['output'];
  status: Array<Maybe<Scalars['String']['output']>>;
  task: Task;
  type: Scalars['String']['output'];
};

export class TaskObjectiveTraderLevel implements TaskObjective {
  __typename?: 'TaskObjectiveTraderLevel';
  description: Scalars['String']['output'];
  id?: Maybe<Scalars['ID']['output']>;
  level: Scalars['Int']['output'];
  maps: Array<Maybe<Map>>;
  optional: Scalars['Boolean']['output'];
  trader: Trader;
  type: Scalars['String']['output'];
};

export class TaskObjectiveTraderStanding implements TaskObjective {
  __typename?: 'TaskObjectiveTraderStanding';
  compareMethod: Scalars['String']['output'];
  description: Scalars['String']['output'];
  id?: Maybe<Scalars['ID']['output']>;
  maps: Array<Maybe<Map>>;
  optional: Scalars['Boolean']['output'];
  trader: Trader;
  type: Scalars['String']['output'];
  value: Scalars['Int']['output'];
};

export class TaskObjectiveUseItem implements TaskObjective {
  __typename?: 'TaskObjectiveUseItem';
  compareMethod: Scalars['String']['output'];
  count: Scalars['Int']['output'];
  description: Scalars['String']['output'];
  id?: Maybe<Scalars['ID']['output']>;
  maps: Array<Maybe<Map>>;
  optional: Scalars['Boolean']['output'];
  requiredKeys?: Maybe<Array<Maybe<Array<Maybe<Item>>>>>;
  type: Scalars['String']['output'];
  useAny: Array<Maybe<Item>>;
  zoneNames: Array<Maybe<Scalars['String']['output']>>;
  zones?: Maybe<Array<Maybe<TaskZone>>>;
};

export class TaskRewards {
  __typename?: 'TaskRewards';
  craftUnlock: Array<Maybe<Craft>>;
  items: Array<Maybe<ContainedItem>>;
  offerUnlock: Array<Maybe<OfferUnlock>>;
  skillLevelReward: Array<Maybe<SkillLevel>>;
  traderStanding: Array<Maybe<TraderStanding>>;
  traderUnlock: Array<Maybe<Trader>>;
};

export class TaskStatusRequirement {
  __typename?: 'TaskStatusRequirement';
  status: Array<Maybe<Scalars['String']['output']>>;
  task: Task;
};

export class TaskZone {
  __typename?: 'TaskZone';
  bottom?: Maybe<Scalars['Float']['output']>;
  id: Scalars['ID']['output'];
  map?: Maybe<Map>;
  outline?: Maybe<Array<Maybe<MapPosition>>>;
  position?: Maybe<MapPosition>;
  top?: Maybe<Scalars['Float']['output']>;
};

export class Trader {
  __typename?: 'Trader';
  /** barters and cashOffers are only available via the traders query. */
  barters: Array<Maybe<Barter>>;
  cashOffers: Array<Maybe<TraderCashOffer>>;
  currency: Item;
  description?: Maybe<Scalars['String']['output']>;
  discount: Scalars['Float']['output'];
  id: Scalars['ID']['output'];
  image4xLink?: Maybe<Scalars['String']['output']>;
  imageLink?: Maybe<Scalars['String']['output']>;
  levels: Array<TraderLevel>;
  name: Scalars['String']['output'];
  normalizedName: Scalars['String']['output'];
  reputationLevels: Array<Maybe<TraderReputationLevel>>;
  resetTime?: Maybe<Scalars['String']['output']>;
  tarkovDataId?: Maybe<Scalars['Int']['output']>;
};

export class TraderCashOffer {
  __typename?: 'TraderCashOffer';
  currency?: Maybe<Scalars['String']['output']>;
  currencyItem?: Maybe<Item>;
  item: Item;
  minTraderLevel?: Maybe<Scalars['Int']['output']>;
  price?: Maybe<Scalars['Int']['output']>;
  priceRUB?: Maybe<Scalars['Int']['output']>;
  taskUnlock?: Maybe<Task>;
};

export class TraderLevel {
  __typename?: 'TraderLevel';
  /** barters and cashOffers are only available via the traders query. */
  barters: Array<Maybe<Barter>>;
  cashOffers: Array<Maybe<TraderCashOffer>>;
  id: Scalars['ID']['output'];
  image4xLink?: Maybe<Scalars['String']['output']>;
  imageLink?: Maybe<Scalars['String']['output']>;
  insuranceRate?: Maybe<Scalars['Float']['output']>;
  level: Scalars['Int']['output'];
  payRate: Scalars['Float']['output'];
  repairCostMultiplier?: Maybe<Scalars['Float']['output']>;
  requiredCommerce: Scalars['Int']['output'];
  requiredPlayerLevel: Scalars['Int']['output'];
  requiredReputation: Scalars['Float']['output'];
};

export enum TraderName {
  Fence = 'fence',
  Jaeger = 'jaeger',
  Mechanic = 'mechanic',
  Peacekeeper = 'peacekeeper',
  Prapor = 'prapor',
  Ragman = 'ragman',
  Skier = 'skier',
  Therapist = 'therapist'
}

export class TraderOffer implements Vendor {
  __typename?: 'TraderOffer';
  minTraderLevel?: Maybe<Scalars['Int']['output']>;
  name: Scalars['String']['output'];
  normalizedName: Scalars['String']['output'];
  taskUnlock?: Maybe<Task>;
  trader: Trader;
};

/** TraderPrice is deprecated and replaced with ItemPrice. */
export class TraderPrice {
  __typename?: 'TraderPrice';




};

export type TraderReputationLevel = TraderReputationLevelFence;

export class TraderReputationLevelFence {
  __typename?: 'TraderReputationLevelFence';
  availableScavExtracts?: Maybe<Scalars['Int']['output']>;
  btrCoveringFireDiscount?: Maybe<Scalars['Int']['output']>;
  btrDeliveryDiscount?: Maybe<Scalars['Int']['output']>;
  btrDeliveryGridSize?: Maybe<MapPosition>;
  btrEnabled?: Maybe<Scalars['Boolean']['output']>;
  btrTaxiDiscount?: Maybe<Scalars['Int']['output']>;
  extractPriceModifier?: Maybe<Scalars['Float']['output']>;
  hostileBosses?: Maybe<Scalars['Boolean']['output']>;
  hostileScavs?: Maybe<Scalars['Boolean']['output']>;
  minimumReputation: Scalars['Int']['output'];
  priceModifier?: Maybe<Scalars['Float']['output']>;
  scavAttackSupport?: Maybe<Scalars['Boolean']['output']>;
  scavCaseTimeModifier?: Maybe<Scalars['Float']['output']>;
  scavCooldownModifier?: Maybe<Scalars['Float']['output']>;
  scavEquipmentSpawnChanceModifier?: Maybe<Scalars['Float']['output']>;
  scavFollowChance?: Maybe<Scalars['Float']['output']>;
};

/** TraderResetTime is deprecated and replaced with Trader. */
export class TraderResetTime {
  __typename?: 'TraderResetTime';


};

export class TraderStanding {
  __typename?: 'TraderStanding';
  standing: Scalars['Float']['output'];
  trader: Trader;
};

export interface Vendor {
  name: Scalars['String']['output'];
  normalizedName: Scalars['String']['output'];
}

export class HistoricalPricePoint {
  __typename?: 'historicalPricePoint';
  price?: Maybe<Scalars['Int']['output']>;
  priceMin?: Maybe<Scalars['Int']['output']>;
  timestamp?: Maybe<Scalars['String']['output']>;
};



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping of union types */
// @ts-ignore
export type ResolversUnionTypes<RefType extends Record<string, unknown>> = {
  ItemProperties: ( ItemPropertiesAmmo ) | ( ItemPropertiesArmor ) | ( ItemPropertiesArmorAttachment ) | ( ItemPropertiesBackpack ) | ( ItemPropertiesBarrel ) | ( ItemPropertiesChestRig ) | ( ItemPropertiesContainer ) | ( ItemPropertiesFoodDrink ) | ( ItemPropertiesGlasses ) | ( ItemPropertiesGrenade ) | ( ItemPropertiesHeadphone ) | ( ItemPropertiesHeadwear ) | ( ItemPropertiesHelmet ) | ( ItemPropertiesKey ) | ( ItemPropertiesMagazine ) | ( ItemPropertiesMedKit ) | ( ItemPropertiesMedicalItem ) | ( ItemPropertiesMelee ) | ( ItemPropertiesNightVision ) | ( ItemPropertiesPainkiller ) | ( ItemPropertiesPreset ) | ( ItemPropertiesResource ) | ( ItemPropertiesScope ) | ( ItemPropertiesStim ) | ( ItemPropertiesSurgicalKit ) | ( ItemPropertiesWeapon ) | ( ItemPropertiesWeaponMod );
  MapSwitchTarget: ( MapExtract ) | ( MapSwitch );
  TraderReputationLevel: ( TraderReputationLevelFence );
};

/** Mapping of interface types */
// @ts-ignore
export type ResolversInterfaceTypes<RefType extends Record<string, unknown>> = {
  ItemArmorSlot: ( ItemArmorSlotLocked ) | ( ItemArmorSlotOpen );
  TaskObjective: ( TaskObjectiveBasic ) | ( TaskObjectiveBuildItem ) | ( TaskObjectiveExperience ) | ( TaskObjectiveExtract ) | ( TaskObjectiveItem ) | ( TaskObjectiveMark ) | ( TaskObjectivePlayerLevel ) | ( TaskObjectiveQuestItem ) | ( TaskObjectiveShoot ) | ( TaskObjectiveSkill ) | ( TaskObjectiveTaskStatus ) | ( TaskObjectiveTraderLevel ) | ( TaskObjectiveTraderStanding ) | ( TaskObjectiveUseItem );
  Vendor: ( FleaMarket ) | ( TraderOffer );
};

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Achievement: ResolverTypeWrapper<Achievement>;
  Ammo: ResolverTypeWrapper<Ammo>;
  ArmorMaterial: ResolverTypeWrapper<ArmorMaterial>;
  AttributeThreshold: ResolverTypeWrapper<AttributeThreshold>;
  Barter: ResolverTypeWrapper<Barter>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  BossEscort: ResolverTypeWrapper<BossEscort>;
  BossEscortAmount: ResolverTypeWrapper<BossEscortAmount>;
  BossSpawn: ResolverTypeWrapper<BossSpawn>;
  BossSpawnLocation: ResolverTypeWrapper<BossSpawnLocation>;
  ContainedItem: ResolverTypeWrapper<ContainedItem>;
  Craft: ResolverTypeWrapper<Craft>;
  FleaMarket: ResolverTypeWrapper<FleaMarket>;
  FleaMarketReputationLevel: ResolverTypeWrapper<FleaMarketReputationLevel>;
  Float: ResolverTypeWrapper<Scalars['Float']['output']>;
  GameProperty: ResolverTypeWrapper<GameProperty>;
  HandbookCategoryName: HandbookCategoryName;
  HealthEffect: ResolverTypeWrapper<HealthEffect>;
  HealthPart: ResolverTypeWrapper<HealthPart>;
  HideoutModule: ResolverTypeWrapper<HideoutModule>;
  HideoutStation: ResolverTypeWrapper<HideoutStation>;
  HideoutStationBonus: ResolverTypeWrapper<HideoutStationBonus>;
  HideoutStationLevel: ResolverTypeWrapper<HideoutStationLevel>;
  ID: ResolverTypeWrapper<Scalars['ID']['output']>;
  Int: ResolverTypeWrapper<Scalars['Int']['output']>;
  Item: ResolverTypeWrapper<Omit<Item, 'properties'> & { properties?: Maybe<ResolversTypes['ItemProperties']> }>;
  ItemArmorSlot: ResolverTypeWrapper<ResolversInterfaceTypes<ResolversTypes>['ItemArmorSlot']>;
  ItemArmorSlotLocked: ResolverTypeWrapper<ItemArmorSlotLocked>;
  ItemArmorSlotOpen: ResolverTypeWrapper<ItemArmorSlotOpen>;
  ItemAttribute: ResolverTypeWrapper<ItemAttribute>;
  ItemCategory: ResolverTypeWrapper<ItemCategory>;
  ItemCategoryName: ItemCategoryName;
  ItemFilters: ResolverTypeWrapper<ItemFilters>;
  ItemPrice: ResolverTypeWrapper<ItemPrice>;
  ItemProperties: ResolverTypeWrapper<ResolversUnionTypes<ResolversTypes>['ItemProperties']>;
  ItemPropertiesAmmo: ResolverTypeWrapper<ItemPropertiesAmmo>;
  ItemPropertiesArmor: ResolverTypeWrapper<ItemPropertiesArmor>;
  ItemPropertiesArmorAttachment: ResolverTypeWrapper<ItemPropertiesArmorAttachment>;
  ItemPropertiesBackpack: ResolverTypeWrapper<ItemPropertiesBackpack>;
  ItemPropertiesBarrel: ResolverTypeWrapper<ItemPropertiesBarrel>;
  ItemPropertiesChestRig: ResolverTypeWrapper<ItemPropertiesChestRig>;
  ItemPropertiesContainer: ResolverTypeWrapper<ItemPropertiesContainer>;
  ItemPropertiesFoodDrink: ResolverTypeWrapper<ItemPropertiesFoodDrink>;
  ItemPropertiesGlasses: ResolverTypeWrapper<ItemPropertiesGlasses>;
  ItemPropertiesGrenade: ResolverTypeWrapper<ItemPropertiesGrenade>;
  ItemPropertiesHeadphone: ResolverTypeWrapper<ItemPropertiesHeadphone>;
  ItemPropertiesHeadwear: ResolverTypeWrapper<ItemPropertiesHeadwear>;
  ItemPropertiesHelmet: ResolverTypeWrapper<ItemPropertiesHelmet>;
  ItemPropertiesKey: ResolverTypeWrapper<ItemPropertiesKey>;
  ItemPropertiesMagazine: ResolverTypeWrapper<ItemPropertiesMagazine>;
  ItemPropertiesMedKit: ResolverTypeWrapper<ItemPropertiesMedKit>;
  ItemPropertiesMedicalItem: ResolverTypeWrapper<ItemPropertiesMedicalItem>;
  ItemPropertiesMelee: ResolverTypeWrapper<ItemPropertiesMelee>;
  ItemPropertiesNightVision: ResolverTypeWrapper<ItemPropertiesNightVision>;
  ItemPropertiesPainkiller: ResolverTypeWrapper<ItemPropertiesPainkiller>;
  ItemPropertiesPreset: ResolverTypeWrapper<ItemPropertiesPreset>;
  ItemPropertiesResource: ResolverTypeWrapper<ItemPropertiesResource>;
  ItemPropertiesScope: ResolverTypeWrapper<ItemPropertiesScope>;
  ItemPropertiesStim: ResolverTypeWrapper<ItemPropertiesStim>;
  ItemPropertiesSurgicalKit: ResolverTypeWrapper<ItemPropertiesSurgicalKit>;
  ItemPropertiesWeapon: ResolverTypeWrapper<ItemPropertiesWeapon>;
  ItemPropertiesWeaponMod: ResolverTypeWrapper<ItemPropertiesWeaponMod>;
  ItemSlot: ResolverTypeWrapper<ItemSlot>;
  ItemSourceName: ItemSourceName;
  ItemStorageGrid: ResolverTypeWrapper<ItemStorageGrid>;
  ItemTranslation: ResolverTypeWrapper<ItemTranslation>;
  ItemType: ItemType;
  LanguageCode: LanguageCode;
  Lock: ResolverTypeWrapper<Lock>;
  LootContainer: ResolverTypeWrapper<LootContainer>;
  LootContainerPosition: ResolverTypeWrapper<LootContainerPosition>;
  Map: ResolverTypeWrapper<Map>;
  MapExtract: ResolverTypeWrapper<MapExtract>;
  MapHazard: ResolverTypeWrapper<MapHazard>;
  MapPosition: ResolverTypeWrapper<MapPosition>;
  MapSpawn: ResolverTypeWrapper<MapSpawn>;
  MapSwitch: ResolverTypeWrapper<MapSwitch>;
  MapSwitchOperation: ResolverTypeWrapper<Omit<MapSwitchOperation, 'target'> & { target?: Maybe<ResolversTypes['MapSwitchTarget']> }>;
  MapSwitchTarget: ResolverTypeWrapper<ResolversUnionTypes<ResolversTypes>['MapSwitchTarget']>;
  MapWithPosition: ResolverTypeWrapper<MapWithPosition>;
  MobInfo: ResolverTypeWrapper<MobInfo>;
  NumberCompare: ResolverTypeWrapper<NumberCompare>;
  OfferUnlock: ResolverTypeWrapper<OfferUnlock>;
  PlayerLevel: ResolverTypeWrapper<PlayerLevel>;
  PriceRequirement: ResolverTypeWrapper<PriceRequirement>;
  Query: ResolverTypeWrapper<{}>;
  Quest: ResolverTypeWrapper<Quest>;
  QuestItem: ResolverTypeWrapper<QuestItem>;
  QuestObjective: ResolverTypeWrapper<QuestObjective>;
  QuestRequirement: ResolverTypeWrapper<QuestRequirement>;
  QuestRewardReputation: ResolverTypeWrapper<QuestRewardReputation>;
  RequirementHideoutStationLevel: ResolverTypeWrapper<RequirementHideoutStationLevel>;
  RequirementItem: ResolverTypeWrapper<RequirementItem>;
  RequirementSkill: ResolverTypeWrapper<RequirementSkill>;
  RequirementTask: ResolverTypeWrapper<RequirementTask>;
  RequirementTrader: ResolverTypeWrapper<RequirementTrader>;
  RequirementType: RequirementType;
  ServerStatus: ResolverTypeWrapper<ServerStatus>;
  SkillLevel: ResolverTypeWrapper<SkillLevel>;
  StationaryWeapon: ResolverTypeWrapper<StationaryWeapon>;
  StationaryWeaponPosition: ResolverTypeWrapper<StationaryWeaponPosition>;
  Status: ResolverTypeWrapper<Status>;
  StatusCode: StatusCode;
  StatusMessage: ResolverTypeWrapper<StatusMessage>;
  StimEffect: ResolverTypeWrapper<StimEffect>;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  Task: ResolverTypeWrapper<Task>;
  TaskKey: ResolverTypeWrapper<TaskKey>;
  TaskObjective: ResolverTypeWrapper<ResolversInterfaceTypes<ResolversTypes>['TaskObjective']>;
  TaskObjectiveBasic: ResolverTypeWrapper<TaskObjectiveBasic>;
  TaskObjectiveBuildItem: ResolverTypeWrapper<TaskObjectiveBuildItem>;
  TaskObjectiveExperience: ResolverTypeWrapper<TaskObjectiveExperience>;
  TaskObjectiveExtract: ResolverTypeWrapper<TaskObjectiveExtract>;
  TaskObjectiveItem: ResolverTypeWrapper<TaskObjectiveItem>;
  TaskObjectiveMark: ResolverTypeWrapper<TaskObjectiveMark>;
  TaskObjectivePlayerLevel: ResolverTypeWrapper<TaskObjectivePlayerLevel>;
  TaskObjectiveQuestItem: ResolverTypeWrapper<TaskObjectiveQuestItem>;
  TaskObjectiveShoot: ResolverTypeWrapper<TaskObjectiveShoot>;
  TaskObjectiveSkill: ResolverTypeWrapper<TaskObjectiveSkill>;
  TaskObjectiveTaskStatus: ResolverTypeWrapper<TaskObjectiveTaskStatus>;
  TaskObjectiveTraderLevel: ResolverTypeWrapper<TaskObjectiveTraderLevel>;
  TaskObjectiveTraderStanding: ResolverTypeWrapper<TaskObjectiveTraderStanding>;
  TaskObjectiveUseItem: ResolverTypeWrapper<TaskObjectiveUseItem>;
  TaskRewards: ResolverTypeWrapper<TaskRewards>;
  TaskStatusRequirement: ResolverTypeWrapper<TaskStatusRequirement>;
  TaskZone: ResolverTypeWrapper<TaskZone>;
  Trader: ResolverTypeWrapper<Omit<Trader, 'reputationLevels'> & { reputationLevels: Array<Maybe<ResolversTypes['TraderReputationLevel']>> }>;
  TraderCashOffer: ResolverTypeWrapper<TraderCashOffer>;
  TraderLevel: ResolverTypeWrapper<TraderLevel>;
  TraderName: TraderName;
  TraderOffer: ResolverTypeWrapper<TraderOffer>;
  TraderPrice: ResolverTypeWrapper<TraderPrice>;
  TraderReputationLevel: ResolverTypeWrapper<ResolversUnionTypes<ResolversTypes>['TraderReputationLevel']>;
  TraderReputationLevelFence: ResolverTypeWrapper<TraderReputationLevelFence>;
  TraderResetTime: ResolverTypeWrapper<TraderResetTime>;
  TraderStanding: ResolverTypeWrapper<TraderStanding>;
  Vendor: ResolverTypeWrapper<ResolversInterfaceTypes<ResolversTypes>['Vendor']>;
  historicalPricePoint: ResolverTypeWrapper<HistoricalPricePoint>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Achievement: Achievement;
  Ammo: Ammo;
  ArmorMaterial: ArmorMaterial;
  AttributeThreshold: AttributeThreshold;
  Barter: Barter;
  Boolean: Scalars['Boolean']['output'];
  BossEscort: BossEscort;
  BossEscortAmount: BossEscortAmount;
  BossSpawn: BossSpawn;
  BossSpawnLocation: BossSpawnLocation;
  ContainedItem: ContainedItem;
  Craft: Craft;
  FleaMarket: FleaMarket;
  FleaMarketReputationLevel: FleaMarketReputationLevel;
  Float: Scalars['Float']['output'];
  GameProperty: GameProperty;
  HealthEffect: HealthEffect;
  HealthPart: HealthPart;
  HideoutModule: HideoutModule;
  HideoutStation: HideoutStation;
  HideoutStationBonus: HideoutStationBonus;
  HideoutStationLevel: HideoutStationLevel;
  ID: Scalars['ID']['output'];
  Int: Scalars['Int']['output'];
  Item: Omit<Item, 'properties'> & { properties?: Maybe<ResolversParentTypes['ItemProperties']> };
  ItemArmorSlot: ResolversInterfaceTypes<ResolversParentTypes>['ItemArmorSlot'];
  ItemArmorSlotLocked: ItemArmorSlotLocked;
  ItemArmorSlotOpen: ItemArmorSlotOpen;
  ItemAttribute: ItemAttribute;
  ItemCategory: ItemCategory;
  ItemFilters: ItemFilters;
  ItemPrice: ItemPrice;
  ItemProperties: ResolversUnionTypes<ResolversParentTypes>['ItemProperties'];
  ItemPropertiesAmmo: ItemPropertiesAmmo;
  ItemPropertiesArmor: ItemPropertiesArmor;
  ItemPropertiesArmorAttachment: ItemPropertiesArmorAttachment;
  ItemPropertiesBackpack: ItemPropertiesBackpack;
  ItemPropertiesBarrel: ItemPropertiesBarrel;
  ItemPropertiesChestRig: ItemPropertiesChestRig;
  ItemPropertiesContainer: ItemPropertiesContainer;
  ItemPropertiesFoodDrink: ItemPropertiesFoodDrink;
  ItemPropertiesGlasses: ItemPropertiesGlasses;
  ItemPropertiesGrenade: ItemPropertiesGrenade;
  ItemPropertiesHeadphone: ItemPropertiesHeadphone;
  ItemPropertiesHeadwear: ItemPropertiesHeadwear;
  ItemPropertiesHelmet: ItemPropertiesHelmet;
  ItemPropertiesKey: ItemPropertiesKey;
  ItemPropertiesMagazine: ItemPropertiesMagazine;
  ItemPropertiesMedKit: ItemPropertiesMedKit;
  ItemPropertiesMedicalItem: ItemPropertiesMedicalItem;
  ItemPropertiesMelee: ItemPropertiesMelee;
  ItemPropertiesNightVision: ItemPropertiesNightVision;
  ItemPropertiesPainkiller: ItemPropertiesPainkiller;
  ItemPropertiesPreset: ItemPropertiesPreset;
  ItemPropertiesResource: ItemPropertiesResource;
  ItemPropertiesScope: ItemPropertiesScope;
  ItemPropertiesStim: ItemPropertiesStim;
  ItemPropertiesSurgicalKit: ItemPropertiesSurgicalKit;
  ItemPropertiesWeapon: ItemPropertiesWeapon;
  ItemPropertiesWeaponMod: ItemPropertiesWeaponMod;
  ItemSlot: ItemSlot;
  ItemStorageGrid: ItemStorageGrid;
  ItemTranslation: ItemTranslation;
  Lock: Lock;
  LootContainer: LootContainer;
  LootContainerPosition: LootContainerPosition;
  Map: Map;
  MapExtract: MapExtract;
  MapHazard: MapHazard;
  MapPosition: MapPosition;
  MapSpawn: MapSpawn;
  MapSwitch: MapSwitch;
  MapSwitchOperation: Omit<MapSwitchOperation, 'target'> & { target?: Maybe<ResolversParentTypes['MapSwitchTarget']> };
  MapSwitchTarget: ResolversUnionTypes<ResolversParentTypes>['MapSwitchTarget'];
  MapWithPosition: MapWithPosition;
  MobInfo: MobInfo;
  NumberCompare: NumberCompare;
  OfferUnlock: OfferUnlock;
  PlayerLevel: PlayerLevel;
  PriceRequirement: PriceRequirement;
  Query: {};
  Quest: Quest;
  QuestItem: QuestItem;
  QuestObjective: QuestObjective;
  QuestRequirement: QuestRequirement;
  QuestRewardReputation: QuestRewardReputation;
  RequirementHideoutStationLevel: RequirementHideoutStationLevel;
  RequirementItem: RequirementItem;
  RequirementSkill: RequirementSkill;
  RequirementTask: RequirementTask;
  RequirementTrader: RequirementTrader;
  ServerStatus: ServerStatus;
  SkillLevel: SkillLevel;
  StationaryWeapon: StationaryWeapon;
  StationaryWeaponPosition: StationaryWeaponPosition;
  Status: Status;
  StatusMessage: StatusMessage;
  StimEffect: StimEffect;
  String: Scalars['String']['output'];
  Task: Task;
  TaskKey: TaskKey;
  TaskObjective: ResolversInterfaceTypes<ResolversParentTypes>['TaskObjective'];
  TaskObjectiveBasic: TaskObjectiveBasic;
  TaskObjectiveBuildItem: TaskObjectiveBuildItem;
  TaskObjectiveExperience: TaskObjectiveExperience;
  TaskObjectiveExtract: TaskObjectiveExtract;
  TaskObjectiveItem: TaskObjectiveItem;
  TaskObjectiveMark: TaskObjectiveMark;
  TaskObjectivePlayerLevel: TaskObjectivePlayerLevel;
  TaskObjectiveQuestItem: TaskObjectiveQuestItem;
  TaskObjectiveShoot: TaskObjectiveShoot;
  TaskObjectiveSkill: TaskObjectiveSkill;
  TaskObjectiveTaskStatus: TaskObjectiveTaskStatus;
  TaskObjectiveTraderLevel: TaskObjectiveTraderLevel;
  TaskObjectiveTraderStanding: TaskObjectiveTraderStanding;
  TaskObjectiveUseItem: TaskObjectiveUseItem;
  TaskRewards: TaskRewards;
  TaskStatusRequirement: TaskStatusRequirement;
  TaskZone: TaskZone;
  Trader: Omit<Trader, 'reputationLevels'> & { reputationLevels: Array<Maybe<ResolversParentTypes['TraderReputationLevel']>> };
  TraderCashOffer: TraderCashOffer;
  TraderLevel: TraderLevel;
  TraderOffer: TraderOffer;
  TraderPrice: TraderPrice;
  TraderReputationLevel: ResolversUnionTypes<ResolversParentTypes>['TraderReputationLevel'];
  TraderReputationLevelFence: TraderReputationLevelFence;
  TraderResetTime: TraderResetTime;
  TraderStanding: TraderStanding;
  Vendor: ResolversInterfaceTypes<ResolversParentTypes>['Vendor'];
  historicalPricePoint: HistoricalPricePoint;
};

export type AchievementResolvers<ContextType = any, ParentType extends ResolversParentTypes['Achievement'] = ResolversParentTypes['Achievement']> = {
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  hidden?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  playersCompletedPercent?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AmmoResolvers<ContextType = any, ParentType extends ResolversParentTypes['Ammo'] = ResolversParentTypes['Ammo']> = {
  accuracy?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  accuracyModifier?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  ammoType?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  armorDamage?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  caliber?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  damage?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  fragmentationChance?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  heavyBleedModifier?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  initialSpeed?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  item?: Resolver<ResolversTypes['Item'], ParentType, ContextType>;
  lightBleedModifier?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  penetrationChance?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  penetrationPower?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  penetrationPowerDeviation?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  projectileCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  recoil?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  recoilModifier?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  ricochetChance?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  stackMaxSize?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  staminaBurnPerDamage?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  tracer?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  tracerColor?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  weight?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ArmorMaterialResolvers<ContextType = any, ParentType extends ResolversParentTypes['ArmorMaterial'] = ResolversParentTypes['ArmorMaterial']> = {
  destructibility?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  explosionDestructibility?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  maxRepairDegradation?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  maxRepairKitDegradation?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  minRepairDegradation?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  minRepairKitDegradation?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AttributeThresholdResolvers<ContextType = any, ParentType extends ResolversParentTypes['AttributeThreshold'] = ResolversParentTypes['AttributeThreshold']> = {
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  requirement?: Resolver<ResolversTypes['NumberCompare'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BarterResolvers<ContextType = any, ParentType extends ResolversParentTypes['Barter'] = ResolversParentTypes['Barter']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  level?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  requiredItems?: Resolver<Array<Maybe<ResolversTypes['ContainedItem']>>, ParentType, ContextType>;
  requirements?: Resolver<Array<Maybe<ResolversTypes['PriceRequirement']>>, ParentType, ContextType>;
  rewardItems?: Resolver<Array<Maybe<ResolversTypes['ContainedItem']>>, ParentType, ContextType>;
  source?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  sourceName?: Resolver<ResolversTypes['ItemSourceName'], ParentType, ContextType>;
  taskUnlock?: Resolver<Maybe<ResolversTypes['Task']>, ParentType, ContextType>;
  trader?: Resolver<ResolversTypes['Trader'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BossEscortResolvers<ContextType = any, ParentType extends ResolversParentTypes['BossEscort'] = ResolversParentTypes['BossEscort']> = {
  amount?: Resolver<Maybe<Array<Maybe<ResolversTypes['BossEscortAmount']>>>, ParentType, ContextType>;
  boss?: Resolver<ResolversTypes['MobInfo'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  normalizedName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BossEscortAmountResolvers<ContextType = any, ParentType extends ResolversParentTypes['BossEscortAmount'] = ResolversParentTypes['BossEscortAmount']> = {
  chance?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BossSpawnResolvers<ContextType = any, ParentType extends ResolversParentTypes['BossSpawn'] = ResolversParentTypes['BossSpawn']> = {
  boss?: Resolver<ResolversTypes['MobInfo'], ParentType, ContextType>;
  escorts?: Resolver<Array<Maybe<ResolversTypes['BossEscort']>>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  normalizedName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  spawnChance?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  spawnLocations?: Resolver<Array<Maybe<ResolversTypes['BossSpawnLocation']>>, ParentType, ContextType>;
  spawnTime?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  spawnTimeRandom?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  spawnTrigger?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  switch?: Resolver<Maybe<ResolversTypes['MapSwitch']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BossSpawnLocationResolvers<ContextType = any, ParentType extends ResolversParentTypes['BossSpawnLocation'] = ResolversParentTypes['BossSpawnLocation']> = {
  chance?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  spawnKey?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ContainedItemResolvers<ContextType = any, ParentType extends ResolversParentTypes['ContainedItem'] = ResolversParentTypes['ContainedItem']> = {
  attributes?: Resolver<Maybe<Array<Maybe<ResolversTypes['ItemAttribute']>>>, ParentType, ContextType>;
  count?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  item?: Resolver<ResolversTypes['Item'], ParentType, ContextType>;
  quantity?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CraftResolvers<ContextType = any, ParentType extends ResolversParentTypes['Craft'] = ResolversParentTypes['Craft']> = {
  duration?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  level?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  requiredItems?: Resolver<Array<Maybe<ResolversTypes['ContainedItem']>>, ParentType, ContextType>;
  requiredQuestItems?: Resolver<Array<Maybe<ResolversTypes['QuestItem']>>, ParentType, ContextType>;
  requirements?: Resolver<Array<Maybe<ResolversTypes['PriceRequirement']>>, ParentType, ContextType>;
  rewardItems?: Resolver<Array<Maybe<ResolversTypes['ContainedItem']>>, ParentType, ContextType>;
  source?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  sourceName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  station?: Resolver<ResolversTypes['HideoutStation'], ParentType, ContextType>;
  taskUnlock?: Resolver<Maybe<ResolversTypes['Task']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type FleaMarketResolvers<ContextType = any, ParentType extends ResolversParentTypes['FleaMarket'] = ResolversParentTypes['FleaMarket']> = {
  enabled?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  minPlayerLevel?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  normalizedName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  reputationLevels?: Resolver<Array<Maybe<ResolversTypes['FleaMarketReputationLevel']>>, ParentType, ContextType>;
  sellOfferFeeRate?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  sellRequirementFeeRate?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type FleaMarketReputationLevelResolvers<ContextType = any, ParentType extends ResolversParentTypes['FleaMarketReputationLevel'] = ResolversParentTypes['FleaMarketReputationLevel']> = {
  maxRep?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  minRep?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  offers?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type GamePropertyResolvers<ContextType = any, ParentType extends ResolversParentTypes['GameProperty'] = ResolversParentTypes['GameProperty']> = {
  arrayValue?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  key?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  numericValue?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  objectValue?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  stringValue?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type HealthEffectResolvers<ContextType = any, ParentType extends ResolversParentTypes['HealthEffect'] = ResolversParentTypes['HealthEffect']> = {
  bodyParts?: Resolver<Array<Maybe<ResolversTypes['String']>>, ParentType, ContextType>;
  effects?: Resolver<Array<Maybe<ResolversTypes['String']>>, ParentType, ContextType>;
  time?: Resolver<Maybe<ResolversTypes['NumberCompare']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type HealthPartResolvers<ContextType = any, ParentType extends ResolversParentTypes['HealthPart'] = ResolversParentTypes['HealthPart']> = {
  bodyPart?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  max?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type HideoutModuleResolvers<ContextType = any, ParentType extends ResolversParentTypes['HideoutModule'] = ResolversParentTypes['HideoutModule']> = {
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  itemRequirements?: Resolver<Array<Maybe<ResolversTypes['ContainedItem']>>, ParentType, ContextType>;
  level?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  moduleRequirements?: Resolver<Array<Maybe<ResolversTypes['HideoutModule']>>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type HideoutStationResolvers<ContextType = any, ParentType extends ResolversParentTypes['HideoutStation'] = ResolversParentTypes['HideoutStation']> = {
  crafts?: Resolver<Array<Maybe<ResolversTypes['Craft']>>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  imageLink?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  levels?: Resolver<Array<Maybe<ResolversTypes['HideoutStationLevel']>>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  normalizedName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  tarkovDataId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type HideoutStationBonusResolvers<ContextType = any, ParentType extends ResolversParentTypes['HideoutStationBonus'] = ResolversParentTypes['HideoutStationBonus']> = {
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  passive?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  production?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  skillName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  slotItems?: Resolver<Maybe<Array<Maybe<ResolversTypes['Item']>>>, ParentType, ContextType>;
  type?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  value?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type HideoutStationLevelResolvers<ContextType = any, ParentType extends ResolversParentTypes['HideoutStationLevel'] = ResolversParentTypes['HideoutStationLevel']> = {
  bonuses?: Resolver<Maybe<Array<Maybe<ResolversTypes['HideoutStationBonus']>>>, ParentType, ContextType>;
  constructionTime?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  crafts?: Resolver<Array<Maybe<ResolversTypes['Craft']>>, ParentType, ContextType>;
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  itemRequirements?: Resolver<Array<Maybe<ResolversTypes['RequirementItem']>>, ParentType, ContextType>;
  level?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  skillRequirements?: Resolver<Array<Maybe<ResolversTypes['RequirementSkill']>>, ParentType, ContextType>;
  stationLevelRequirements?: Resolver<Array<Maybe<ResolversTypes['RequirementHideoutStationLevel']>>, ParentType, ContextType>;
  tarkovDataId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  traderRequirements?: Resolver<Array<Maybe<ResolversTypes['RequirementTrader']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ItemResolvers<ContextType = any, ParentType extends ResolversParentTypes['Item'] = ResolversParentTypes['Item']> = {
  accuracyModifier?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  avg24hPrice?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  backgroundColor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  bartersFor?: Resolver<Array<Maybe<ResolversTypes['Barter']>>, ParentType, ContextType>;
  bartersUsing?: Resolver<Array<Maybe<ResolversTypes['Barter']>>, ParentType, ContextType>;
  baseImageLink?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  basePrice?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  blocksHeadphones?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  bsgCategory?: Resolver<Maybe<ResolversTypes['ItemCategory']>, ParentType, ContextType>;
  bsgCategoryId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  buyFor?: Resolver<Maybe<Array<ResolversTypes['ItemPrice']>>, ParentType, ContextType>;
  categories?: Resolver<Array<Maybe<ResolversTypes['ItemCategory']>>, ParentType, ContextType>;
  category?: Resolver<Maybe<ResolversTypes['ItemCategory']>, ParentType, ContextType>;
  categoryTop?: Resolver<Maybe<ResolversTypes['ItemCategory']>, ParentType, ContextType>;
  changeLast48h?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  changeLast48hPercent?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  conflictingItems?: Resolver<Maybe<Array<Maybe<ResolversTypes['Item']>>>, ParentType, ContextType>;
  conflictingSlotIds?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  containsItems?: Resolver<Maybe<Array<Maybe<ResolversTypes['ContainedItem']>>>, ParentType, ContextType>;
  craftsFor?: Resolver<Array<Maybe<ResolversTypes['Craft']>>, ParentType, ContextType>;
  craftsUsing?: Resolver<Array<Maybe<ResolversTypes['Craft']>>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  ergonomicsModifier?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  fleaMarketFee?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType, Partial<ItemFleaMarketFeeArgs>>;
  gridImageLink?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  gridImageLinkFallback?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  handbookCategories?: Resolver<Array<Maybe<ResolversTypes['ItemCategory']>>, ParentType, ContextType>;
  hasGrid?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  height?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  high24hPrice?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  historicalPrices?: Resolver<Maybe<Array<Maybe<ResolversTypes['historicalPricePoint']>>>, ParentType, ContextType>;
  iconLink?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  iconLinkFallback?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  image8xLink?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  image512pxLink?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  imageLink?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  imageLinkFallback?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  inspectImageLink?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  lastLowPrice?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  lastOfferCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  link?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  loudness?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  low24hPrice?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  normalizedName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  properties?: Resolver<Maybe<ResolversTypes['ItemProperties']>, ParentType, ContextType>;
  receivedFromTasks?: Resolver<Array<Maybe<ResolversTypes['Task']>>, ParentType, ContextType>;
  recoilModifier?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  sellFor?: Resolver<Maybe<Array<ResolversTypes['ItemPrice']>>, ParentType, ContextType>;
  shortName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  traderPrices?: Resolver<Array<Maybe<ResolversTypes['TraderPrice']>>, ParentType, ContextType>;
  translation?: Resolver<Maybe<ResolversTypes['ItemTranslation']>, ParentType, ContextType, Partial<ItemTranslationArgs>>;
  types?: Resolver<Array<Maybe<ResolversTypes['ItemType']>>, ParentType, ContextType>;
  updated?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  usedInTasks?: Resolver<Array<Maybe<ResolversTypes['Task']>>, ParentType, ContextType>;
  velocity?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  weight?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  width?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  wikiLink?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ItemArmorSlotResolvers<ContextType = any, ParentType extends ResolversParentTypes['ItemArmorSlot'] = ResolversParentTypes['ItemArmorSlot']> = {
  __resolveType: TypeResolveFn<'ItemArmorSlotLocked' | 'ItemArmorSlotOpen', ParentType, ContextType>;
  nameId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  zones?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
};

export type ItemArmorSlotLockedResolvers<ContextType = any, ParentType extends ResolversParentTypes['ItemArmorSlotLocked'] = ResolversParentTypes['ItemArmorSlotLocked']> = {
  armorType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  baseValue?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  bluntThroughput?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  class?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  durability?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  ergoPenalty?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  material?: Resolver<Maybe<ResolversTypes['ArmorMaterial']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  nameId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  repairCost?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  speedPenalty?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  turnPenalty?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  zones?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ItemArmorSlotOpenResolvers<ContextType = any, ParentType extends ResolversParentTypes['ItemArmorSlotOpen'] = ResolversParentTypes['ItemArmorSlotOpen']> = {
  allowedPlates?: Resolver<Maybe<Array<Maybe<ResolversTypes['Item']>>>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  nameId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  zones?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ItemAttributeResolvers<ContextType = any, ParentType extends ResolversParentTypes['ItemAttribute'] = ResolversParentTypes['ItemAttribute']> = {
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  value?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ItemCategoryResolvers<ContextType = any, ParentType extends ResolversParentTypes['ItemCategory'] = ResolversParentTypes['ItemCategory']> = {
  children?: Resolver<Maybe<Array<Maybe<ResolversTypes['ItemCategory']>>>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  normalizedName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  parent?: Resolver<Maybe<ResolversTypes['ItemCategory']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ItemFiltersResolvers<ContextType = any, ParentType extends ResolversParentTypes['ItemFilters'] = ResolversParentTypes['ItemFilters']> = {
  allowedCategories?: Resolver<Array<Maybe<ResolversTypes['ItemCategory']>>, ParentType, ContextType>;
  allowedItems?: Resolver<Array<Maybe<ResolversTypes['Item']>>, ParentType, ContextType>;
  excludedCategories?: Resolver<Array<Maybe<ResolversTypes['ItemCategory']>>, ParentType, ContextType>;
  excludedItems?: Resolver<Array<Maybe<ResolversTypes['Item']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ItemPriceResolvers<ContextType = any, ParentType extends ResolversParentTypes['ItemPrice'] = ResolversParentTypes['ItemPrice']> = {
  currency?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  currencyItem?: Resolver<Maybe<ResolversTypes['Item']>, ParentType, ContextType>;
  price?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  priceRUB?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  requirements?: Resolver<Array<Maybe<ResolversTypes['PriceRequirement']>>, ParentType, ContextType>;
  source?: Resolver<Maybe<ResolversTypes['ItemSourceName']>, ParentType, ContextType>;
  vendor?: Resolver<ResolversTypes['Vendor'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ItemPropertiesResolvers<ContextType = any, ParentType extends ResolversParentTypes['ItemProperties'] = ResolversParentTypes['ItemProperties']> = {
  __resolveType: TypeResolveFn<'ItemPropertiesAmmo' | 'ItemPropertiesArmor' | 'ItemPropertiesArmorAttachment' | 'ItemPropertiesBackpack' | 'ItemPropertiesBarrel' | 'ItemPropertiesChestRig' | 'ItemPropertiesContainer' | 'ItemPropertiesFoodDrink' | 'ItemPropertiesGlasses' | 'ItemPropertiesGrenade' | 'ItemPropertiesHeadphone' | 'ItemPropertiesHeadwear' | 'ItemPropertiesHelmet' | 'ItemPropertiesKey' | 'ItemPropertiesMagazine' | 'ItemPropertiesMedKit' | 'ItemPropertiesMedicalItem' | 'ItemPropertiesMelee' | 'ItemPropertiesNightVision' | 'ItemPropertiesPainkiller' | 'ItemPropertiesPreset' | 'ItemPropertiesResource' | 'ItemPropertiesScope' | 'ItemPropertiesStim' | 'ItemPropertiesSurgicalKit' | 'ItemPropertiesWeapon' | 'ItemPropertiesWeaponMod', ParentType, ContextType>;
};

export type ItemPropertiesAmmoResolvers<ContextType = any, ParentType extends ResolversParentTypes['ItemPropertiesAmmo'] = ResolversParentTypes['ItemPropertiesAmmo']> = {
  accuracy?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  accuracyModifier?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  ammoType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  armorDamage?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  ballisticCoeficient?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  bulletDiameterMilimeters?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  bulletMassGrams?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  caliber?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  damage?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  durabilityBurnFactor?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  fragmentationChance?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  heatFactor?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  heavyBleedModifier?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  initialSpeed?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  lightBleedModifier?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  penetrationChance?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  penetrationPower?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  penetrationPowerDeviation?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  projectileCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  recoil?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  recoilModifier?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  ricochetChance?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  stackMaxSize?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  staminaBurnPerDamage?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  tracer?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  tracerColor?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ItemPropertiesArmorResolvers<ContextType = any, ParentType extends ResolversParentTypes['ItemPropertiesArmor'] = ResolversParentTypes['ItemPropertiesArmor']> = {
  armorSlots?: Resolver<Maybe<Array<Maybe<ResolversTypes['ItemArmorSlot']>>>, ParentType, ContextType>;
  armorType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  bluntThroughput?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  class?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  durability?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  ergoPenalty?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  material?: Resolver<Maybe<ResolversTypes['ArmorMaterial']>, ParentType, ContextType>;
  repairCost?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  speedPenalty?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  turnPenalty?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  zones?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ItemPropertiesArmorAttachmentResolvers<ContextType = any, ParentType extends ResolversParentTypes['ItemPropertiesArmorAttachment'] = ResolversParentTypes['ItemPropertiesArmorAttachment']> = {
  armorType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  blindnessProtection?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  bluntThroughput?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  class?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  durability?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  ergoPenalty?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  headZones?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  material?: Resolver<Maybe<ResolversTypes['ArmorMaterial']>, ParentType, ContextType>;
  repairCost?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  slots?: Resolver<Maybe<Array<Maybe<ResolversTypes['ItemSlot']>>>, ParentType, ContextType>;
  speedPenalty?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  turnPenalty?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ItemPropertiesBackpackResolvers<ContextType = any, ParentType extends ResolversParentTypes['ItemPropertiesBackpack'] = ResolversParentTypes['ItemPropertiesBackpack']> = {
  capacity?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  ergoPenalty?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  grids?: Resolver<Maybe<Array<Maybe<ResolversTypes['ItemStorageGrid']>>>, ParentType, ContextType>;
  pouches?: Resolver<Maybe<Array<Maybe<ResolversTypes['ItemStorageGrid']>>>, ParentType, ContextType>;
  speedPenalty?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  turnPenalty?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ItemPropertiesBarrelResolvers<ContextType = any, ParentType extends ResolversParentTypes['ItemPropertiesBarrel'] = ResolversParentTypes['ItemPropertiesBarrel']> = {
  accuracyModifier?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  centerOfImpact?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  deviationCurve?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  deviationMax?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  ergonomics?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  recoil?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  recoilModifier?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  slots?: Resolver<Maybe<Array<Maybe<ResolversTypes['ItemSlot']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ItemPropertiesChestRigResolvers<ContextType = any, ParentType extends ResolversParentTypes['ItemPropertiesChestRig'] = ResolversParentTypes['ItemPropertiesChestRig']> = {
  armorSlots?: Resolver<Maybe<Array<Maybe<ResolversTypes['ItemArmorSlot']>>>, ParentType, ContextType>;
  armorType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  bluntThroughput?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  capacity?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  class?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  durability?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  ergoPenalty?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  grids?: Resolver<Maybe<Array<Maybe<ResolversTypes['ItemStorageGrid']>>>, ParentType, ContextType>;
  material?: Resolver<Maybe<ResolversTypes['ArmorMaterial']>, ParentType, ContextType>;
  pouches?: Resolver<Maybe<Array<Maybe<ResolversTypes['ItemStorageGrid']>>>, ParentType, ContextType>;
  repairCost?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  speedPenalty?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  turnPenalty?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  zones?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ItemPropertiesContainerResolvers<ContextType = any, ParentType extends ResolversParentTypes['ItemPropertiesContainer'] = ResolversParentTypes['ItemPropertiesContainer']> = {
  capacity?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  grids?: Resolver<Maybe<Array<Maybe<ResolversTypes['ItemStorageGrid']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ItemPropertiesFoodDrinkResolvers<ContextType = any, ParentType extends ResolversParentTypes['ItemPropertiesFoodDrink'] = ResolversParentTypes['ItemPropertiesFoodDrink']> = {
  energy?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  hydration?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  stimEffects?: Resolver<Array<Maybe<ResolversTypes['StimEffect']>>, ParentType, ContextType>;
  units?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ItemPropertiesGlassesResolvers<ContextType = any, ParentType extends ResolversParentTypes['ItemPropertiesGlasses'] = ResolversParentTypes['ItemPropertiesGlasses']> = {
  blindnessProtection?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  bluntThroughput?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  class?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  durability?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  material?: Resolver<Maybe<ResolversTypes['ArmorMaterial']>, ParentType, ContextType>;
  repairCost?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ItemPropertiesGrenadeResolvers<ContextType = any, ParentType extends ResolversParentTypes['ItemPropertiesGrenade'] = ResolversParentTypes['ItemPropertiesGrenade']> = {
  contusionRadius?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  fragments?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  fuse?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  maxExplosionDistance?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  minExplosionDistance?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ItemPropertiesHeadphoneResolvers<ContextType = any, ParentType extends ResolversParentTypes['ItemPropertiesHeadphone'] = ResolversParentTypes['ItemPropertiesHeadphone']> = {
  ambientVolume?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  compressorAttack?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  compressorGain?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  compressorRelease?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  compressorThreshold?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  compressorVolume?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  cutoffFrequency?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  distanceModifier?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  distortion?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  dryVolume?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  highFrequencyGain?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  resonance?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ItemPropertiesHeadwearResolvers<ContextType = any, ParentType extends ResolversParentTypes['ItemPropertiesHeadwear'] = ResolversParentTypes['ItemPropertiesHeadwear']> = {
  slots?: Resolver<Maybe<Array<Maybe<ResolversTypes['ItemSlot']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ItemPropertiesHelmetResolvers<ContextType = any, ParentType extends ResolversParentTypes['ItemPropertiesHelmet'] = ResolversParentTypes['ItemPropertiesHelmet']> = {
  armorSlots?: Resolver<Maybe<Array<Maybe<ResolversTypes['ItemArmorSlot']>>>, ParentType, ContextType>;
  armorType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  blindnessProtection?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  blocksHeadset?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  bluntThroughput?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  class?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  deafening?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  durability?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  ergoPenalty?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  headZones?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  material?: Resolver<Maybe<ResolversTypes['ArmorMaterial']>, ParentType, ContextType>;
  repairCost?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  ricochetX?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  ricochetY?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  ricochetZ?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  slots?: Resolver<Maybe<Array<Maybe<ResolversTypes['ItemSlot']>>>, ParentType, ContextType>;
  speedPenalty?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  turnPenalty?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ItemPropertiesKeyResolvers<ContextType = any, ParentType extends ResolversParentTypes['ItemPropertiesKey'] = ResolversParentTypes['ItemPropertiesKey']> = {
  uses?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ItemPropertiesMagazineResolvers<ContextType = any, ParentType extends ResolversParentTypes['ItemPropertiesMagazine'] = ResolversParentTypes['ItemPropertiesMagazine']> = {
  allowedAmmo?: Resolver<Maybe<Array<Maybe<ResolversTypes['Item']>>>, ParentType, ContextType>;
  ammoCheckModifier?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  capacity?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  ergonomics?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  loadModifier?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  malfunctionChance?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  recoil?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  recoilModifier?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  slots?: Resolver<Maybe<Array<Maybe<ResolversTypes['ItemSlot']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ItemPropertiesMedKitResolvers<ContextType = any, ParentType extends ResolversParentTypes['ItemPropertiesMedKit'] = ResolversParentTypes['ItemPropertiesMedKit']> = {
  cures?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  hitpoints?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  hpCostHeavyBleeding?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  hpCostLightBleeding?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  maxHealPerUse?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  useTime?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ItemPropertiesMedicalItemResolvers<ContextType = any, ParentType extends ResolversParentTypes['ItemPropertiesMedicalItem'] = ResolversParentTypes['ItemPropertiesMedicalItem']> = {
  cures?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  useTime?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  uses?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ItemPropertiesMeleeResolvers<ContextType = any, ParentType extends ResolversParentTypes['ItemPropertiesMelee'] = ResolversParentTypes['ItemPropertiesMelee']> = {
  hitRadius?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  slashDamage?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  stabDamage?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ItemPropertiesNightVisionResolvers<ContextType = any, ParentType extends ResolversParentTypes['ItemPropertiesNightVision'] = ResolversParentTypes['ItemPropertiesNightVision']> = {
  diffuseIntensity?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  intensity?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  noiseIntensity?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  noiseScale?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ItemPropertiesPainkillerResolvers<ContextType = any, ParentType extends ResolversParentTypes['ItemPropertiesPainkiller'] = ResolversParentTypes['ItemPropertiesPainkiller']> = {
  cures?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  energyImpact?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  hydrationImpact?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  painkillerDuration?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  useTime?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  uses?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ItemPropertiesPresetResolvers<ContextType = any, ParentType extends ResolversParentTypes['ItemPropertiesPreset'] = ResolversParentTypes['ItemPropertiesPreset']> = {
  baseItem?: Resolver<ResolversTypes['Item'], ParentType, ContextType>;
  default?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  ergonomics?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  moa?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  recoilHorizontal?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  recoilVertical?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ItemPropertiesResourceResolvers<ContextType = any, ParentType extends ResolversParentTypes['ItemPropertiesResource'] = ResolversParentTypes['ItemPropertiesResource']> = {
  units?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ItemPropertiesScopeResolvers<ContextType = any, ParentType extends ResolversParentTypes['ItemPropertiesScope'] = ResolversParentTypes['ItemPropertiesScope']> = {
  ergonomics?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  recoil?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  recoilModifier?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  sightModes?: Resolver<Maybe<Array<Maybe<ResolversTypes['Int']>>>, ParentType, ContextType>;
  sightingRange?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  slots?: Resolver<Maybe<Array<Maybe<ResolversTypes['ItemSlot']>>>, ParentType, ContextType>;
  zoomLevels?: Resolver<Maybe<Array<Maybe<Array<Maybe<ResolversTypes['Float']>>>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ItemPropertiesStimResolvers<ContextType = any, ParentType extends ResolversParentTypes['ItemPropertiesStim'] = ResolversParentTypes['ItemPropertiesStim']> = {
  cures?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  stimEffects?: Resolver<Array<Maybe<ResolversTypes['StimEffect']>>, ParentType, ContextType>;
  useTime?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ItemPropertiesSurgicalKitResolvers<ContextType = any, ParentType extends ResolversParentTypes['ItemPropertiesSurgicalKit'] = ResolversParentTypes['ItemPropertiesSurgicalKit']> = {
  cures?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  maxLimbHealth?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  minLimbHealth?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  useTime?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  uses?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ItemPropertiesWeaponResolvers<ContextType = any, ParentType extends ResolversParentTypes['ItemPropertiesWeapon'] = ResolversParentTypes['ItemPropertiesWeapon']> = {
  allowedAmmo?: Resolver<Maybe<Array<Maybe<ResolversTypes['Item']>>>, ParentType, ContextType>;
  caliber?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  cameraRecoil?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  cameraSnap?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  centerOfImpact?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  convergence?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  defaultAmmo?: Resolver<Maybe<ResolversTypes['Item']>, ParentType, ContextType>;
  defaultErgonomics?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  defaultHeight?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  defaultPreset?: Resolver<Maybe<ResolversTypes['Item']>, ParentType, ContextType>;
  defaultRecoilHorizontal?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  defaultRecoilVertical?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  defaultWeight?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  defaultWidth?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  deviationCurve?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  deviationMax?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  effectiveDistance?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  ergonomics?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  fireModes?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  fireRate?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  maxDurability?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  presets?: Resolver<Maybe<Array<Maybe<ResolversTypes['Item']>>>, ParentType, ContextType>;
  recoilAngle?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  recoilDispersion?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  recoilHorizontal?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  recoilVertical?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  repairCost?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  sightingRange?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  slots?: Resolver<Maybe<Array<Maybe<ResolversTypes['ItemSlot']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ItemPropertiesWeaponModResolvers<ContextType = any, ParentType extends ResolversParentTypes['ItemPropertiesWeaponMod'] = ResolversParentTypes['ItemPropertiesWeaponMod']> = {
  accuracyModifier?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  ergonomics?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  recoil?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  recoilModifier?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  slots?: Resolver<Maybe<Array<Maybe<ResolversTypes['ItemSlot']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ItemSlotResolvers<ContextType = any, ParentType extends ResolversParentTypes['ItemSlot'] = ResolversParentTypes['ItemSlot']> = {
  filters?: Resolver<Maybe<ResolversTypes['ItemFilters']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  nameId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  required?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ItemStorageGridResolvers<ContextType = any, ParentType extends ResolversParentTypes['ItemStorageGrid'] = ResolversParentTypes['ItemStorageGrid']> = {
  filters?: Resolver<ResolversTypes['ItemFilters'], ParentType, ContextType>;
  height?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  width?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ItemTranslationResolvers<ContextType = any, ParentType extends ResolversParentTypes['ItemTranslation'] = ResolversParentTypes['ItemTranslation']> = {
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  shortName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LockResolvers<ContextType = any, ParentType extends ResolversParentTypes['Lock'] = ResolversParentTypes['Lock']> = {
  bottom?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  key?: Resolver<Maybe<ResolversTypes['Item']>, ParentType, ContextType>;
  lockType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  needsPower?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  outline?: Resolver<Maybe<Array<Maybe<ResolversTypes['MapPosition']>>>, ParentType, ContextType>;
  position?: Resolver<Maybe<ResolversTypes['MapPosition']>, ParentType, ContextType>;
  top?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LootContainerResolvers<ContextType = any, ParentType extends ResolversParentTypes['LootContainer'] = ResolversParentTypes['LootContainer']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  normalizedName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LootContainerPositionResolvers<ContextType = any, ParentType extends ResolversParentTypes['LootContainerPosition'] = ResolversParentTypes['LootContainerPosition']> = {
  lootContainer?: Resolver<Maybe<ResolversTypes['LootContainer']>, ParentType, ContextType>;
  position?: Resolver<Maybe<ResolversTypes['MapPosition']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MapResolvers<ContextType = any, ParentType extends ResolversParentTypes['Map'] = ResolversParentTypes['Map']> = {
  accessKeys?: Resolver<Array<Maybe<ResolversTypes['Item']>>, ParentType, ContextType>;
  accessKeysMinPlayerLevel?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  bosses?: Resolver<Array<Maybe<ResolversTypes['BossSpawn']>>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  enemies?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  extracts?: Resolver<Maybe<Array<Maybe<ResolversTypes['MapExtract']>>>, ParentType, ContextType>;
  hazards?: Resolver<Maybe<Array<Maybe<ResolversTypes['MapHazard']>>>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  locks?: Resolver<Maybe<Array<Maybe<ResolversTypes['Lock']>>>, ParentType, ContextType>;
  lootContainers?: Resolver<Maybe<Array<Maybe<ResolversTypes['LootContainerPosition']>>>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  nameId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  normalizedName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  players?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  raidDuration?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  spawns?: Resolver<Maybe<Array<Maybe<ResolversTypes['MapSpawn']>>>, ParentType, ContextType>;
  stationaryWeapons?: Resolver<Maybe<Array<Maybe<ResolversTypes['StationaryWeaponPosition']>>>, ParentType, ContextType>;
  switches?: Resolver<Maybe<Array<Maybe<ResolversTypes['MapSwitch']>>>, ParentType, ContextType>;
  tarkovDataId?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  wiki?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MapExtractResolvers<ContextType = any, ParentType extends ResolversParentTypes['MapExtract'] = ResolversParentTypes['MapExtract']> = {
  bottom?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  faction?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  outline?: Resolver<Maybe<Array<Maybe<ResolversTypes['MapPosition']>>>, ParentType, ContextType>;
  position?: Resolver<Maybe<ResolversTypes['MapPosition']>, ParentType, ContextType>;
  switches?: Resolver<Maybe<Array<Maybe<ResolversTypes['MapSwitch']>>>, ParentType, ContextType>;
  top?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MapHazardResolvers<ContextType = any, ParentType extends ResolversParentTypes['MapHazard'] = ResolversParentTypes['MapHazard']> = {
  bottom?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  hazardType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  outline?: Resolver<Maybe<Array<Maybe<ResolversTypes['MapPosition']>>>, ParentType, ContextType>;
  position?: Resolver<Maybe<ResolversTypes['MapPosition']>, ParentType, ContextType>;
  top?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MapPositionResolvers<ContextType = any, ParentType extends ResolversParentTypes['MapPosition'] = ResolversParentTypes['MapPosition']> = {
  x?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  y?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  z?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MapSpawnResolvers<ContextType = any, ParentType extends ResolversParentTypes['MapSpawn'] = ResolversParentTypes['MapSpawn']> = {
  categories?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  position?: Resolver<ResolversTypes['MapPosition'], ParentType, ContextType>;
  sides?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  zoneName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MapSwitchResolvers<ContextType = any, ParentType extends ResolversParentTypes['MapSwitch'] = ResolversParentTypes['MapSwitch']> = {
  activatedBy?: Resolver<Maybe<ResolversTypes['MapSwitch']>, ParentType, ContextType>;
  activates?: Resolver<Maybe<Array<Maybe<ResolversTypes['MapSwitchOperation']>>>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  position?: Resolver<Maybe<ResolversTypes['MapPosition']>, ParentType, ContextType>;
  switchType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MapSwitchOperationResolvers<ContextType = any, ParentType extends ResolversParentTypes['MapSwitchOperation'] = ResolversParentTypes['MapSwitchOperation']> = {
  operation?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  target?: Resolver<Maybe<ResolversTypes['MapSwitchTarget']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MapSwitchTargetResolvers<ContextType = any, ParentType extends ResolversParentTypes['MapSwitchTarget'] = ResolversParentTypes['MapSwitchTarget']> = {
  __resolveType: TypeResolveFn<'MapExtract' | 'MapSwitch', ParentType, ContextType>;
};

export type MapWithPositionResolvers<ContextType = any, ParentType extends ResolversParentTypes['MapWithPosition'] = ResolversParentTypes['MapWithPosition']> = {
  map?: Resolver<Maybe<ResolversTypes['Map']>, ParentType, ContextType>;
  positions?: Resolver<Maybe<Array<Maybe<ResolversTypes['MapPosition']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MobInfoResolvers<ContextType = any, ParentType extends ResolversParentTypes['MobInfo'] = ResolversParentTypes['MobInfo']> = {
  equipment?: Resolver<Array<Maybe<ResolversTypes['ContainedItem']>>, ParentType, ContextType>;
  health?: Resolver<Maybe<Array<Maybe<ResolversTypes['HealthPart']>>>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  imagePortraitLink?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  imagePosterLink?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  items?: Resolver<Array<Maybe<ResolversTypes['Item']>>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  normalizedName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type NumberCompareResolvers<ContextType = any, ParentType extends ResolversParentTypes['NumberCompare'] = ResolversParentTypes['NumberCompare']> = {
  compareMethod?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  value?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type OfferUnlockResolvers<ContextType = any, ParentType extends ResolversParentTypes['OfferUnlock'] = ResolversParentTypes['OfferUnlock']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  item?: Resolver<ResolversTypes['Item'], ParentType, ContextType>;
  level?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  trader?: Resolver<ResolversTypes['Trader'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PlayerLevelResolvers<ContextType = any, ParentType extends ResolversParentTypes['PlayerLevel'] = ResolversParentTypes['PlayerLevel']> = {
  exp?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  level?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PriceRequirementResolvers<ContextType = any, ParentType extends ResolversParentTypes['PriceRequirement'] = ResolversParentTypes['PriceRequirement']> = {
  stringValue?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<ResolversTypes['RequirementType'], ParentType, ContextType>;
  value?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  achievements?: Resolver<Array<Maybe<ResolversTypes['Achievement']>>, ParentType, ContextType, Partial<QueryAchievementsArgs>>;
  ammo?: Resolver<Maybe<Array<Maybe<ResolversTypes['Ammo']>>>, ParentType, ContextType, Partial<QueryAmmoArgs>>;
  armorMaterials?: Resolver<Array<Maybe<ResolversTypes['ArmorMaterial']>>, ParentType, ContextType, Partial<QueryArmorMaterialsArgs>>;
  barters?: Resolver<Maybe<Array<Maybe<ResolversTypes['Barter']>>>, ParentType, ContextType, Partial<QueryBartersArgs>>;
  bosses?: Resolver<Maybe<Array<Maybe<ResolversTypes['MobInfo']>>>, ParentType, ContextType, Partial<QueryBossesArgs>>;
  crafts?: Resolver<Maybe<Array<Maybe<ResolversTypes['Craft']>>>, ParentType, ContextType, Partial<QueryCraftsArgs>>;
  fleaMarket?: Resolver<ResolversTypes['FleaMarket'], ParentType, ContextType, Partial<QueryFleaMarketArgs>>;
  handbookCategories?: Resolver<Array<Maybe<ResolversTypes['ItemCategory']>>, ParentType, ContextType, Partial<QueryHandbookCategoriesArgs>>;
  hideoutModules?: Resolver<Maybe<Array<Maybe<ResolversTypes['HideoutModule']>>>, ParentType, ContextType>;
  hideoutStations?: Resolver<Array<Maybe<ResolversTypes['HideoutStation']>>, ParentType, ContextType, Partial<QueryHideoutStationsArgs>>;
  historicalItemPrices?: Resolver<Array<Maybe<ResolversTypes['historicalPricePoint']>>, ParentType, ContextType, RequireFields<QueryHistoricalItemPricesArgs, 'id'>>;
  item?: Resolver<Maybe<ResolversTypes['Item']>, ParentType, ContextType, Partial<QueryItemArgs>>;
  itemByNormalizedName?: Resolver<Maybe<ResolversTypes['Item']>, ParentType, ContextType, RequireFields<QueryItemByNormalizedNameArgs, 'normalizedName'>>;
  itemCategories?: Resolver<Array<Maybe<ResolversTypes['ItemCategory']>>, ParentType, ContextType, Partial<QueryItemCategoriesArgs>>;
  items?: Resolver<Array<Maybe<ResolversTypes['Item']>>, ParentType, ContextType, Partial<QueryItemsArgs>>;
  itemsByBsgCategoryId?: Resolver<Array<Maybe<ResolversTypes['Item']>>, ParentType, ContextType, RequireFields<QueryItemsByBsgCategoryIdArgs, 'bsgCategoryId'>>;
  itemsByIDs?: Resolver<Maybe<Array<Maybe<ResolversTypes['Item']>>>, ParentType, ContextType, RequireFields<QueryItemsByIDsArgs, 'ids'>>;
  itemsByName?: Resolver<Array<Maybe<ResolversTypes['Item']>>, ParentType, ContextType, RequireFields<QueryItemsByNameArgs, 'name'>>;
  itemsByType?: Resolver<Array<Maybe<ResolversTypes['Item']>>, ParentType, ContextType, RequireFields<QueryItemsByTypeArgs, 'type'>>;
  lootContainers?: Resolver<Maybe<Array<Maybe<ResolversTypes['LootContainer']>>>, ParentType, ContextType, Partial<QueryLootContainersArgs>>;
  maps?: Resolver<Array<Maybe<ResolversTypes['Map']>>, ParentType, ContextType, Partial<QueryMapsArgs>>;
  playerLevels?: Resolver<Array<Maybe<ResolversTypes['PlayerLevel']>>, ParentType, ContextType>;
  questItems?: Resolver<Maybe<Array<Maybe<ResolversTypes['QuestItem']>>>, ParentType, ContextType, Partial<QueryQuestItemsArgs>>;
  quests?: Resolver<Maybe<Array<Maybe<ResolversTypes['Quest']>>>, ParentType, ContextType>;
  stationaryWeapons?: Resolver<Maybe<Array<Maybe<ResolversTypes['StationaryWeapon']>>>, ParentType, ContextType, Partial<QueryStationaryWeaponsArgs>>;
  status?: Resolver<ResolversTypes['ServerStatus'], ParentType, ContextType>;
  task?: Resolver<Maybe<ResolversTypes['Task']>, ParentType, ContextType, RequireFields<QueryTaskArgs, 'id'>>;
  tasks?: Resolver<Array<Maybe<ResolversTypes['Task']>>, ParentType, ContextType, Partial<QueryTasksArgs>>;
  traderResetTimes?: Resolver<Maybe<Array<Maybe<ResolversTypes['TraderResetTime']>>>, ParentType, ContextType>;
  traders?: Resolver<Array<Maybe<ResolversTypes['Trader']>>, ParentType, ContextType, Partial<QueryTradersArgs>>;
};

export type QuestResolvers<ContextType = any, ParentType extends ResolversParentTypes['Quest'] = ResolversParentTypes['Quest']> = {
  exp?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  giver?: Resolver<ResolversTypes['Trader'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  objectives?: Resolver<Array<Maybe<ResolversTypes['QuestObjective']>>, ParentType, ContextType>;
  reputation?: Resolver<Maybe<Array<ResolversTypes['QuestRewardReputation']>>, ParentType, ContextType>;
  requirements?: Resolver<Maybe<ResolversTypes['QuestRequirement']>, ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  turnin?: Resolver<ResolversTypes['Trader'], ParentType, ContextType>;
  unlocks?: Resolver<Array<Maybe<ResolversTypes['String']>>, ParentType, ContextType>;
  wikiLink?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QuestItemResolvers<ContextType = any, ParentType extends ResolversParentTypes['QuestItem'] = ResolversParentTypes['QuestItem']> = {
  baseImageLink?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  gridImageLink?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  height?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  iconLink?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  image8xLink?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  image512pxLink?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  inspectImageLink?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  normalizedName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  shortName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  width?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QuestObjectiveResolvers<ContextType = any, ParentType extends ResolversParentTypes['QuestObjective'] = ResolversParentTypes['QuestObjective']> = {
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  location?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  number?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  target?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>;
  targetItem?: Resolver<Maybe<ResolversTypes['Item']>, ParentType, ContextType>;
  type?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QuestRequirementResolvers<ContextType = any, ParentType extends ResolversParentTypes['QuestRequirement'] = ResolversParentTypes['QuestRequirement']> = {
  level?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  prerequisiteQuests?: Resolver<Array<Maybe<Array<Maybe<ResolversTypes['Quest']>>>>, ParentType, ContextType>;
  quests?: Resolver<Array<Maybe<Array<Maybe<ResolversTypes['Int']>>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QuestRewardReputationResolvers<ContextType = any, ParentType extends ResolversParentTypes['QuestRewardReputation'] = ResolversParentTypes['QuestRewardReputation']> = {
  amount?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  trader?: Resolver<ResolversTypes['Trader'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type RequirementHideoutStationLevelResolvers<ContextType = any, ParentType extends ResolversParentTypes['RequirementHideoutStationLevel'] = ResolversParentTypes['RequirementHideoutStationLevel']> = {
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  level?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  station?: Resolver<ResolversTypes['HideoutStation'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type RequirementItemResolvers<ContextType = any, ParentType extends ResolversParentTypes['RequirementItem'] = ResolversParentTypes['RequirementItem']> = {
  attributes?: Resolver<Maybe<Array<Maybe<ResolversTypes['ItemAttribute']>>>, ParentType, ContextType>;
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  item?: Resolver<ResolversTypes['Item'], ParentType, ContextType>;
  quantity?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type RequirementSkillResolvers<ContextType = any, ParentType extends ResolversParentTypes['RequirementSkill'] = ResolversParentTypes['RequirementSkill']> = {
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  level?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type RequirementTaskResolvers<ContextType = any, ParentType extends ResolversParentTypes['RequirementTask'] = ResolversParentTypes['RequirementTask']> = {
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  task?: Resolver<ResolversTypes['Task'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type RequirementTraderResolvers<ContextType = any, ParentType extends ResolversParentTypes['RequirementTrader'] = ResolversParentTypes['RequirementTrader']> = {
  compareMethod?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  level?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  requirementType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  trader?: Resolver<ResolversTypes['Trader'], ParentType, ContextType>;
  value?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ServerStatusResolvers<ContextType = any, ParentType extends ResolversParentTypes['ServerStatus'] = ResolversParentTypes['ServerStatus']> = {
  currentStatuses?: Resolver<Maybe<Array<Maybe<ResolversTypes['Status']>>>, ParentType, ContextType>;
  generalStatus?: Resolver<Maybe<ResolversTypes['Status']>, ParentType, ContextType>;
  messages?: Resolver<Maybe<Array<Maybe<ResolversTypes['StatusMessage']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SkillLevelResolvers<ContextType = any, ParentType extends ResolversParentTypes['SkillLevel'] = ResolversParentTypes['SkillLevel']> = {
  level?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StationaryWeaponResolvers<ContextType = any, ParentType extends ResolversParentTypes['StationaryWeapon'] = ResolversParentTypes['StationaryWeapon']> = {
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  shortName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StationaryWeaponPositionResolvers<ContextType = any, ParentType extends ResolversParentTypes['StationaryWeaponPosition'] = ResolversParentTypes['StationaryWeaponPosition']> = {
  position?: Resolver<Maybe<ResolversTypes['MapPosition']>, ParentType, ContextType>;
  stationaryWeapon?: Resolver<Maybe<ResolversTypes['StationaryWeapon']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StatusResolvers<ContextType = any, ParentType extends ResolversParentTypes['Status'] = ResolversParentTypes['Status']> = {
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  status?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  statusCode?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StatusMessageResolvers<ContextType = any, ParentType extends ResolversParentTypes['StatusMessage'] = ResolversParentTypes['StatusMessage']> = {
  content?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  solveTime?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  statusCode?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  time?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StimEffectResolvers<ContextType = any, ParentType extends ResolversParentTypes['StimEffect'] = ResolversParentTypes['StimEffect']> = {
  chance?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  delay?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  duration?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  percent?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  skillName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  value?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TaskResolvers<ContextType = any, ParentType extends ResolversParentTypes['Task'] = ResolversParentTypes['Task']> = {
  descriptionMessageId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  experience?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  factionName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  failConditions?: Resolver<Array<Maybe<ResolversTypes['TaskObjective']>>, ParentType, ContextType>;
  failMessageId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  failureOutcome?: Resolver<Maybe<ResolversTypes['TaskRewards']>, ParentType, ContextType>;
  finishRewards?: Resolver<Maybe<ResolversTypes['TaskRewards']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  kappaRequired?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  lightkeeperRequired?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  map?: Resolver<Maybe<ResolversTypes['Map']>, ParentType, ContextType>;
  minPlayerLevel?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  neededKeys?: Resolver<Maybe<Array<Maybe<ResolversTypes['TaskKey']>>>, ParentType, ContextType>;
  normalizedName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  objectives?: Resolver<Array<Maybe<ResolversTypes['TaskObjective']>>, ParentType, ContextType>;
  restartable?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  startMessageId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  startRewards?: Resolver<Maybe<ResolversTypes['TaskRewards']>, ParentType, ContextType>;
  successMessageId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tarkovDataId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  taskImageLink?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  taskRequirements?: Resolver<Array<Maybe<ResolversTypes['TaskStatusRequirement']>>, ParentType, ContextType>;
  trader?: Resolver<ResolversTypes['Trader'], ParentType, ContextType>;
  traderLevelRequirements?: Resolver<Array<Maybe<ResolversTypes['RequirementTrader']>>, ParentType, ContextType>;
  traderRequirements?: Resolver<Array<Maybe<ResolversTypes['RequirementTrader']>>, ParentType, ContextType>;
  wikiLink?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TaskKeyResolvers<ContextType = any, ParentType extends ResolversParentTypes['TaskKey'] = ResolversParentTypes['TaskKey']> = {
  keys?: Resolver<Array<Maybe<ResolversTypes['Item']>>, ParentType, ContextType>;
  map?: Resolver<Maybe<ResolversTypes['Map']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TaskObjectiveResolvers<ContextType = any, ParentType extends ResolversParentTypes['TaskObjective'] = ResolversParentTypes['TaskObjective']> = {
  __resolveType: TypeResolveFn<'TaskObjectiveBasic' | 'TaskObjectiveBuildItem' | 'TaskObjectiveExperience' | 'TaskObjectiveExtract' | 'TaskObjectiveItem' | 'TaskObjectiveMark' | 'TaskObjectivePlayerLevel' | 'TaskObjectiveQuestItem' | 'TaskObjectiveShoot' | 'TaskObjectiveSkill' | 'TaskObjectiveTaskStatus' | 'TaskObjectiveTraderLevel' | 'TaskObjectiveTraderStanding' | 'TaskObjectiveUseItem', ParentType, ContextType>;
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  maps?: Resolver<Array<Maybe<ResolversTypes['Map']>>, ParentType, ContextType>;
  optional?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type TaskObjectiveBasicResolvers<ContextType = any, ParentType extends ResolversParentTypes['TaskObjectiveBasic'] = ResolversParentTypes['TaskObjectiveBasic']> = {
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  maps?: Resolver<Array<Maybe<ResolversTypes['Map']>>, ParentType, ContextType>;
  optional?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  requiredKeys?: Resolver<Maybe<Array<Maybe<Array<Maybe<ResolversTypes['Item']>>>>>, ParentType, ContextType>;
  type?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  zones?: Resolver<Maybe<Array<Maybe<ResolversTypes['TaskZone']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TaskObjectiveBuildItemResolvers<ContextType = any, ParentType extends ResolversParentTypes['TaskObjectiveBuildItem'] = ResolversParentTypes['TaskObjectiveBuildItem']> = {
  attributes?: Resolver<Array<Maybe<ResolversTypes['AttributeThreshold']>>, ParentType, ContextType>;
  containsAll?: Resolver<Array<Maybe<ResolversTypes['Item']>>, ParentType, ContextType>;
  containsCategory?: Resolver<Array<Maybe<ResolversTypes['ItemCategory']>>, ParentType, ContextType>;
  containsOne?: Resolver<Array<Maybe<ResolversTypes['Item']>>, ParentType, ContextType>;
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  item?: Resolver<ResolversTypes['Item'], ParentType, ContextType>;
  maps?: Resolver<Array<Maybe<ResolversTypes['Map']>>, ParentType, ContextType>;
  optional?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TaskObjectiveExperienceResolvers<ContextType = any, ParentType extends ResolversParentTypes['TaskObjectiveExperience'] = ResolversParentTypes['TaskObjectiveExperience']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  healthEffect?: Resolver<ResolversTypes['HealthEffect'], ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  maps?: Resolver<Array<Maybe<ResolversTypes['Map']>>, ParentType, ContextType>;
  optional?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TaskObjectiveExtractResolvers<ContextType = any, ParentType extends ResolversParentTypes['TaskObjectiveExtract'] = ResolversParentTypes['TaskObjectiveExtract']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  exitName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  exitStatus?: Resolver<Array<Maybe<ResolversTypes['String']>>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  maps?: Resolver<Array<Maybe<ResolversTypes['Map']>>, ParentType, ContextType>;
  optional?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  requiredKeys?: Resolver<Maybe<Array<Maybe<Array<Maybe<ResolversTypes['Item']>>>>>, ParentType, ContextType>;
  type?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  zoneNames?: Resolver<Array<Maybe<ResolversTypes['String']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TaskObjectiveItemResolvers<ContextType = any, ParentType extends ResolversParentTypes['TaskObjectiveItem'] = ResolversParentTypes['TaskObjectiveItem']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  dogTagLevel?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  foundInRaid?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  item?: Resolver<ResolversTypes['Item'], ParentType, ContextType>;
  items?: Resolver<Array<Maybe<ResolversTypes['Item']>>, ParentType, ContextType>;
  maps?: Resolver<Array<Maybe<ResolversTypes['Map']>>, ParentType, ContextType>;
  maxDurability?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  minDurability?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  optional?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  requiredKeys?: Resolver<Maybe<Array<Maybe<Array<Maybe<ResolversTypes['Item']>>>>>, ParentType, ContextType>;
  type?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  zones?: Resolver<Maybe<Array<Maybe<ResolversTypes['TaskZone']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TaskObjectiveMarkResolvers<ContextType = any, ParentType extends ResolversParentTypes['TaskObjectiveMark'] = ResolversParentTypes['TaskObjectiveMark']> = {
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  maps?: Resolver<Array<Maybe<ResolversTypes['Map']>>, ParentType, ContextType>;
  markerItem?: Resolver<ResolversTypes['Item'], ParentType, ContextType>;
  optional?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  requiredKeys?: Resolver<Maybe<Array<Maybe<Array<Maybe<ResolversTypes['Item']>>>>>, ParentType, ContextType>;
  type?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  zones?: Resolver<Maybe<Array<Maybe<ResolversTypes['TaskZone']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TaskObjectivePlayerLevelResolvers<ContextType = any, ParentType extends ResolversParentTypes['TaskObjectivePlayerLevel'] = ResolversParentTypes['TaskObjectivePlayerLevel']> = {
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  maps?: Resolver<Array<Maybe<ResolversTypes['Map']>>, ParentType, ContextType>;
  optional?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  playerLevel?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TaskObjectiveQuestItemResolvers<ContextType = any, ParentType extends ResolversParentTypes['TaskObjectiveQuestItem'] = ResolversParentTypes['TaskObjectiveQuestItem']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  maps?: Resolver<Array<Maybe<ResolversTypes['Map']>>, ParentType, ContextType>;
  optional?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  possibleLocations?: Resolver<Maybe<Array<Maybe<ResolversTypes['MapWithPosition']>>>, ParentType, ContextType>;
  questItem?: Resolver<ResolversTypes['QuestItem'], ParentType, ContextType>;
  requiredKeys?: Resolver<Maybe<Array<Maybe<Array<Maybe<ResolversTypes['Item']>>>>>, ParentType, ContextType>;
  type?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  zones?: Resolver<Maybe<Array<Maybe<ResolversTypes['TaskZone']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TaskObjectiveShootResolvers<ContextType = any, ParentType extends ResolversParentTypes['TaskObjectiveShoot'] = ResolversParentTypes['TaskObjectiveShoot']> = {
  bodyParts?: Resolver<Array<Maybe<ResolversTypes['String']>>, ParentType, ContextType>;
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  distance?: Resolver<Maybe<ResolversTypes['NumberCompare']>, ParentType, ContextType>;
  enemyHealthEffect?: Resolver<Maybe<ResolversTypes['HealthEffect']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  maps?: Resolver<Array<Maybe<ResolversTypes['Map']>>, ParentType, ContextType>;
  notWearing?: Resolver<Maybe<Array<Maybe<ResolversTypes['Item']>>>, ParentType, ContextType>;
  optional?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  playerHealthEffect?: Resolver<Maybe<ResolversTypes['HealthEffect']>, ParentType, ContextType>;
  requiredKeys?: Resolver<Maybe<Array<Maybe<Array<Maybe<ResolversTypes['Item']>>>>>, ParentType, ContextType>;
  shotType?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  target?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  targetNames?: Resolver<Array<Maybe<ResolversTypes['String']>>, ParentType, ContextType>;
  timeFromHour?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  timeUntilHour?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  type?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  usingWeapon?: Resolver<Maybe<Array<Maybe<ResolversTypes['Item']>>>, ParentType, ContextType>;
  usingWeaponMods?: Resolver<Maybe<Array<Maybe<Array<Maybe<ResolversTypes['Item']>>>>>, ParentType, ContextType>;
  wearing?: Resolver<Maybe<Array<Maybe<Array<Maybe<ResolversTypes['Item']>>>>>, ParentType, ContextType>;
  zoneNames?: Resolver<Array<Maybe<ResolversTypes['String']>>, ParentType, ContextType>;
  zones?: Resolver<Maybe<Array<Maybe<ResolversTypes['TaskZone']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TaskObjectiveSkillResolvers<ContextType = any, ParentType extends ResolversParentTypes['TaskObjectiveSkill'] = ResolversParentTypes['TaskObjectiveSkill']> = {
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  maps?: Resolver<Array<Maybe<ResolversTypes['Map']>>, ParentType, ContextType>;
  optional?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  skillLevel?: Resolver<ResolversTypes['SkillLevel'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TaskObjectiveTaskStatusResolvers<ContextType = any, ParentType extends ResolversParentTypes['TaskObjectiveTaskStatus'] = ResolversParentTypes['TaskObjectiveTaskStatus']> = {
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  maps?: Resolver<Array<Maybe<ResolversTypes['Map']>>, ParentType, ContextType>;
  optional?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  status?: Resolver<Array<Maybe<ResolversTypes['String']>>, ParentType, ContextType>;
  task?: Resolver<ResolversTypes['Task'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TaskObjectiveTraderLevelResolvers<ContextType = any, ParentType extends ResolversParentTypes['TaskObjectiveTraderLevel'] = ResolversParentTypes['TaskObjectiveTraderLevel']> = {
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  level?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  maps?: Resolver<Array<Maybe<ResolversTypes['Map']>>, ParentType, ContextType>;
  optional?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  trader?: Resolver<ResolversTypes['Trader'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TaskObjectiveTraderStandingResolvers<ContextType = any, ParentType extends ResolversParentTypes['TaskObjectiveTraderStanding'] = ResolversParentTypes['TaskObjectiveTraderStanding']> = {
  compareMethod?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  maps?: Resolver<Array<Maybe<ResolversTypes['Map']>>, ParentType, ContextType>;
  optional?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  trader?: Resolver<ResolversTypes['Trader'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  value?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TaskObjectiveUseItemResolvers<ContextType = any, ParentType extends ResolversParentTypes['TaskObjectiveUseItem'] = ResolversParentTypes['TaskObjectiveUseItem']> = {
  compareMethod?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  maps?: Resolver<Array<Maybe<ResolversTypes['Map']>>, ParentType, ContextType>;
  optional?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  requiredKeys?: Resolver<Maybe<Array<Maybe<Array<Maybe<ResolversTypes['Item']>>>>>, ParentType, ContextType>;
  type?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  useAny?: Resolver<Array<Maybe<ResolversTypes['Item']>>, ParentType, ContextType>;
  zoneNames?: Resolver<Array<Maybe<ResolversTypes['String']>>, ParentType, ContextType>;
  zones?: Resolver<Maybe<Array<Maybe<ResolversTypes['TaskZone']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TaskRewardsResolvers<ContextType = any, ParentType extends ResolversParentTypes['TaskRewards'] = ResolversParentTypes['TaskRewards']> = {
  craftUnlock?: Resolver<Array<Maybe<ResolversTypes['Craft']>>, ParentType, ContextType>;
  items?: Resolver<Array<Maybe<ResolversTypes['ContainedItem']>>, ParentType, ContextType>;
  offerUnlock?: Resolver<Array<Maybe<ResolversTypes['OfferUnlock']>>, ParentType, ContextType>;
  skillLevelReward?: Resolver<Array<Maybe<ResolversTypes['SkillLevel']>>, ParentType, ContextType>;
  traderStanding?: Resolver<Array<Maybe<ResolversTypes['TraderStanding']>>, ParentType, ContextType>;
  traderUnlock?: Resolver<Array<Maybe<ResolversTypes['Trader']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TaskStatusRequirementResolvers<ContextType = any, ParentType extends ResolversParentTypes['TaskStatusRequirement'] = ResolversParentTypes['TaskStatusRequirement']> = {
  status?: Resolver<Array<Maybe<ResolversTypes['String']>>, ParentType, ContextType>;
  task?: Resolver<ResolversTypes['Task'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TaskZoneResolvers<ContextType = any, ParentType extends ResolversParentTypes['TaskZone'] = ResolversParentTypes['TaskZone']> = {
  bottom?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  map?: Resolver<Maybe<ResolversTypes['Map']>, ParentType, ContextType>;
  outline?: Resolver<Maybe<Array<Maybe<ResolversTypes['MapPosition']>>>, ParentType, ContextType>;
  position?: Resolver<Maybe<ResolversTypes['MapPosition']>, ParentType, ContextType>;
  top?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TraderResolvers<ContextType = any, ParentType extends ResolversParentTypes['Trader'] = ResolversParentTypes['Trader']> = {
  barters?: Resolver<Array<Maybe<ResolversTypes['Barter']>>, ParentType, ContextType>;
  cashOffers?: Resolver<Array<Maybe<ResolversTypes['TraderCashOffer']>>, ParentType, ContextType>;
  currency?: Resolver<ResolversTypes['Item'], ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  discount?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  image4xLink?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  imageLink?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  levels?: Resolver<Array<ResolversTypes['TraderLevel']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  normalizedName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  reputationLevels?: Resolver<Array<Maybe<ResolversTypes['TraderReputationLevel']>>, ParentType, ContextType>;
  resetTime?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tarkovDataId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TraderCashOfferResolvers<ContextType = any, ParentType extends ResolversParentTypes['TraderCashOffer'] = ResolversParentTypes['TraderCashOffer']> = {
  currency?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  currencyItem?: Resolver<Maybe<ResolversTypes['Item']>, ParentType, ContextType>;
  item?: Resolver<ResolversTypes['Item'], ParentType, ContextType>;
  minTraderLevel?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  price?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  priceRUB?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  taskUnlock?: Resolver<Maybe<ResolversTypes['Task']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TraderLevelResolvers<ContextType = any, ParentType extends ResolversParentTypes['TraderLevel'] = ResolversParentTypes['TraderLevel']> = {
  barters?: Resolver<Array<Maybe<ResolversTypes['Barter']>>, ParentType, ContextType>;
  cashOffers?: Resolver<Array<Maybe<ResolversTypes['TraderCashOffer']>>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  image4xLink?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  imageLink?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  insuranceRate?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  level?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  payRate?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  repairCostMultiplier?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  requiredCommerce?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  requiredPlayerLevel?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  requiredReputation?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TraderOfferResolvers<ContextType = any, ParentType extends ResolversParentTypes['TraderOffer'] = ResolversParentTypes['TraderOffer']> = {
  minTraderLevel?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  normalizedName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  taskUnlock?: Resolver<Maybe<ResolversTypes['Task']>, ParentType, ContextType>;
  trader?: Resolver<ResolversTypes['Trader'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TraderPriceResolvers<ContextType = any, ParentType extends ResolversParentTypes['TraderPrice'] = ResolversParentTypes['TraderPrice']> = {
  currency?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  price?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  priceRUB?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  trader?: Resolver<ResolversTypes['Trader'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TraderReputationLevelResolvers<ContextType = any, ParentType extends ResolversParentTypes['TraderReputationLevel'] = ResolversParentTypes['TraderReputationLevel']> = {
  __resolveType: TypeResolveFn<'TraderReputationLevelFence', ParentType, ContextType>;
};

export type TraderReputationLevelFenceResolvers<ContextType = any, ParentType extends ResolversParentTypes['TraderReputationLevelFence'] = ResolversParentTypes['TraderReputationLevelFence']> = {
  availableScavExtracts?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  btrCoveringFireDiscount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  btrDeliveryDiscount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  btrDeliveryGridSize?: Resolver<Maybe<ResolversTypes['MapPosition']>, ParentType, ContextType>;
  btrEnabled?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  btrTaxiDiscount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  extractPriceModifier?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  hostileBosses?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  hostileScavs?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  minimumReputation?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  priceModifier?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  scavAttackSupport?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  scavCaseTimeModifier?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  scavCooldownModifier?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  scavEquipmentSpawnChanceModifier?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  scavFollowChance?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TraderResetTimeResolvers<ContextType = any, ParentType extends ResolversParentTypes['TraderResetTime'] = ResolversParentTypes['TraderResetTime']> = {
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  resetTimestamp?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TraderStandingResolvers<ContextType = any, ParentType extends ResolversParentTypes['TraderStanding'] = ResolversParentTypes['TraderStanding']> = {
  standing?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  trader?: Resolver<ResolversTypes['Trader'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type VendorResolvers<ContextType = any, ParentType extends ResolversParentTypes['Vendor'] = ResolversParentTypes['Vendor']> = {
  __resolveType: TypeResolveFn<'FleaMarket' | 'TraderOffer', ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  normalizedName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type HistoricalPricePointResolvers<ContextType = any, ParentType extends ResolversParentTypes['historicalPricePoint'] = ResolversParentTypes['historicalPricePoint']> = {
  price?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  priceMin?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  timestamp?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  Achievement?: AchievementResolvers<ContextType>;
  Ammo?: AmmoResolvers<ContextType>;
  ArmorMaterial?: ArmorMaterialResolvers<ContextType>;
  AttributeThreshold?: AttributeThresholdResolvers<ContextType>;
  Barter?: BarterResolvers<ContextType>;
  BossEscort?: BossEscortResolvers<ContextType>;
  BossEscortAmount?: BossEscortAmountResolvers<ContextType>;
  BossSpawn?: BossSpawnResolvers<ContextType>;
  BossSpawnLocation?: BossSpawnLocationResolvers<ContextType>;
  ContainedItem?: ContainedItemResolvers<ContextType>;
  Craft?: CraftResolvers<ContextType>;
  FleaMarket?: FleaMarketResolvers<ContextType>;
  FleaMarketReputationLevel?: FleaMarketReputationLevelResolvers<ContextType>;
  GameProperty?: GamePropertyResolvers<ContextType>;
  HealthEffect?: HealthEffectResolvers<ContextType>;
  HealthPart?: HealthPartResolvers<ContextType>;
  HideoutModule?: HideoutModuleResolvers<ContextType>;
  HideoutStation?: HideoutStationResolvers<ContextType>;
  HideoutStationBonus?: HideoutStationBonusResolvers<ContextType>;
  HideoutStationLevel?: HideoutStationLevelResolvers<ContextType>;
  Item?: ItemResolvers<ContextType>;
  ItemArmorSlot?: ItemArmorSlotResolvers<ContextType>;
  ItemArmorSlotLocked?: ItemArmorSlotLockedResolvers<ContextType>;
  ItemArmorSlotOpen?: ItemArmorSlotOpenResolvers<ContextType>;
  ItemAttribute?: ItemAttributeResolvers<ContextType>;
  ItemCategory?: ItemCategoryResolvers<ContextType>;
  ItemFilters?: ItemFiltersResolvers<ContextType>;
  ItemPrice?: ItemPriceResolvers<ContextType>;
  ItemProperties?: ItemPropertiesResolvers<ContextType>;
  ItemPropertiesAmmo?: ItemPropertiesAmmoResolvers<ContextType>;
  ItemPropertiesArmor?: ItemPropertiesArmorResolvers<ContextType>;
  ItemPropertiesArmorAttachment?: ItemPropertiesArmorAttachmentResolvers<ContextType>;
  ItemPropertiesBackpack?: ItemPropertiesBackpackResolvers<ContextType>;
  ItemPropertiesBarrel?: ItemPropertiesBarrelResolvers<ContextType>;
  ItemPropertiesChestRig?: ItemPropertiesChestRigResolvers<ContextType>;
  ItemPropertiesContainer?: ItemPropertiesContainerResolvers<ContextType>;
  ItemPropertiesFoodDrink?: ItemPropertiesFoodDrinkResolvers<ContextType>;
  ItemPropertiesGlasses?: ItemPropertiesGlassesResolvers<ContextType>;
  ItemPropertiesGrenade?: ItemPropertiesGrenadeResolvers<ContextType>;
  ItemPropertiesHeadphone?: ItemPropertiesHeadphoneResolvers<ContextType>;
  ItemPropertiesHeadwear?: ItemPropertiesHeadwearResolvers<ContextType>;
  ItemPropertiesHelmet?: ItemPropertiesHelmetResolvers<ContextType>;
  ItemPropertiesKey?: ItemPropertiesKeyResolvers<ContextType>;
  ItemPropertiesMagazine?: ItemPropertiesMagazineResolvers<ContextType>;
  ItemPropertiesMedKit?: ItemPropertiesMedKitResolvers<ContextType>;
  ItemPropertiesMedicalItem?: ItemPropertiesMedicalItemResolvers<ContextType>;
  ItemPropertiesMelee?: ItemPropertiesMeleeResolvers<ContextType>;
  ItemPropertiesNightVision?: ItemPropertiesNightVisionResolvers<ContextType>;
  ItemPropertiesPainkiller?: ItemPropertiesPainkillerResolvers<ContextType>;
  ItemPropertiesPreset?: ItemPropertiesPresetResolvers<ContextType>;
  ItemPropertiesResource?: ItemPropertiesResourceResolvers<ContextType>;
  ItemPropertiesScope?: ItemPropertiesScopeResolvers<ContextType>;
  ItemPropertiesStim?: ItemPropertiesStimResolvers<ContextType>;
  ItemPropertiesSurgicalKit?: ItemPropertiesSurgicalKitResolvers<ContextType>;
  ItemPropertiesWeapon?: ItemPropertiesWeaponResolvers<ContextType>;
  ItemPropertiesWeaponMod?: ItemPropertiesWeaponModResolvers<ContextType>;
  ItemSlot?: ItemSlotResolvers<ContextType>;
  ItemStorageGrid?: ItemStorageGridResolvers<ContextType>;
  ItemTranslation?: ItemTranslationResolvers<ContextType>;
  Lock?: LockResolvers<ContextType>;
  LootContainer?: LootContainerResolvers<ContextType>;
  LootContainerPosition?: LootContainerPositionResolvers<ContextType>;
  Map?: MapResolvers<ContextType>;
  MapExtract?: MapExtractResolvers<ContextType>;
  MapHazard?: MapHazardResolvers<ContextType>;
  MapPosition?: MapPositionResolvers<ContextType>;
  MapSpawn?: MapSpawnResolvers<ContextType>;
  MapSwitch?: MapSwitchResolvers<ContextType>;
  MapSwitchOperation?: MapSwitchOperationResolvers<ContextType>;
  MapSwitchTarget?: MapSwitchTargetResolvers<ContextType>;
  MapWithPosition?: MapWithPositionResolvers<ContextType>;
  MobInfo?: MobInfoResolvers<ContextType>;
  NumberCompare?: NumberCompareResolvers<ContextType>;
  OfferUnlock?: OfferUnlockResolvers<ContextType>;
  PlayerLevel?: PlayerLevelResolvers<ContextType>;
  PriceRequirement?: PriceRequirementResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Quest?: QuestResolvers<ContextType>;
  QuestItem?: QuestItemResolvers<ContextType>;
  QuestObjective?: QuestObjectiveResolvers<ContextType>;
  QuestRequirement?: QuestRequirementResolvers<ContextType>;
  QuestRewardReputation?: QuestRewardReputationResolvers<ContextType>;
  RequirementHideoutStationLevel?: RequirementHideoutStationLevelResolvers<ContextType>;
  RequirementItem?: RequirementItemResolvers<ContextType>;
  RequirementSkill?: RequirementSkillResolvers<ContextType>;
  RequirementTask?: RequirementTaskResolvers<ContextType>;
  RequirementTrader?: RequirementTraderResolvers<ContextType>;
  ServerStatus?: ServerStatusResolvers<ContextType>;
  SkillLevel?: SkillLevelResolvers<ContextType>;
  StationaryWeapon?: StationaryWeaponResolvers<ContextType>;
  StationaryWeaponPosition?: StationaryWeaponPositionResolvers<ContextType>;
  Status?: StatusResolvers<ContextType>;
  StatusMessage?: StatusMessageResolvers<ContextType>;
  StimEffect?: StimEffectResolvers<ContextType>;
  Task?: TaskResolvers<ContextType>;
  TaskKey?: TaskKeyResolvers<ContextType>;
  TaskObjective?: TaskObjectiveResolvers<ContextType>;
  TaskObjectiveBasic?: TaskObjectiveBasicResolvers<ContextType>;
  TaskObjectiveBuildItem?: TaskObjectiveBuildItemResolvers<ContextType>;
  TaskObjectiveExperience?: TaskObjectiveExperienceResolvers<ContextType>;
  TaskObjectiveExtract?: TaskObjectiveExtractResolvers<ContextType>;
  TaskObjectiveItem?: TaskObjectiveItemResolvers<ContextType>;
  TaskObjectiveMark?: TaskObjectiveMarkResolvers<ContextType>;
  TaskObjectivePlayerLevel?: TaskObjectivePlayerLevelResolvers<ContextType>;
  TaskObjectiveQuestItem?: TaskObjectiveQuestItemResolvers<ContextType>;
  TaskObjectiveShoot?: TaskObjectiveShootResolvers<ContextType>;
  TaskObjectiveSkill?: TaskObjectiveSkillResolvers<ContextType>;
  TaskObjectiveTaskStatus?: TaskObjectiveTaskStatusResolvers<ContextType>;
  TaskObjectiveTraderLevel?: TaskObjectiveTraderLevelResolvers<ContextType>;
  TaskObjectiveTraderStanding?: TaskObjectiveTraderStandingResolvers<ContextType>;
  TaskObjectiveUseItem?: TaskObjectiveUseItemResolvers<ContextType>;
  TaskRewards?: TaskRewardsResolvers<ContextType>;
  TaskStatusRequirement?: TaskStatusRequirementResolvers<ContextType>;
  TaskZone?: TaskZoneResolvers<ContextType>;
  Trader?: TraderResolvers<ContextType>;
  TraderCashOffer?: TraderCashOfferResolvers<ContextType>;
  TraderLevel?: TraderLevelResolvers<ContextType>;
  TraderOffer?: TraderOfferResolvers<ContextType>;
  TraderPrice?: TraderPriceResolvers<ContextType>;
  TraderReputationLevel?: TraderReputationLevelResolvers<ContextType>;
  TraderReputationLevelFence?: TraderReputationLevelFenceResolvers<ContextType>;
  TraderResetTime?: TraderResetTimeResolvers<ContextType>;
  TraderStanding?: TraderStandingResolvers<ContextType>;
  Vendor?: VendorResolvers<ContextType>;
  historicalPricePoint?: HistoricalPricePointResolvers<ContextType>;
};

