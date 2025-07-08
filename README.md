# Visualsoft Technical Test
Theme Link: https://matt-bevan-tech-test.myshopify.com/?preview_theme_id=182905504081

## Local Development
To start local development and preview the theme, run:

shopify login --store=matt-bevan-tech-test.myshopify.com
shopify theme dev --store=matt-bevan-tech-test.myshopify.com

## AI Usage
I used AI to assist with a few small points. 

- Assisting with the calculations for the parts to calculate the days, hours, mins, secs. This was simply to speed up the process rather than self calculating the timings. 

- Assisting with formatting the JS after build. This was to tidy up any unneccesary code or to simplify anything that I had over complicated. 

## Future Improvements 
Upon review there are improvements that I would make:

- Utilising Tailwind to handle CSS instead of plain CSS
- Add aria attributes to liquid for screen readability
- For users that enter an invalid date and time outside of the required format to show a message in design mode only to show that users need to enter valid date/time. Currently shows nothing on frontend.
- As there was only a desktop version of the design, I would of liked to be able to do some responsiveness but assumed that only desktop was required in the test. 
- Utilising the scheme colours in theme settings which would be a more suitable option for elements such as buttons and text.
- Render the countdown timer as a snippet to improve readability of section code. 