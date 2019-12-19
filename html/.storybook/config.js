import React from 'react';
import '../_spark.scss';
import '../../storybook-utilities/storybook-theming/_docs.scss';
import { configure, addParameters, addDecorator } from '@storybook/html';
import { withA11y } from '@storybook/addon-a11y';
import sparkTheme from '../../storybook-utilities/storybook-theming/storybook-spark-theme';
import 'iframe-resizer/js/iframeResizer.contentWindow.min';
import '!style-loader!css-loader!sass-loader!../../storybook-utilities/storybook-theming/font-loader.scss';
import '../../storybook-utilities/icon-loader';
import { DocsContainer } from '@storybook/addon-docs/blocks';
import { SprkTable } from '@sparkdesignsystem/spark-react';
import { configClassModifierJsonProcessor } from '../../storybook-utilities/configClassModifierJsonProcessor';

const classModifierJSON = require('../../src/data/sass-modifiers.json');

addDecorator(withA11y);

// Option defaults
addParameters({
  options: {
    theme: sparkTheme,
    showRoots: true,
    storySort: (a, b) =>
      a[1].kind === b[1].kind ? 0 : a[1].id.localeCompare(b[1].id, { numeric: true }),
  },
});

addParameters({
  docs: {
    extractComponentDescription: (component, { info }) => {
      if (info) {
        return typeof info === 'string' ? info : info.markdown || info.text;
      }
      return null;
    },
    container: ({ children, context }) => {
      const componentName = context.kind.split('/')[1];
      const processedJson = configClassModifierJsonProcessor(classModifierJSON, componentName);
      if (processedJson) {
        return (
          <DocsContainer context={context}>
            <div>
              {children}

              <h4 className="sprk-u-mbm">Class Modifiers for {componentName}</h4>
              <SprkTable
                additionalTableClasses="sprk-b-Table--spacing-medium sprk-b-Table--secondary sprk-b-Table--striped"
                columns = {[
                  {
                    name: 'selector',
                    header: 'Class'
                  },
                  {
                    name: 'description',
                    header: 'Description'
                  },
                ]}
                rows = {processedJson}
              />
            </div>
          </DocsContainer>
        )
      } else {
        return (
          <DocsContainer context={context}>
            <div>
              {children}
            </div>
          </DocsContainer>
        )
      }
    },
  },
});

configure(require.context('..', true, /^((?![\\/]node_modules|dist[\\/]).)*\.stories\.js$/), module);