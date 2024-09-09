// Declare objects as array
const topics = ['HTML', 'CSS', 'Git', 'JavaScript'];

// Create a function that assigns a random number
const randomTopic = topics[Math.floor(Math.random() * topics.length)];

// Add a +1 and print object list
function listTopics() {
    for (let x = 0; x < topics.length; x++) {
      console.log(topics[x]);
    }
  }

//Function that prints a random subject to study
function selectTopic() {
    if (randomTopic === 'HTML') {
      console.log("Let's study HTML!");
    } else if (randomTopic === 'CSS') {
      console.log("Let's study CSS!");
    } else if (randomTopic === 'Git') {
      console.log("Let's study Git!");
    } else if (randomTopic === 'JavaScript') {
      console.log("Let's study JavaScript!");
    } else {
      console.log('Please try again!');
    }
  }

// Prints
console.log('Which topic should we study first?');
console.log('Here are the topics we learned through Prework:');
listTopics()
selectTopic()