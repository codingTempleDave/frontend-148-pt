const greeting = "Why, hello, there";
console.log(greeting.length); // no () because this is a property
console.log(greeting.toUpperCase());
console.log(greeting.toLowerCase());
console.log(greeting.slice(-3));

console.log(greeting.substring(0, 4));
console.log(greeting.split(','));

let sentence = "the quick brown fox jumps over the lazy dog";
console.log(sentence.includes("fox"));
console.log(sentence.indexOf("the"));
console.log(sentence.lastIndexOf("the"));

// REGEX!!!!
let pattern = /hello/i;
console.log(pattern.test("why Hello there"));

pattern = /\d+/g;
console.log(pattern.test("abc123abc456"));
console.log("abc123abc456".match(pattern));


// Example: Analyzing Social Media Posts
let post = "Hey @JohnDoe, did you see the new #JavaScript tutorial? #coding";

// Extract mentions (usernames) from the post
let mentions = post.match(/@[A-Za-z0-9_]+/g);
console.log("Mentions:", mentions);

// Extract hashtags from the post
let hashtags = post.match(/#[A-Za-z0-9_]+/g);
console.log("Hashtags:", hashtags);








