export function loadLists() {
  return [
    {
      title: "First Column",
      cards: [
        {
          id: 1,
          title: "Revenue Today",
          value: 50000,
          graphType: "line",
        },
        {
          id: 2,
          title: "Revenue Past 7 days",
          value: 250000,
          graphType: "line",
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
          data: [50000, 12000, 4500, 7000, 18000, 90000, 68500],
        },
        {
          id: 4,
          title: "Profit over time of 7 days",
          graphType: "line",
          data: [
            50000 * 0.45,
            12000 * 0.45,
            4500 * 0.45,
            7000 * 0.45,
            18000 * 0.45,
            90000 * 0.45,
            68500 * 0.45,
          ],
        },
      ],
    },
    {
      title: "Third Column",
      cards: [
        {
          id: 5,
          title: "Top 5 sellers",
          graphType: "pie",
          labels: ["Ross", "Joe", "Rachel", "Monica", "Chandeller"],
          data: [44, 55, 13, 43, 22],
        },
        {
          id: 6,
          title: "Top 5 ads",
          graphType: "pie",
          labels: ["Google", "Facebook", "Likedin", "Amazon", "Bing"],
          data: [44, 55, 13, 43, 22],
        },
      ],
    },
  ]
}
