import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      background: string;
      backgroundSecundary: string;
      backgroundForms: string;
      textPrimary: string;
      textFormsPlaceHolder: string;
      errorColor: string;
      orangeColorContraste: string;
      backgroundContr: string;
    };
  }
}
