import * as React from 'react';
import { AzureDarkTheme } from '@fluentui-contrib/azure-theme';
import { FluentProvider } from '@fluentui/react-components';
import { PersonaExample } from '../../src/components/fluent/PersonaExample';

export const Persona = () => (
  <FluentProvider theme={AzureDarkTheme}>
    <PersonaExample />
  </FluentProvider>
);