export const getUrlMedal =(score)=>{
    return (score === 10)
    ? "https://raw.githubusercontent.com/CamiloCortesM/tgs-games/main/src/assets/gold-medal.png"
    : score > 4 && score < 10
    ? "https://raw.githubusercontent.com/CamiloCortesM/tgs-games/main/src/assets/silver-medal.png"
    : "https://raw.githubusercontent.com/CamiloCortesM/tgs-games/main/src/assets/bronze-medal.png";
}