const SUN_BLUE = '#2972FE';
const LIGHT_BLUE='#D3DFF8';
const SOFT_BLUE='#282C49';
const BACK_BLUE='#28335B';
const LINE_BLUE="#000000b3";
const ASBESTOS = '#141414';
const MIDNIGHT_BLUE = '#000';
const EMERALD = '#2ecc71';
const ALIZARIN = '#e74c3c';
const CLOUDS = '#ecf0f1';
const SILVER = '#bdc3c7';
const LIGHTER="#fff";
const JUICE='#E9B3D3';

const common = {
 PRIMARY: SUN_BLUE,
 SUCCESS: EMERALD,
 ERROR: ALIZARIN,
 DEFAULT:SILVER,
 LIGHT:LIGHTER,
 DARK:ASBESTOS,
 LIGHTBLUE:LIGHT_BLUE,
 JUICE:JUICE,
 LINEBLUE:LINE_BLUE,
 SOFTBLUE:SOFT_BLUE,
 BACKBLUE:BACK_BLUE
};

const light = {
 ...common,
 BACKGROUND: CLOUDS,
 TEXT: MIDNIGHT_BLUE,
 TEXT_SECONDARY: ASBESTOS,
 BACKGROUND_SEC:LIGHTER,
 ICON_BACK:LIGHT_BLUE
};

const dark = {
 ...common,
 BACKGROUND: ASBESTOS,
 TEXT: CLOUDS,
 TEXT_SECONDARY: SILVER,
 BACKGROUND_SEC:SOFT_BLUE,
 ICON_BACK:BACK_BLUE
};

export const colors = {light, dark};