import {createTheme} from '@rneui/themed';

export const theme = createTheme({
  mode: 'dark',
  darkColors: {
    primary: '#201E27',
    secondary: '#444055',
    tertiary: '#514C66',
    textPrimary: '#F2F2F2',
    textSecondary: '#C7C5D6',
    violetAccent: '#7C63DD',
    violetLight: '#967DFA',
    detail: '#FFBD20',
    success: '#27AE60',
    error: '#DB2121',
    shadowPrimary: '#f2f2f2bf',
    shadowSecondary: '#00000080',
    shadowWhite: '#d7d7d70d',
  },
  components: {
    Text: (props, theme) => {
      return {
        style: {
          color: theme.colors.textPrimary,
        },
      };
    },
    Button: (props, theme) => {
      if (props.type === 'clear') {
        return {
          radius: 10,
          buttonStyle: {
            backgroundColor: theme.colors.textPrimary,
            paddingVertical: 14,
          },
          titleStyle: {
            color: theme.colors.secondary,
            fontSize: 14,
          },
        };
      }

      return {
        radius: 10,
        buttonStyle: {
          backgroundColor: theme.colors.violetAccent,
          paddingVertical: 14,
        },
        titleStyle: {
          color: theme.colors.textPrimary,
          fontSize: 14,
        },
        disabledStyle: {
          backgroundColor: '#372F54',
        },
        disabledTitleStyle: {
          color: '#655F7C',
        },
      };
    },
    Dialog: (props, theme) => {
      return {
        overlayStyle: {
          backgroundColor: theme.colors.primary,
          padding: 24,
          borderRadius: 12,
        },
      };
    },
  },
});
