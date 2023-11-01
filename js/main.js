document.addEventListener("DOMContentLoaded", app);

const discordStatuses = {
  online: "#43B581",
  idle: "#FAA61A",
  dnd: "#F04747",
  offline: "#747F8D",
};

async function app() {
  const data = await fetch("https://api.lanyard.rest/v1/users/372343076578131968")
    .then((res) => res.json())
    .then((json) => json.data);
  const user = data.discord_user;

  const customStatus = data.activities.filter((activity) => activity.id === "custom")[0];

  customStatus ? (document.getElementById("customStatus").innerText = (customStatus !== undefined && customStatus.state.length > 20) ? customStatus.state.slice(0, 20) + ".." : customStatus.state) : document.getElementById("customStatus").remove();

  const discordCard = document.querySelectorAll(".discord-card")[0] 
  const color = discordStatuses[data.discord_status]

  discordCard.style.boxShadow = `0px 0px 10px ${color}`
  discordCard.addEventListener("mouseover", function() {
    discordCard.style.boxShadow = `0px 0px 15px ${color}`;
  });
  
  discordCard.addEventListener("mouseout", function() {
    discordCard.style.boxShadow = `0px 0px 10px ${color}`;
  });
  
  discordCard.style.border = `4px solid ${color}`;
  document.getElementById("discordUser").innerText = `${user.username} - ${data.discord_status}`;
}
