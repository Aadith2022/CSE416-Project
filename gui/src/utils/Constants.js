import chroma from "chroma-js";

export const MAPBOX_ACCESS_TOKEN = "pk.eyJ1Ijoia3R1emlub3dza2kiLCJhIjoiY2x1djlvOWM3MDE4NDJqbGx2aWx6djh2dSJ9.jJ8agn3EPWlLE_u8VsAs4w";

export const COLORS = [
    'rgb(0, 102, 204)',    // Blue
    'rgb(255, 51, 51)',    // Red
    'rgb(51, 204, 51)',     // Green
    'rgb(255, 204, 0)',     // Yellow
    'rgb(153, 51, 255)',    // Purple
    'rgb(255, 128, 0)',     // Orange
    'rgb(0, 204, 204)',      // Cyan
    'rgb(204, 0, 204)',      // Magenta
    'rgb(102, 0, 0)',        // Dark Red
    'rgb(0, 0, 102)',        // Dark Blue
    'rgb(255, 0, 127)',    // Bright Pink
    'rgb(0, 128, 255)',    // Light Blue
    'rgb(255, 165, 0)',     // Bright Orange
    'rgb(75, 0, 130)',      // Indigo
    'rgb(0, 255, 127)',     // Spring Green
    'rgb(255, 99, 71)',     // Tomato
    'rgb(34, 139, 34)',     // Forest Green
    'rgb(255, 20, 147)',    // Deep Pink
    'rgb(127, 255, 0)',     // Chartreuse
    'rgb(255, 218, 185)',    // Peach
    'rgb(186, 85, 211)',    // Medium Orchid
    'rgb(255, 140, 0)',     // Dark Orange
    'rgb(255, 0, 255)',     // Magenta
    'rgb(128, 0, 0)',       // Maroon
    'rgb(0, 128, 128)',     // Teal
    'rgb(221, 160, 221)',   // Plum
    'rgb(0, 255, 255)',     // Aqua
    'rgb(100, 149, 237)',   // Cornflower Blue
    'rgb(240, 230, 140)',    // Khaki
    'rgb(0, 100, 0)',       // Dark Green
    'rgb(173, 216, 230)',   // Light Blue
    'rgb(189, 183, 107)',   // Dark Khaki
    'rgb(70, 130, 180)',    // Steel Blue
    'rgb(255, 215, 0)',     // Gold
    'rgb(205, 92, 92)',     // Indian Red
    'rgb(255, 99, 0)',      // Bright Red-Orange
    'rgb(128, 0, 0)',       // Maroon
    'rgb(0, 191, 255)',     // Deep Sky Blue
  ];

//choropleth color scale
export const colorScale = chroma
.scale(["#FFFFFF", "#a0fc7e", "#7afa4b", "#086e01"]) // Light green to dark green
.domain([0, 100]);

// Choropleth color scale with shades of red
export const colorScaleRed = chroma
.scale(["#FFFFFF", "#f57e6e", "#f54c36", "#781306"]) // Light red to dark red
.domain([0, 100]);

// Choropleth color scale with shades of blue
export const colorScaleBlue = chroma
.scale(["#e6f0ff", "#4d79ff", "#003399"]) // Light blue to dark blue
.domain([0, 100]);

export const argbToRgb = (argbColor) => {
  // Convert to unsigned 32-bit if the number is negative
  if (argbColor < 0) {
      argbColor = argbColor + 0xFFFFFFFF + 1;
  }

  // Extract RGB components
  const red = (argbColor >> 16) & 0xFF;
  const green = (argbColor >> 8) & 0xFF;
  const blue = argbColor & 0xFF;
  return `rgb(${red}, ${green}, ${blue})`
}

export const centerOfTheUS = [39.8283, -98.5795];
export const boundsForTheUS = [
  [24.396308, -125.0],
  [49.384358, -66.93457]
];

export const defaultZoom = 4;
export const defaultMinZoom = 4;
export const defaultMaxZoom = 8;

export const ColorDistrictsOptions = {
  Current: "Current",
  SMD: "SMD",
  MMD: "MMD"
}

export const ViewDataOptions = {
  Current: "Current",
  SMD: "SMD",
  MMD: "MMD",
  Precincts: "Precincts"
}

export const BoundaryChoroplethOptions = {
  Current: "Current",
  SMD: "SMD",
  MMD: "MMD",
  Precincts: "Precincts"
}

export const RightAnalysisPanelOptions = {
  Ensemble: "ensemble",
  Search: "search",
  Summary: "summary"
}

export const RightAnalysisEnsembleOptions = {
  SMD_AND_MMD: "SMD/MMD"
}

export const RightAnalysisSearchOptions = {
  SMD: "SMD",
  MMD: "MMD"
}

export const RightAnalysisSummaryOptions = {
  Current: "Current",
  SMD_MMD: "SMD/MMD"
}

export const BoxAndWhiskerPlotBOC = {
  Democrat: "democrat",
  Republican: "republican",
  Hispanic: "hispanic"
}

export const VisualizationEnsembleOptions = {
  Summary: "Summary",
  BarChart: "Bar Chart",
  BoxAndWhisker: "Box and Whisker",
}

export const VisualizationSmdSummaryOptions = {
  Summary: "Summary",
  ElectionResults: "Election Results",
  SeatVoteCurve: "Seat-Vote Share Plot"
}

export const BoxAndWhiskerChartOptions = {
  SMD: "SMD",
  MMD: "MMD",
  Compare: "Compare"
}

export const OpportunityRepresentativeJSON = {
  "0": 5000,
  "1": 0,
  "2": 0,
  "3": 0,
  "4": 0
}


export const RangeOfSplitsJSON = {
  "0-4": 0,
  "1-3": 0,
  "2-2": 800,
  "3-1": 1200,
  "4-0": 3000
  }

export const RangeOfSplitsMMDJSON = {
  "0-4": 0,
  "1-3": 0,
  "2-2": 0,
  "3-1": 5000,
  "4-0": 0
  }

export const supplementSMD = {
  "republican_seat_share": 0.875,
  "democratic_seat_share": 0.125,
  "republican_vote_share": 60.72,
  "democratic_vote_share": 39.28

}

export const supplementMMD = {
  "republican_seat_share": 0.75,
  "democratic_seat_share": 0.25,
  "republican_vote_share": 60.72,
  "democratic_vote_share": 39.28
}

export const enactedSMDPlan = {
  "NumOppRep": 0,
  "RepDemSplit": "4-0",
}

export const BarChartOptions = {
  RangeOfOpportunityDistricts: "Range of Opportunity Districts",
  RepublicanDemocraticSplit: "Republican-Democratic Split"
}

export const MmdSummaryAverageReps = {
  average_republican_representatives: 3,
  average_democratic_representatives: 1,
  average_republican_democratic_split: [3, 1]
}

export const mmdElectionResults = 
  [
    {
        "num_seats": 3,
        "1": {
            "elected": [
                [
                    "D0",
                    "Democratic",
                    267403
                ],
                [
                    "D1",
                    "Democratic",
                    267403
                ],
                [
                    "R0",
                    "Republican",
                    432504
                ]
            ],
            "losers": [
                [
                    "R1",
                    "Republican",
                    259947
                ],
                [
                    "D2",
                    "Democratic",
                    193066.81959947312
                ],
                [
                    "R2",
                    "Republican",
                    259599
                ]
            ],
            "mmd_geometry": {
                "type": "Feature",
                "properties": {
                    "P0010001": 2307409,
                    "G20PRERTRU": 519470,
                    "G20PREDBID": 550138,
                    "P0010003": 1328817,
                    "P0010004": 86749,
                    "P0010006": 57523,
                    "P0020002": 762452,
                    "P0010007": 4296,
                    "P0010005": 196491,
                    "P0010008": 294523,
                    "OPPORTUNITY": 1,
                    "POP_DEV": 3.21
                }
            }
        }
    },
    {
        "num_seats": 3,
        "2": {
            "elected": [
                [
                    "R1",
                    "Republican",
                    283076
                ],
                [
                    "R2",
                    "Republican",
                    283076
                ],
                [
                    "D1",
                    "Democratic",
                    463019
                ]
            ],
            "losers": [
                [
                    "D2",
                    "Democratic",
                    277344
                ],
                [
                    "R0",
                    "Republican",
                    199097.86280306824
                ],
                [
                    "D0",
                    "Democratic",
                    277418
                ]
            ],
            "mmd_geometry": {
                "type": "Feature",
                "properties": {
                    "P0010001": 2502858,
                    "G20PRERTRU": 576869,
                    "G20PREDBID": 555432,
                    "P0010003": 1485074,
                    "P0010004": 129388,
                    "P0010006": 86052,
                    "P0020002": 847245,
                    "P0010007": 4684,
                    "P0010005": 58371,
                    "P0010008": 383285,
                    "OPPORTUNITY": 1,
                    "POP_DEV": 4.99
                }
            }
        }
    },
    {
        "num_seats": 3,
        "0": {
            "elected": [
                [
                    "D0",
                    "Democratic",
                    266661
                ],
                [
                    "D2",
                    "Democratic",
                    266661
                ],
                [
                    "R1",
                    "Republican",
                    423290
                ]
            ],
            "losers": [
                [
                    "R2",
                    "Republican",
                    253687
                ],
                [
                    "D1",
                    "Democratic",
                    202727.55740455203
                ],
                [
                    "R0",
                    "Republican",
                    253859
                ]
            ],
            "mmd_geometry": {
                "type": "Feature",
                "properties": {
                    "P0010001": 2348419,
                    "G20PRERTRU": 507822,
                    "G20PREDBID": 558819,
                    "P0010003": 1365771,
                    "P0010004": 111888,
                    "P0010006": 83178,
                    "P0020002": 835291,
                    "P0010007": 5958,
                    "P0010005": 81527,
                    "P0010008": 320260,
                    "OPPORTUNITY": 1,
                    "POP_DEV": 1.49
                }
            }
        }
    }
]


