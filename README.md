# Project title: Compound Interest Calculator

#### Video Demo:https://youtu.be/zU0Tqr0Xg9U

#### Description:
The Compound Interest Calculator is a tool that allows you to calculate how much your investment will grow over time, taking
into account the interest earned on both the principal and the interest earned in previous periods. The calculator was created
using HTML, CSS, JavaScript, and JSON.

Files:
The files used to create the Compound Interest Calculator are:

popup.html: This file contains the structure and content of the web page. It defines the various input fields and buttons needed
to perform the calculations and the div where the result will be displayed.

style.css: This file is used for styling and formatting the HTML content to make it visually appealing.

background.js: This file is responsible for managing background tasks and communicating with the extension's content scripts. It runs silently in the background and allows the extension to perform tasks such as fetching data and updating the extension's badge text.

popup.js: This file is responsible for the functionality of the calculator. The event listener attached to the submit button
triggers the calculation of the compound interest using the formula defined in the helper function. The clear button is used to
reset all input fields, and if any of the input fields are invalid, the user is alerted to enter valid values.

manifest.json: This file contains information about the Chrome extension. In particular, it specifies the name of the extension,
the description, version, and permissions required by the extension.

Design Choices:
I debated whether or not to include the option to choose between different compounding periods such as daily, weekly, or monthly.
I ultimately decided to include it since it provides users with greater flexibility in calculating their compound interest.

Usage:
*To use the Compound Interest Calculator, please follow these steps:

*Download the files from the repository.

*Open Google Chrome and type "chrome://extensions/" in the address bar.

*Enable "Developer mode" in the upper-right corner of the window.

*Click on "Load unpacked". you can find it in the upper-left corner of the window.

*Select the directory where you extracted the ZIP file.

*Click on "Select folder."

*Click on the extension icon in the upper-right corner of the window.

*Enter the initial principal amount in the "Principal" field.

*Enter the annual interest rate in the "Interest Rate" field.

*Select the compounding frequency in the "Compounding Periods" field.

*Enter the time period in years in the "Time Period" field.

*Click on the "Calculate" button.

*The total amount of money earned will be displayed in the "Output" field.

*To clear the input and output fields, click on the "Clear" button.

<h1>Compound Interest Calculator Breakdown:</h1>

 ### [YouTube Demonstration](https://youtu.be/zU0Tqr0Xg9U)

<h2>Description</h2>
 I created a Compound Interest Calculator using HTML, CSS, JavaScript, and JSON.
The Compound Interest Calculator is a tool that allows you to calculate how much your investment will grow over time, taking into account the interest earned on both the principal and the interest earned in previous periods.
<br />


<h2>Languages and Utilities Used</h2>

- <b>Visual Studio Code</b> 
- <b>Javascript</b>
- <b>.json</b>
- <b>.css</b>
- <b>.html</b>

<h2>Environments Used </h2>

- <b>MacOS Ventura 13.5.2</b> (Apple M1 Chip)

<h2>Program walk-through:</h2>

<p align="center">
So, let's dive into the code. The HTML file contains the structure and content of the web page. It defines the various input fields and buttons needed to perform the calculations, and the div where the result will be displayed
: <br/>
<img src="https://i.imgur.com/KyavTtA.png" height="80%" width="80%" alt="Disk Sanitization Steps"/>
<br />
<br />The CSS file is used for styling and formatting the HTML content to make it visually appealing
:  <br/>
<img src="https://i.imgur.com/fQQJGXj.png" height="80%" width="80%" alt="Disk Sanitization Steps"/>
<br />
<br />
Next up, we have the JavaScript file, which is responsible for the functionality of the calculator. The event listener attached to the submit button triggers the calculation of the compound interest using the formula defined in the helper function: <br/>
<img src="https://i.imgur.com/Rla3rTJ.png" height="80%" width="80%" alt="Disk Sanitization Steps"/>
<br />
<br />
The clear button is used to reset all input fields, and if any of the input fields are invalid, the user is alerted to enter valid values
:  <br/>
<img src="https://i.imgur.com/2rfE2Ae.png" height="80%" width="80%" alt="Disk Sanitization Steps"/>
<br />
<br />
Lastly, the JSON file contains information about the Chrome extension. In particular, it specifies the name of the extension, the description, version, and permissions required by the extension:  <br/>
<img src="https://i.imgur.com/IUpTf7S.png" height="80%" width="80%" alt="Disk Sanitization Steps"/>
<br />
<br />
As for design choices, I debated whether or not to include the option to choose between different compounding periods such as daily, weekly, or monthly. I ultimately decided to include it since it provides users with greater flexibility in calculating their compound interest:  
 <br/>
<img src="https://i.imgur.com/BkeGezZ.png" height="80%" width="80%" alt="Disk Sanitization Steps"/>
<br />
<br />


  
License:
The Compound Interest Calculator extension is released under the MIT License. See the LICENSE file for more information.

Credits:
The Compound Interest Calculator was created by Eric Gill.

In conclusion, the Compound Interest Calculator is a simple yet useful tool for anyone looking to invest their money wisely.
</p>

<!--
 ```diff
- text in red
+ text in green
! text in orange
# text in gray
@@ text in purple (and bold)@@
```

