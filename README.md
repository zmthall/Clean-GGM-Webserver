
```
Clean GGM Webserver
├─ .env
├─ .env.example
├─ back-end
│  ├─ controller
│  │  ├─ blogController.js
│  │  ├─ commandController.js
│  │  ├─ contactController.js
│  │  ├─ controllers.js
│  │  ├─ eventController.js
│  │  ├─ pageController.js
│  │  └─ userController.js
│  ├─ entity
│  │  ├─ blog
│  │  │  └─ blogPost.js
│  │  ├─ command
│  │  │  └─ command.js
│  │  ├─ company
│  │  │  └─ company.js
│  │  ├─ contact
│  │  │  ├─ application.js
│  │  │  ├─ contactFormMessage.js
│  │  │  ├─ lead.js
│  │  │  ├─ message.js
│  │  │  └─ rideRequest.js
│  │  ├─ entitites.js
│  │  ├─ event
│  │  │  └─ event.js
│  │  ├─ page
│  │  │  ├─ navigation.js
│  │  │  ├─ page.js
│  │  │  └─ socialHandle.js
│  │  └─ user
│  │     └─ user.js
│  ├─ framework
│  │  ├─ database
│  │  │  └─ dbRepository.js
│  │  └─ memory
│  │     └─ inMemoryRepository.js
│  ├─ index.js
│  ├─ middleware
│  │  ├─ authentication
│  │  │  └─ authenticateSubmission.js
│  │  └─ logging
│  │     ├─ errorLog.js
│  │     └─ submissionLog.js
│  ├─ router
│  │  └─ v1
│  │     ├─ blogRouter.js
│  │     ├─ commandRouter.js
│  │     ├─ contactRouter.js
│  │     ├─ eventRouter.js
│  │     ├─ pageRouter.js
│  │     ├─ routers.js
│  │     └─ userRouter.js
│  ├─ use-case
│  │  ├─ blog
│  │  │  ├─ addPost.js
│  │  │  ├─ archivePost.js
│  │  │  ├─ deletePost.js
│  │  │  ├─ editPost.js
│  │  │  ├─ getAllPosts.js
│  │  │  ├─ getPost.js
│  │  │  └─ orderPosts.js
│  │  ├─ command
│  │  │  ├─ createSiteMap.js
│  │  │  ├─ minifyAll.js
│  │  │  ├─ minifyCSS.js
│  │  │  └─ minifyJS.js
│  │  ├─ contact
│  │  │  ├─ createLead.js
│  │  │  ├─ sendMessage.js
│  │  │  ├─ submitApplication.js
│  │  │  └─ submitRideRequest.js
│  │  ├─ event
│  │  │  ├─ addEvent.js
│  │  │  ├─ archiveEvent.js
│  │  │  ├─ deleteEvent.js
│  │  │  ├─ editEvent.js
│  │  │  ├─ getAllEvents.js
│  │  │  └─ getEvent.js
│  │  ├─ use-cases.js
│  │  └─ user
│  │     ├─ createUser.js
│  │     ├─ deleteUser.js
│  │     └─ loginUser.js
│  └─ utility
│     ├─ authentication
│     │  └─ authenticateSubmission.js
│     ├─ backend-helpers
│     │  ├─ minification.js
│     │  └─ siteMapping.js
│     ├─ error-handling
│     │  ├─ controllerError.js
│     │  ├─ entityError.js
│     │  ├─ frameworkError.js
│     │  └─ useCaseError.js
│     ├─ response
│     │  ├─ errorResponse.js
│     │  └─ successResponse.js
│     └─ validation
│        └─ entityValidation.js
├─ entity.zip
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
│  ├─ router
│  ├─ utility
│  │  └─ page-helpers
│  │     ├─ getPageBreadcrumb.js
│  │     └─ getPageInformation.js
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
├─ README.md
└─ server.js

```