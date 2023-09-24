var vegaLiteBarSpec = {
    "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
    "title": "Top 10 Highest Cost of Living Index Values",
    "width": 600,
    "height": 400,
    "data": {
      "url": "Cost_of_Living_Index_2022.csv", // CSV data
      "format": {
        "type": "csv"
      }
    },
    "mark": "bar",
    "encoding": {
      "x": {
        "field": "Country",
        "type": "ordinal",
        "axis": {"title": "Country"}
      },
      "y": {
        "field": "Cost_of_Living_Index",
        "type": "quantitative",
        "axis": {"title": "Cost of Living Index"},
        "sort": "-y" // Sort in descending order
      },
      "tooltip": [
        {"field": "Country", "type": "nominal", "title": "Country"},
        {"field": "Cost_of_Living_Index", "type": "quantitative", "format": ".2f"}
      ]
    },
    "config": {
      "view": {"stroke": "transparent"},
      "axis": {"grid": false}
    },
    "limit": 10 // Display only the top 10 values
  };
  
  vegaEmbed('#bar-chart', vegaLiteBarSpec)
    .catch(console.error); // Handle any embedding errors
  