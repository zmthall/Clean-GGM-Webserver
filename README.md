
```
Clean GGM Webserver
├─ .env
├─ .env.example
├─ controller
│  ├─ blogController.js
│  ├─ contactController.js
│  ├─ eventController.js
│  ├─ pageController.js
│  └─ userController.js
├─ entity
│  ├─ application.js
│  ├─ blog-post.js
│  ├─ company.js
│  ├─ event.js
│  ├─ lead.js
│  ├─ message.js
│  ├─ navigation.js
│  ├─ page.js
│  ├─ ride-request.js
│  ├─ social-handle.js
│  └─ user.js
├─ framework
│  ├─ database
│  │  └─ dbRepository.js
│  └─ memory
│     └─ inMemoryRepository.js
├─ front-end
│  ├─ public
│  │  ├─ files
│  │  ├─ images
│  │  ├─ scripts
│  │  │  └─ allPages.js
│  │  └─ styles
│  │     ├─ allPages.css
│  │     ├─ blogStyles.css
│  │     ├─ contactStyles.css
│  │     └─ policyStyles.css
│  └─ views
│     ├─ components
│     │  └─ forms
│     │     ├─ application.ejs
│     │     ├─ contact.ejs
│     │     └─ schedule-ride.ejs
│     ├─ layouts
│     │  ├─ page-layout.ejs
│     │  └─ policy-layout.ejs
│     ├─ pages
│     │  ├─ about-us.ejs
│     │  ├─ assisted-living.ejs
│     │  ├─ community.ejs
│     │  ├─ find-us.ejs
│     │  ├─ index.ejs
│     │  ├─ join-our-team.ejs
│     │  ├─ nemt-transportation.ejs
│     │  ├─ non-medical-transportation.ejs
│     │  └─ site-map.ejs
│     ├─ partials
│     │  ├─ footer.ejs
│     │  └─ header.ejs
│     └─ policies
│        ├─ accessibility.ejs
│        └─ privacy-policy.ejs
├─ index.js
├─ middleware
│  ├─ authentication
│  │  └─ authenticateSubmission.js
│  └─ logging
│     ├─ errorLog.js
│     └─ submissionLog.js
├─ README.md
├─ router
│  └─ v1
│     ├─ blogRouter.js
│     ├─ contactRouter.js
│     ├─ eventRouter.js
│     ├─ pageRouter.js
│     └─ userRouter.js
├─ use-case
│  ├─ blog
│  │  ├─ addPost.js
│  │  ├─ archivePost.js
│  │  ├─ deletePost.js
│  │  ├─ editPost.js
│  │  ├─ getAllPosts.js
│  │  ├─ getPost.js
│  │  └─ orderPosts.js
│  ├─ contact
│  │  ├─ createLead.js
│  │  ├─ sendMessage.js
│  │  ├─ submitApplication.js
│  │  └─ submitRideRequest.js
│  ├─ event
│  │  ├─ addEvent.js
│  │  ├─ archiveEvent.js
│  │  ├─ deleteEvent.js
│  │  ├─ editEvent.js
│  │  ├─ getAllEvents.js
│  │  └─ getEvent.js
│  └─ user
│     ├─ createUser.js
│     ├─ deleteUser.js
│     └─ loginUser.js
└─ utility
   ├─ authentication
   │  └─ authenticateSubmission.js
   ├─ backend-helpers
   │  ├─ minification.js
   │  └─ siteMapping.js
   └─ page-helpers
      ├─ getPageBreadcrumb.js
      └─ getPageInformation.js

```