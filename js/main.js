document.addEventListener("DOMContentLoaded", app);

const discordStatuses = {
  online: "rgba(35, 165, 89, 1)",
  idle: "rgba(255, 177, 50, 1)",
  dnd: "rgba(240, 71, 71, 1)",
  offline: "rgba(128, 132, 142, 1)",
};

async function app() {
  const data = await fetch("https://api.lanyard.rest/v1/users/372343076578131968")
    .then((res) => res.json())
    .then((json) => json.data);
  console.log(data);
  const user = data.discord_user;

  console.log(discordStatuses[data.discord_status]);
  document.querySelectorAll(".discord-card")[0].style.border = `4px solid ${discordStatuses[data.discord_status]}`;
  document.getElementById("discordUser").innerText = `${user.username} - ${data.discord_status}`;
}
