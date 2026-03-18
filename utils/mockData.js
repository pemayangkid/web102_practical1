const users = [
  { id: 1, username: "traveler", full_name: "Karma", bio: "Travel photographer", created_at: "2023-01-15" },
  { id: 2, username: "adventurer", full_name: "Pema", bio: "Adventure lover", created_at: "2023-02-10" },
];

const posts = [
  { id: 1, user_id: 1, content: "Beautiful sunset!", created_at: "2023-03-01" },
  { id: 2, user_id: 2, content: "Hiking in the mountains", created_at: "2023-03-05" },
];

const comments = [
  { id: 1, post_id: 1, user_id: 2, content: "Amazing shot!", created_at: "2023-03-02" },
  { id: 2, post_id: 2, user_id: 1, content: "Looks fun!", created_at: "2023-03-06" },
];

const likes = [
  { id: 1, post_id: 1, user_id: 2 },
  { id: 2, post_id: 2, user_id: 1 },
];

const followers = [
  { id: 1, user_id: 1, follower_id: 2 },
  { id: 2, user_id: 2, follower_id: 1 },
];

module.exports = { users, posts, comments, likes, followers };