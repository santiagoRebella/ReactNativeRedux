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
      buttonGroupWrapper: {
        flexGrow: 1,
      },
      radioGroupContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
      },
      checkBoxContainer: {
        alignContent: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
      },
      footer: { justifyContent: 'flex-end', flexGrow: 1 },
    },
  },
  label: {
    paddingLeft: 10,
    fontWeight: 'bold',
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
    backgroundColor: palette.secondary,
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
