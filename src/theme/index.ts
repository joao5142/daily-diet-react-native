const theme = {
  COLORS: {
    WHITE: "#FFFFFF",

    GREEN_100: "#E5F0DB",
    GREEN_300: "#CBE4B4",
    GREEN_600: "#639339",

    RED_100: "#F4E6E7",
    RED_300: "#F3BABD",
    RED_600: "#BF3B44",

    GRAY_700: "#1B1D1E",
    GRAY_600: "#333638",
    GRAY_500: "#5C6265",
    GRAY_400: "#B9BBBC",
    GRAY_300: "#DDDEDF",
    GRAY_200: "#EFF0F0",
    GRAY_100: "#FAFAFA",
  },
  FONT_FAMILY: {
    REGULAR: "NunitoSans_400Regular",
    BOLD: "NunitoSans_700Bold",
  },
  FONT_SIZE: {
    XS: 12,
    SM: 14,
    MD: 16,
    LG: 18,
    XL: 24,
    XXL: 32,
  },
};

export interface ColorType {
  color?: keyof typeof theme.COLORS;
}
export interface FontSizeType {
  size?: keyof typeof theme.FONT_SIZE;
}

export interface FontFamilyType {
  fontFamily?: keyof typeof theme.FONT_FAMILY;
}

export default theme;
