import type { StorybookConfig } from '@storybook/react-vite';
import { join, dirname } from 'path';
import tsconfigPaths from 'vite-tsconfig-paths';

/**
 * This function is used to resolve the absolute path of a package.
 * It is needed in projects that use Yarn PnP or are set up within a monorepo.
 */
const getAbsolutePath = (value: string): any => {
    return dirname(require.resolve(join(value, 'package.json')));
};

const config: StorybookConfig = {
    stories: ['../stories/**/*.stories.tsx'],
    addons: [getAbsolutePath('@storybook/addon-essentials')],
    framework: {
        name: getAbsolutePath('@storybook/react-vite'),
        options: {},
    },
    async viteFinal(config) {
        const { mergeConfig } = await import('vite');
        return mergeConfig(config, {
            plugins: [...(config.plugins || []), tsconfigPaths()],
        });
    },
};

export default config;
