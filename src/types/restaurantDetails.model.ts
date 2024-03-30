export type RestaurantDetailsType = {
    basicInfo: BasicInfo,
    offers: Array<Offer>,
    pref_details: Pref_Details, 
    topPicksList: Top_Picks,
    menuSectionsList: Array<MenuSection>
}

export type MenuSection = {
    card: {
        card: Menu_Cards
    }
}


export type BasicInfo = {
    id:                          string;
    name:                        string;
    city:                        string;
    slugs:                       Slugs;
    uniqueId:                    string;
    cloudinaryImageId:           string;
    locality:                    string;
    areaName:                    string;
    costForTwo:                  string;
    costForTwoMessage:           string;
    cuisines:                    string[];
    avgRating:                   number;
    feeDetails:                  FeeDetails;
    parentId:                    string;
    avgRatingString:             string;
    totalRatingsString:          string;
    sla:                         Sla;
    availability:                Availability;
    aggregatedDiscountInfo:      AggregatedDiscountInfo;
    badges:                      Analytics;
    slugString:                  string;
    isOpen:                      boolean;
    labels:                      Label[];
    logo:                        string;
    totalRatings:                number;
    aggregatedDiscountInfoV2:    AggregatedDiscountInfo;
    type:                        string;
    ratingSlab:                  string;
    hasBestsellerItems:          boolean;
    latLong:                     string;
    backgroundImageOverlayInfo:  Analytics;
}

export type Label = {
    title:   string;
    message: string;
}

export type Sla = {
    restaurantId:    string;
    deliveryTime:    number;
    minDeliveryTime: number;
    maxDeliveryTime: number;
    serviceability:  string;
    rainMode:        string;
    longDistance:    string;
    zoneId:          number;
    slaString:       string;
    iconType:        string;
    lastMileTravelString: string;
}

export type Slugs = {
    restaurant: string;
    city:       string;
}

export type Offer = {
    info: OfferInfo;
    cta:  OfferCta;
}


export type OfferCta = {
    type: string;
}

export type OfferInfo = {
    header:               string;
    offerTag?:            string;
    offerTagColor:        string;
    offerIds:             string[];
    expiryTime:           string | Date;
    couponCode:           string;
    description:          string;
    offerType:            string;
    restId:               string;
    offerLogo:            string;
    descriptionTextColor: string;
    logoBottom?:          string;
}

export type Carousel = {
    type:        string;
    subtype:     string;
    bannerId:    string;
    creativeId:  string;
    title:       string;
    description: string;
    fontColor:   string;
    dish:        Dish;
}

export type Dish = {
    info:                  DishInfo;
    analytics:             Analytics;
    hideRestaurantDetails: boolean;
}

export enum Title {
    Beverages = "BEVERAGES",
    Desserts = "DESSERTS",
    DominosClassics = "Dominos Classics",
    FlavoursOfIndia = "Flavours of India",
    GarlicBreadsMore = "GARLIC BREADS & MORE",
    LoadedPizza = "Loaded Pizza",
    NewLaunches = "New Launches",
    PartyCombo = "Party Combo",
    PizzaMania = "PIZZA MANIA",
    Recommended = "Recommended",
    TopPicks = "Top Picks",
    ValueMeals = "Value Meals",
}

export type Pref_Details = {
    "@type":             string;
    badges?:             Analytics;
    vegOnlyDetails?:     VegOnlyDetails;
    topRatedFilter?:     Analytics;
    vegFilter?:          VegFilter;
    nonvegFilter?:       VegFilter;
    title?:              Title;
    carousel?:           Carousel[];
    itemCards?:          ItemCard[];
    type?:               string;
    name?:               string;
    area?:               string;
    completeAddress?:    string;
}

export type VegOnlyDetails = {
    imageId:     string;
    title:       string;
    description: string;
}

export type VegFilter = {
    attributes: NonvegFilterAttributes;
}

export type NonvegFilterAttributes = {
    displayText: DisplayText;
}

export enum DisplayText {
    Nonveg = "NONVEG",
    Veg = "VEG",
}

export type Top_Picks = {
    title: string,
    carousel: Array<Carousel>
}

export type Menu_Cards = {
    title: string,
    itemCards: Array<ItemCard>
}

export type ItemCard = {
    card: ItemCardCard;
}

export type ItemCardCard = {
    info:                  DishInfo;
    analytics:             Analytics;
    hideRestaurantDetails: boolean;
}

export type DishInfo = {
    id:            string;
    name:          string;
    category:      string | Title;
    description:   string;
    imageId:       string;
    inStock:       number;
    isVeg?:        number;
    variants:      Analytics;
    itemAttribute: ItemAttribute;
    defaultPrice?: number;
    showImage?:    boolean;
    itemBadge:     Analytics;
    badgesV2:      Analytics;
    ratings:       Ratings;
    price?:        number;
    isBestseller?: boolean;
}

export type Ratings = {
    aggregatedRating: AggregatedRating;
}

export type AggregatedRating = {
    rating?:        string;
    ratingCount?:   string;
    ratingCountV2?: string;
}

export type ItemAttribute = {
    vegClassifier: string | DisplayText;
}

export type Analytics = {
}

export type FeeDetails = {
    restaurantId: string;
    icon:         string;
}

export type Availability = {
    nextCloseTime:        Date;
    visibility:           boolean;
    opened:               boolean;
    restaurantClosedMeta: Analytics;
}

export type AggregatedDiscountInfo = {
    header:               string;
    shortDescriptionList: DescriptionList[];
    descriptionList:      DescriptionList[];
    visible?:             boolean;
    couponDetailsCta?:    string;
}

export type DescriptionList = {
    meta:          string;
    discountType:  string;
    operationType: string;
}