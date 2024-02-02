/**
 * ! COURSE
 * * https://courses.jsmastery.pro/course/ultimate-next-js-13-course-ebook
 * * https://github.com/adrianhajdin/stack_overflow_nextjs13/blob/main/package.json
 *
 * ! NOTES
 *
 * * client_v_server.png
 * "If search engine optimization, security concerns and user device specifications are NOT a priority for you, and your focus is primarily on delivering dynamic interactivity to the user, then client-side rendering (CSR) with technologies like ReactJS can be a suitable choice. A use case where this approach is applicable is in the B2B domain. In such cases, the target audience is specific and known, eliminating the need to optimize SEO since the product is not intended for a wide public audience. This allows you to prioritize developing interactive features and functionalities without dedicating significant resources to SEO optimization."
 *
 * * mongoosejs.com [Feb 1, 2024]
 * Mongoose is an elegant MongoDB object modeling for Node.js, providing a straight-forward, schema-based solution to model your application data. It includes built-in type casting, validation, query building, business logic hooks and more, out of the box.
 * ?  const mongoose = require('mongoose');
 * ?  mongoose.connect('mongodb://127.0.0.1:27017/test');
 * ?  const Cat = mongoose.model('Cat', { name: String });
 * ?  const kitty = new Cat({ name: 'Zildjian' });
 * ?  kitty.save().then(() => console.log('meow'));
 *
 * ! STRUCTURE
 *
 * * @/lib/actions
 * a connection between backend and frontend
 *
 * * components/ui folder
 * shadcn components installed via 'npx shadcn-ui@latest add COMP_NAME'
 *
 * ! PROGRESS
 *
 * * INTRO
 * / Intro
 * * PREREQUISITES
 * / Prerequisites
 * * INTRODUCTION TO NEXT.JS
 * / Before Next.js
 * / Introduction to Next.js
 * / How Web Works
 * * INTRODUCTION TO NEXT.JS
 * / Before Next.js
 * / Introduction to Next.js
 * / How Web Works
 * * SETUP
 * / DevFlow Project Setup
 * / Eslint Prettier Setup
 * / Git/Github Setup
 * / Tailwind CSS Setup
 * / Code Architecture
 * * NEXT.JS ROUTING
 * / What is Next.js Routing
 * / Creating Routes for DevFlow
 * * NEXT.JS ARCHITECTURE
 * / The Modern Auth Service
 * / Setup Auth for DevFlow
 * * LAYOUTS
 * / Creating Layouts Using Next Font and Metadata in DevFlow
 * * THEME
 * / Creating a global theme context for DevFlow
 * * NAVBAR
 * / Container and user account
 * / Shadcn installation
 * / Theme Switcher and Mobile Navigation
 * * SIDEBAR
 * / Left Sidebar Component
 * / Right Sidebar Component
 * * HOME PAGE
 * / Home Route
 * / Local Search Bar Component
 * / Home Filters
 * / Create a Question Card
 * * ASK A QUESTION PAGE
 * / Question Form and Validations
 * / The Question Editor
 * / Custom Multiple Tags Input
 * / Making the Form Reusable
 * * DEVELOP BACKEND
 * / Thinking in Backend
 * / MongoDB and Actions Server Setup
 * / Creating a Question Model
 * / Creating a User Model
 * / Creating a Tag Model
 * * CREATE A QUESTION
 * / Create Question Action [24.08]
 * * FETCHING QUESTIONS ON THE HOME PAGE
 * / Display Questions on the Home Page [15:58]
 * TODO: THE WEBHOOKS
 * / Why and what are Webhooks [3:00]
 * / Implement Webhooks and User Actions [16:11]
 * ? Deploy Webhooks [29:21]
 * TODO: COMMUNITY PAGE
 * / Create Community Page [22:51]
 * TODO: TAGS PAGE
 * / Create Tags Page [9:00]
 * TODO: QUESTION DETAILS
 * / Create Question Details Page [14:51]
 * / Parse and Display Question Content [13:41]
 * / Create Answer Form [15:09]
 * / Create Answer Model [4:08]
 * / Implement Create Answer Action [4:01]
 * / Integrate Create Answer Action Inside Answer Form [10:47]
 * / Display All Answers [21:33]
 * TODO: VOTING
 * / Create Votes UI [9:52]
 * / Create Upvote/Downvote Actions for Question [6:56]
 * / Integrate Question Upvote/Downvote Actions on UI [11:33]
 * / Create Answer Voting [9:35]
 * TODO: COLLECTIONS PAGE
 * / Implement Save Question and Create Collection Page [5:33]
 * / Display all saved questions [12:20]
 * TODO: VIEWS
 * / Create Question Details Page View [14:21]
 * TODO: TAG DETAILS PAGE
 * / Create a Tag Details Page [17:51]
 * TODO: PROFILE PAGE
 * / Create Profile Page [25:58]
 * / Create User Stats UI [9:06]
 * / Implement User Questions Tab [8:46]
 * / Implement User Answers Tab [14:29]
 * TODO: EDIT/DELETE USER ACTIONS
 * / Implement Edit/Delete Answer Component [16:36]
 * / Create Edit Question Page [15:29]
 * / Create Edit Profile Page [22:57]
 * TODO: SHOW TOP RESULTS
 * / Show Top Questions [3:37]
 * / Show Popular Tags [3:43]
 * TODO: THE LOCAL SEARCH FUNCTIONALITY
 * / Manage Search State [22:11]
 * / Implement Search Functionality for Home Page [6:48]
 * / Implement Search Functionality for Community Page [3:15]
 * / Implement Search Functionality for Collection Page [1:33]
 * / Implement Search Functionality for Tags Page [4:23]
 * TODO: THE FILTERS
 * / Manage Filter State [6:24]
 * / Integrate Filters on Home Page [4:45]
 * / Integrate Filters on Community Page [6:41]
 * / Integrate Filters on Collection Page [3:44]
 * / Integrate Filters on Tags Page [8:31]
 * TODO: THE PAGINATION
 * / Create Pagination Component [10:39]
 * / Implement Pagination on Home Page [5:41]
 * / Implement Pagination on the rest of the pages [22:03]
 * TODO: GLOBAL SEARCH
 * / Create Global Search UI [9:09]
 * / Create GlobalSearch Result Component [19:28]
 * / Create Global Search Filters [9:21]
 * / Implement the GlobalSearch Actions [27:25]
 * TODO: REPUTATION
 * / What is Reputation and how to approach it [1:41]
 * / Implement Reputation points for questions [8:31]
 * / Implement Reputation points for answers [6:02]
 * / More on Reputation and how to extend it [1:08]
 * TODO: BADGE SYSTEM
 * / Implement the Badge System [15:55]
 * TODO: Generate AI Answer
 * / Setup AI Answer Feature [5:40]
 * / Implement API Route for the AI feature [8:45]
 * / Display AI results on the UI [5:39]
 * TODO: LOADING AND TOASTS
 * / Create a Loading State for the Home Page [9:50]
 * / Create a Loading State for the Community Page [4:18]
 * / Create Loading States for the rest of the pages [2:14]
 * / Create Toasts for a few actions [8:45]
 * TODO: METADATA
 * / What is Metadata and how to implement it [5:06]
 * TODO: BUG FIXING AND RECOMMENDATION
 * / Fix bugs and implement recommendations [18:48]
 * TODO: NEXT.JS 13.5+
 * / Upgrade Next.js to the latest version [3:52]
 * TODO: DEPLOYMENT
 * / Deploy the application [21:27]
 * TODO: JOBS FEATURE
 * / A New Approach to Learning your Ultimate Next.js 13 Challenge
 * / Put Your Skills to the Test
 */
