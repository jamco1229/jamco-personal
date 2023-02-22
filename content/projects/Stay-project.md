---
title: Stay
layout: project
dateEnd: 2023-02-15 12:14:23
description: For UX Design Institute I analysed friction points in a Hotel booking apps and designed a solution to them.
media:
  - type: image
    filename: cover.png
    size: md
    alt: Poster for Portfolio Starter
eleventyNavigation:
  key: Stay Project
  order: 1
  parent: Work
---

Hello there!

I'm making this website using a base template that allows me to organise Markdown documents and host them on GitHub, which is then deployed via Netlify to make what you're reading now!
The main benefit for doing this for me was the fact that once I have built the css and html I can close the code editor and use Obsidian to create and edit my posts/projects this is a game changer because it's a tool I already use an

<div class='specs'>
<div class="row top">
  <div class="column">
    <h3 class="specs">Role</h3>
    <p class="specs">UX Design</p>
  </div>
  <div class="column">
    <h3 class="specs">Completion date</h3>
    <p class="specs">Dec 2022</p>
  </div>
</div>
<div class="row bottom">
  <div class="column">
    <h3 class="specs">Platform</h3>
    <p>Mobile</p>
  </div>
  <div class="column">
    <h3 class="specs">Read time</h3>
    <p class="specs">5mins</p>
  </div>
</div>
</div>
<hr>

### **For UX Design Institute I analysed friction points in a Hotel booking apps. I then designed a solution to them in the form of a prototype.**
## TLDR —
Don’t have much time? No worries, here’s a rundown of the important bits.
### Findings
I identified that many existing hotel-booking apps had hidden or hard to navigate search function as well as results pages that lacked context.
### Outcome
2 prototypes, a lo-fi one and a hi-fi one, the first having deep notes and annotations ready to be handed over. Goals defined earlier are ready to test on with users. (Further testing in progress).

<hr>

## Understanding the users
*Competitive benchmarking → Usability Testing → Affinity Diagram → Customer Journey Map.*

<img src='https://github.com/jamco1229/jamco-personal/blob/master/content/media/Stay%20-%20Hotel%20Booking%20App%20(Concept)%2077e75be5ca694cf8ab65f168815dff7b/Untitled.png?raw=true' alt=''>

Before starting to make any assumptions, I looked at what other apps are doing in this space. One aimed at luxury stays, one an established provider, and one that is a more modern and mobile first take on hotel booking.
I saw the **value of visual hierarchy** in the design and how colours are for directing users to take certain actions. And equally I saw the chaos of **confusing and inaccessible colour choices.**
For **effective calls to action with a clear direction, it is best to follow Airbnb’s conventions** of using bold colours only for buttons and clear button states with copy that indicates actions.
**I found dark patterns**, like [Booking.com](http://booking.com/)'s loss aversion, urging users to make snappy and often regrettable decisions.
I found the impact of **clear feedback**, like Airbnb and their animations. Especially, the search function which is a full screen modal that expands out of the search bar in a fluid way.
As well as using FAQs, tags, and user-sourced questions to show transparency of info.
Then, **I participated in 3 usability tests**, 2 as note taker, and 1 that I moderated.

<img src='https://github.com/jamco1229/jamco-personal/blob/master/content/media/Stay%20-%20Hotel%20Booking%20App%20(Concept)%2077e75be5ca694cf8ab65f168815dff7b/Untitled%201.png?raw=true' alt=''>

These interviews provided a **great depth** to my understanding of **users goals, behaviour and context.**
Taking intensive notes on the test highlighted some key friction points: existing hotel-booking apps had hard to navigate search function, and results pages that lacked key context. 
To condense my research, and highlight the key **priorities**, I sorted these notes to analyse where the larger chunks were. Grouping items by found groups like topics, screens, etc gave me an overview of the data, however, this only comments on frequency of topics, not if they are problems or not.
Positive and negative grouping allowed me to quickly scan over complimentary and harmful patterns for the users.
A view of negative points, all connected to search.
Then sorting by flow as well as mapping the **users journey, inside and outside of the app, f**urther highlighted the bottleneck in the flow that the search was, and seeing the external path of the user meant I realised that the search was **exactly where you don’t want** the friction, you want the **excitement** of holiday booking to carry forward through the booking process, not squashed right at the beginning.

<hr>

## Key Goals.
### 1. Search
*“I was expecting a search bar right away!”*
Being the first touch-point for the user means that small friction points became exemplified. The user *expects* the search bar to be visible right away and access immediately. There was also the more uncommon points that didn’t come up much but when they did it was jarring, like showing hotels in the location search bar results (how are users meant to select a hotel without context) and the app using the results as marketing to present the user with unrelated locations and hotels.
### 2. Results and context
On apps that weren’t transparent with hotel details early on in the process, users often felt like they couldn’t be sure of the decision they made and often regretted the choice only to then return to the home and begin the search again.
Ensuring the users have all the data available and transparrent early on, in order to provide context to their search and help the user pick the ***right** hotel.

<hr>

## Designing the solution
*User flow diagrams → sketches → lo-fi prototype (figma) → hi-fi prototype (create with play).*
While designing the users flow through the app, I considered the specifics of how the user was interacting with the app and how I wanted the app to respond. It was here that I could visualise the high level problems and work to make the flow as frictionless as possible, I focused mainly on the search bottleneck here.
I drew out key flows from competitors, notably booking.com (left below), and then tried to highlight and then **eliminate** the points that added friction, and steps that I believed were unnecessary. I designed a flow (right below) that **saves 2 presses and gives accurate results** based on their needs **earlier** on in the flow. 
My next steps were to design how the users navigated the rest of the app, call to actions, layout, and hierarchy. Because these aren’t primary goals and I didn’t collect lots of direct feedback from users for this, I needed to rely on conventions and the patterns that I saw when benchmarking.
Looking through utility apps (apps that have a simple and structured format with single use cases) they often use floating buttons for their key action. This I think actually speaks back to the 1st priority for search bar visibility so I decided that a **large search field in the header, as well as the floating button** above the navigation tabs would be best for visibility.
I also began to sketch out multiple iterations of a results screen, knowing that users wanted more context and struggled choosing hotels without seeing specifically the data that’s important to them. Chiefly, location being front and centre. This led me to iterate on this idea, ensuring that the map view isn’t overwhelming (user remarked on Airbnb’s results being too much)
Iterating further on these ideas, I began to solve for the interactions, both the map search interaction and the search (prototyped on Play for its built in map interactions and more hi-fidelity prototyping tools) and the search overlay and flow (prototyped on Figma for it’s faster iteration process).
After hearing feedback from the UXDI team and other designers, I began to design the full flow on Figma, working on copy and being aware of potential dark patterns and their influence on the user, ensuring the user is always aware of the cost of their booking, and providing the user with clear information which leads to options that fit their needs.
The design of this round was completed with **notes putting the screens into context and showing how the app interacts with the user.** 

<hr>

# What’s Next →
I aim to validate my solutions with users in some usability testing before moving onto a final prototype that could be sent off to a UI Designer and a Developer to carry this project on.
I really enjoyed this project and have learnt so much whilst doing it, I’m so happy to have been able to absorb so much information from the team at UXDI and from learning whilst doing. If you have any feedback on the project don’t hesitate to let me know, I love finding new and better ways to work → 

<a href="mailto:james.coy.design@gmail.com" class="button">Get in touch</a>