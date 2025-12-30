## Local API Documentatation

-- / Local API Documentation / --

Name: DWPROXAPI

Location: DWProx

Commands: FIRE (true, false), LOCK (true, false), HOLD (true, false), OPEN (opentime: number only)

Usage: Controls this door only when used

Extra: If no prams are defined it will either toggle the api or use default so :Invoke(OPEN) would use default time that is in settings where :Invoke(OPEN, 16) would keep the door open for 16 seconds 
			
Example: DWProx:WaitForChild("DWPROXAPI", 5):Invoke("FIRE", true)

## Global API Documentation

-- / Global API Documentation / -- 

Name: DWPROXGAPI

Location: game:GetService("ReplicatedStorage")
			
Commands: FIRE (true, false), LOCK (true, false), HOLD (true, false), OPEN (opentime: number only)

Usage: Controls all the doors that have the GAPI settings enabled
			
Extra: If no prams are defined it will either toggle the api or use default so :Invoke(OPEN) would use default time that is in settings where :Invoke(OPEN, 16) would keep the door open for 16 seconds 
			
Example: game:GetService("ReplicatedStorage"):WaitForChild("DWProxGAPI", 5):Fire("FIRE", true)