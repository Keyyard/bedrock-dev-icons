// This file serves as a placeholder for TypeScript compilation
// Icon themes are primarily JSON-based and don't require much TypeScript code

export const EXTENSION_ID = 'bedrock-dev-icons';
export const EXTENSION_NAME = 'Bedrock Dev Icons';

// Folder definitions for easy maintenance
export const BEDROCK_FOLDERS = {
  BP: [
    'aim_assist',
    'animation_controllers', 
    'animations',
    'biomes',
    'blocks',
    'cameras',
    'dialogue',
    'entities',
    'feature_rules',
    'features',
    'functions',
    'item_catalog',
    'items',
    'loot_tables',
    'presets',
    'recipes',
    'scripts',
    'spawn_rules',
    'structures',
    'texts',
    'trading',
    'worldgen'
  ],
  RP: [
    'animation_controllers',
    'animations',
    'attachables',
    'entity',
    'fogs',
    'font',
    'fonts',
    'items',
    'materials',
    'models',
    'particles',
    'render_controllers',
    'sounds',
    'texts',
    'textures',
    'ui'
  ]
} as const;
