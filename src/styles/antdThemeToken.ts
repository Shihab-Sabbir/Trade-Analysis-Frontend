import { ThemeConfig } from "antd";

export const antdThemetoken:ThemeConfig = {
  token: {
    colorPrimary: '#503AF2',
    colorPrimaryHover: '#2413a3d4',
    colorLink: '#404EED',
    boxShadowSecondary:
      'rgba(17, 17, 26, 0.05) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 0px 8px;',
  },
  components:{
    Form:{
      itemMarginBottom:15,
      verticalLabelPadding:0,
    },
    // Menu:{
    //   itemHoverBg:"#503AF2"
    // }
  }
};
