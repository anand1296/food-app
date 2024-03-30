export const AppConstants = {
CORS_HANDLER: "https://api.allorigins.win",
  SWIGGY: {
    API: {
      VERSON: "v1",
      BASE_URL: "https://www.swiggy.com/dapi",
      PATH: {
        RESTUARANTS: {
          NAME: "restaurants",
          VERSION: "v5",
          END_POINTS: {
            LIST: "list",
            UPDATE: "update"
          },
          Q_PARAMS:
            "?lat=12.96340&lng=77.58550&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING",
        },
        MENU: {
            NAME: "menu",
            END_POINTS: {
                PL: "pl"
            },
            Q_PARAMS: "?page-type=REGULAR_MENU&complete-menu=true&lat=12.96340&lng=77.58550"
        }
      },
    },
    IMAGES: {
        PATH: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660"
    }
  },
  HEADER: {
    LOGO: "https://s.tmimgcdn.com/scr/800x500/212900/spoon-and-fork-restaurant-logo_212966-original.png",
  },
};
