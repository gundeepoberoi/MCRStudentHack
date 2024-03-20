# Created on 12/3/2024 by Jacob Yip
# Last-edit: 20/3/2024 by Jacob Yip
# This file contains the record of styling webpages


Font-size: 
- Header: text-4xl
- Sub-header: N/A
- Text: text-lg (except text in About Us)


Font-style: 
- Header: bold


Text-colour: 
- General: white
- Highlight: text-cyan-100


Font-family: 
- General: Roboto
- Schedule: N/A

------------------------------------------------------------------------------------------

Date: 12/3/2024

about.tsx: 
1. Would it be possible to make the image and text in About have the same horizontal level? Right now, the image is slightly higher than the paragraph
2. 


schedule.tsx: 
1. Change font size of header "Schedule" from 4xl to 5xl (Consistent with About)
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
2. Change font-family to Roboto (Not working when using default font-style)
3. Change font-size of Header from 4xl to 5xl (Looks much nicer if it is bigger)
4. Change header text from "About" to "About Us"
5. Remove font-bold in AboutTrophy event.title to remove the glow of the titles of events
6. 


schedule.tsx (filename: index.tsx): 
1. Make sure the part "Schedule" is the updated version
2. Allign header and content to centre
3. Update the margin of a root div from mt-14 to mt-7
4. Add lg:mt-14 in the root div
5. 


schedule-components.tsx: 
1. Remove px-4 in <div></div> containing title and description of schedule
2. Move text-center of title and description to div for cleaner code
3. 


faq.tsx:
1. Change font-family of text and header to Roboto (Not working when using default font-style)
2. Change font-size of "Answer" from 4xl to 2xl
3. Change font-styles of Header and "Answer" to font-medium
4. 


hero.tsx: 
1. Change font-family of text in "Register Now" to Roboto (Not working when using default font-style)
2. Change font-size in "Register Now" to text-lg to ensure consistency
3. Ensure colour of text in "Register Now" is the same as the word "Registration" in "Registration Closes in": text-cyan-100 which is also the colour of text in "About Us"
4. 


navigation.tsx: 
1. Ensure the text has the consistent font-family: Roboto (Not working when using default font-style)
2. Ensure the text has the same text colour: white
3. 


team.tsx (filename: index.tsx): 
1. Change font-size of header to 4xl to ensure consistent font-size for headers
2. Change font-family of header to Roboto to ensure consistent font-family of text (Not working when using default font-style)
3. 


layout.tsx: 
1. Change default font-style from "Inter" to "Roboto"
2. 


tailwind.config.ts: 
1. Remove font-family
2. 

