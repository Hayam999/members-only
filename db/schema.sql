 CREATE TYPE membership_type AS ENUM ('user', 'pro_user', 'admin');
CREATE TABLE messages (
  id SERIAL PRIMARY KEY,
  author_first_name VARCHAR(50) NOT NULL,
  body TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT NOW()
);
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  first_name VARCHAR(50) NOT NULL,
  last_name VARCHAR(50) NOT NULL,
  username VARCHAR(255)  NOT NULL,
  password_hash VARCHAR(255) NOT NULL,
  membership membership_type DEFAULT 'user',
  created_at TIMESTAMP DEFAULT NOW()
);
