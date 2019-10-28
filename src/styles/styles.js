const palette = {
  primary: '#2589BD',
  secondary: '#C6CCB2',
  success: '#4B7F52',
  danger: '#E55934',
  warning: '#FABC3C',
};

export const theme = {
  colors: palette,
  layout: {
    home: {
      container: {
        justifyContent: 'space-between',
        flex: 1,
      },
      list: {
        flexGrow: 1,
        backgroundColor: 'whitesmoke',
      },
    },
    task: {
      container: {
        justifyContent: 'flex-end',
        flexDirection: 'column',
        flex: 1,
      },
      scrollViewContainer: {
        flexGrow: 1,
        alignContent: 'space-between',
      },
      rowContainer: {
        flexDirection: 'row',
      },
      buttonGroupContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
      },
      radioGroupContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
      },
      checkBoxContainer: {
        alignContent: 'center',
        justifyContent: 'space-around',
        flexDirection: 'row',
      },
      footer: { justifyContent: 'flex-end', flexGrow: 1 },
    },
  },
  label: {
    padding: 10,
  },
  ActionButton: {
    borderRadius: 0,
    paddingVertical: 20,
  },
  Button: {
    raised: true,
  },
  Divider: {
    style: { marginVertical: 8, backgroundColor: 'transparent' },
  },
  bigDivider: {
    marginVertical: 20,
  },
  DoneRow: {
    backgroundColor: palette.success,
    opacity: 0.3,
  },
  errorColor: { color: palette.danger },
  LockButtonContainer: {
    backgroundColor: palette.secondary,
    marginHorizontal: 10,
  },
  Input: {},
  CheckBox: {},
  ButtonGroup: {},
};
