---
sidebar_position: 2
sidebar_label: FAQ
---

# Introduction
We see a lot of questions asked that can be answered just by reading our documentation. Our community has gathered a list of our most frequently asked questions and compiled them into a list.

### How can I get my products? {#claim-products}
Please visit [this](./index.md#getting-started) page for more information.

### I can't seem to download my products, why is this? {#cannot-download}
We don't know why, but some browsers refuse to download files from Discord. You can always try another browser to get around the issue, such as Chrome or Opera. This issue has been commonly reported on Microsoft Edge.

### How can I buy a product with real-life currency? {#real-currency}
Please create a ticket for instructions on paying. Remember - you will need to convert the money to the appropriate currency which is usually done automatically. We do not actively provide non-manual purchases, however this is a feature planned for future releases of [Axon](https://axon.whitehill.club).

### Do you provide product transfers? {#product-transfers}
We provide transfers on a case by case basis, you must have sufficient reasoning for why your license needs transferred. We do not actively provide non-manual transfers, however this is a feature planned for future releases of [Axon](https://axon.whitehill.club). Additionally, **we are unable to transfer licenses that are bought via a gamepass**, we do not provide refunds nor do we take responsibility if your account has been banned or hacked, please contact [Roblox](https://www.roblox.com/support) to regain access to your account or to transfer your items.

### How can I become part of the support team? {#support-team}
We do not often hire new staff members as we may be able to handle the load of tickets or have a decent amount of people in our team. Please keep your eye out for applications that may be posted, but we hand select our members most of the time anyways. You can get noticed by providing support & team-like qualities in our channels such as [`#⁠community-support`](https://discord.com/channels/502791128613912577/1027266896552276010).

### Are there items provided with any of our products? {#items-with-products}
We may provide a few example products, however we do not provide any items to be used on our systems. You can create an endless number of items, customising them to your own imagination. You could also find some off the toolbox if you're lazy - just watch out for any malicious scripts.

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
> You cannot directly give yourself the tool via an admin system as the barcode isn't configured with the correct values.

* Ensure the operator barcode has been placed in the `ServerStorage` without being renamed.
* Use the self-checkout to print the barcode via `Assistance` > `Colleague ID` > `Enter Details` > `System Functions` > `Print Operator Scan Barcode`.

> Alternatively, you can make the operator barcode already configured in `ServerStorage` rather wasting time printing the barcode. This will let you give the barcode to yourself or to staff automatically.

* Enter Roblox Studio, find the operator barcode & click on it, opening the handle.
* Modify child `OperatorID` to your Colleague ID you'd like to use for logging in to the machine.
* Modify child `SecurityKey` to the passcode of that Colleague ID, remember, Colleague Identification is basically the same as typing in the pin on the machine manually like you'd do for roleplay & during the process of printing the barcode.