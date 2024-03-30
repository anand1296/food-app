export type RestaurantsType = {
    info:      Info;
    analytics: Analytics;
    cta:       Cta;
}

export type Analytics = {
}

export type Cta = {
    link: string;
    type: string;
}

export type Info = {
    id:                              string;
    name:                            string;
    cloudinaryImageId:               string;
    locality:                        string;
    areaName:                        string;
    costForTwo:                      string;
    cuisines:                        string[];
    avgRating:                       number;
    parentId:                        string;
    avgRatingString:                 string;
    totalRatingsString:              string;
    sla:                             Sla;
    availability:                    Availability;
    badges:                          Analytics;
    isOpen:                          boolean;
    type:                            string;
    badgesV2:                        BadgesV2;
    aggregatedDiscountInfoV3:        AggregatedDiscountInfoV3;
    differentiatedUi:                DifferentiatedUI;
    reviewsSummary:                  Analytics;
    displayType:                     string;
    restaurantOfferPresentationInfo: Analytics;
    promoted: boolean
}

export type AggregatedDiscountInfoV3 = {
    header:    string;
    subHeader: string;
}

export type Availability = {
    nextCloseTime: Date | string;
    opened:        boolean;
}

export type BadgesV2 = {
    entityBadges: EntityBadges;
}

export type EntityBadges = {
    imageBased:         Analytics;
    textBased:          Analytics;
    textExtendedBadges: Analytics;
}

export type DifferentiatedUI = {
    displayType:                  string;
    differentiatedUiMediaDetails: DifferentiatedUIMediaDetails;
}

export type DifferentiatedUIMediaDetails = {
    mediaType: string;
    lottie:    Analytics;
    video:     Analytics;
}

export type Sla = {
    deliveryTime:         number;
    lastMileTravel:       number;
    serviceability:       string;
    slaString:            string;
    lastMileTravelString: string;
    iconType:             string;
}
