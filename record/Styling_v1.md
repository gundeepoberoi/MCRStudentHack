# Created on 12/3/2024 by Jacob Yip
# Last-edit: 19/3/2024 by Jacob Yip
# This file contains the record of styling webpages


Font-size: 
- Header: text-5xl
- Sub-header: text-4xl
- Text: text-lg


Font-style: 
- Header: bold


Text-colour: 
- General: white
- Highlight: text-cyan-100


Font-family: 
- Roboto

------------------------------------------------------------------------------------------

Date: 12/3/2024

about.tsx: 
1. Would it be possible to make the image and text in About have the same horizontal level? Right now, the image is slightly higher than the paragraph
2. 


schedule.tsx: 
1. Change font size of schedule from 4xl to 5xl (Consistent with About)
2. Add text-lg to Event 1, Event 2, Event 3 (Consistent with About)
3. Change font size of 12th March from 7xl to 4xl (It should not be larger than the heading "Schedule" and "About" so either make the headings bigger or make the date smaller; Personally, I think the headings are already big enough but I am not good at design)
4. Add py-7 to the heading "Schedule" such that the headings "About" and "Schedule" will have the same distance to the <div></div> below them
5. 


faq.tsx: 
1. Change font size of "Frequently Asked Questions" from 2xl to 5xl (Consistent with About)
2. Suggestion: Should we change the font size of > next to the question from text-xl to text-lg to match the question text style? 
3. Change font size of subheading "Answer" from 2xl to 4xl (Consistent with 12th March)
4. Add text-lg to the contents under subheading "Answer"
5. 

------------------------------------------------------------------------------------------

Date: 19/3/2024

about.tsx (filename: index.tsx): 
1. Change heading and text in "About Us" from pale blue to white
2. Change font-family to Roboto
3. Bold header
4. 


schedule.tsx: 
1. Ensure text and header in "Schedule" have consistent font-family: Roboto
2. 


faq.tsx:
1. Change font-family of text and header to Roboto
2. 


hero.tsx: 
1. Change font-family of text in "Register Now" to Roboto
2. Change font-size in "Register Now" to text-lg to ensure consistency
3. Ensure colour of text in "Register Now" is the same as the word "Registration" in "Registration Closes in": text-cyan-100 which is also the colour of text in "About Us"
4. Ensure font family of text in "Registration Closes in" is Roboto
5. 


navigation.tsx: 
1. Ensure the text has the consistent font-family: Roboto
2. Ensure the text has the same text colour: white
3. 


team.tsx (filename: index.tsx): 
1. Change font-size of header from 4xl to 5xl to ensure consistent font-size for headers
2. Change font-family of header to Roboto to ensure consistent font-family of text
3. Make the header bold: Change from font-medium to font-bold
4. 


tailwind.config.ts: 
1. Add font family "roboto" after "redhat"
2. 

