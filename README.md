# Jake Demian's Cool Website

This project was developed entirely by Jake Demian. :)

## Wireless Android Development

1. Connect devices via USB

2. `adb tcpip 5555`

3. disconnect the device from usb

4. `adb connect <your_device_ip> && adb reverse tcp:5001 tcp:5001 && adb reverse tcp:8080 tcp:8080 && adb reverse tcp:9099 tcp:9099`
