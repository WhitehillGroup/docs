---
sidebar_position: 2
sidebar_label: FAQ
---

# Introduction
We see a lot of questions asked that can be answered just by reading our documentation. Our community has gathered our most frequently asked questions and compiled them into a list.

:::info
This FAQ is only for JSM products. Please visit our main [information & FAQ](https://support.whitehill.club/docs) for more generalised queries.

### How do I add more tools? {#add-tools}
These instructions are for our mainbank tills. For SCO v3, use [this guide](./sco-v3/installation#7).

To add a tool, you need to go onto the `MasterConfig` & generate an EAN number, this can be a randomised number. Make it a billion characters, or whatever you want; it doesn't matter as long as it is unique. Once you have created the unique number, make sure you've filled in the details with the new tool using the `MasterConfig`.

Create a `StringValue` in the tool's handle, name the `StringValue` EAN, and place your unique number into its value.

### Why are my products becoming unanchored once rotated in-game? {#unanchored-products}
If you're using the F3X plugin in studio, it tends to have a habit of breaking the welds - so please don't use them when working with our products. If you're using the usual method on studio of rotating, ensure you have selected everything inside the group of the product so the welds aren't automatically deleted.

### Some of my POS tills are linked together, how do I fix? {#linked-together}
This only applies for our mainbank tills.

One common mistake is that people forget to change the unique till number. You need to do this by clicking on an individual POS, then click onto the JSM | POS Terminal model, then the Screen block, then Settings. You can also change if you want the till to be on, off, or boot upon server start.

If you don't do this, scanning an item might link to another till, or logging in, etc.

### I can't click login, it won't do anything. {#cannot-click-login}
This only applies for our mainbank tills.

Same as above, there's only a player whitelist integrated, so you'll have to disable the whitelist as a whole if it's for a group. Do not ungroup.

### I scanned an operator barcode, and it says "unexpected item", why is this? {#unexpected-operator-barcode}
You've either incorrectly setup your operator barcodes, or you haven't configured them for v3.1 when migrating. Follow the steps below.

* Enter Roblox Studio, find the old operator barcode and delete the SCO-AUTH function inside the handle.
* Copy the JSM | Operator Barcode function from the new barcodes into your old ones, or simply use the new barcodes.
* Modify atrribute AccountID to an existing account id.

### Why am I getting a screen that says "You Wouldn't Steal a Whitehill Product?" {#dwpss}  
You have triggered DWPSS, our system that detects and blocks individuals attempting to bypass the licensing checks.  
False positives do happen, and if there's an issue with the system, it will be announced via our [Discord server](https://whitehill.club/discord/).  
:::note 
Before opening a ticket about the system, please read the announcement channels in our server. This goes with anything else, but this especially. 
:::
