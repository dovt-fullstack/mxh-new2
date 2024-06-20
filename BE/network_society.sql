-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 19, 2024 at 03:46 PM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `network_society`
--

-- --------------------------------------------------------

--
-- Table structure for table `fanpages`
--

CREATE TABLE `Fanpages` (
  `fanpage_id` varchar(255) NOT NULL,
  `group_name` varchar(255) DEFAULT NULL,
  `description` text DEFAULT NULL,
  `followers_count` int(11) DEFAULT NULL,
  `likes_count` int(11) DEFAULT NULL,
  `category` varchar(255) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `phone` int(11) DEFAULT NULL,
  `is_public` tinyint(1) NOT NULL DEFAULT 1,
  `role_id` varchar(255) NOT NULL,
  `user_id` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL DEFAULT current_timestamp(),
  `updatedAt` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `fanpages`
--

INSERT INTO `fanpages` (`fanpage_id`, `group_name`, `description`, `followers_count`, `likes_count`, `category`, `address`, `phone`, `is_public`, `role_id`, `user_id`, `createdAt`, `updatedAt`) VALUES
('57a18da3-8148-4727-998c-edf87c113647', 'Mugiwara Pirates', 'Fanpage của nhóm hải tặc Mũ Rơm, nơi cập nhật tin tức và hoạt động của băng nhóm.', 5000, 4500, 'Entertainment', 'Grand Line, East Blue', 123, 1, 'role-id-1', 'luffy-22c73-f703-4b16-847d-f61bae05-onepiece', '2024-06-17 13:49:23', '2024-06-17 13:49:23'),
('8e8f3903-24fc-4159-8f75-4965aee5e98e', 'Kanisdev Tech Community', 'Fanpage của cộng đồng công nghệ Kanisdev, nơi chia sẻ kiến thức và tin tức công nghệ.', 3000, 2800, 'Technology', '123 Tech Street, Silicon Valley', 98, 1, 'role-id-2', 'kanisdev-22c73-f703-4b16-847d-f61bae05-2002', '2024-06-17 13:49:23', '2024-06-17 13:49:23');

-- --------------------------------------------------------

--
-- Table structure for table `friendships`
--

CREATE TABLE `Friendships` (
  `friendship_id` varchar(255) NOT NULL,
  `user_id` varchar(255) NOT NULL,
  `friend_id` varchar(255) NOT NULL,
  `status` enum('Chờ chấp nhận','Đã chấp nhận','Đã chặn') NOT NULL,
  `createdAt` datetime NOT NULL DEFAULT current_timestamp(),
  `updatedAt` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `friendships`
--

INSERT INTO `friendships` (`friendship_id`, `user_id`, `friend_id`, `status`, `createdAt`, `updatedAt`) VALUES
('a01a3c73-f703-4b16-847d-f61bae05pao1', 'zoro-22c73-f703-4b16-847d-f61bae05-onepiece', 'kanisdev-22c73-f703-4b16-847d-f61bae05-2002', 'Chờ chấp nhận', '2024-06-17 13:49:23', '2024-06-17 13:49:23'),
('iopa3c73-f703-4b16-847d-f61bae05ola9', 'luffy-22c73-f703-4b16-847d-f61bae05-onepiece', 'kanisdev-22c73-f703-4b16-847d-f61bae05-2002', 'Đã chấp nhận', '2024-06-17 13:49:23', '2024-06-17 13:49:23'),
('jai13c73-f703-4b16-847d-f61bae05nxx7', 'luffy-22c73-f703-4b16-847d-f61bae05-onepiece', 'nami-22c73-f703-4b16-847d-f61bae05-onepiece', 'Đã chấp nhận', '2024-06-17 13:49:23', '2024-06-17 13:49:23'),
('qwyi3c73-f703-4b16-847d-f61bae05oa2i', 'kanisdev-22c73-f703-4b16-847d-f61bae05-2002', 'luffy-22c73-f703-4b16-847d-f61bae05-onepiece', 'Đã chấp nhận', '2024-06-17 13:49:23', '2024-06-17 13:49:23'),
('xja13c73-f703-4b16-847d-f61bae05n0p1', 'nami-22c73-f703-4b16-847d-f61bae05-onepiece', 'luffy-22c73-f703-4b16-847d-f61bae05-onepiece', 'Đã chấp nhận', '2024-06-17 13:49:23', '2024-06-17 13:49:23'),
('yuaz3c73-f703-4b16-847d-f61bae05n81m', 'sanji-22c73-f703-4b16-847d-f61bae05-onepiece', 'kanisdev-22c73-f703-4b16-847d-f61bae05-2002', 'Đã chặn', '2024-06-17 13:49:23', '2024-06-17 13:49:23');

-- --------------------------------------------------------

--
-- Table structure for table `interests`
--

CREATE TABLE `Interests` (
  `interest_id` varchar(255) NOT NULL,
  `interest_name` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL DEFAULT current_timestamp(),
  `updatedAt` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `interests`
--

INSERT INTO `interests` (`interest_id`, `interest_name`, `createdAt`, `updatedAt`) VALUES
('ap123c73-f703-4b16-847d-f61bae053a1z', 'Đọc sách', '2024-06-17 13:49:23', '2024-06-17 13:49:23'),
('bp223d84-f703-4b16-847d-f61bae053b2y', 'Viết lách', '2024-06-17 13:49:23', '2024-06-17 13:49:23'),
('cp323e95-f703-4b16-847d-f61bae053c3x', 'Đi bộ đường dài', '2024-06-17 13:49:23', '2024-06-17 13:49:23'),
('dp423f06-f703-4b16-847d-f61bae053d4w', 'Chạy bộ', '2024-06-17 13:49:23', '2024-06-17 13:49:23'),
('ep523g17-f703-4b16-847d-f61bae053e5v', 'Nấu ăn', '2024-06-17 13:49:23', '2024-06-17 13:49:23'),
('fp623h28-f703-4b16-847d-f61bae053f6u', 'Vẽ tranh', '2024-06-17 13:49:23', '2024-06-17 13:49:23'),
('gp723i39-f703-4b16-847d-f61bae053g7t', 'Chơi nhạc cụ', '2024-06-17 13:49:23', '2024-06-17 13:49:23'),
('hp823j40-f703-4b16-847d-f61bae053h8s', 'Học ngôn ngữ', '2024-06-17 13:49:23', '2024-06-17 13:49:23'),
('ip923k51-f703-4b16-847d-f61bae053i9r', 'Chơi thể thao', '2024-06-17 13:49:23', '2024-06-17 13:49:23'),
('jp024l62-f703-4b16-847d-f61bae053j0q', 'Cắm trại', '2024-06-17 13:49:23', '2024-06-17 13:49:23'),
('kp124m73-f703-4b16-847d-f61bae053k1p', 'Nghe nhạc', '2024-06-17 13:49:23', '2024-06-17 13:49:23'),
('lp224n84-f703-4b16-847d-f61bae053l2o', 'Xem phim', '2024-06-17 13:49:23', '2024-06-17 13:49:23'),
('mp324o95-f703-4b16-847d-f61bae053m3n', 'Làm vườn', '2024-06-17 13:49:23', '2024-06-17 13:49:23'),
('np424p06-f703-4b16-847d-f61bae053n4m', 'Đi du lịch', '2024-06-17 13:49:23', '2024-06-17 13:49:23'),
('op524q17-f703-4b16-847d-f61bae053o5l', 'Chụp ảnh', '2024-06-17 13:49:23', '2024-06-17 13:49:23'),
('pp624r28-f703-4b16-847d-f61bae053p6k', 'Thiền', '2024-06-17 13:49:23', '2024-06-17 13:49:23'),
('qp724s39-f703-4b16-847d-f61bae053q7j', 'Yoga', '2024-06-17 13:49:23', '2024-06-17 13:49:23'),
('rp824t40-f703-4b16-847d-f61bae053r8i', 'Khiêu vũ', '2024-06-17 13:49:23', '2024-06-17 13:49:23'),
('sp924u51-f703-4b16-847d-f61bae053s9h', 'Lập trình', '2024-06-17 13:49:23', '2024-06-17 13:49:23'),
('tp025v62-f703-4b16-847d-f61bae053t0g', 'Sưu tầm đồ cổ', '2024-06-17 13:49:23', '2024-06-17 13:49:23');

-- --------------------------------------------------------

--
-- Table structure for table `notifications`
--

CREATE TABLE `Notifications` (
  `notification_id` varchar(255) NOT NULL,
  `user_id` varchar(255) NOT NULL,
  `message` text DEFAULT NULL,
  `is_read` tinyint(1) DEFAULT NULL,
  `notification_date` datetime DEFAULT NULL,
  `createdAt` datetime NOT NULL DEFAULT current_timestamp(),
  `updatedAt` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `notifications`
--

INSERT INTO `notifications` (`notification_id`, `user_id`, `message`, `is_read`, `notification_date`, `createdAt`, `updatedAt`) VALUES
('n0987654321', 'kanisdev-22c73-f703-4b16-847d-f61bae05-2002', 'Bạn đã đọc tin nhắn mới', 1, '0000-00-00 00:00:00', '2024-06-17 13:49:23', '2024-06-17 13:49:23'),
('n1234567890', 'kanisdev-22c73-f703-4b16-847d-f61bae05-2002', 'Bạn nhận được một tin nhắn mới', 0, '0000-00-00 00:00:00', '2024-06-17 13:49:23', '2024-06-17 13:49:23');

-- --------------------------------------------------------

--
-- Table structure for table `profiles`
--

CREATE TABLE `Profiles` (
  `profile_id` varchar(255) NOT NULL,
  `phone_number` varchar(255) DEFAULT NULL,
  `date_of_birth` datetime DEFAULT NULL,
  `biography` varchar(255) DEFAULT NULL,
  `profile_picture` varchar(255) DEFAULT NULL,
  `cover_photo` varchar(255) DEFAULT NULL,
  `home_town` varchar(255) DEFAULT NULL,
  `relationship_status` int(11) DEFAULT NULL,
  `education` varchar(255) DEFAULT NULL,
  `job` varchar(255) DEFAULT NULL,
  `alias` varchar(255) DEFAULT NULL,
  `user_id` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL DEFAULT current_timestamp(),
  `updatedAt` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `profiles`
--

INSERT INTO `profiles` (`profile_id`, `phone_number`, `date_of_birth`, `biography`, `profile_picture`, `cover_photo`, `home_town`, `relationship_status`, `education`, `job`, `alias`, `user_id`, `createdAt`, `updatedAt`) VALUES
('0a303a83-9e0c-4864-9115-72345ab30075', NULL, NULL, '', 'https://www.vietnamworks.com/hrinsider/wp-content/uploads/2023/12/anh-den-ngau.jpeg', 'https://static.vecteezy.com/system/resources/previews/006/852/817/non_2x/abstract-colorful-gradient-lines-with-blue-and-pink-light-on-purple-background-free-vector.jpg', '', 1, '', '', '', 'kanisdev-22c73-f703-4b16-847d-f61bae05-2002', '2024-06-17 13:49:23', '2024-06-17 13:49:23'),
('er1tya83-9e0c-4864-9115-72345ab3vaty', NULL, NULL, '', 'https://i.pinimg.com/736x/0e/b6/5a/0eb65a09ad6a7e7d6da86ab1149ef9da.jpg', 'https://images3.alphacoders.com/130/1305748.jpg', '', 0, '', '', '', 'luffy-22c73-f703-4b16-847d-f61bae05-onepiece', '2024-06-17 13:49:23', '2024-06-17 13:49:23'),
('j17ana83-9e0c-4864-9115-72345abml1ako', NULL, NULL, 'Thành viên băng hải tặc mũ rơm', 'https://static.wikia.nocookie.net/onepiece/images/c/c6/Nami_post_timeskip.jpg/revision/latest?cb=20220425001226&path-prefix=vi', 'https://images3.alphacoders.com/130/1305748.jpg', '', 2, '', '', 'Hoa tiêu', 'nami-22c73-f703-4b16-847d-f61bae05-onepiece', '2024-06-17 13:49:23', '2024-06-17 13:49:23'),
('p10aya83-9e0c-4864-9115-72345abmla9h', NULL, NULL, '', 'https://static.wikia.nocookie.net/naruto-onepiece-fairytail/images/9/97/Vinsmoke_Sanji.png/revision/latest?cb=20161215200750', 'https://images3.alphacoders.com/130/1305748.jpg', '', 1, '', '', 'Chân Đen', 'sanji-22c73-f703-4b16-847d-f61bae05-onepiece', '2024-06-17 13:49:23', '2024-06-17 13:49:23'),
('ui19ya83-9e0c-4864-9115-72345ab3mlax', NULL, NULL, 'Thợ săn hải tặc - Kiếm sĩ lạc đường', 'https://i.pinimg.com/564x/d6/f2/8b/d6f28b9a2b8b6795e2c1e593fc451c8d.jpg', 'https://images3.alphacoders.com/130/1305748.jpg', '', 1, '', '', '', 'zoro-22c73-f703-4b16-847d-f61bae05-onepiece', '2024-06-17 13:49:23', '2024-06-17 13:49:23');

-- --------------------------------------------------------

--
-- Table structure for table `sequelizemeta`
--

CREATE TABLE `Sequelizemeta` (
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `sequelizemeta`
--

INSERT INTO `sequelizemeta` (`name`) VALUES
('create-all-migrations.js');

-- --------------------------------------------------------

--
-- Table structure for table `stories`
--

CREATE TABLE `Stories` (
  `story_id` varchar(255) NOT NULL,
  `user_id` varchar(255) NOT NULL,
  `text` varchar(255) NOT NULL,
  `content` varchar(255) NOT NULL,
  `music` varchar(255) NOT NULL,
  `story_view` varchar(255) DEFAULT NULL,
  `privacy` enum('public','private','friends-only') NOT NULL,
  `story_time` datetime NOT NULL DEFAULT current_timestamp(),
  `tag` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL DEFAULT current_timestamp(),
  `updatedAt` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `stories`
--

INSERT INTO `stories` (`story_id`, `user_id`, `text`, `content`, `music`, `story_view`, `privacy`, `story_time`, `tag`, `createdAt`, `updatedAt`) VALUES
('s0987654321', 'kanisdev-22c73-f703-4b16-847d-f61bae05-2002', 'Cảm giác thật tuyệt vời khi ở bên gia đình!', 'https://example.com/image2.jpg', 'https://example.com/music2.mp3', '3', 'friends-only', '0000-00-00 00:00:00', 'family', '2024-06-17 13:49:23', '2024-06-17 13:49:23'),
('s1234567890', 'kanisdev-22c73-f703-4b16-847d-f61bae05-2002', 'Hôm nay là một ngày tuyệt vời!', 'https://example.com/image1.jpg', 'https://example.com/music1.mp3', '2', 'public', '0000-00-00 00:00:00', 'happiness', '2024-06-17 13:49:23', '2024-06-17 13:49:23');

-- --------------------------------------------------------

--
-- Table structure for table `userinterests`
--

CREATE TABLE `Userinterests` (
  `id` int(11) NOT NULL,
  `user_id` varchar(255) DEFAULT NULL,
  `interest_id` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL DEFAULT current_timestamp(),
  `updatedAt` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `userinterests`
--

INSERT INTO `userinterests` (`id`, `user_id`, `interest_id`, `createdAt`, `updatedAt`) VALUES
(1, 'kanisdev-22c73-f703-4b16-847d-f61bae05-2002', 'ap123c73-f703-4b16-847d-f61bae053a1z', '2024-06-17 13:49:23', '2024-06-17 13:49:23'),
(2, 'kanisdev-22c73-f703-4b16-847d-f61bae05-2002', 'fp623h28-f703-4b16-847d-f61bae053f6u', '2024-06-17 13:49:23', '2024-06-17 13:49:23');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `Users` (
  `user_id` varchar(255) NOT NULL,
  `first_name` varchar(255) DEFAULT NULL,
  `last_name` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `gender` int(11) DEFAULT NULL,
  `code` varchar(255) DEFAULT NULL,
  `is_auth` tinyint(1) DEFAULT NULL,
  `expires` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL DEFAULT current_timestamp(),
  `updatedAt` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`user_id`, `first_name`, `last_name`, `email`, `password`, `gender`, `code`, `is_auth`, `expires`, `createdAt`, `updatedAt`) VALUES
('kanisdev-22c73-f703-4b16-847d-f61bae05-2002', 'Kan', 'Kan', 'kanisdev@gmail.com', '$2a$10$2MqOHj5YDjnuoLQZ7Xo7be7V/MI0o/gFeOI.U/uXFP5PTkYMKCoKW', 0, '', 1, '', '2024-06-17 13:49:23', '2024-06-17 13:49:23'),
('luffy-22c73-f703-4b16-847d-f61bae05-onepiece', 'Luffy', 'Monkey D', 'luffy@gmail.com', '$2a$10$hBI7jUvZJcV31kY7xPV8leztm60hPiBrfW/b.V9UHZQ2.MGDTxCTa', 0, '', 1, '', '2024-06-17 13:49:23', '2024-06-17 13:49:23'),
('nami-22c73-f703-4b16-847d-f61bae05-onepiece', 'Nami', 'Rico', 'nami@gmail.com', '$2a$10$dXkF7fnJTw0e35w/Ih9LpecJGqrhxhxR1PUEAfAZY0IJPlZvlH95O', 1, '', 1, '', '2024-06-17 13:49:23', '2024-06-17 13:49:23'),
('sanji-22c73-f703-4b16-847d-f61bae05-onepiece', 'Sanji', 'Vinsmoke', 'sanji@gmail.com', '$2a$10$t9ZAD9.POT/AQYaLHTDBouWjFDzFtRG.Uw2fYYuCggdTvEpyHwy6u', 0, '', 1, '', '2024-06-17 13:49:23', '2024-06-17 13:49:23'),
('zoro-22c73-f703-4b16-847d-f61bae05-onepiece', 'Zoro', 'Roronoa', 'zoro@gmail.com', '$2a$10$Ndl7JO8Chy7KWLpivkZvLuFuaIofjiliSO67J3cGuxo7AoHsWGuIK', 0, '', 1, '', '2024-06-17 13:49:23', '2024-06-17 13:49:23');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `fanpages`
--
ALTER TABLE `fanpages`
  ADD PRIMARY KEY (`fanpage_id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indexes for table `friendships`
--
ALTER TABLE `friendships`
  ADD PRIMARY KEY (`friendship_id`),
  ADD KEY `user_id` (`user_id`),
  ADD KEY `friend_id` (`friend_id`);

--
-- Indexes for table `interests`
--
ALTER TABLE `interests`
  ADD PRIMARY KEY (`interest_id`);

--
-- Indexes for table `notifications`
--
ALTER TABLE `notifications`
  ADD PRIMARY KEY (`notification_id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indexes for table `profiles`
--
ALTER TABLE `profiles`
  ADD PRIMARY KEY (`profile_id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indexes for table `sequelizemeta`
--
ALTER TABLE `sequelizemeta`
  ADD PRIMARY KEY (`name`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Indexes for table `stories`
--
ALTER TABLE `stories`
  ADD PRIMARY KEY (`story_id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indexes for table `userinterests`
--
ALTER TABLE `userinterests`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`),
  ADD KEY `interest_id` (`interest_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`user_id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `userinterests`
--
ALTER TABLE `userinterests`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `fanpages`
--
ALTER TABLE `fanpages`
  ADD CONSTRAINT `fanpages_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`);

--
-- Constraints for table `friendships`
--
ALTER TABLE `friendships`
  ADD CONSTRAINT `friendships_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`) ON DELETE CASCADE,
  ADD CONSTRAINT `friendships_ibfk_2` FOREIGN KEY (`friend_id`) REFERENCES `users` (`user_id`) ON DELETE CASCADE;

--
-- Constraints for table `notifications`
--
ALTER TABLE `notifications`
  ADD CONSTRAINT `notifications_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `profiles`
--
ALTER TABLE `profiles`
  ADD CONSTRAINT `profiles_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`) ON DELETE CASCADE;

--
-- Constraints for table `stories`
--
ALTER TABLE `stories`
  ADD CONSTRAINT `stories_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `userinterests`
--
ALTER TABLE `userinterests`
  ADD CONSTRAINT `userinterests_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`),
  ADD CONSTRAINT `userinterests_ibfk_2` FOREIGN KEY (`interest_id`) REFERENCES `interests` (`interest_id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
