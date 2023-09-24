const spec = {
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",

  "width": 800,
  "height": 500,
  "data": {
    "url": "ne_110m_admin_0_countries.topojson", // TopoJSON data
    "format": {"type": "topojson", "feature": "ne_110m_admin_0_countries"}
  },
  "projection": {"type": "equalEarth"},
  "layer": [
    {
      "data": {
        "values": [{"x": 0, "x2": 800, "y": 0, "y2": 500}],
      },
      "mark": {"type": "rect", "fill": "lightblue", "opacity": 0.3} // Reduced opacity
    },
    {
      "data": {
        "url": "WorldMapWithGraticules.topojson",
        "format": {"type": "topojson", "feature": "ne_110m_graticules_30"}
      },
      "mark": {"type": "geoshape", "fill": null, "stroke": "lightgray"}
    },
    {
      "transform": [
        {
          "calculate": "'Data is not available in ' + datum.properties.NAME",
          "as": "note"
        }
      ],
      "mark": {"type": "geoshape", "fill": "lightgray", "stroke": "white"},
      "encoding": {"tooltip": {"field": "note"}}
    },
    {
      "transform": [
        {
          "lookup": "properties.NAME",
          "from": {
            "data": {
              "url": "Cost_of_Living_Index_2022.csv" // CSV data
            },
            "key": "Country",
            "fields": ["Cost_of_Living_Index"]
          }
        }
      ],
      "mark": {"type": "geoshape", "stroke": "white"},
      "encoding": {
        "color": {
          "field": "Cost_of_Living_Index",
          "type": "quantitative",
          "scale": {
            "type": "linear",
            "domain": [0, 150], // Update domain as needed
            "range": ["#ffffcc", "#800026"] // Update color range
          }
        },
        "tooltip": [
          {"field": "properties.NAME", "type": "nominal", "title": "Country"},
          {"field": "Cost_of_Living_Index", "type": "quantitative", "format": ".2f"}
        ]
      }
    }
  ],
  "config": {}
};

vegaEmbed("#vis", spec, {mode: "vega-lite"}).then(console.log).catch(console.warn);