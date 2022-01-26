export function loadLists() {
  return [
    {
      title: "First Column",
      cards: [
        {
          id: 1,
          title: "Revenue Today",
          value: "$ 50,000",
          graphType: "line",
        },
        {
          id: 2,
          title: "Revenue Past 7 days",
          value: "$ 240,000",
          graphType: "donut",
        },
      ],
    },
    {
      title: "Second Column",
      cards: [
        {
          id: 3,
          title: "Revenue over time of 7 days",
          graphType: "line",
        },
        {
          id: 4,
          title: "Profit over time of 7 days",
          graphType: "line",
        },
      ],
    },
    {
      title: "Third Column",
      cards: [
        {
          id: 5,
          title: "Top 5 sellers",
          graphType: "line",
        },
        {
          id: 6,
          title: "Top 5 ads",
          graphType: "line",
        },
      ],
    },
  ]
}
