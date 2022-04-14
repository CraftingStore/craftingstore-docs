#Unturned

For Unturned we use RCON through ROcketMod. RocketMod is required for RCON to work.

### How to use RCON?
RCON listens on a port, and we can connect to it, and send commands to your server.

1. Open that file, and open the following file: `/Servers/unturned/Rocket/Rocket.config.xml`
2. Look for the RCON section:
```
<RCON Enabled="false" Port="21321" Password="changeme" EnableMaxGlobalConnections="true" MaxGlobalConnections="10" EnableMaxLocalConnections="true" MaxLocalConnections="3" />
```
3. Change `Enabled="false"` to `Enabled="true"` and set a random password.
4. Set the port to an open, available port on your server, most hosts will give you a few extra ports.
5. Restart your server.
6. Go to our dashboard [ Webstore -> Servers ] and add a server with the RCON type.
7. Enter the external IPv4 (e.g. 10.10.10.10), port, and the configured password.

Assuming that your ports are open, and everything is configured right, it will now allow us to send commands.
