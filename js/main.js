document.addEventListener("DOMContentLoaded", app);

async function app() {
  const data = await fetch("https://api.lanyard.rest/v1/users/372343076578131968").then((res) => res.json()).then(json => json.data)
  console.log(data)
  const user = data.discord_user

  document.getElementById("name").innerText = `${user.display_name} (${user.username}#${user.discriminator})`
  document.getElementById("miku").src = `https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.png?size=1024`
  document.getElementById("status").innerText = data.discord_status
}
