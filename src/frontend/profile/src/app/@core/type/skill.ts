export const skillList = [
    'html',
    'css',
    'js',

    'php',
    'java',
    'nodejs',

    'android',
    'ios',

    'ionic',

    'mysql',
    'mongodb',
    'opensearch',

    'wordpress',
    'zencart',
    'magento',

    'aws',

] as const;
export type Skill = typeof skillList[number];