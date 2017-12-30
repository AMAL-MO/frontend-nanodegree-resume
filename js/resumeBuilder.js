var bio = {
  "name": "Amal AL-Qahtani",
  "role": "Web Developer",
  "contacts": {
      "mobile": "9098643219",
      "email": "Amal.m.alqahtani1@gmail.com",
      "github": "Amal-mo",
      "location": "Riyadh, KSA"
  },
  "welcomeMessage": "Hello! I'm a Front-End Developer from Riyadh,KSA. Thanks for stopping by!.",
  "skills": ["Android Developer", "Data analysis", "Java", "HTML", "css", "Javascript"],
  "biopic": "images/img.jpg",
};

var work = {
  "jobs": [{
      "employer": "General Directorate of Information and Communication Technology",
      "title": "Technical support",
      "location": "Princess Nourah bint Abdulrahman University,Riyadh,KSA",
      "dates": "jun 2016",
      "description": "monitoring and maintaining the computer systems and networks within an organisation in a technical support role. If there are any issues or changes required, such as forgotten passwords, viruses or email issues"
  }]
};

var projects = {
  "projects": [{
          "title": "Build a Portfolio Site",
          "dates": "Nov, 2017",
          "description": " building a portfolio website",
          "url": "https://github.com/amal_mo",
          "images": ["images/Portfolio.png"]
      },
      {
          "title": "SMART M-HEALTH APPLICATION FOR PREGNANCY CARE USING BODY AREA NETWORKS",
          "dates": "june, 2017 ",
          "description": "My Graduated Project-In this project we are  proposing an eHealth mobile application for pregnancy care (GluPre application)",
          "images": ["images/project.png"]
      }
  ]
};


var education = {
  "schools": [{
      "name": "Princess Nourah bint Abdulrahman University",
      "dates": "2014 - 2017",
      "location": "Princess Nourah bint Abdulrahman University,Riyadh,KSA",
      "degree": "B.E",
      "majors": ["Networking & Telecommunication Systems"],
      "url": "http://www.pnu.edu.sa/en/Pages/default.aspx"
  }],
  "onlineCourses": [{
          "school": "Udacity",
          "title": "Android Basics by Google",
          "dates": "oct 2017",
          "url": "https://sa.udacity.com/course/android-basics-nanodegree-by-google--nd803"
      },
      {
          "school": "IBM KSA Skills Academy",
          "title": "Data Scientist 2017",
          "dates": "in progress",
          "url": "https://www.ibm.com"
      },
      {
          "school": "Udacity",
          "title": "Front–End Web Developer Nanodegree",
          "dates": "in progress",
          "url": "https://sa.udacity.com/course/front-end-web-developer-nanodegree--nd001"
      },
      {
          "school": "Cisco Networking Academy  ",
          "title": "Introduction to IoT course ",
          "dates": "Nov 2017",
          "url": "https://www.netacad.com/ar/"
      },
      {
          "school": "Udacity",
          "title": "Web Development",
          "dates": "in progress",
          "url": "https://classroom.udacity.com/courses/cs253"
      }
  ]
};


// Display bio in resume
bio.display = function() {
  var formattedName = HTMLheaderName.replace("%data%", bio.name);
  var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
  var biopic = HTMLbioPic.replace("%data%", bio.biopic);
  var welcomeMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
  var mobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
  var email = HTMLemail.replace("%data%", bio.contacts.email);
  var github = HTMLgithub.replace("%data%", bio.contacts.github);
  var locations = HTMLlocation.replace("%data%", bio.contacts.location);

  $("#header").prepend(formattedName, formattedRole);
  $("#header").append(welcomeMessage, biopic);

  $("#topContacts, #footerContacts").append(mobile, email, github, locations);


  if (bio.skills.length > 0) {
      $("#header").append(HTMLskillsStart);
      for (i = 0; i < bio.skills.length; i++) {
          var skill = HTMLskills.replace("%data%", bio.skills[i]);
          $("#skills").append(skill);
      }
  }
};

// Display work section in resume
work.display = function() {
  for (var i = 0; i < work.jobs.length; i++) {
      $("#workExperience").append(HTMLworkStart);

      var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
      formattedEmployer += HTMLworkTitle.replace("%data%", work.jobs[i].title);

      var formattedDates = HTMLworkDates.replace("%data%", work.jobs[i].dates);
      var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[i].location);
      var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);

      $(".work-entry:last").append(formattedEmployer, formattedDates, formattedLocation, formattedDescription);
  }
};

// Display projects in resume
projects.display = function() {
  for (var i = 0; i < projects.projects.length; i++) {
      $("#projects").append(HTMLprojectStart);

      var formattedTitle = $(HTMLprojectTitle);
      formattedTitle.text(projects.projects[i].title);
      formattedTitle.attr('href', projects.projects[i].url);

      var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[i].dates);
      var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[i].description);

      $(".project-entry:last").append(formattedTitle, formattedDates, formattedDescription);

      if (projects.projects[i].images.length > 0) {
          for (var j = 0; j < projects.projects[i].images.length; j++) {
              var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[i].images[j]);
              $(".project-entry:last").append(formattedImage);
          }
      }
  }
};

// Display Education section in resume
education.display = function() {
  if (education.schools.length > 0 || education.onlineCourses.length > 0) {
          for (var i = 0; i < education.schools.length; i++) {
          var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[i].name).replace("#", education.schools[i].url);
          var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
          var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[i].majors);
          var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[i].dates);
          var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);

          $("#education").append(HTMLschoolStart);
          $(".education-entry:last").append(formattedSchoolName + formattedSchoolDegree);
          $(".education-entry:last").append(formattedSchoolDates);
          $(".education-entry:last").append(formattedSchoolLocation);
          $(".education-entry:last").append(formattedSchoolMajor);
      }

      if (education.onlineCourses.length > 0) {
          $("#education").append(HTMLonlineClasses);
          for (var i = 0; i < education.onlineCourses.length; i++) {
              $("#education").append(HTMLschoolStart);
              var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[i].title).replace("#", education.onlineCourses[i].url);
              var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school);
              var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[i].dates);
              var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[i].url).replace("#", education.onlineCourses[i].url);

              $(".education-entry:last").append(formattedOnlineTitle + formattedOnlineSchool);
              $(".education-entry:last").append(formattedOnlineDates);
              $(".education-entry:last").append(formattedOnlineURL);
          }
      }

  }
}




$("#mapDiv").append(googleMap);


$("#main").append(internationalizeButton);

function inName(name) {
  name = name.trim().split(" ");
  name[1] = name[1].toUpperCase();
  name[0] = name[0].slice(0, 1).toUpperCase() + name[0].slice(1).toLowerCase();
  return name[0] + " " + name[1];
}

bio.display();
work.display();
projects.display();
education.display();
