# Installation

:::warning

Missing information? This page is currently under construction, try come back later!

:::

# Enabling HTTP Requests
<iframe width="705.61" height="397.5" src="https://www.youtube.com/embed/qtKN_3Moi7M" title="Enabling HTTP Requests" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"></iframe>

# Setting it up
First, you need to ungroup the model, then move it to wherever you want! You may need to setup the DWProx readers.

# Configuration
You have **2** options for whitelists, group or player.

```lua
	-- / Whitelist Settings / --
	["AuthorisedPeople"] = {
		112672616, -- AlexG_1337
	}, 
	["AuthorisedGroups"] = {
		["5150453"] = {255, 254, 253}, -- Whitehill
	},
```
Add your userID to the authorised people/others then don't forget to add a **comma**

For Groups, you need to make a table like this
```lua
["GroupID"] = {GroupRank, OtherRank, AnotherRank},
```

Replacing GroupID with your group ID and the group ranks with the allowed ranks.
