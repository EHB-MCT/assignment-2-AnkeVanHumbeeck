"use strict";

import { fetchData } from './fetch.js';
import YouTubeVideo from '../classes/YouTubeVideo.js';

let videos = [];
let chartInstance;
let mixedChart;
let informativeGoal = 0;
let entertainmentGoal = 0;
let instructionGoal = 0;

const checkData = async () => {
  const data = await fetchData();
  if (data) {
    processData(data);
  } else {
    console.error('No data received.');
  }
};

function processData(data) {
  data.forEach((element) => {
    const video = new YouTubeVideo(
      element.anxiety,
      element.created_at,
      element.id,
      element.earned,
      element.main_topic,
      element.reason,
      element.time,
      element.title,
      element.youtube_url,
      element.youtuber
    );
    videos.push(video);
  });
  goal();
  totalTimeWatched();
  amountOfRabbitHoles();
  subjectVSAnxiety();
  topYouTubers();
}

// Calculate and display the goal graph
function goal() {
  videos.forEach(video => {
    if (video.reason == "Information"){
      informativeGoal++;
    } else if (video.reason == "Entertainement"){
      entertainmentGoal++;
    } else if (video.reason == "Instruction"){
      instructionGoal++;
    }
  });

  if (chartInstance) {
    chartInstance.destroy();
  }

  const ctx = document.getElementById("myChart").getContext("2d");

  chartInstance = new Chart(ctx, {
    type: "doughnut",
    data: {
      labels: ["Informative", "Entertainment", "Education"],
      datasets: [
        {
          label: "Content Types",
          data: [informativeGoal, entertainmentGoal, instructionGoal],
          backgroundColor: [
            "rgb(255, 0, 0)",
            "rgb(255, 255, 255)",
            "rgb(38, 38, 39)"
          ],
          borderColor: [
            "rgb(255, 0, 0)",
            "rgb(255, 255, 255)",
            "rgb(38, 38, 39)"
          ],
          borderWidth: 1
        }
      ]
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: "top"
        },
        tooltip: {
          enabled: true
        }
      }
    }
  });
}

// Calculate the total time and inserts it in the HTML
function totalTimeWatched() {
  let totalSeconds = 0;

  videos.forEach(video => {
    const parts = video.time.split(':').map(Number);
    if (parts.length === 2) {
      totalSeconds += parts[0] * 60 + parts[1];
    } else if (parts.length === 3) {
      totalSeconds += parts[0] * 3600 + parts[1] * 60 + parts[2];
    }
  });

  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;
  const timeWatched = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

  document.getElementById("totalTime").insertAdjacentHTML("afterbegin", `<p>${timeWatched}</p>`)
}

// Counts the number of times I watched more than one video on the same subject consecutively 
function amountOfRabbitHoles() {
  let consecutiveCount = 0;
  let previousTopic = null;
  let repeatCount = 0;

  videos.forEach((element, index) => {
    if (element.main_topic === previousTopic) {
      consecutiveCount++;
    } else {
      if (consecutiveCount > 1) {
        repeatCount++;
      }
      consecutiveCount = 1;  
    }

    previousTopic = element.main_topic;
  });

  if (consecutiveCount > 1) {
    repeatCount++;
  }

  document.getElementById("rabbitholes").insertAdjacentHTML("afterbegin", `<p>${repeatCount}</p>`) 
}

function subjectVSAnxiety() {
  // Calculate the top 5 genres and the amount of videos I watched about it
  const genreCount = {};

  videos.forEach(genre => {
    const { main_topic } = genre;
    if (genreCount[main_topic]) {
      genreCount[main_topic]++;
    } else {
      genreCount[main_topic] = 1;
    }
  });

  const sortedGenres = Object.entries(genreCount)
    .sort((a, b) => b[1] - a[1])
    .map(entry => ({ main_topic: entry[0], count: entry[1] }));
  const topFiveGenres = sortedGenres.slice(0, 5);

  const labels = topFiveGenres.map(genre => genre.main_topic);
  const data = topFiveGenres.map(genre => genre.count);

  
  // Calculates the amount of anxiety per genre
  let anxietyCount = topFiveGenres.map(genre => 
    videos.filter(video => video.main_topic === genre.main_topic && video.anxiety).length
  );  

  // Code for the chart
  if (mixedChart) {
    mixedChart.destroy();
  }

  const ctx = document.getElementById("myChart2").getContext("2d");

  mixedChart = new Chart(ctx, {
    data: {
      datasets: [
        {
          type: 'line',
          label: 'Amount of anxiety',
          data: anxietyCount,
          borderColor: "rgb(255, 225, 225)",
          borderWidth: 2,
          fill: false,
        },
        {
          type: 'bar',
          label: 'Videos Watched',
          data: data,
          backgroundColor: "rgb(255, 0, 0)",
        },
      ],
      labels: labels,
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: "top",
        },
        tooltip: {
          enabled: true,
        },
      },
      scales: {
        x: {
          title: {
            display: true,
            text: 'Genres',
          },
        },
        y: {
          beginAtZero: true,
          title: {
            display: true,
            text: 'Number of Videos Watched',
          },
        },
      },
    },
  });
}

// Calculate the top 5 YouTubers and add them to the HTML
function topYouTubers() {
  const youtuberCount = {};

  videos.forEach(video => {
    const { youtuber } = video;
    if (youtuberCount[youtuber]) {
      youtuberCount[youtuber]++;
    } else {
      youtuberCount[youtuber] = 1;
    }
  });

  const sortedYoutubers = Object.entries(youtuberCount)
    .sort((a, b) => b[1] - a[1])
    .map(entry => ({ youtuber: entry[0], count: entry[1] }));
  const topFiveYouTubers = sortedYoutubers.slice(0, 5);

  let htmlString = `<ol>`;
  topFiveYouTubers.forEach(youtuber => {
    htmlString += `<li>${youtuber.youtuber} - ${youtuber.count} videos</li>`;
  });
  htmlString += `</ol>`;

  document.getElementById("topYouTubers").insertAdjacentHTML("afterbegin", htmlString)
}

checkData();
