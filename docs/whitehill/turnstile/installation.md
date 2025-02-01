# Installation

:::info

This product does **not** use Axon licensing and therefore cannot be downloaded on the Axon website. Find the model [here](https://create.roblox.com/marketplace/asset/6821432149/), and the license [here](https://www.roblox.com/game-pass/12447387).

:::

### 1) Enable HTTP Requests {#1}
In Roblox Studio with your selected game open, click the 'Home' tab, then 'Game Settings'. Move to the 'Security' tab in the open window and make sure the slider for 'Allow HTTP Requests' is enabled and then hit 'Save'.

### 2) Product Insertion {#2}
Insert your product by navigating to `Home > Toolbox` at the top of your studio tab, then click the `Inventory` button in the toolbox, and scroll down to find the model. Once you find the model, click on it and it will appear in your workspace. Once the model appears in your workspace, use `CTRL+U` to ungroup it.

### 3) Product Installation {#3}
Use the built in Roblox movement tools to position the inserted turnstiles and control screens, make sure you don't seperate the turnstile model itself.

### 4) Product Configuration {#4}
Please be aware there are 2 main configuration files, One named 'Settings' allowing for configuration of the turnstile such as starting modes, colors, elevator setup, with the 'ControllerCode' under the `TurnstileController` being the configuration for the password/pin to control the turnstile via the ingame screen.

:::warning

There are a number of reasons your turnstiles may not be working correctly. These include:
- You don't have HTTP Services on, see #1 on the setup instructions.
- You are testing in a **studio environment**, try testing on an actual game server and see if the product begins to work.
- Your game is unpublished, go to `File > Publish to Roblox`

:::

:::info

If your product still doesn't work, and it is a new baseplate, please try restarting Roblox Studio. Sometimes, Roblox likes to say it can't work, but, in actual fact, it does work if you just restart Roblox Studio.

:::