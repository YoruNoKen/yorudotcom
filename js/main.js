document.addEventListener("DOMContentLoaded", app);

const discordStatuses = {
  online: "rgba(35, 165, 89, 1)",
  idle: "rgba(255, 253, 161, 1)",
  dnd: "rgba(240, 71, 71, 1)",
  offline: "rgba(128, 132, 142, 1)",
};

async function app() {
  const data = await fetch("https://api.lanyard.rest/v1/users/372343076578131968")
    .then((res) => res.json())
    .then((json) => json.data);
  console.log(data);
  const user = data.discord_user;

  document.getElementsByClassName("discord-card")[0].style.backgroundColor = discordStatuses[data.discord_status];
  document.getElementById("name").innerText = `${user.username} - ${data.discord_status}`;
  document.getElementById("miku").src = `https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.png?size=1024`;
}
