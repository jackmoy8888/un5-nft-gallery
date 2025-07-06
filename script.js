// Replace with your actual NFT data fetching
document.addEventListener("DOMContentLoaded", () => {
  const gallery = document.getElementById("gallery");

  const mockNFTs = [
    {
      image: "https://via.placeholder.com/200",
      name: "UN5 LP NFT #1"
    },
    {
      image: "https://via.placeholder.com/200",
      name: "UN5 LP NFT #2"
    },
    {
      image: "https://via.placeholder.com/200",
      name: "UN5 LP NFT #3"
    }
  ];

  mockNFTs.forEach(nft => {
    const card = document.createElement("div");
    card.className = "nft-card";
    card.innerHTML = `
      <img src="${nft.image}" alt="${nft.name}" />
      <h3>${nft.name}</h3>
    `;
    gallery.appendChild(card);
  });
});
