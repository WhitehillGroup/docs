---
sidebar_position: 2
---

# Themes

:::info

Download the recent available file for this product in the [Discord server](https://discord.gg/QVaxp9t). If you were using SCO v2 before SCO v3, it is important to note that the setup process has changed massively.

:::

:::note

This product comes with the **JSM SelfServ**, an ATM which can also work with the self-checkouts. You must own this side-product for the ATM to work, as it is not part of your SCO v3 purchase.

:::

### Step 1) Enable HTTP Requests {#1}
In Roblox studio with your selected game open, click the 'Home' tab, then 'Game Settings'. Move to the 'Security' tab in the open window and make sure the slider for 'Allow HTTP Requests' is enabled and then hit 'Save'.

### Step 2) Product Insertion {#2}
Insert your file by 'dragging' the product file into Roblox studio with your game fully loaded. Use `CTRL + U` to ungroup the model. You can delete anything relevant to the ATM if you do not own it.

### Step 3) Folder Movement {#3}
Move `JSM | ATM Tools`, `JSM | UI Template`, `Receipt`, `Debit Card` into **ServerStorage**.

### Step 4) Whole System Configuration {#4}
Inside the `JSM | SelfCheckout V3` folder, you will find the `SystemConfig` script. Double-click it to be shown the different options that can be customised. This step will contain some features to elaborate, although the rest is annotated or self-explanatory.

`UITheme`
- If you set this to 'Custom', it will load your own theme from **ServerStorage**.
- If you set this to 'Default', it will load the commonly used JSM UI.
- We offer some additional themes created by other creators, check out the **Themes** page for information.

`Maintenance`
- It is important to note that not all self-checkouts support this feature.
- Some checkouts are presented with an 'on/off' button.

`InGameStaff`
- This feature is used to disable interventions, e.g, help call, when a staff member is not present in-game to keep checkouts running
- You can control the `StaffThreshold` to set the bare minimum of staff required before disabling interventions

### Step 5) Operator Barcodes & Pins
Inside the `JSM | SelfCheckout V3` folder, you will find the `Accounts` settings script under `Deploy`. You can manage the access level, operator ID and pins through this script.

`Employee` - able to handle basic interventions, e.g, age approval
`Manager` - ability to close & open checkouts
`Administrator` - ability to access the system functions section

The ID in each account must be **unique**. To setup the actual operator barcode, click the tool, open the handle and click `SCO-AUTH`. You can then update the information underneath attributes, including the `OperatorID` and `SecurityKey`.

[barcodeConfiguring](img/operatorBarcode.png)

### Step 6) Pick & Mix {#6}
We offer several types of different checkouts. Some checkouts differ, such as the scanner or the ability to accept cash. You can choose and delete anything that you're not interested in.

1) To duplicate (have more) of a certain self-checkout, click the checkout and hit `CTRL + D`
2) Ensure the new self checkout is in the `Terminals` folder.
3) For your new checkout, open its path on Explorer and double-click `Settings`.
4) Set the `LaneNumber` to another unique number that hasn't been used by any other self-checkouts.

You can also adjust the `CardOnly` feature to disable cash payments. The `StartMode` feature has 4 different labelled options, used to control the boot process when the game starts.

[examplePathOfCheckout](img/checkoutPath.png)
