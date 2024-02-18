import useCustomFonts from '../FontLoader';
const COLORS = {
  primary: "#f52018",
  secondary: "#00223F",
  tertiary: '#025D75',

  red: "#FF0054",
  yellow: "#F2FF00",
  blue: "#187394",
  pink: "#FF06C1",
  green: "#64D7FF",
  orange: "#FF9400",
  purple: "#6E51D9",
  creme: "#ECD4C0",

  gray: "#e3e3e3",
  gray2: "#a2aab0",

  white: "#fff",
  lightWhite: "#F7ECDF",
  black: "#000",
  lightBlack: "#222",
}; 

const FONT = {
  thin: "PopThin",
  light: "PopLight",
  regular: "PopRegular",
  medium: "PopMedium",
  semibold: "PopSemiBold",
  bold: "PopBold",
  extrabold: "PopExtraBold",
  black: "PopBlack",
};

const FONT_DM = {
  light: "DMLight",
  regular: "DMRegular",
  medium: "DMMedium",
  bold: "DMBold",
};

const SIZES = {
  xs: 10,
  s: 12,
  m: 16,
  l: 20,
  xl: 24,
  xxl: 32,
};

const SHADOWS = {
  small: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 2,
  },
  medium: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 5.84,
    elevation: 5,
  },
};

export { COLORS, FONT, SIZES, SHADOWS };
